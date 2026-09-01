import { NUTRIENT_DEFINITIONS, NUTRIENT_CATEGORIES } from './data/nrv-reference.js';
import { SUPPLEMENT_PRESETS } from './data/presets.js';

const STORAGE_KEY = 'naehrstoff_kompass_supplements_v1';

class SupplementApp {
  constructor() {
    this.supplements = [];
    this.activeTab = 'nutrients'; // 'nutrients' | 'stack' | 'timing' | 'lexicon'
    this.filterCategory = 'all';
    this.searchQuery = '';
    this.onlyWarnings = false;
    this.selectedNutrientId = null;
    this.listeners = [];

    this.init();
  }

  init() {
    this.loadFromStorage();
  }

  subscribe(listener) {
    this.listeners.push(listener);
  }

  notify() {
    this.listeners.forEach(fn => fn(this));
  }

  loadFromStorage() {
    try {
      if (typeof localStorage !== 'undefined') {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const loaded = JSON.parse(stored);
          if (Array.isArray(loaded)) {
            // Merge in any new preset supplements that don't exist yet
            SUPPLEMENT_PRESETS.forEach(preset => {
              if (!loaded.some(s => s.id === preset.id)) {
                loaded.push(JSON.parse(JSON.stringify(preset)));
              }
            });
            this.supplements = loaded;
            return;
          }
        }
      }
      // Init with default presets
      this.supplements = JSON.parse(JSON.stringify(SUPPLEMENT_PRESETS));
    } catch (e) {
      console.error('Failed to load from localStorage', e);
      this.supplements = JSON.parse(JSON.stringify(SUPPLEMENT_PRESETS));
    }
  }

  saveToStorage() {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.supplements));
      }
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
  }

  resetToDefaults() {
    this.supplements = JSON.parse(JSON.stringify(SUPPLEMENT_PRESETS));
    this.saveToStorage();
    this.notify();
  }

  exportData() {
    return JSON.stringify(this.supplements, null, 2);
  }

  importData(jsonString) {
    try {
      const parsed = JSON.parse(jsonString);
      if (Array.isArray(parsed)) {
        this.supplements = parsed;
        this.saveToStorage();
        this.notify();
        return { success: true };
      }
      return { success: false, error: 'Ungültiges Datenformat (muss eine Liste von Supplements sein).' };
    } catch (err) {
      return { success: false, error: err.message };
    }
  }

  // --- CRUD Operations ---
  toggleSupplement(id) {
    const supp = this.supplements.find(s => s.id === id);
    if (supp) {
      supp.active = !supp.active;
      this.saveToStorage();
      this.notify();
    }
  }

  setServings(id, servings) {
    const supp = this.supplements.find(s => s.id === id);
    if (supp) {
      const val = parseFloat(servings);
      supp.servingsPerDay = isNaN(val) || val < 0 ? 1 : val;
      this.saveToStorage();
      this.notify();
    }
  }

  addSupplement(newSupp) {
    const id = 'supp_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4);
    const item = {
      id,
      name: newSupp.name || 'Neues Nahrungsergänzungsmittel',
      brand: newSupp.brand || 'Eigenes Produkt',
      url: newSupp.url || '',
      form: newSupp.form || 'Kapseln',
      servingSize: newSupp.servingSize || '1 Portion',
      timeOfDay: newSupp.timeOfDay || 'morning',
      withFood: Boolean(newSupp.withFood),
      notes: newSupp.notes || '',
      active: true,
      servingsPerDay: newSupp.servingsPerDay || 1,
      nutrients: newSupp.nutrients || {}
    };
    this.supplements.unshift(item);
    this.saveToStorage();
    this.notify();
    return item;
  }

  updateSupplement(id, updatedData) {
    const idx = this.supplements.findIndex(s => s.id === id);
    if (idx !== -1) {
      this.supplements[idx] = {
        ...this.supplements[idx],
        ...updatedData
      };
      this.saveToStorage();
      this.notify();
    }
  }

  deleteSupplement(id) {
    this.supplements = this.supplements.filter(s => s.id !== id);
    this.saveToStorage();
    this.notify();
  }

  // --- Filter & Search ---
  setFilterCategory(cat) {
    this.filterCategory = cat;
    this.notify();
  }

  setSearchQuery(q) {
    this.searchQuery = (q || '').toLowerCase().trim();
    this.notify();
  }

  toggleOnlyWarnings() {
    this.onlyWarnings = !this.onlyWarnings;
    this.notify();
  }

  setActiveTab(tab) {
    this.activeTab = tab;
    this.notify();
  }

  setSelectedNutrient(nutrientId) {
    this.selectedNutrientId = nutrientId;
    this.notify();
  }

  // --- Calculations Engine ---
  getCalculatedNutrients() {
    const totals = {};
    const activeSupps = this.supplements.filter(s => s.active);

    // Initialize all known nutrients
    Object.keys(NUTRIENT_DEFINITIONS).forEach(nutrientId => {
      totals[nutrientId] = {
        definition: NUTRIENT_DEFINITIONS[nutrientId],
        totalAmount: 0,
        sources: [], // { suppId, suppName, amount, sharePercent }
        percentageNRV: 0,
        percentageDACH: 0,
        status: 'none', // 'none' | 'under' | 'optimal' | 'high' | 'warning'
        isWarning: false,
        warningReason: null
      };
    });

    // Sum from all active supplements
    activeSupps.forEach(supp => {
      const mult = (supp.servingsPerDay !== undefined ? supp.servingsPerDay : 1);
      if (supp.nutrients) {
        Object.entries(supp.nutrients).forEach(([nutrientId, amount]) => {
          const numAmount = parseFloat(amount) * mult;
          if (!isNaN(numAmount) && numAmount > 0) {
            if (!totals[nutrientId]) {
              // Custom nutrient not yet in standard definitions
              totals[nutrientId] = {
                definition: {
                  name: nutrientId,
                  shortName: nutrientId,
                  category: 'other',
                  unit: 'mg',
                  nrv: null,
                  dach: null,
                  ul: null,
                  optimalRange: [0, 1000],
                  description: 'Benutzerdefinierter Nährstoff',
                  tip: '',
                  warningAt: null
                },
                totalAmount: 0,
                sources: [],
                percentageNRV: 0,
                percentageDACH: 0,
                status: 'none',
                isWarning: false,
                warningReason: null
              };
            }
            totals[nutrientId].totalAmount += numAmount;
            totals[nutrientId].sources.push({
              suppId: supp.id,
              suppName: supp.name,
              brand: supp.brand,
              amount: numAmount
            });
          }
        });
      }
    });

    // Post-process percentages, shares, status & warnings
    Object.keys(totals).forEach(nutrientId => {
      const item = totals[nutrientId];
      const def = item.definition;
      const total = item.totalAmount;

      // Sources percentages
      if (total > 0) {
        item.sources.forEach(src => {
          src.sharePercent = Math.round((src.amount / total) * 100);
        });
      }

      // NRV percentage
      if (def.nrv && def.nrv > 0) {
        item.percentageNRV = Math.round((total / def.nrv) * 100);
      } else {
        item.percentageNRV = null;
      }

      // D-A-CH percentage
      if (def.dach && def.dach > 0) {
        item.percentageDACH = Math.round((total / def.dach) * 100);
      } else {
        item.percentageDACH = null;
      }

      // Check warnings (Upper Limit exceeded)
      const warningThreshold = def.warningAt || def.ul;
      if (warningThreshold && total > warningThreshold) {
        item.isWarning = true;
        item.status = 'warning';
        item.warningReason = `Tolerable Upper Limit / Höchstmenge von ${warningThreshold} ${def.unit} überschritten! Aktuell: ${this.formatNumber(total)} ${def.unit}.`;
      } else if (total === 0) {
        item.status = 'none';
      } else {
        const refVal = def.dach || def.nrv;
        if (refVal) {
          const ratio = total / refVal;
          if (ratio < 0.8) {
            item.status = 'under';
          } else if (ratio <= 2.5) {
            item.status = 'optimal';
          } else {
            item.status = 'high';
          }
        } else {
          item.status = 'optimal';
        }
      }
    });

    return totals;
  }

  getFilteredNutrients() {
    const allCalculated = this.getCalculatedNutrients();
    const result = [];

    Object.entries(allCalculated).forEach(([id, item]) => {
      const def = item.definition;

      // Search query filter
      if (this.searchQuery) {
        const matchName = def.name.toLowerCase().includes(this.searchQuery);
        const matchShort = def.shortName.toLowerCase().includes(this.searchQuery);
        const matchSources = item.sources.some(s => s.suppName.toLowerCase().includes(this.searchQuery));
        if (!matchName && !matchShort && !matchSources) return;
      }

      // Category filter
      if (this.filterCategory !== 'all' && def.category !== this.filterCategory) {
        return;
      }

      // Only warnings filter
      if (this.onlyWarnings && !item.isWarning && item.status !== 'high') {
        return;
      }

      result.push({ id, ...item });
    });

    // Sort order:
    // 1. Warnings first
    // 2. Active nutrients (total > 0)
    // 3. Category order
    return result.sort((a, b) => {
      if (a.isWarning && !b.isWarning) return -1;
      if (!a.isWarning && b.isWarning) return 1;
      if (a.totalAmount > 0 && b.totalAmount === 0) return -1;
      if (a.totalAmount === 0 && b.totalAmount > 0) return 1;
      return a.definition.name.localeCompare(b.definition.name);
    });
  }

  getSummaryStats() {
    const activeSupps = this.supplements.filter(s => s.active);
    const calculated = this.getCalculatedNutrients();
    let totalCovered = 0;
    let warningsCount = 0;
    let highCount = 0;
    let totalNutrientsCount = Object.keys(calculated).length;

    Object.values(calculated).forEach(item => {
      if (item.totalAmount > 0) totalCovered++;
      if (item.isWarning) warningsCount++;
      if (item.status === 'high') highCount++;
    });

    return {
      activeSupplementsCount: activeSupps.length,
      totalSupplementsCount: this.supplements.length,
      nutrientsCoveredCount: totalCovered,
      totalNutrientsCount,
      warningsCount,
      highCount
    };
  }

  getTimingPlan() {
    const slots = {
      morning: { label: 'Block A – Frühstück mit Fettquelle', icon: '🌅', items: [], tips: [] },
      workout: { label: 'Protein-Shake / Nach dem Training', icon: '⚡', items: [], tips: [] },
      noon: { label: 'Mittags / Zum Mittagessen', icon: '☀️', items: [], tips: [] },
      evening: { label: 'Block B – Abends, 60 min vor dem Schlafen', icon: '🌙', items: [], tips: [] }
    };

    const activeSupps = this.supplements.filter(s => s.active);

    activeSupps.forEach(supp => {
      const slotKey = slots[supp.timeOfDay] ? supp.timeOfDay : 'morning';
      slots[slotKey].items.push(supp);
    });

    // Check synergies & conflicts
    const morningSupps = slots.morning.items;
    const eveningSupps = slots.evening.items;

    // Fat soluble check
    const hasFatSoluble = activeSupps.some(s => s.nutrients && (s.nutrients.vit_d3 || s.nutrients.vit_a || s.nutrients.vit_e || s.nutrients.vit_k2));
    if (hasFatSoluble) {
      slots.morning.tips.push('💡 Fettlösliche Vitamine (A, D3, E, K2) immer mit einer Mahlzeit einnehmen, die gesunde Fette enthält.');
    }

    // Iron + Calcium / Coffee conflict
    const hasIron = morningSupps.some(s => s.nutrients && s.nutrients.eisen);
    const hasHighCalcium = morningSupps.some(s => s.nutrients && s.nutrients.calcium > 150);
    if (hasIron && hasHighCalcium) {
      slots.morning.tips.push('⚠️ Eisen und hohe Mengen Calcium konkurrieren um Transporter. Wenn möglich zeitlich 2 Stunden trennen.');
    }

    // Magnesium in evening
    const hasMagnesiumMorning = morningSupps.some(s => s.nutrients && s.nutrients.magnesium > 100);
    if (hasMagnesiumMorning) {
      slots.morning.tips.push('💡 Tipp: Magnesium wirkt muskelentspannend und wird von vielen bevorzugt abends eingenommen.');
    }

    return slots;
  }

  formatNumber(val, decimals = 1) {
    if (val === null || val === undefined) return '-';
    if (val >= 100) return Math.round(val).toLocaleString('de-DE');
    if (val >= 10) return (Math.round(val * 10) / 10).toLocaleString('de-DE');
    return (Math.round(val * 100) / 100).toLocaleString('de-DE');
  }
}

export const appState = new SupplementApp();
export { NUTRIENT_DEFINITIONS, NUTRIENT_CATEGORIES, SUPPLEMENT_PRESETS };
