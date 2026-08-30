import { appState, NUTRIENT_DEFINITIONS, NUTRIENT_CATEGORIES, SUPPLEMENT_PRESETS } from './app.js';

class UIController {
  constructor() {
    this.modalEl = null;
    this.currentEditingId = null;
    this.init();
  }

  init() {
    this.cacheDom();
    this.bindEvents();
    this.render();

    // Subscribe to state changes
    appState.subscribe(() => this.render());
  }

  cacheDom() {
    this.statsContainer = document.getElementById('header-stats');
    this.tabButtons = document.querySelectorAll('.nav-tab-btn');
    this.tabContents = document.querySelectorAll('.tab-content');
    this.searchBar = document.getElementById('search-input');
    this.categoryFilters = document.getElementById('category-filters');
    this.warningToggleBtn = document.getElementById('btn-filter-warnings');
    this.nutrientsGrid = document.getElementById('nutrients-grid');
    this.stackGrid = document.getElementById('stack-grid');
    this.timingContainer = document.getElementById('timing-container');
    this.lexiconGrid = document.getElementById('lexicon-grid');
    this.themeToggleBtn = document.getElementById('theme-toggle-btn');
    this.modalContainer = document.getElementById('modal-container');
    this.toastContainer = document.getElementById('toast-container');
  }

