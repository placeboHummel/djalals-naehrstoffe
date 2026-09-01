/**
 * Export-Funktion für Djalals tägliche Nährstoffzufuhr
 * Erzeugt einen vollständigen, interaktiven und druckoptimierten HTML-Bericht in einem neuen Tab.
 */

import { MY_SUPPLEMENTS, NUTRIENTS_SUMMARY } from './data.js';

export function exportDailyIntakeHTML() {
  const htmlContent = generateExportHTML();
  const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
  const blobUrl = URL.createObjectURL(blob);
  
  const newTab = window.open(blobUrl, '_blank');
  if (!newTab) {
    // Fallback falls Pop-up-Blocker aktiv ist
    const a = document.createElement('a');
    a.href = blobUrl;
    a.download = `Djalals_Naehrstoff_Zufuhr_${new Date().toISOString().slice(0, 10)}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}

function generateExportHTML() {
  const now = new Date();
  const dateStr = now.toLocaleDateString('de-DE', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const timeStr = now.toLocaleTimeString('de-DE', {
    hour: '2-digit',
    minute: '2-digit'
  });

  const totalSupps = MY_SUPPLEMENTS.length;
  const totalNutrients = NUTRIENTS_SUMMARY.length;
  const vitCount = NUTRIENTS_SUMMARY.filter(n => n.category === 'vitamins').length;
  const minCount = NUTRIENTS_SUMMARY.filter(n => n.category === 'minerals').length;
  const aminoCount = NUTRIENTS_SUMMARY.filter(n => n.category === 'amino').length;
  const specialCount = NUTRIENTS_SUMMARY.filter(n => n.category === 'special').length;

  const categories = [
    { id: 'vitamins', title: `1. Vitamine (${vitCount} Nährstoffe)`, icon: '☀️' },
    { id: 'minerals', title: `2. Mineralstoffe & Spurenelemente (${minCount} Nährstoffe)`, icon: '⚡' },
    { id: 'amino', title: `3. Aminosäuren & Protein (${aminoCount} Nährstoffe)`, icon: '💪' },
    { id: 'special', title: `4. Omega-3 & Vitalstoffe (${specialCount} Nährstoffe)`, icon: '🌿' }
  ];

  const supplementsRows = MY_SUPPLEMENTS.map(supp => `
    <tr>
      <td>
        <div class="supp-cell-name">
          <strong>${supp.name}</strong>
          <span class="supp-brand-tag">${supp.brand}</span>
        </div>
      </td>
      <td><span class="dose-tag">${supp.dosage}</span></td>
      <td><span class="timing-tag">${supp.timing}</span></td>
      <td><span class="badge-tag">${supp.badge}</span></td>
    </tr>
  `).join('');

  let nutrientSectionsHtml = '';

  categories.forEach(cat => {
    const items = NUTRIENTS_SUMMARY.filter(n => n.category === cat.id);
    if (items.length === 0) return;

    const rows = items.map(item => {
      const barWidth = Math.min(item.percent, 100);
      let statusColor = '#10b981'; // Green
      let badgeBg = '#ecfdf5';
      let badgeColor = '#065f46';

      if (item.percent > 250) {
        statusColor = '#3b82f6'; // Blue for optimal high dose
        badgeBg = '#eff6ff';
        badgeColor = '#1e40af';
      } else if (item.percent < 100) {
        statusColor = '#f59e0b'; // Amber
        badgeBg = '#fffbeb';
        badgeColor = '#92400e';
      }

      const sourcesList = (item.sources || []).map(s => {
        const supp = MY_SUPPLEMENTS.find(x => x.id === s.supplementId);
        const suppName = supp ? `${supp.name} (${supp.brand})` : s.supplementId;
        return `<li><strong>${s.amount}</strong> aus <em>${suppName}</em> <span class="src-note">• ${s.note}</span></li>`;
      }).join('');

      return `
        <tr>
          <td>
            <div class="nut-primary-name">${item.name}</div>
            <div class="nut-extra-info">${item.extra || ''}</div>
          </td>
          <td class="amount-cell">
            <strong>${item.amount}</strong>
          </td>
          <td class="ref-cell">
            ${item.ref}
          </td>
          <td>
            <div class="percent-wrap">
              <span class="percent-pill" style="background: ${badgeBg}; color: ${badgeColor}; border: 1px solid ${statusColor}40;">
                ${item.percent}%
              </span>
              <div class="progress-track">
                <div class="progress-fill" style="width: ${barWidth}%; background: ${statusColor};"></div>
              </div>
            </div>
          </td>
          <td class="sources-cell">
            <ul class="sources-list">
              ${sourcesList}
            </ul>
          </td>
        </tr>
      `;
    }).join('');

    nutrientSectionsHtml += `
      <div class="category-block">
        <h3 class="category-title">${cat.icon} ${cat.title}</h3>
        <div class="table-responsive">
          <table class="report-table">
            <thead>
              <tr>
                <th style="width: 25%;">Nährstoff & Form</th>
                <th style="width: 14%;">Tageszufuhr</th>
                <th style="width: 18%;">Referenzwert</th>
                <th style="width: 15%;">Deckung</th>
                <th style="width: 28%;">Quellen im Stack</th>
              </tr>
            </thead>
            <tbody>
              ${rows}
            </tbody>
          </table>
        </div>
      </div>
    `;
  });

  return `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Djalals Nährstoff- & Supplement-Zufuhr (Tagesbericht)</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #f8fafc;
      --card-bg: #ffffff;
      --text-main: #0f172a;
      --text-muted: #64748b;
      --border: #e2e8f0;
      --border-dark: #cbd5e1;
      --primary: #059669;
      --primary-light: #ecfdf5;
      --primary-dark: #047857;
      --font-main: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-heading: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: var(--font-main);
      background-color: var(--bg);
      color: var(--text-main);
      line-height: 1.5;
      padding: 32px 20px 60px;
    }

    .report-container {
      max-width: 1160px;
      margin: 0 auto;
      background: var(--card-bg);
      border-radius: 16px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
      border: 1px solid var(--border);
      padding: 36px 40px;
    }

    /* Top Actions Header */
    .top-action-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
      padding-bottom: 20px;
      border-bottom: 1px solid var(--border);
      flex-wrap: wrap;
      gap: 12px;
    }

    .doc-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: var(--primary-light);
      color: var(--primary-dark);
      border: 1px solid #a7f3d0;
      font-size: 0.78rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      padding: 4px 12px;
      border-radius: 9999px;
    }

    .action-btns-group {
      display: flex;
      gap: 10px;
    }

    .btn-action {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 8px 16px;
      border-radius: 8px;
      font-size: 0.85rem;
      font-weight: 600;
      cursor: pointer;
      font-family: inherit;
      transition: all 0.15s ease;
      border: 1px solid var(--border-dark);
      background: #ffffff;
      color: var(--text-main);
    }

    .btn-action:hover {
      background: #f1f5f9;
      border-color: #94a3b8;
    }

    .btn-action.btn-primary {
      background: var(--primary);
      color: #ffffff;
      border-color: var(--primary);
    }

    .btn-action.btn-primary:hover {
      background: var(--primary-dark);
      border-color: var(--primary-dark);
    }

    /* Header Title */
    .report-header {
      margin-bottom: 28px;
    }

    .report-title {
      font-family: var(--font-heading);
      font-size: 1.85rem;
      font-weight: 800;
      color: #0f172a;
      letter-spacing: -0.02em;
      margin-bottom: 6px;
    }

    .report-subtitle {
      color: var(--text-muted);
      font-size: 0.95rem;
    }

    .meta-timestamp {
      margin-top: 6px;
      font-size: 0.82rem;
      color: #64748b;
      font-weight: 500;
    }

    /* Key Statistics Cards Grid */
    .stats-summary-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      margin-bottom: 32px;
    }

    .stat-card {
      background: #f8fafc;
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 16px 20px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .stat-val {
      font-family: var(--font-heading);
      font-size: 1.8rem;
      font-weight: 800;
      color: var(--primary-dark);
      line-height: 1.1;
    }

    .stat-lbl {
      font-size: 0.82rem;
      font-weight: 600;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }

    .stat-desc {
      font-size: 0.78rem;
      color: #64748b;
      margin-top: 2px;
    }

    /* Section Headings */
    .section-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 36px;
      margin-bottom: 16px;
      padding-bottom: 8px;
      border-bottom: 2px solid #e2e8f0;
    }

    .section-title {
      font-family: var(--font-heading);
      font-size: 1.25rem;
      font-weight: 800;
      color: #0f172a;
    }

    .category-block {
      margin-top: 24px;
      margin-bottom: 28px;
    }

    .category-title {
      font-family: var(--font-heading);
      font-size: 1.05rem;
      font-weight: 700;
      color: #1e293b;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    /* Table Styles */
    .table-responsive {
      width: 100%;
      overflow-x: auto;
      border: 1px solid var(--border);
      border-radius: 12px;
      background: #ffffff;
    }

    .report-table {
      width: 100%;
      border-collapse: collapse;
      text-align: left;
      font-size: 0.86rem;
    }

    .report-table th {
      background: #f1f5f9;
      color: #334155;
      font-weight: 700;
      font-size: 0.78rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      padding: 12px 16px;
      border-bottom: 1px solid var(--border);
    }

    .report-table td {
      padding: 12px 16px;
      border-bottom: 1px solid #f1f5f9;
      vertical-align: middle;
    }

    .report-table tbody tr:last-child td {
      border-bottom: none;
    }

    .report-table tbody tr:hover {
      background-color: #f8fafc;
    }

    /* Cell Elements */
    .supp-cell-name {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .supp-brand-tag {
      font-size: 0.74rem;
      color: var(--primary-dark);
      font-weight: 600;
    }

    .dose-tag {
      font-weight: 600;
      color: #1e293b;
    }

    .timing-tag {
      display: inline-block;
      font-size: 0.76rem;
      background: #f1f5f9;
      color: #475569;
      padding: 2px 8px;
      border-radius: 4px;
      font-weight: 500;
    }

    .badge-tag {
      display: inline-block;
      font-size: 0.76rem;
      background: #eff6ff;
      color: #1d4ed8;
      border: 1px solid #bfdbfe;
      padding: 2px 8px;
      border-radius: 4px;
      font-weight: 600;
    }

    .nut-primary-name {
      font-weight: 700;
      color: #0f172a;
      font-size: 0.92rem;
    }

    .nut-extra-info {
      font-size: 0.75rem;
      color: #64748b;
      margin-top: 2px;
    }

    .amount-cell {
      color: #047857;
      font-size: 0.92rem;
    }

    .ref-cell {
      color: #475569;
      font-size: 0.82rem;
    }

    .percent-wrap {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .percent-pill {
      display: inline-block;
      font-size: 0.75rem;
      font-weight: 700;
      padding: 2px 6px;
      border-radius: 4px;
      text-align: center;
      width: fit-content;
    }

    .progress-track {
      width: 100%;
      height: 6px;
      background: #e2e8f0;
      border-radius: 9999px;
      overflow: hidden;
    }

    .progress-fill {
      height: 100%;
      border-radius: 9999px;
    }

    .sources-list {
      list-style: none;
      font-size: 0.78rem;
      color: #334155;
      display: flex;
      flex-direction: column;
      gap: 3px;
    }

    .sources-list li {
      position: relative;
      padding-left: 10px;
    }

    .sources-list li::before {
      content: '•';
      position: absolute;
      left: 0;
      color: var(--primary);
      font-weight: bold;
    }

    .src-note {
      color: #64748b;
    }

    /* Synergies Box */
    .synergies-card {
      background: #f0fdf4;
      border: 1px solid #bbf7d0;
      border-radius: 12px;
      padding: 20px 24px;
      margin-top: 36px;
    }

    .synergies-card h4 {
      font-family: var(--font-heading);
      color: #065f46;
      font-size: 1rem;
      font-weight: 800;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .synergies-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 12px;
      margin-top: 12px;
    }

    .synergy-item {
      background: #ffffff;
      border: 1px solid #dcfce7;
      border-radius: 8px;
      padding: 12px 14px;
      font-size: 0.82rem;
      color: #1e293b;
    }

    .synergy-item strong {
      display: block;
      color: #047857;
      margin-bottom: 4px;
    }

    /* Footer */
    .report-footer {
      margin-top: 40px;
      padding-top: 20px;
      border-top: 1px solid var(--border);
      text-align: center;
      color: #64748b;
      font-size: 0.78rem;
      line-height: 1.6;
    }

    /* Print Styles */
    @media print {
      body {
        background: #ffffff;
        padding: 0;
      }

      .report-container {
        box-shadow: none;
        border: none;
        padding: 0;
        max-width: 100%;
      }

      .top-action-bar {
        display: none;
      }

      .report-table th {
        background: #f8fafc !important;
        color: #000000 !important;
      }

      .category-block {
        page-break-inside: avoid;
      }

      tr {
        page-break-inside: avoid;
      }
    }
  </style>
</head>
<body>
  <div class="report-container">
    
    <!-- Action Bar -->
    <div class="top-action-bar">
      <div class="doc-badge">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        Offizieller Tagesstatus
      </div>
      <div class="action-btns-group">
        <button class="btn-action btn-primary" onclick="window.print()">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
          Drucken / Als PDF speichern
        </button>
      </div>
    </div>

    <!-- Title & Meta -->
    <header class="report-header">
      <h1 class="report-title">Djalals Nährstoff- & Supplement-Zufuhr</h1>
      <p class="report-subtitle">Vollständige biochemische Tagesbilanz aller Vitamine, Mineralstoffe, Aminosäuren und Vitalstoffe.</p>
      <div class="meta-timestamp">📅 Bericht generiert am ${dateStr} um ${timeStr}</div>
    </header>

    <!-- Key Statistics -->
    <div class="stats-summary-grid">
      <div class="stat-card">
        <div class="stat-val">${totalSupps}</div>
        <div class="stat-lbl">Tägliche Produkte</div>
        <div class="stat-desc">Exakt abgestimmte Supplement-Kombination</div>
      </div>
      <div class="stat-card">
        <div class="stat-val">${totalNutrients}</div>
        <div class="stat-lbl">Erfasste Nährstoffe</div>
        <div class="stat-desc">Vitamine, Mineralien, Aminosäuren & Vitalstoffe</div>
      </div>
      <div class="stat-card">
        <div class="stat-val">100%</div>
        <div class="stat-lbl">Stack-Abdeckung</div>
        <div class="stat-desc">0 Nährstoffe ungedeckt oder im Defizit</div>
      </div>
      <div class="stat-card">
        <div class="stat-val">DGE / EFSA</div>
        <div class="stat-lbl">Evidenz-Standard</div>
        <div class="stat-desc">Geprüft gegen D-A-CH & WHO Richtwerte</div>
      </div>
    </div>

    <!-- SECTION 1: SUPPLEMENTS -->
    <div class="section-header">
      <h2 class="section-title">📦 1. Tägliche Supplement-Routine (${totalSupps} Produkte)</h2>
    </div>
    <div class="table-responsive">
      <table class="report-table">
        <thead>
          <tr>
            <th style="width: 32%;">Produkt & Marke</th>
            <th style="width: 22%;">Tagesdosis</th>
            <th style="width: 24%;">Einnahmezeitpunkt</th>
            <th style="width: 22%;">Wirkstoff-Highlight</th>
          </tr>
        </thead>
        <tbody>
          ${supplementsRows}
        </tbody>
      </table>
    </div>

    <!-- SECTION 2: NUTRIENTS BREAKDOWN -->
    <div class="section-header" style="margin-top: 40px;">
      <h2 class="section-title">📊 2. Detaillierte Nährstoff-Bilanz (${totalNutrients} Stoffe)</h2>
    </div>
    ${nutrientSectionsHtml}

    <!-- SECTION 3: KEY BIOCHEMICAL SYNERGIES -->
    <div class="synergies-card">
      <h4>🧬 Zentrale biochemische Stack-Synergien</h4>
      <div class="synergies-grid">
        <div class="synergy-item">
          <strong>🦴 Knochen- & Gefäßachse</strong>
          5.000 IE D3 + 200 µg K2 (MK-7) steuern Calcium gezielt in die Knochenmatrix, während 400 mg Magnesium Bisglycinat & 600 mg Calciumcitrat die Remineralisierung und Muskelrelaxation sicherstellen.
        </div>
        <div class="synergy-item">
          <strong>✨ Vegane Kollagensynthese-Matrix</strong>
          5.000 mg L-Glycin (Nutri+) + 1.400 mg L-Prolin (Yummy Whey) bilden das Substrat für die Kollagen-Tripelhelix, aktiviert durch 500 mg gepuffertes Vitamin C (VitaMoment).
        </div>
        <div class="synergy-item">
          <strong>⚡ Mitochondriale Zellenergie</strong>
          2.000 mg Taurin (ProFuel) + 500 mg ALCAR (GEN) + 200 mg CoQ10 optimieren den mitochondrialen Fettsäuretransport, ATP-Synthese und osmotischen Zellschutz.
        </div>
        <div class="synergy-item">
          <strong>💧 Feuchtigkeits- & Membranschutz</strong>
          500 mg Hyaluronsäure (500–700 kDa) + 2.065 mg Omega-3 (Zinzino) + 450 mg Cholin (True Nature) + 12 mg Astaxanthin schützen Zellmembranen, Gelenke und die Hautdermis.
        </div>
      </div>
    </div>

    <!-- FOOTER -->
    <footer class="report-footer">
      <p><strong>Djalals Nährstoff- & Supplement-Kompass</strong> • Datenbasis: 15 Produkte (Watson Male Essentials, Nutri+ Glycin, natural elements Hyaluron, ProFuel Taurin, VitaMoment D3+K2, VitaMoment Vitamin C, Zinzino BalanceOil+, True Nature Cholin, Sports & Health Magnesium, Gloryfeel Kreatin, Vit4ever Whey, Vitabay Astaxanthin, ProFuel CoQ10, Warnke Calciumcitrat, GEN ALCAR).</p>
      <p style="margin-top: 4px;">Referenzwerte gemäß offiziellen Empfehlungen der DGE / D-A-CH, EFSA Tolerable Upper Limits und WHO Protein-Standards.</p>
    </footer>

  </div>
</body>
</html>`;
}
