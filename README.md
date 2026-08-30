# 🌿 Djalals Nährstoffe

Minimalistische, elegante und aufgeräumte Übersicht deiner täglichen Nahrungsergänzungsmittel und Nährstoffe.

## 🚀 Deine 3 täglichen Supplements

1. ☀️ **Watson Nutrition – Male Essentials**: 1 Kapsel morgens zum Frühstück *(21 Vitamine & Spurenelemente)*
2. 🧠 **True Nature – Cholin Bitartrat**: 3 Kapseln morgens / mittags *(450 mg reines Cholin)*
3. 🌙 **Sports & Health – Magnesium Bisglycinat**: 3 Kapseln abends vor dem Schlafen *(400 mg elementares Magnesium)*

---

## 💻 Lokaler Start

Öffne einfach die Datei `index.html` in einem modernen Webbrowser (z. B. Chrome, Safari, Firefox, Edge) oder starte einen lokalen Server:

```bash
# Mit Python:
python3 -m http.server 8088

# Oder mit Node:
npm run dev

# Im Browser aufrufen:
http://localhost:8088
```

---

## ⚡ Cloudflare Pages Deployment

### Methode 1: Über das Terminal mit Wrangler CLI (Empfohlen 🚀)
Führe im Ordner `supplement-tracker/` einfach aus:

```bash
npx wrangler pages deploy . --project-name=djalals-naehrstoffe
```
*Nach wenigen Sekunden erhältst du deine fertige Live-URL wie `https://djalals-naehrstoffe.pages.dev`!*

---

### Methode 2: Über GitHub + Cloudflare Dashboard (Automatische Updates bei jedem Push 🔄)
1. Pushe dein Repository zu GitHub.
2. Gehe im [Cloudflare Dashboard](https://dash.cloudflare.com/) auf **Workers & Pages** ➔ **Create application** ➔ **Pages** ➔ **Connect to Git**.
3. Wähle dein Repository aus.
4. **Build settings**:
   - **Framework preset**: `None`
   - **Build command**: *(leer lassen)*
   - **Build output directory**: `supplement-tracker`
5. Klicke auf **Save and Deploy**.

---

### Methode 3: Direct Upload im Cloudflare Dashboard (Drag & Drop 📦)
1. Gehe im Cloudflare Dashboard auf **Workers & Pages** ➔ **Create application** ➔ **Pages** ➔ **Upload assets**.
2. Gib als Projektnamen `djalals-naehrstoffe` ein.
3. Ziehe einfach den Ordner `supplement-tracker` in das Upload-Feld im Browser und klicke auf **Deploy**.


