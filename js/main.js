import { MY_SUPPLEMENTS, NUTRIENTS_SUMMARY } from './data.js?v=1.8.0';

document.addEventListener('DOMContentLoaded', () => {
  const suppContainer = document.getElementById('supplements-list');
  const nutContainer = document.getElementById('nutrients-list');
  const activeFilterContainer = document.getElementById('active-filter-container');
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
      const suppNutrientsCount = NUTRIENTS_SUMMARY.filter(n => n.supplementIds && n.supplementIds.includes(supp.id)).length;

      return `
        <div class="supp-card ${isSelected ? 'is-selected' : ''}" 
             data-id="${supp.id}" 
             role="button" 
             tabindex="0" 
             aria-pressed="${isSelected}"
             title="${isSelected ? 'Klicken, um Filter aufzuheben' : 'Klicken, um Nährstoffe dieses Supplements zu filtern'}">
          <div class="supp-card-body">
            <div class="supp-img-box">
              <img src="${supp.image}" alt="${supp.name}" class="supp-img" loading="lazy">
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
    }
    renderSupplements();
    renderNutrients();
  }

  // 2. Render Active Filter Banner
  function renderActiveFilterBanner(filteredCount) {
    if (!activeFilterContainer) return;

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

  // 3. Render Nutrients Rows
  function renderNutrients() {
    if (!nutContainer) return;

    const filtered = NUTRIENTS_SUMMARY.filter(item => {
      // Supplement filter
      if (selectedSupplementId) {
        if (!item.supplementIds || !item.supplementIds.includes(selectedSupplementId)) {
          return false;
        }
      }

      // Category filter
      if (currentCategory !== 'all' && item.category !== currentCategory) {
        return false;
      }

      // Search filter
      if (currentSearch) {
        const q = currentSearch.toLowerCase();
        const matchName = item.name.toLowerCase().includes(q);
        const matchExtra = item.extra.toLowerCase().includes(q);
        const matchSource = item.source.toLowerCase().includes(q);
        if (!matchName && !matchExtra && !matchSource) return false;
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
        <div class="${cardClass}">
          <div class="nut-top-row">
            <div class="nut-title-box">
              <span class="nut-name">${item.name}</span>
              <span class="nut-extra">${item.extra}</span>
            </div>
            <span class="${sourceClass}">${item.sourceBrand || item.source}</span>
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
        </div>
      `;
    }).join('');
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
      renderNutrients();
    });
  });

  // Initial render
  renderSupplements();
  renderNutrients();
});
