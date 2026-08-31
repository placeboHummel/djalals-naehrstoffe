import { MY_SUPPLEMENTS, NUTRIENTS_SUMMARY } from './data.js?v=2.6.0';
import { NUTRIENT_DETAILS } from './nutrient-details.js?v=2.6.0';

document.addEventListener('DOMContentLoaded', () => {
  const suppContainer = document.getElementById('supplements-list');
  const nutContainer = document.getElementById('nutrients-list');
  const activeFilterContainer = document.getElementById('active-filter-container');
  const modalContainer = document.getElementById('modal-container');
  const searchInput = document.getElementById('search-input');
  const filterPills = document.querySelectorAll('.filter-pill');
  const backToTopBtn = document.getElementById('back-to-top-btn');

  let selectedSupplementId = null;
  let currentCategory = 'all';
  let currentSearch = '';

  // Back to top floating button listener
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 320) {
        backToTopBtn.classList.add('is-visible');
      } else {
        backToTopBtn.classList.remove('is-visible');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 1. Render Supplements Cards
  function renderSupplements() {
    if (!suppContainer) return;

    suppContainer.innerHTML = MY_SUPPLEMENTS.map(supp => {
      const isSelected = supp.id === selectedSupplementId;

      return `
        <div class="supp-card ${isSelected ? 'is-selected' : ''}" 
             data-id="${supp.id}" 
             role="button" 
             tabindex="0" 
             aria-pressed="${isSelected}"
             title="${isSelected ? 'Klicken, um Filter aufzuheben' : 'Klicken, um Nährstoffe dieses Supplements zu filtern'}">
          <div class="supp-card-body">
            <div class="supp-img-box">
              <img src="${supp.image}" alt="${supp.name}" class="supp-img" loading="lazy" decoding="async">
            </div>
            <div class="supp-details">
              <div class="supp-card-top">
                <span class="supp-brand">${supp.brand}</span>
                <span class="supp-timing-badge">${supp.timing}</span>
              </div>
              <h3 class="supp-title">${supp.name}</h3>
            </div>
          </div>
          <div class="supp-dose-box">
            <span class="supp-dose-val">${supp.dosage}</span>
            <div style="display: flex; align-items: center; gap: 8px;">
              <span class="supp-badge">${supp.badge}</span>
              <span class="supp-select-indicator">
                ${isSelected 
                  ? `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Aktiv` 
                  : `Filtern ➔`}
              </span>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Attach click & keyboard listeners to cards
    const cards = suppContainer.querySelectorAll('.supp-card');
    cards.forEach(card => {
      const id = card.dataset.id;

      card.addEventListener('click', () => {
        toggleSupplementFilter(id);
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleSupplementFilter(id);
        }
      });
    });
  }

  function toggleSupplementFilter(id) {
    if (selectedSupplementId === id) {
      selectedSupplementId = null;
    } else {
      selectedSupplementId = id;
      // If "missing" category was active, reset to "all" since missing items have no supplement
      if (currentCategory === 'missing') {
        currentCategory = 'all';
        filterPills.forEach(p => p.classList.toggle('active', p.dataset.cat === 'all'));
      }
    }
    renderSupplements();
    renderNutrients();
  }

  // 2. Render Active Filter Banner
  function renderActiveFilterBanner(filteredCount) {
    if (!activeFilterContainer) return;

    if (currentCategory === 'missing') {
      activeFilterContainer.innerHTML = `
        <div class="missing-info-banner">
          <div class="missing-info-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          </div>
          <div class="missing-info-text">
            <strong>Aktuell noch nicht im Stack abgedeckt (${filteredCount} Stoffe):</strong>
            <p>Carninährstoffe, mitochondriale Kofaktoren & Vitalstoffe, die bei fleisch- und fischfreier Ernährung nicht oder nur in Spuren über die Nahrung aufgenommen werden.</p>
          </div>
        </div>
      `;
      return;
    }

    if (!selectedSupplementId) {
      activeFilterContainer.innerHTML = '';
      return;
    }

    const activeSupp = MY_SUPPLEMENTS.find(s => s.id === selectedSupplementId);
    if (!activeSupp) {
      activeFilterContainer.innerHTML = '';
      return;
    }

    activeFilterContainer.innerHTML = `
      <div class="active-filter-banner">
        <div class="active-filter-left">
          <div class="active-filter-icon">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
          </div>
          <div class="active-filter-text">
            Gefiltert nach: <span class="active-filter-name">${activeSupp.name}</span> (${activeSupp.brand}) • <span class="active-filter-count">${filteredCount} Nährstoff${filteredCount === 1 ? '' : 'e'}</span>
          </div>
        </div>
        <button class="clear-filter-btn" id="clear-filter-btn" title="Filter aufheben">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          Filter aufheben
        </button>
      </div>
    `;

    const clearBtn = document.getElementById('clear-filter-btn');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        selectedSupplementId = null;
        renderSupplements();
        renderNutrients();
      });
    }
  }

  // 3. Render Nutrients Cards
  function renderNutrients() {
    if (!nutContainer) return;

    const filtered = NUTRIENTS_SUMMARY.filter(item => {
      // Category filter
      if (currentCategory !== 'all') {
        if (currentCategory === 'missing') {
          if (item.rawAmount > 0 && item.percent > 0) {
            return false;
          }
        } else if (item.category !== currentCategory) {
          return false;
        }
      }

      // Supplement filter (only applied if not viewing missing items)
      if (selectedSupplementId && currentCategory !== 'missing') {
        if (!item.supplementIds || !item.supplementIds.includes(selectedSupplementId)) {
          return false;
        }
      }

      // Search filter
      if (currentSearch) {
        const q = currentSearch.toLowerCase();
        const matchName = item.name.toLowerCase().includes(q);
        const matchExtra = (item.extra || '').toLowerCase().includes(q);
        const matchBrand = (item.sourceBrand || '').toLowerCase().includes(q);
        const matchSources = (item.sources || []).some(s => {
          const supp = MY_SUPPLEMENTS.find(x => x.id === s.supplementId);
          return (supp?.name || '').toLowerCase().includes(q) || (supp?.brand || '').toLowerCase().includes(q);
        });
        if (!matchName && !matchExtra && !matchBrand && !matchSources) return false;
      }

      return true;
    });

    renderActiveFilterBanner(filtered.length);

    if (filtered.length === 0) {
      const activeSupp = MY_SUPPLEMENTS.find(s => s.id === selectedSupplementId);
      const suppText = activeSupp ? ` im Supplement "${activeSupp.name}"` : '';
      const searchText = currentSearch ? ` für "${currentSearch}"` : '';
      
      nutContainer.innerHTML = `
        <div class="empty-msg">
          <p>Keine Nährstoffe${suppText}${searchText} gefunden.</p>
          <button class="clear-filter-btn" id="reset-all-filters-btn" style="margin-top: 12px;">
            Filter zurücksetzen
          </button>
        </div>
      `;

      const resetBtn = document.getElementById('reset-all-filters-btn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          selectedSupplementId = null;
          currentCategory = 'all';
          currentSearch = '';
          if (searchInput) searchInput.value = '';
          filterPills.forEach(p => p.classList.toggle('active', p.dataset.cat === 'all'));
          renderSupplements();
          renderNutrients();
        });
      }
      return;
    }

    nutContainer.innerHTML = filtered.map(item => {
      const barWidth = Math.min(item.percent, 100);
      const isEfsa = item.ref.includes('EFSA');
      const isMissing = item.percent === 0;
      const percentBadgeText = isMissing ? '0% • Fehlt im Stack' : `${item.percent}% ${isEfsa ? 'EFSA' : 'D-A-CH'}`;
      const pillClass = isMissing ? 'nut-percent-pill is-missing' : 'nut-percent-pill';
      const sourceClass = isMissing ? 'nut-source-tag is-missing' : 'nut-source-tag';
      const cardClass = isMissing ? 'nut-card is-missing' : 'nut-card';

      return `
        <div class="${cardClass}" data-nutrient-id="${item.id}">
          <div class="nut-top-row">
            <div class="nut-name-row">
              <span class="nut-name">${item.name}</span>
              <button class="nut-info-btn" data-nutrient-id="${item.id}" aria-label="Wissenschaftliche Infos zu ${item.name}" title="Wissenschaftliche Infos anzeigen">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
                <span class="info-btn-text">Info</span>
              </button>
            </div>
          </div>

          <div class="nut-amount-row">
            <span class="nut-amount-val">${item.amount}</span>
            <span class="${pillClass}">${percentBadgeText}</span>
          </div>

          <div class="nut-progress-track" title="Referenzwert: ${item.ref}">
            <div class="nut-progress-fill" style="width: ${barWidth}%; ${isMissing ? 'background: #cbd5e1;' : ''}"></div>
          </div>

          <div class="nut-ref-sub">
            Referenz: <strong>${item.ref}</strong>
          </div>

          <!-- Bottom Sources Breakdown Strip -->
          <div class="nut-sources-strip">
            ${item.sources && item.sources.length > 0
              ? item.sources.map(s => {
                  const supp = MY_SUPPLEMENTS.find(x => x.id === s.supplementId);
                  const shortName = supp?.shortName || supp?.name || 'Supplement';
                  return `
                    <span class="nut-source-chip" title="${supp?.name || ''} (${supp?.brand || ''})">
                      <span class="source-chip-name">${shortName}</span>
                      <strong class="source-chip-val">${s.amount}</strong>
                    </span>
                  `;
                }).join('')
              : `<span class="nut-source-chip is-missing">Keine direkte Supplement-Quelle</span>`
            }
          </div>
        </div>
      `;
    }).join('');

    // Attach info modal triggers ONLY to info buttons (prevents scroll hijacking on mobile)
    const infoButtons = nutContainer.querySelectorAll('.nut-info-btn');
    infoButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const nutrientId = btn.dataset.nutrientId;
        if (nutrientId) {
          openNutrientModal(nutrientId);
        }
      });
    });
  }

  // 4. Open Nutrient Scientific Detail Modal
  function openNutrientModal(nutrientId) {
    if (!modalContainer) return;

    const nutrient = NUTRIENTS_SUMMARY.find(n => n.id === nutrientId);
    const details = NUTRIENT_DETAILS[nutrientId] || {
      name: nutrient?.name || 'Nährstoff-Details',
      scientificName: nutrient?.extra || '',
      badge: '🔬 Nährstoff-Analyse',
      summary: nutrient?.extra || 'Wissenschaftlich geprüfter Nährstoff.',
      biochemistry: 'Dieser Nährstoff erfüllt lebenswichtige biologische Funktionen im zellulären Stoffwechsel und Enzymkatalysen.',
      plantBasedRelevance: 'Wichtiger Bestandteil einer ausgewogenen und vollwertigen pflanzenbasierten Ernährung.',
      intakeAdvice: 'Zu einer Mahlzeit mit ausreichend Flüssigkeit einnehmen.',
      safetyAndUL: 'Innerhalb der offiziellen Referenzwerte der EFSA / D-A-CH absolut sicher.',
      scientificReference: 'EFSA Journal / D-A-CH Referenzwerte'
    };

    if (!nutrient) return;

    const isMissing = nutrient.percent === 0;
    const isEfsa = nutrient.ref.includes('EFSA');
    const percentText = isMissing ? '0% (Nicht im Stack)' : `${nutrient.percent}% ${isEfsa ? 'EFSA' : 'D-A-CH'}`;

    modalContainer.innerHTML = `
      <div class="modal-backdrop" id="modal-backdrop">
        <div class="modal-dialog" role="dialog" aria-modal="true" aria-labelledby="modal-nutrient-title">
          
          <!-- Modal Header -->
          <div class="modal-header">
            <div class="modal-title-group">
              <span class="modal-category-badge">${details.badge}</span>
              <h2 id="modal-nutrient-title" class="modal-title">${details.name}</h2>
              <span class="modal-subtitle">${details.scientificName || nutrient.extra || ''}</span>
            </div>
            <button class="modal-close-btn" id="modal-close-btn" aria-label="Modal schließen" title="Schließen (Esc)">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>

          <!-- Modal Body Content -->
          <div class="modal-body">
            
            <!-- Key Metric Strip -->
            <div class="modal-metric-strip">
              <div class="metric-tile">
                <span class="metric-lbl">Aktuelle Tageszufuhr</span>
                <span class="metric-val ${isMissing ? 'text-orange' : 'text-emerald'}">${nutrient.amount}</span>
              </div>
              <div class="metric-tile">
                <span class="metric-lbl">Offizielle Referenz</span>
                <span class="metric-val">${nutrient.ref}</span>
              </div>
              <div class="metric-tile">
                <span class="metric-lbl">Tagesdeckung</span>
                <span class="metric-val ${isMissing ? 'text-orange' : 'text-emerald'}">${percentText}</span>
              </div>
            </div>

            <!-- Sources in Stack Section -->
            <div class="modal-section">
              <h3 class="modal-sec-heading">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                Quellen in deiner täglichen Routine
              </h3>
              ${nutrient.sources && nutrient.sources.length > 0 ? `
                <div class="modal-sources-grid">
                  ${nutrient.sources.map(s => {
                    const supp = MY_SUPPLEMENTS.find(x => x.id === s.supplementId);
                    if (!supp) return '';
                    return `
                      <div class="modal-source-item">
                        <div class="modal-source-img">
                          <img src="${supp.image}" alt="${supp.name}">
                        </div>
                        <div class="modal-source-info">
                          <div class="modal-source-head">
                            <strong>${supp.name}</strong>
                            <span class="modal-source-amount">+ ${s.amount}</span>
                          </div>
                          <span class="modal-source-brand">${supp.brand} &bull; ${s.note || supp.dosage}</span>
                        </div>
                      </div>
                    `;
                  }).join('')}
                </div>
              ` : `
                <div class="modal-empty-source-box">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                  <span>Aktuell in keinem deiner 8 Supplements enthalten (0 mg Zufuhr).</span>
                </div>
              `}
            </div>

            <!-- Physiological Function Section -->
            <div class="modal-section">
              <h3 class="modal-sec-heading">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                Biochemische & Physiologische Funktion
              </h3>
              <p class="modal-text">${details.biochemistry}</p>
            </div>

            <!-- Plant-Based / Meat-Free Relevance -->
            <div class="modal-section modal-sec-highlight">
              <h3 class="modal-sec-heading">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 0 0-10 10c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"></path></svg>
                Relevanz bei 0% Fleisch & 0% Fisch
              </h3>
              <p class="modal-text">${details.plantBasedRelevance}</p>
            </div>

            <!-- Intake Advice & Synergies -->
            <div class="modal-section">
              <h3 class="modal-sec-heading">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                Optimale Einnahme & Synergien
              </h3>
              <p class="modal-text">${details.intakeAdvice}</p>
            </div>

            <!-- Safety & Upper Limit -->
            <div class="modal-section">
              <h3 class="modal-sec-heading">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                Toxizitätsbewertung & EFSA Upper Limit
              </h3>
              <p class="modal-text">${details.safetyAndUL}</p>
            </div>

            <!-- Scientific Reference Footnote -->
            <div class="modal-footer-ref">
              <strong>Evidenz & Behördenquellen:</strong> ${details.scientificReference}
            </div>

          </div>

          <!-- Modal Footer Actions -->
          <div class="modal-footer">
            <button class="modal-btn-action" id="modal-btn-close">Verstanden & Schließen</button>
          </div>

        </div>
      </div>
    `;

    document.documentElement.classList.add('modal-open');
    document.body.classList.add('modal-open');

    const closeBtn = document.getElementById('modal-close-btn');
    const actionBtn = document.getElementById('modal-btn-close');
    const backdrop = document.getElementById('modal-backdrop');

    function closeModal() {
      if (modalContainer) modalContainer.innerHTML = '';
      document.documentElement.classList.remove('modal-open');
      document.body.classList.remove('modal-open');
      document.removeEventListener('keydown', handleKeydown);
    }

    function handleKeydown(e) {
      if (e.key === 'Escape') {
        closeModal();
      }
    }

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (actionBtn) actionBtn.addEventListener('click', closeModal);
    if (backdrop) {
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) closeModal();
      });
    }

    document.addEventListener('keydown', handleKeydown);
  }

  // Event Listeners
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value.trim();
      renderNutrients();
    });
  }

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCategory = pill.dataset.cat;
      if (currentCategory === 'missing' && selectedSupplementId) {
        selectedSupplementId = null;
        renderSupplements();
      }
      renderNutrients();
    });
  });

  // Initial render
  renderSupplements();
  renderNutrients();
});
