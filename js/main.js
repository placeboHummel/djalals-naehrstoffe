import { MY_SUPPLEMENTS, NUTRIENTS_SUMMARY } from './data.js?v=3.1.0';
import { NUTRIENT_DETAILS } from './nutrient-details.js?v=3.1.0';
import { exportDailyIntakeHTML } from './export.js?v=3.1.5';

document.addEventListener('DOMContentLoaded', () => {
  const suppContainer = document.getElementById('supplements-list');
  const nutContainer = document.getElementById('nutrients-list');
  const activeFilterContainer = document.getElementById('active-filter-container');
  const modalContainer = document.getElementById('modal-container');
  const searchInput = document.getElementById('search-input');
  const exportBtn = document.getElementById('export-btn');
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
      let blockClass = 'supp-timing-block-a';
      if (supp.block === 'B') blockClass = 'supp-timing-block-b';
      else if (supp.block === 'both') blockClass = 'supp-timing-block-both';
      else if (supp.block === 'shake') blockClass = 'supp-timing-block-shake';

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
              </div>
              <h3 class="supp-title">${supp.name}</h3>
              <div class="supp-timing-row">
                <span class="supp-timing-badge ${blockClass}">${supp.timing}</span>
              </div>
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
      // Immer automatisch auf "Alle" springen, damit alle Nährstoffe des ausgewählten Supplements sichtbar sind
      currentCategory = 'all';
      filterPills.forEach(p => p.classList.toggle('active', p.dataset.cat === 'all'));
    }
    currentSearch = '';
    if (searchInput) searchInput.value = '';
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
        currentSearch = '';
        if (searchInput) searchInput.value = '';
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
      let refLabel = 'DGE';
      if (item.ref.includes('EFSA')) refLabel = 'EFSA';
      else if (item.ref.includes('WHO')) refLabel = 'WHO';
      else if (item.ref.includes('D-A-CH') || item.ref.includes('DGE')) refLabel = 'DGE';
      else if (item.ref.includes('Studien') || item.ref.includes('Bedarf') || item.ref.includes('Sport')) refLabel = 'Bedarf';

      const isMissing = item.percent === 0;
      const percentBadgeText = isMissing ? '0% • Fehlt im Stack' : `${item.percent}% ${refLabel}`;
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
    let refLabel = 'DGE';
    if (nutrient.ref.includes('EFSA')) refLabel = 'EFSA';
    else if (nutrient.ref.includes('WHO')) refLabel = 'WHO';
    else if (nutrient.ref.includes('D-A-CH') || nutrient.ref.includes('DGE')) refLabel = 'DGE';
    else if (nutrient.ref.includes('Studien') || nutrient.ref.includes('Bedarf') || nutrient.ref.includes('Sport')) refLabel = 'Bedarf';

    const percentText = isMissing ? '0% (Nicht im Stack)' : `${nutrient.percent}% ${refLabel}`;

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
                  <span>Aktuell in keinem deiner ${MY_SUPPLEMENTS.length} Supplements enthalten (0 mg Zufuhr).</span>
                </div>
              `}
            </div>

            <!-- Benefits & Everyday Help Section -->
            ${details.simpleBenefitDesc || (details.benefitPoints && details.benefitPoints.length > 0) ? `
              <div class="modal-section modal-sec-benefits">
                <div class="modal-sec-heading modal-sec-benefits-heading">
                  <div class="modal-sec-benefits-title">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                    <strong>Wirkungsprofil & Evidenzbasierter Nutzen</strong>
                  </div>
                  <span class="modal-sec-benefits-badge">Wissenschaftlich differenziert</span>
                </div>
                ${details.simpleBenefitDesc ? `<p class="modal-benefits-desc">${details.simpleBenefitDesc}</p>` : ''}
                ${details.benefitPoints && details.benefitPoints.length > 0 ? `
                  <ul class="modal-benefits-list">
                    ${details.benefitPoints.map(point => `
                      <li>
                        <svg class="check-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        <span>${point}</span>
                      </li>
                    `).join('')}
                  </ul>
                ` : ''}
              </div>
            ` : ''}

            <!-- Practical Everyday Benefit Section (Praktischer Alltagsnutzen) -->
            ${details.plainGermanExplanation ? `
              <div class="modal-section modal-sec-plain">
                <div class="modal-sec-heading modal-sec-plain-heading">
                  <div class="modal-sec-plain-title">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
                    <strong>Praktischer Alltagsnutzen</strong>
                  </div>
                  <span class="modal-sec-plain-badge">Verständlich erklärt</span>
                </div>
                <p class="modal-plain-text">${details.plainGermanExplanation}</p>
              </div>
            ` : ''}


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
  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      exportDailyIntakeHTML();
    });
  }

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

  // Helper: Update filter pill counts & stats dynamically from data
  function updateFilterCounts() {
    const totalCount = NUTRIENTS_SUMMARY.length;
    const vitCount = NUTRIENTS_SUMMARY.filter(n => n.category === 'vitamins').length;
    const minCount = NUTRIENTS_SUMMARY.filter(n => n.category === 'minerals').length;
    const aminoCount = NUTRIENTS_SUMMARY.filter(n => n.category === 'amino').length;
    const specialCount = NUTRIENTS_SUMMARY.filter(n => n.category === 'special').length;
    const missingCount = NUTRIENTS_SUMMARY.filter(n => n.rawAmount === 0 && n.percent === 0).length;

    filterPills.forEach(pill => {
      const cat = pill.dataset.cat;
      if (cat === 'all') pill.textContent = `Alle (${totalCount})`;
      else if (cat === 'vitamins') pill.textContent = `Vitamine (${vitCount})`;
      else if (cat === 'minerals') pill.textContent = `Mineralstoffe (${minCount})`;
      else if (cat === 'amino') pill.textContent = `Aminosäuren (${aminoCount})`;
      else if (cat === 'special') pill.textContent = `Omega-3 & Vitalstoffe (${specialCount})`;
      else if (cat === 'missing') {
        pill.textContent = `Nicht abgedeckt (${missingCount})`;
        if (missingCount === 0) {
          pill.style.display = 'none';
          if (currentCategory === 'missing') {
            currentCategory = 'all';
            filterPills.forEach(p => p.classList.toggle('active', p.dataset.cat === 'all'));
          }
        } else {
          pill.style.display = '';
        }
      }
    });

    const statSuppNum = document.querySelectorAll('.stat-num')[0];
    if (statSuppNum) statSuppNum.textContent = MY_SUPPLEMENTS.length;

    const countPill = document.querySelector('.count-pill');
    if (countPill) countPill.textContent = `${MY_SUPPLEMENTS.length} Produkte`;

    const statNutNum = document.querySelectorAll('.stat-num')[1];
    if (statNutNum) statNutNum.textContent = totalCount;
  }

  // =========================================================================
  // THEME MANAGEMENT (NIGHT-MODE / DARK THEME)
  // =========================================================================
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIconMoon = document.querySelector('.theme-icon-moon');
  const themeIconSun = document.querySelector('.theme-icon-sun');
  const themeLabel = document.querySelector('.theme-label');

  function initTheme() {
    const savedTheme = localStorage.getItem('djalal_theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    applyTheme(isDark);
  }

  function applyTheme(isDark) {
    if (isDark) {
      document.body.classList.add('dark-theme');
      document.documentElement.setAttribute('data-theme', 'dark');
      if (themeIconMoon) themeIconMoon.style.display = 'none';
      if (themeIconSun) themeIconSun.style.display = 'inline-flex';
      if (themeLabel) themeLabel.textContent = 'Day-Mode';
    } else {
      document.body.classList.remove('dark-theme');
      document.documentElement.setAttribute('data-theme', 'light');
      if (themeIconMoon) themeIconMoon.style.display = 'inline-flex';
      if (themeIconSun) themeIconSun.style.display = 'none';
      if (themeLabel) themeLabel.textContent = 'Night-Mode';
    }
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isCurrentlyDark = document.body.classList.contains('dark-theme');
      const nextTheme = !isCurrentlyDark;
      applyTheme(nextTheme);
      localStorage.setItem('djalal_theme', nextTheme ? 'dark' : 'light');
    });
  }

  // =========================================================================
  // VIEW SWITCHER (NUTRIENTS VS. PILLEN-ORGANIZER)
  // =========================================================================
  const viewNavBtns = document.querySelectorAll('.view-nav-btn');
  const viewNutrients = document.getElementById('view-nutrients');
  const viewOrganizer = document.getElementById('view-organizer');
  let currentActiveView = 'nutrients';

  viewNavBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetView = btn.dataset.view;
      if (targetView === currentActiveView) return;

      viewNavBtns.forEach(b => {
        const isActive = b === btn;
        b.classList.toggle('active', isActive);
        b.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });

      currentActiveView = targetView;

      if (targetView === 'nutrients') {
        if (viewNutrients) viewNutrients.style.display = '';
        if (viewOrganizer) viewOrganizer.style.display = 'none';
      } else if (targetView === 'organizer') {
        if (viewNutrients) viewNutrients.style.display = 'none';
        if (viewOrganizer) {
          viewOrganizer.style.display = '';
          renderPillOrganizer();
        }
      }
    });
  });

  // =========================================================================
  // PILLEN-ORGANIZER & WOCHEN-BEFÜLLHILFE LOGIK & RENDERING
  // =========================================================================
  // =========================================================================
  // PILLEN-ORGANIZER (HIGH-END 7-TAGE WOCHEN-BEFÜLLPLAN)
  // =========================================================================
  const DAYS = 7;
  let filledItemsSet = new Set(JSON.parse(localStorage.getItem('djalal_org_filled') || '[]'));

  function renderPillOrganizer() {
    if (!viewOrganizer) return;

    // Filter supplements
    const morningSupps = MY_SUPPLEMENTS.filter(s => s.inOrganizer && (s.compartment === 'morning' || s.compartment === 'both'));
    const eveningSupps = MY_SUPPLEMENTS.filter(s => s.inOrganizer && (s.compartment === 'evening' || s.compartment === 'both'));
    const shakeSupps = MY_SUPPLEMENTS.filter(s => s.id === 'gloryfeel-creatine' || s.id === 'vit4ever-yummy-whey');
    const balanceOilSupp = MY_SUPPLEMENTS.find(s => s.id === 'zinzino-balanceoil');
    const glycinSupp = MY_SUPPLEMENTS.find(s => s.id === 'nutri-plus-glycin');

    // Calculate pill totals
    const morningPillCountDay = morningSupps.reduce((acc, s) => {
      return acc + (s.compartment === 'both' ? (s.pillCountMorning || 1) : (s.pillCount || 1));
    }, 0);

    const eveningPillCountDay = eveningSupps.reduce((acc, s) => {
      return acc + (s.compartment === 'both' ? (s.pillCountEvening || 1) : (s.pillCount || 1));
    }, 0);

    const morningPillCountWeek = morningPillCountDay * DAYS;
    const eveningPillCountWeek = eveningPillCountDay * DAYS;
    const totalWeeklyPills = morningPillCountWeek + eveningPillCountWeek;
    const totalCheckableItems = morningSupps.length + eveningSupps.length;

    function renderRowItem(supp, compartmentType) {
      const uniqueCardKey = `${supp.id}_${compartmentType}`;
      const isFilled = filledItemsSet.has(uniqueCardKey);

      let countPerDay = supp.pillCount || 1;
      if (supp.compartment === 'both') {
        countPerDay = compartmentType === 'morning' ? (supp.pillCountMorning || 1) : (supp.pillCountEvening || 1);
      }

      const weekCount = countPerDay * DAYS;
      let unitStr = supp.pillUnit || 'Kapsel';
      if (weekCount > 1) {
        if (unitStr === 'Kapsel') unitStr = 'Kapseln';
        if (unitStr === 'Tablette') unitStr = 'Tabletten';
        if (unitStr === 'Softgel') unitStr = 'Softgels';
      }

      return `
        <div class="org-row-item ${isFilled ? 'is-filled' : ''}" data-org-id="${uniqueCardKey}">
          <label class="org-row-check" for="chk_${uniqueCardKey}" title="${isFilled ? 'Als offen markieren' : 'Als befüllt abhaken'}">
            <input type="checkbox" 
                   class="org-checkbox" 
                   id="chk_${uniqueCardKey}" 
                   data-key="${uniqueCardKey}" 
                   ${isFilled ? 'checked' : ''}>
            <span class="org-check-circle">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </span>
          </label>

          <div class="org-row-thumb">
            <img src="${supp.image}" alt="${supp.name}" class="org-thumb-img" loading="lazy">
          </div>

          <div class="org-row-details">
            <span class="org-row-brand">${supp.brand}</span>
            <h4 class="org-row-title">${supp.name}</h4>
            <span class="org-row-daily">${countPerDay}x ${supp.pillUnit || 'Kapsel'} täglich ${compartmentType === 'morning' ? 'zum Frühstück' : 'vor dem Schlafen'}</span>
          </div>

          <div class="org-row-right">
            <div class="org-weekly-pill-badge">
              <span class="org-weekly-count">${weekCount}</span>
              <span class="org-weekly-unit">${unitStr}</span>
              <span class="org-weekly-label">/ Woche</span>
            </div>
          </div>
        </div>
      `;
    }

    viewOrganizer.innerHTML = `
      <div class="organizer-view-wrap">
        
        <!-- HEADER OVERVIEW BAR -->
        <div class="organizer-header-card">
          <div>
            <h2 class="organizer-header-title">
              <span>💊</span>
              <span>Wöchentlicher Befüllplan (7 Tage Mo–So)</span>
            </h2>
            <p class="organizer-header-sub">
              Übersichtlicher Leitfaden zum Befüllen deiner 7-Tage-Wochenbox. Exakte Kapselmengen für 1 Woche auf einen Blick.
            </p>
          </div>

          <div class="organizer-header-stats">
            <div class="org-stat-badge">
              <span>Wochenbedarf:</span>
              <strong>${totalWeeklyPills} Kapseln</strong>
            </div>

            <div class="org-stat-badge org-progress-indicator">
              <span>Befüllt:</span>
              <strong>${filledItemsSet.size} / ${totalCheckableItems}</strong>
            </div>

            <button id="org-reset-btn" class="org-action-btn" title="Alle Häkchen zurücksetzen">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path></svg>
              <span>Reset</span>
            </button>

            <button id="org-print-btn" class="org-action-btn" title="Befüllplan drucken">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
              <span>Drucken</span>
            </button>
          </div>
        </div>

        <!-- ==================== 1. FACH 1: MORGENS ==================== -->
        <section class="org-section-card">
          <div class="org-section-header org-header-morning">
            <div class="org-section-title-wrap">
              <span class="org-section-icon">🌅</span>
              <div>
                <h3 class="org-section-title">Fach 1: MORGENS (Block A – Frühstück mit Fettquelle)</h3>
                <p class="org-section-desc">Alle fettlöslichen Vitamine, Kofaktoren & Mikronährstoffe für 7 Tage</p>
              </div>
            </div>
            <div class="org-section-badge" style="color: #b45309;">
              9 Box-Produkte • <strong>${morningPillCountWeek} Kapseln / Woche</strong> (11 / Tag)
            </div>
          </div>

          <div class="org-rows-list">
            ${morningSupps.map(s => renderRowItem(s, 'morning')).join('')}

            <!-- Zinzino BalanceOil Row -->
            ${balanceOilSupp ? `
              <div class="org-row-item org-row-external">
                <div style="width: 26px; height: 26px; display: flex; align-items: center; justify-content: center; color: #0891b2; font-size: 1.1rem;">
                  💧
                </div>
                <div class="org-row-thumb">
                  <img src="${balanceOilSupp.image}" alt="${balanceOilSupp.name}" class="org-thumb-img" loading="lazy">
                </div>
                <div class="org-row-details">
                  <span class="org-row-brand">${balanceOilSupp.brand} (Aus der Flasche)</span>
                  <h4 class="org-row-title">${balanceOilSupp.name}</h4>
                  <span class="org-row-daily">10 ml flüssig täglich zum Frühstück mit Fettquelle einnehmen (nicht in der Box)</span>
                </div>
                <div class="org-row-right">
                  <div class="org-weekly-pill-badge is-external">
                    <span class="org-weekly-count">70</span>
                    <span class="org-weekly-unit">ml</span>
                    <span class="org-weekly-label">/ Woche</span>
                  </div>
                </div>
              </div>
            ` : ''}
          </div>
        </section>

        <!-- ==================== 2. PROTEIN-SHAKE ==================== -->
        <section class="org-section-card">
          <div class="org-section-header org-header-shake">
            <div class="org-section-title-wrap">
              <span class="org-section-icon">🥤</span>
              <div>
                <h3 class="org-section-title">PROTEIN-SHAKE (Nachmittags / Post-Workout)</h3>
                <p class="org-section-desc">Direkt im Shaker frisch zubereiten (zwischen Frühstück und Abend)</p>
              </div>
            </div>
            <div class="org-section-badge" style="color: #0891b2;">
              2 Shake-Zutaten • <strong>Täglich 1 Shaker</strong>
            </div>
          </div>

          <div class="org-rows-list">
            ${shakeSupps.map(supp => `
              <div class="org-row-item org-row-external">
                <div style="width: 26px; height: 26px; display: flex; align-items: center; justify-content: center; color: #0891b2; font-size: 1.1rem;">
                  ⚡
                </div>
                <div class="org-row-thumb">
                  <img src="${supp.image}" alt="${supp.name}" class="org-thumb-img" loading="lazy">
                </div>
                <div class="org-row-details">
                  <span class="org-row-brand">${supp.brand} (Shaker)</span>
                  <h4 class="org-row-title">${supp.name}</h4>
                  <span class="org-row-daily">${supp.dosage} direkt in Wasser oder Pflanzendrink</span>
                </div>
                <div class="org-row-right">
                  <div class="org-weekly-pill-badge is-external">
                    <span class="org-weekly-count">${supp.id === 'gloryfeel-creatine' ? '24' : '210'}</span>
                    <span class="org-weekly-unit">g</span>
                    <span class="org-weekly-label">/ Woche</span>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- ==================== 3. FACH 2: ABENDS ==================== -->
        <section class="org-section-card">
          <div class="org-section-header org-header-evening">
            <div class="org-section-title-wrap">
              <span class="org-section-icon">🌙</span>
              <div>
                <h3 class="org-section-title">Fach 2: ABENDS (Block B – 60 min vor dem Schlafen)</h3>
                <p class="org-section-desc">ZNS-Entspannung, Muskelrelaxation & Tiefschlaf-Architektur für 7 Tage</p>
              </div>
            </div>
            <div class="org-section-badge" style="color: #6d28d9;">
              3 Box-Produkte • <strong>${eveningPillCountWeek} Kapseln / Woche</strong> (6 / Tag)
            </div>
          </div>

          <div class="org-rows-list">
            ${eveningSupps.map(s => renderRowItem(s, 'evening')).join('')}

            <!-- Nutri-Plus Glycin Row -->
            ${glycinSupp ? `
              <div class="org-row-item org-row-external">
                <div style="width: 26px; height: 26px; display: flex; align-items: center; justify-content: center; color: #7c3aed; font-size: 1.1rem;">
                  ✨
                </div>
                <div class="org-row-thumb">
                  <img src="${glycinSupp.image}" alt="${glycinSupp.name}" class="org-thumb-img" loading="lazy">
                </div>
                <div class="org-row-details">
                  <span class="org-row-brand" style="color: #7c3aed;">${glycinSupp.brand} (Im Wasserglas)</span>
                  <h4 class="org-row-title">${glycinSupp.name}</h4>
                  <span class="org-row-daily">5 g (1 Messlöffel) abends 60 min vor dem Schlafen in Wasser einrühren (nicht in der Box)</span>
                </div>
                <div class="org-row-right">
                  <div class="org-weekly-pill-badge" style="background: rgba(139, 92, 246, 0.08); border-color: rgba(139, 92, 246, 0.25);">
                    <span class="org-weekly-count" style="color: #7c3aed;">35</span>
                    <span class="org-weekly-unit">g</span>
                    <span class="org-weekly-label">/ Woche</span>
                  </div>
                </div>
              </div>
            ` : ''}
          </div>
        </section>

      </div>
    `;

    // Attach Checkbox Change Listeners
    const checkboxes = viewOrganizer.querySelectorAll('.org-checkbox');
    checkboxes.forEach(chk => {
      chk.addEventListener('change', (e) => {
        const key = e.target.dataset.key;
        const row = viewOrganizer.querySelector(`.org-row-item[data-org-id="${key}"]`);

        if (e.target.checked) {
          filledItemsSet.add(key);
          if (row) row.classList.add('is-filled');
        } else {
          filledItemsSet.delete(key);
          if (row) row.classList.remove('is-filled');
        }

        localStorage.setItem('djalal_org_filled', JSON.stringify(Array.from(filledItemsSet)));

        // Update progress counter
        const progressEl = viewOrganizer.querySelector('.org-progress-indicator strong');
        if (progressEl) {
          progressEl.textContent = `${filledItemsSet.size} / ${totalCheckableItems}`;
        }
      });
    });

    // Attach Reset Button Listener
    const resetBtn = viewOrganizer.querySelector('#org-reset-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        filledItemsSet.clear();
        localStorage.removeItem('djalal_org_filled');
        renderPillOrganizer();
      });
    }

    // Attach Print Button Listener
    const printBtn = viewOrganizer.querySelector('#org-print-btn');
    if (printBtn) {
      printBtn.addEventListener('click', () => {
        window.print();
      });
    }
  }

  // Initial Theme, render & counts
  initTheme();
  updateFilterCounts();
  renderSupplements();
  renderNutrients();
});
