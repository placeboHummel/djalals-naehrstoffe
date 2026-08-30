import { MY_SUPPLEMENTS, NUTRIENTS_SUMMARY } from './data.js?v=1.6.0';

document.addEventListener('DOMContentLoaded', () => {
  const suppContainer = document.getElementById('supplements-list');
  const nutContainer = document.getElementById('nutrients-list');
  const searchInput = document.getElementById('search-input');
  const filterPills = document.querySelectorAll('.filter-pill');

  let currentCategory = 'all';
  let currentSearch = '';

  // 1. Render Supplements Cards
  function renderSupplements() {
    if (!suppContainer) return;
    suppContainer.innerHTML = MY_SUPPLEMENTS.map(supp => `
      <div class="supp-card">
        <div class="supp-card-body">
          <div class="supp-img-box">
            <img src="${supp.image}" alt="${supp.name}" class="supp-img" loading="lazy">
          </div>
          <div class="supp-details">
            <div class="supp-card-top">
              <span class="supp-brand">${supp.brand}</span>
              <span class="supp-timing-badge">${supp.timing}</span>
            </div>
            <h3 class="supp-title">${supp.url ? `<a href="${supp.url}" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none;">${supp.name} ↗</a>` : supp.name}</h3>
          </div>
        </div>
        <div class="supp-dose-box">
          <span class="supp-dose-val">${supp.dosage}</span>
          <span class="supp-badge">${supp.badge}</span>
        </div>
      </div>
    `).join('');
  }

  // 2. Render Nutrients Rows
  function renderNutrients() {
    if (!nutContainer) return;

    const filtered = NUTRIENTS_SUMMARY.filter(item => {
      // Category filter
      if (currentCategory !== 'all') {
        if (currentCategory === 'vegan-critical') {
          if (!item.isVeganCritical) return false;
        } else if (item.category !== currentCategory) {
          return false;
        }
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

    if (filtered.length === 0) {
      nutContainer.innerHTML = `<div class="empty-msg">Keine Nährstoffe für "${currentSearch}" gefunden.</div>`;
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