  bindEvents() {
    // Tab switching
    this.tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.dataset.tab;
        this.tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        appState.setActiveTab(tab);
      });
    });

    // Search input
    if (this.searchBar) {
      this.searchBar.addEventListener('input', (e) => {
        appState.setSearchQuery(e.target.value);
      });
    }

    // Category filter pills
    if (this.categoryFilters) {
      this.categoryFilters.addEventListener('click', (e) => {
        const pill = e.target.closest('.filter-pill');
        if (!pill) return;
        document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        appState.setFilterCategory(pill.dataset.category);
      });
    }

    // Warnings toggle
    if (this.warningToggleBtn) {
      this.warningToggleBtn.addEventListener('click', () => {
        this.warningToggleBtn.classList.toggle('active');
        appState.toggleOnlyWarnings();
      });
    }

    // Theme toggle
    if (this.themeToggleBtn) {
      this.themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('nk_theme', newTheme);
        this.updateThemeIcon(newTheme);
      });

      // Load saved theme
      const savedTheme = localStorage.getItem('nk_theme') || 'dark';
      document.documentElement.setAttribute('data-theme', savedTheme);
      this.updateThemeIcon(savedTheme);
    }

    // Global Add Supplement Button
    document.addEventListener('click', (e) => {
      const addBtn = e.target.closest('#btn-add-supplement, .btn-open-add-modal');
      if (addBtn) {
        this.openSupplementModal(null);
      }

      const exportBtn = e.target.closest('#btn-export-data');
      if (exportBtn) {
        this.openExportModal();
      }

      const resetBtn = e.target.closest('#btn-reset-data');
      if (resetBtn) {
        if (confirm('Möchtest du wirklich alle Supplements auf die Standardwerte (inkl. Watson Male Essentials) zurücksetzen?')) {
          appState.resetToDefaults();
          this.showToast('Auf Standardwerte zurückgesetzt', 'info');
        }
      }
    });
  }

  updateThemeIcon(theme) {
    if (!this.themeToggleBtn) return;
    this.themeToggleBtn.innerHTML = theme === 'dark' ? '☀️ Heller Modus' : '🌙 Dunkler Modus';
  }

  render() {
    this.renderHeaderStats();
    this.renderActiveTab();
  }

  renderHeaderStats() {
    if (!this.statsContainer) return;
    const stats = appState.getSummaryStats();

    this.statsContainer.innerHTML = `
      <div class="stat-card">
        <div class="stat-icon">💊</div>
        <div class="stat-content">
          <div class="stat-value">${stats.activeSupplementsCount} <span class="stat-total">/ ${stats.totalSupplementsCount}</span></div>
          <div class="stat-label">Aktive Supplements</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">🧪</div>
        <div class="stat-content">
          <div class="stat-value">${stats.nutrientsCoveredCount} <span class="stat-total">/ ${stats.totalNutrientsCount}</span></div>
          <div class="stat-label">Nährstoffe abgedeckt</div>
        </div>
      </div>
      <div class="stat-card ${stats.warningsCount > 0 ? 'stat-alert' : 'stat-success'}">
        <div class="stat-icon">${stats.warningsCount > 0 ? '⚠️' : '🛡️'}</div>
        <div class="stat-content">
          <div class="stat-value">${stats.warningsCount > 0 ? `${stats.warningsCount} Warnung(en)` : 'Sicher (0 UL)'}</div>
          <div class="stat-label">${stats.warningsCount > 0 ? 'Höchstmengen überschritten' : 'Keine Überdosierungen'}</div>
        </div>
      </div>
    `;
  }

  renderActiveTab() {
    // Show active tab container
    this.tabContents.forEach(content => {
      if (content.id === `tab-${appState.activeTab}`) {
        content.classList.remove('hidden');
      } else {
        content.classList.add('hidden');
      }
    });

    switch (appState.activeTab) {
      case 'nutrients':
        this.renderNutrientsView();
        break;
      case 'stack':
        this.renderStackView();
        break;
      case 'timing':
        this.renderTimingView();
        break;
      case 'lexicon':
        this.renderLexiconView();
        break;
    }
  }

  // --- TAB 1: NÄHRSTOFF-KOMPASS ---
  renderNutrientsView() {
    if (!this.nutrientsGrid) return;
    const nutrients = appState.getFilteredNutrients();

    if (nutrients.length === 0) {
      this.nutrientsGrid.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">🔍</div>
          <h3>Keine Nährstoffe gefunden</h3>
          <p>Passe deinen Suchbegriff oder Filter an, oder aktiviere weitere Supplements in deinem Stack.</p>
        </div>
      `;
      return;
    }

    let html = '';
    nutrients.forEach(item => {
      const def = item.definition;
      const total = item.totalAmount;
      const cat = NUTRIENT_CATEGORIES[def.category.toUpperCase()] || { name: 'Sonstiges', icon: '✨' };

      // Progress bar calculation
      const refVal = def.dach || def.nrv;
      let percentDisplay = '';
      let progressWidth = 0;
      let statusBadge = '';

      if (item.isWarning) {
        statusBadge = `<span class="badge badge-danger">⚠️ Höchstmenge überschritten</span>`;
      } else if (item.status === 'optimal') {
        statusBadge = `<span class="badge badge-success">✓ Optimal abgedeckt</span>`;
      } else if (item.status === 'high') {
        statusBadge = `<span class="badge badge-warning">↑ Erhöht</span>`;
      } else if (item.status === 'under') {
        statusBadge = `<span class="badge badge-muted">Unter D-A-CH</span>`;
      } else {
        statusBadge = `<span class="badge badge-inactive">Nicht enthalten</span>`;
      }

      if (refVal && total > 0) {
        const p = Math.round((total / refVal) * 100);
        percentDisplay = `${p}% ${def.dach ? 'D-A-CH' : 'NRV'}`;
        progressWidth = Math.min(p, 100);
      } else if (total > 0) {
        percentDisplay = 'Aktiv';
        progressWidth = 100;
      } else {
        percentDisplay = '0%';
        progressWidth = 0;
      }

      // Progress bar color class
      let barClass = 'progress-optimal';
      if (item.isWarning) barClass = 'progress-danger';
      else if (item.status === 'high') barClass = 'progress-high';
      else if (item.status === 'under') barClass = 'progress-under';
      else if (total === 0) barClass = 'progress-none';

      // Source pills
      let sourcesHtml = '';
      if (item.sources.length > 0) {
        sourcesHtml = item.sources.map(s => `
          <span class="source-tag" title="${s.brand}: ${appState.formatNumber(s.amount)} ${def.unit} (${s.sharePercent}%)">
            ${s.suppName}: <strong>${appState.formatNumber(s.amount)} ${def.unit}</strong>
          </span>
        `).join('');
      } else {
        sourcesHtml = `<span class="source-tag text-muted">In keinem aktiven Supplement</span>`;
      }

      html += `
        <div class="nutrient-card ${item.isWarning ? 'card-warning-glow' : ''}" data-nutrient-id="${item.id}">
          <div class="nutrient-header">
            <div class="nutrient-title-group">
              <span class="category-icon" title="${cat.name}">${cat.icon}</span>
              <div>
                <h3 class="nutrient-title">${def.shortName}</h3>
                <span class="nutrient-subtitle">${def.name}</span>
              </div>
            </div>
            ${statusBadge}
          </div>

          <div class="nutrient-amount-row">
            <div class="amount-current">
              <span class="amount-val">${appState.formatNumber(total)}</span>
              <span class="amount-unit">${def.unit}</span>
            </div>
            <div class="amount-reference">
              ${def.dach ? `<span title="D-A-CH Referenzwert">D-A-CH: <strong>${def.dach} ${def.unit}</strong></span>` : ''}
              ${def.nrv ? `<span title="EU NRV Referenzwert">NRV: <strong>${def.nrv} ${def.unit}</strong></span>` : ''}
              ${def.ul ? `<span class="text-danger" title="Tolerable Upper Intake Level">Max: <strong>${def.ul} ${def.unit}</strong></span>` : ''}
            </div>
          </div>

          <div class="progress-bar-wrap">
            <div class="progress-bar-track">
              <div class="progress-bar-fill ${barClass}" style="width: ${progressWidth}%"></div>
            </div>
            <div class="progress-info-row">
              <span class="progress-percent-label">${percentDisplay}</span>
              ${item.isWarning ? `<span class="text-danger small-text">${item.warningReason}</span>` : ''}
            </div>
          </div>

          <div class="nutrient-sources-box">
            <div class="sources-title">Lieferanten (${item.sources.length}):</div>
            <div class="sources-list">${sourcesHtml}</div>
          </div>

          <button class="btn-inspect-nutrient" data-inspect-id="${item.id}">
            🔍 Details & Einnahme-Tipps
          </button>
        </div>
      `;
    });

    this.nutrientsGrid.innerHTML = html;

    // Bind inspect buttons
    this.nutrientsGrid.querySelectorAll('[data-inspect-id]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.openNutrientDetailModal(btn.dataset.inspectId);
      });
    });

    // Clicking card opens inspect modal too
    this.nutrientsGrid.querySelectorAll('.nutrient-card').forEach(card => {
      card.addEventListener('click', () => {
        this.openNutrientDetailModal(card.dataset.nutrientId);
      });
    });
  }

  // --- TAB 2: EINNAHME-STACK ---
  renderStackView() {
    if (!this.stackGrid) return;
    const supps = appState.supplements;

    let html = `
      <div class="stack-action-bar">
        <div class="stack-action-text">
          <h2>Dein Supplement-Stack (${supps.length})</h2>
          <p>Aktiviere oder deaktiviere Präparate, passe deine Tagesdosis an oder füge neue Produkte hinzu.</p>
        </div>
        <button id="btn-add-supplement" class="btn btn-primary">
          ➕ Supplement hinzufügen
        </button>
      </div>
      <div class="stack-cards-container">
    `;

    supps.forEach(supp => {
      const nutrientCount = supp.nutrients ? Object.keys(supp.nutrients).length : 0;
      const timeLabels = {
        morning: '🌅 Morgens',
        noon: '☀️ Mittags',
        workout: '⚡ Sport / Workout',
        evening: '🌙 Abends'
      };

      // Preview top 4 nutrients
      let nutrientPreviewHtml = '';
      if (supp.nutrients) {
        const topKeys = Object.keys(supp.nutrients).slice(0, 6);
        nutrientPreviewHtml = topKeys.map(k => {
          const def = NUTRIENT_DEFINITIONS[k];
          const name = def ? def.shortName : k;
          const unit = def ? def.unit : 'mg';
          const amt = supp.nutrients[k];
          return `<span class="pill-nutrient-preview">${name}: <strong>${amt} ${unit}</strong></span>`;
        }).join('');

        if (nutrientCount > 6) {
          nutrientPreviewHtml += `<span class="pill-nutrient-more">+${nutrientCount - 6} weitere</span>`;
        }
      }

      html += `
        <div class="supp-card ${supp.active ? 'supp-active' : 'supp-inactive'}" data-supp-id="${supp.id}">
          <div class="supp-top-row">
            <div class="supp-main-info">
              <div class="supp-badge-row">
                <span class="supp-brand-badge">${supp.brand || 'Eigenes'}</span>
                <span class="supp-form-badge">${supp.form || 'Kapseln'}</span>
                <span class="supp-time-badge">${timeLabels[supp.timeOfDay] || 'Morgens'}</span>
                ${supp.withFood ? '<span class="supp-food-badge">🍲 Mit Essen</span>' : ''}
              </div>
              <h3 class="supp-name">
                ${supp.url ? `<a href="${supp.url}" target="_blank" rel="noopener noreferrer" class="supp-link" title="Produktseite öffnen">${supp.name} ↗</a>` : supp.name}
              </h3>
              <div class="supp-portion-desc">Standard-Portion: <strong>${supp.servingSize}</strong></div>
            </div>

            <div class="supp-toggle-group">
              <label class="switch-toggle" title="Supplement aktivieren / deaktivieren">
                <input type="checkbox" class="toggle-supp-active" data-id="${supp.id}" ${supp.active ? 'checked' : ''}>
                <span class="slider-round"></span>
              </label>
              <span class="toggle-label">${supp.active ? 'Aktiv' : 'Pausiert'}</span>
            </div>
          </div>

          ${supp.notes ? `<p class="supp-notes">${supp.notes}</p>` : ''}

          <div class="supp-nutrients-box">
            <div class="supp-nutrients-header">Enthaltene Nährstoffe (${nutrientCount}):</div>
            <div class="supp-nutrients-list">${nutrientPreviewHtml}</div>
          </div>

          <div class="supp-footer-row">
            <div class="dosage-control">
              <label>Tagesportion(en):</label>
              <div class="stepper-input">
                <button class="btn-step" data-action="dec" data-id="${supp.id}">−</button>
                <input type="number" step="0.5" min="0.5" max="10" value="${supp.servingsPerDay || 1}" class="input-servings" data-id="${supp.id}">
                <button class="btn-step" data-action="inc" data-id="${supp.id}">+</button>
              </div>
            </div>

            <div class="supp-actions">
              <button class="btn-icon btn-edit-supp" data-id="${supp.id}" title="Bearbeiten">✏️ Bearbeiten</button>
              <button class="btn-icon btn-delete-supp" data-id="${supp.id}" title="Löschen">🗑️</button>
            </div>
          </div>
        </div>
      `;
    });

    html += `</div>`;
    this.stackGrid.innerHTML = html;

    // Bind stack events
    this.stackGrid.querySelectorAll('.toggle-supp-active').forEach(chk => {
      chk.addEventListener('change', () => {
        appState.toggleSupplement(chk.dataset.id);
      });
    });

    this.stackGrid.querySelectorAll('.input-servings').forEach(inp => {
      inp.addEventListener('change', () => {
        appState.setServings(inp.dataset.id, inp.value);
      });
    });

    this.stackGrid.querySelectorAll('.btn-step').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        const supp = appState.supplements.find(s => s.id === id);
        if (supp) {
          const current = supp.servingsPerDay || 1;
          const next = btn.dataset.action === 'inc' ? current + 0.5 : Math.max(0.5, current - 0.5);
          appState.setServings(id, next);
        }
      });
    });

    this.stackGrid.querySelectorAll('.btn-edit-supp').forEach(btn => {
      btn.addEventListener('click', () => {
        this.openSupplementModal(btn.dataset.id);
      });
    });

    this.stackGrid.querySelectorAll('.btn-delete-supp').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        const supp = appState.supplements.find(s => s.id === id);
        if (confirm(`Möchtest du "${supp ? supp.name : 'dieses Supplement'}" wirklich löschen?`)) {
          appState.deleteSupplement(id);
          this.showToast('Supplement gelöscht', 'info');
        }
      });
    });
  }

  // --- TAB 3: TIMING-PLAN ---
  renderTimingView() {
    if (!this.timingContainer) return;
    const slots = appState.getTimingPlan();

    let html = `
      <div class="timing-header-bar">
        <h2>Einnahme-Timing & Synergie-Leitfaden</h2>
        <p>Optimiere die Aufnahme deiner Nährstoffe, indem du sie zum richtigen Zeitpunkt mit den passenden Begleitstoffen einnimmst.</p>
      </div>
      <div class="timing-slots-grid">
    `;

    Object.entries(slots).forEach(([key, slot]) => {
      const hasItems = slot.items.length > 0;

      html += `
        <div class="timing-slot-card ${hasItems ? '' : 'timing-slot-empty'}">
          <div class="timing-slot-header">
            <span class="timing-slot-icon">${slot.icon}</span>
            <div class="timing-slot-title-wrap">
              <h3>${slot.label}</h3>
              <span class="timing-slot-count">${slot.items.length} Supplement(s)</span>
            </div>
          </div>

          <div class="timing-slot-items">
            ${hasItems ? slot.items.map(s => `
              <div class="timing-item-row">
                <div class="timing-item-name">
                  <strong>${s.name}</strong>
                  <span class="timing-item-brand">(${s.brand})</span>
                </div>
                <div class="timing-item-dose">
                  ${s.servingsPerDay || 1}x ${s.servingSize}
                </div>
              </div>
            `).join('') : '<div class="timing-empty-hint">Keine aktiven Supplements für diesen Zeitpunkt geplant.</div>'}
          </div>

          ${slot.tips.length > 0 ? `
            <div class="timing-tips-box">
              ${slot.tips.map(tip => `<div class="timing-tip-line">${tip}</div>`).join('')}
            </div>
          ` : ''}
        </div>
      `;
    });

    html += `
      </div>
      <div class="timing-interactions-card">
        <h3>⚡ Wichtige Nährstoff-Wechselwirkungen auf einen Blick</h3>
        <div class="interactions-grid">
          <div class="interaction-box positive">
            <h4>🟢 Synergien (Verstärken sich gegenseitig)</h4>
            <ul>
              <li><strong>Vitamin D3 + K2 + Magnesium:</strong> Vitamin D fördert die Calciumaufnahme, K2 leitet es in die Knochen, Magnesium aktiviert Vitamin D.</li>
              <li><strong>Eisen + Vitamin C:</strong> Vitamin C erhöht die Eisenaufnahme im Dünndarm um ein Vielfaches.</li>
              <li><strong>Fettlösliche Vitamine (A, D, E, K) + Fette:</strong> Benötigen Nahrungsfett (z.B. Nüsse, Avocado, Olivenöl) für optimale Resorption.</li>
              <li><strong>Zink + Kupfer im Gleichgewicht:</strong> Beide sollten im ausgewogenen Verhältnis vorliegen (ideal ca. 10:1 bis 15:1).</li>
            </ul>
          </div>
          <div class="interaction-box warning">
            <h4>🔴 Antagonismen (Zeitlich trennen!)</h4>
            <ul>
              <li><strong>Eisen & Calcium / Kaffee / Tee:</strong> Hohe Mengen Calcium, Gerbstoffe (Tannine) und Kaffee hemmen die Eisenaufnahme drastisch (mind. 2 Std. Abstand halten).</li>
              <li><strong>Zink & Eisen in hohen Dosen:</strong> Konkurrieren um denselben Transporter (DMT-1).</li>
              <li><strong>Magnesium:</strong> Vorzugsweise abends, da es beruhigend auf das zentrale Nervensystem wirkt und die Muskelentspannung fördert.</li>
            </ul>
          </div>
        </div>
      </div>
    `;

    this.timingContainer.innerHTML = html;
  }

  // --- TAB 4: NÄHRSTOFF-LEXIKON ---
  renderLexiconView() {
    if (!this.lexiconGrid) return;

    let html = `
      <div class="lexicon-header-bar">
        <h2>Wissenschaftliches Nährstoff-Lexikon</h2>
        <p>Alle Vitamine, Mengenelemente, Spurenelemente und funktionelle Nährstoffe mit D-A-CH / NRV-Referenzen und EFSA-Sicherheitsgrenzen.</p>
      </div>
      <div class="lexicon-cards-grid">
    `;

    Object.entries(NUTRIENT_DEFINITIONS).forEach(([id, def]) => {
      const cat = NUTRIENT_CATEGORIES[def.category.toUpperCase()] || { name: 'Sonstiges', icon: '✨' };

      html += `
        <div class="lexicon-card">
          <div class="lexicon-card-header">
            <span class="category-icon">${cat.icon}</span>
            <div>
              <h3>${def.shortName}</h3>
              <span class="lexicon-subtitle">${def.name}</span>
            </div>
          </div>

          <p class="lexicon-desc">${def.description}</p>

          <div class="lexicon-values-table">
            <div class="lex-row">
              <span class="lex-label">D-A-CH Empfehlung:</span>
              <span class="lex-val">${def.dach ? `${def.dach} ${def.unit}` : '–'}</span>
            </div>
            <div class="lex-row">
              <span class="lex-label">EU NRV Mindestwert:</span>
              <span class="lex-val">${def.nrv ? `${def.nrv} ${def.unit}` : '–'}</span>
            </div>
            <div class="lex-row">
              <span class="lex-label">EFSA Upper Limit (Max):</span>
              <span class="lex-val ${def.ul ? 'text-danger font-bold' : ''}">${def.ul ? `${def.ul} ${def.unit}` : 'Kein Limit festgelegt'}</span>
            </div>
            <div class="lex-row">
              <span class="lex-label">Optimaler Bereich:</span>
              <span class="lex-val">${def.optimalRange ? `${def.optimalRange[0]} – ${def.optimalRange[1]} ${def.unit}` : '–'}</span>
            </div>
          </div>

          ${def.tip ? `
            <div class="lexicon-tip">
              <strong>💡 Praxistipp:</strong> ${def.tip}
            </div>
          ` : ''}
        </div>
      `;
    });

    html += `</div>`;
    this.lexiconGrid.innerHTML = html;
  }

  // --- MODALS ---

  // 1. Supplement Add/Edit Modal
  openSupplementModal(editId = null) {
    this.currentEditingId = editId;
    const isEdit = Boolean(editId);
    const existing = isEdit ? appState.supplements.find(s => s.id === editId) : null;

    let currentNutrients = existing && existing.nutrients ? { ...existing.nutrients } : {};

    const modal = document.createElement('div');
    modal.className = 'modal-backdrop';
    modal.innerHTML = `
      <div class="modal-card modal-large">
        <div class="modal-header">
          <h2>${isEdit ? '✏️ Supplement bearbeiten' : '➕ Neues Supplement hinzufügen'}</h2>
          <button class="modal-close-btn">&times;</button>
        </div>

        <div class="modal-body">
          ${!isEdit ? `
            <div class="form-group preset-selector-wrap">
              <label>⚡ Schnellauswahl aus Presets (optional):</label>
              <select id="preset-selector" class="form-control">
                <option value="">-- Eigenes Produkt frei anlegen --</option>
                ${SUPPLEMENT_PRESETS.map(p => `
                  <option value="${p.id}">${p.brand}: ${p.name} (${p.servingSize})</option>
                `).join('')}
              </select>
            </div>
          ` : ''}

          <div class="form-row">
            <div class="form-group flex-2">
              <label>Produktname *</label>
              <input type="text" id="inp-supp-name" class="form-control" placeholder="z.B. Male Essentials oder Omega 3" value="${existing ? existing.name : ''}" required>
            </div>
            <div class="form-group flex-1">
              <label>Marke / Hersteller</label>
              <input type="text" id="inp-supp-brand" class="form-control" placeholder="z.B. Watson Nutrition" value="${existing ? existing.brand : ''}">
            </div>
          </div>

          <div class="form-row">
            <div class="form-group flex-1">
              <label>Darreichungsform</label>
              <select id="inp-supp-form" class="form-control">
                <option value="Kapseln" ${existing && existing.form === 'Kapseln' ? 'selected' : ''}>Kapseln</option>
                <option value="Tabletten" ${existing && existing.form === 'Tabletten' ? 'selected' : ''}>Tabletten</option>
                <option value="Tropfen" ${existing && existing.form === 'Tropfen' ? 'selected' : ''}>Tropfen</option>
                <option value="Pulver" ${existing && existing.form === 'Pulver' ? 'selected' : ''}>Pulver</option>
                <option value="Softgels" ${existing && existing.form === 'Softgels' ? 'selected' : ''}>Softgels</option>
                <option value="Liquid" ${existing && existing.form === 'Liquid' ? 'selected' : ''}>Flüssig / Liquid</option>
              </select>
            </div>
            <div class="form-group flex-1">
              <label>Portionsgröße (Text)</label>
              <input type="text" id="inp-supp-serving" class="form-control" placeholder="z.B. 1 Kapsel täglich" value="${existing ? existing.servingSize : '1 Kapsel'}">
            </div>
            <div class="form-group flex-1">
              <label>Einnahmezeitpunkt</label>
              <select id="inp-supp-time" class="form-control">
                <option value="morning" ${existing && existing.timeOfDay === 'morning' ? 'selected' : ''}>🌅 Morgens</option>
                <option value="noon" ${existing && existing.timeOfDay === 'noon' ? 'selected' : ''}>☀️ Mittags</option>
                <option value="workout" ${existing && existing.timeOfDay === 'workout' ? 'selected' : ''}>⚡ Sport / Workout</option>
                <option value="evening" ${existing && existing.timeOfDay === 'evening' ? 'selected' : ''}>🌙 Abends</option>
              </select>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group flex-2">
              <label>Weblink / Produkt-URL (optional)</label>
              <input type="url" id="inp-supp-url" class="form-control" placeholder="https://..." value="${existing ? existing.url : ''}">
            </div>
            <div class="form-group flex-1 checkbox-align">
              <label class="checkbox-label">
                <input type="checkbox" id="inp-supp-food" ${existing ? (existing.withFood ? 'checked' : '') : 'checked'}>
                <span>🍲 Mit einer Mahlzeit einnehmen</span>
              </label>
            </div>
          </div>

          <div class="form-group">
            <label>Notizen / Anwendungsgebiet (optional)</label>
            <input type="text" id="inp-supp-notes" class="form-control" placeholder="z.B. Veganer Multinährstoff für Grundversorgung" value="${existing ? (existing.notes || '') : ''}">
          </div>

          <hr class="modal-divider">

          <div class="nutrients-builder-section">
            <div class="nutrients-builder-header">
              <h3>🧪 Inhaltsstoffe & Dosierungen pro Portion</h3>
              <p>Füge alle Nährstoffe hinzu, die in einer Standardportion dieses Präparats enthalten sind.</p>
            </div>

            <div class="add-nutrient-row">
              <select id="select-new-nutrient" class="form-control flex-2">
                <option value="">-- Nährstoff auswählen --</option>
                ${Object.entries(NUTRIENT_DEFINITIONS).map(([id, def]) => `
                  <option value="${id}">${def.shortName} (${def.unit})</option>
                `).join('')}
              </select>
              <input type="number" step="any" min="0" id="inp-new-nutrient-val" class="form-control flex-1" placeholder="Menge">
              <button type="button" id="btn-add-nutrient-row" class="btn btn-secondary">
                ➕ Hinzufügen
              </button>
            </div>

            <div id="nutrient-rows-container" class="nutrient-rows-list">
              <!-- Dynamically populated -->
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary modal-close-btn">Abbrechen</button>
          <button type="button" id="btn-save-supp" class="btn btn-primary">
            💾 ${isEdit ? 'Änderungen speichern' : 'Supplement speichern'}
          </button>
        </div>
      </div>
    `;

    this.modalContainer.innerHTML = '';
    this.modalContainer.appendChild(modal);
    this.modalContainer.classList.remove('hidden');

    const rowsContainer = modal.querySelector('#nutrient-rows-container');

    const renderNutrientRows = () => {
      const keys = Object.keys(currentNutrients);
      if (keys.length === 0) {
        rowsContainer.innerHTML = '<div class="text-muted small-text">Noch keine Nährstoffe hinzugefügt. Wähle oben einen Nährstoff aus.</div>';
        return;
      }

      rowsContainer.innerHTML = keys.map(k => {
        const def = NUTRIENT_DEFINITIONS[k];
        const name = def ? def.shortName : k;
        const unit = def ? def.unit : 'mg';
        const val = currentNutrients[k];

        return `
          <div class="nutrient-edit-row" data-key="${k}">
            <span class="nutrient-edit-name"><strong>${name}</strong></span>
            <div class="nutrient-edit-input-wrap">
              <input type="number" step="any" min="0" value="${val}" class="form-control row-val-input" data-key="${k}">
              <span class="nutrient-edit-unit">${unit}</span>
            </div>
            <button type="button" class="btn-icon text-danger btn-remove-row" data-key="${k}" title="Entfernen">🗑️</button>
          </div>
        `;
      }).join('');

      // Bind input changes and deletes
      rowsContainer.querySelectorAll('.row-val-input').forEach(inp => {
        inp.addEventListener('input', (e) => {
          const val = parseFloat(e.target.value);
          currentNutrients[inp.dataset.key] = isNaN(val) ? 0 : val;
        });
      });

      rowsContainer.querySelectorAll('.btn-remove-row').forEach(btn => {
        btn.addEventListener('click', () => {
          delete currentNutrients[btn.dataset.key];
          renderNutrientRows();
        });
      });
    };

    renderNutrientRows();

    // Add nutrient button handler
    const selectEl = modal.querySelector('#select-new-nutrient');
    const valEl = modal.querySelector('#inp-new-nutrient-val');
    modal.querySelector('#btn-add-nutrient-row').addEventListener('click', () => {
      const selectedKey = selectEl.value;
      const numVal = parseFloat(valEl.value);
      if (!selectedKey) {
        alert('Bitte wähle zuerst einen Nährstoff aus.');
        return;
      }
      if (isNaN(numVal) || numVal <= 0) {
        alert('Bitte gib eine gültige Menge größer als 0 ein.');
        return;
      }

      currentNutrients[selectedKey] = numVal;
      valEl.value = '';
      selectEl.value = '';
      renderNutrientRows();
    });

    // Preset selector handler
    const presetSel = modal.querySelector('#preset-selector');
    if (presetSel) {
      presetSel.addEventListener('change', () => {
        const selectedPreset = SUPPLEMENT_PRESETS.find(p => p.id === presetSel.value);
        if (selectedPreset) {
          modal.querySelector('#inp-supp-name').value = selectedPreset.name;
          modal.querySelector('#inp-supp-brand').value = selectedPreset.brand;
          modal.querySelector('#inp-supp-form').value = selectedPreset.form;
          modal.querySelector('#inp-supp-serving').value = selectedPreset.servingSize;
          modal.querySelector('#inp-supp-time').value = selectedPreset.timeOfDay;
          modal.querySelector('#inp-supp-url').value = selectedPreset.url || '';
          modal.querySelector('#inp-supp-food').checked = selectedPreset.withFood;
          modal.querySelector('#inp-supp-notes').value = selectedPreset.notes || '';
          currentNutrients = { ...selectedPreset.nutrients };
          renderNutrientRows();
        }
      });
    }

    // Close buttons
    modal.querySelectorAll('.modal-close-btn').forEach(btn => {
      btn.addEventListener('click', () => this.closeModal());
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) this.closeModal();
    });

    // Save button
    modal.querySelector('#btn-save-supp').addEventListener('click', () => {
      const name = modal.querySelector('#inp-supp-name').value.trim();
      if (!name) {
        alert('Bitte gib einen Produktnamen ein.');
        return;
      }

      const suppData = {
        name,
        brand: modal.querySelector('#inp-supp-brand').value.trim() || 'Eigenes Produkt',
        form: modal.querySelector('#inp-supp-form').value,
        servingSize: modal.querySelector('#inp-supp-serving').value.trim() || '1 Portion',
        timeOfDay: modal.querySelector('#inp-supp-time').value,
        url: modal.querySelector('#inp-supp-url').value.trim(),
        withFood: modal.querySelector('#inp-supp-food').checked,
        notes: modal.querySelector('#inp-supp-notes').value.trim(),
        nutrients: currentNutrients
      };

      if (isEdit) {
        appState.updateSupplement(editId, suppData);
        this.showToast('Supplement erfolgreich aktualisiert', 'success');
      } else {
        appState.addSupplement(suppData);
        this.showToast('Neues Supplement hinzugefügt', 'success');
      }

      this.closeModal();
    });
  }

  // 2. Nutrient Inspector Modal
  openNutrientDetailModal(nutrientId) {
    const calculated = appState.getCalculatedNutrients();
    const item = calculated[nutrientId];
    if (!item) return;

    const def = item.definition;
    const cat = NUTRIENT_CATEGORIES[def.category.toUpperCase()] || { name: 'Sonstiges', icon: '✨' };

    const modal = document.createElement('div');
    modal.className = 'modal-backdrop';
    modal.innerHTML = `
      <div class="modal-card">
        <div class="modal-header">
          <div class="modal-title-group">
            <span class="category-icon">${cat.icon}</span>
            <div>
              <h2>${def.shortName}</h2>
              <span class="modal-subtitle">${def.name}</span>
            </div>
          </div>
          <button class="modal-close-btn">&times;</button>
        </div>

        <div class="modal-body">
          <div class="detail-summary-card ${item.isWarning ? 'card-warning-glow' : ''}">
            <div class="detail-amount-big">
              <span class="big-val">${appState.formatNumber(item.totalAmount)}</span>
              <span class="big-unit">${def.unit}</span>
              <span class="detail-badge-wrap">
                ${item.isWarning ? '<span class="badge badge-danger">⚠️ Höchstmenge überschritten</span>' : (item.totalAmount > 0 ? '<span class="badge badge-success">✓ Aktiv im Stack</span>' : '<span class="badge badge-inactive">Nicht eingenommen</span>')}
              </span>
            </div>

            <div class="detail-ref-grid">
              <div class="detail-ref-box">
                <span class="ref-label">D-A-CH Empfehlung</span>
                <span class="ref-val">${def.dach ? `${def.dach} ${def.unit} (${item.percentageDACH || 0}%)` : '–'}</span>
              </div>
              <div class="detail-ref-box">
                <span class="ref-label">EU NRV Referenz</span>
                <span class="ref-val">${def.nrv ? `${def.nrv} ${def.unit} (${item.percentageNRV || 0}%)` : '–'}</span>
              </div>
              <div class="detail-ref-box">
                <span class="ref-label">EFSA Upper Limit (Max)</span>
                <span class="ref-val ${def.ul ? 'text-danger font-bold' : ''}">${def.ul ? `${def.ul} ${def.unit}` : 'Kein UL'}</span>
              </div>
            </div>
          </div>

          ${item.isWarning ? `
            <div class="alert-box alert-danger">
              <strong>⚠️ Überdosierungs-Warnung:</strong> ${item.warningReason}
            </div>
          ` : ''}

          <div class="detail-section">
            <h3>💊 Woher kommt dieser Nährstoff in deinem Stack?</h3>
            ${item.sources.length > 0 ? `
              <div class="detail-sources-table">
                ${item.sources.map(s => `
                  <div class="detail-source-row">
                    <div class="detail-source-name">
                      <strong>${s.suppName}</strong>
                      <span class="detail-source-brand">${s.brand}</span>
                    </div>
                    <div class="detail-source-amount">
                      <strong>${appState.formatNumber(s.amount)} ${def.unit}</strong>
                      <span class="detail-source-share">(${s.sharePercent}% der Gesamtzufuhr)</span>
                    </div>
                  </div>
                `).join('')}
              </div>
            ` : `
              <p class="text-muted">Dieser Nährstoff ist aktuell in keinem deiner aktivierten Supplements enthalten.</p>
            `}
          </div>

          <div class="detail-section">
            <h3>🔬 Funktion & Physiologische Wirkung</h3>
            <p>${def.description}</p>
          </div>

          ${def.tip ? `
            <div class="detail-section">
              <div class="detail-tip-box">
                <strong>💡 Optimale Einnahme:</strong> ${def.tip}
              </div>
            </div>
          ` : ''}
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-primary modal-close-btn">Schließen</button>
        </div>
      </div>
    `;

    this.modalContainer.innerHTML = '';
    this.modalContainer.appendChild(modal);
    this.modalContainer.classList.remove('hidden');

    modal.querySelectorAll('.modal-close-btn').forEach(btn => {
      btn.addEventListener('click', () => this.closeModal());
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) this.closeModal();
    });
  }

  // 3. Export / Import Modal
  openExportModal() {
    const jsonStr = appState.exportData();

    const modal = document.createElement('div');
    modal.className = 'modal-backdrop';
    modal.innerHTML = `
      <div class="modal-card">
        <div class="modal-header">
          <h2>💾 Daten sichern & wiederherstellen</h2>
          <button class="modal-close-btn">&times;</button>
        </div>

        <div class="modal-body">
          <p>Kopiere deinen aktuellen Supplement-Stack als JSON-Backup oder füge gespeicherte Daten ein:</p>
          <textarea id="json-data-area" class="form-control json-textarea" rows="10">${jsonStr}</textarea>

          <div class="export-btn-group">
            <button id="btn-copy-json" class="btn btn-secondary">📋 In Zwischenablage kopieren</button>
            <button id="btn-download-json" class="btn btn-secondary">⬇️ Als Datei herunterladen</button>
            <button id="btn-apply-import" class="btn btn-primary">📥 Aus Textfeld importieren</button>
          </div>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary modal-close-btn">Schließen</button>
        </div>
      </div>
    `;

    this.modalContainer.innerHTML = '';
    this.modalContainer.appendChild(modal);
    this.modalContainer.classList.remove('hidden');

    modal.querySelectorAll('.modal-close-btn').forEach(btn => {
      btn.addEventListener('click', () => this.closeModal());
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) this.closeModal();
    });

    modal.querySelector('#btn-copy-json').addEventListener('click', () => {
      const area = modal.querySelector('#json-data-area');
      area.select();
      navigator.clipboard.writeText(area.value);
      this.showToast('In die Zwischenablage kopiert!', 'success');
    });

    modal.querySelector('#btn-download-json').addEventListener('click', () => {
      const blob = new Blob([modal.querySelector('#json-data-area').value], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `supplement-stack-backup-${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
      this.showToast('Download gestartet', 'success');
    });

    modal.querySelector('#btn-apply-import').addEventListener('click', () => {
      const val = modal.querySelector('#json-data-area').value;
      const res = appState.importData(val);
      if (res.success) {
        this.showToast('Daten erfolgreich importiert!', 'success');
        this.closeModal();
      } else {
        alert('Fehler beim Importieren: ' + res.error);
      }
    });
  }

  closeModal() {
    this.modalContainer.classList.add('hidden');
    this.modalContainer.innerHTML = '';
    this.currentEditingId = null;
  }

  showToast(message, type = 'info') {
    if (!this.toastContainer) return;
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <span class="toast-icon">${type === 'success' ? '✓' : (type === 'danger' ? '⚠️' : 'ℹ️')}</span>
      <span class="toast-text">${message}</span>
    `;

    this.toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.classList.add('toast-fade-out');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }
}

export const ui = new UIController();
