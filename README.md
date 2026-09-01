# 🌿 Djalals Nährstoffe

Minimalistische, elegante und aufgeräumte Übersicht deiner täglichen Nahrungsergänzungsmittel und Nährstoffe.

## 🚀 Deine tägliche Einnahme-Routine

### 🌅 Block A – Frühstück mit Fettquelle
1. ☀️ **Watson Nutrition – Male Essentials**: 1 Kapsel *(21 Vitamine & Spurenelemente)*
2. ☀️ **VitaMoment – Vitamin D3 + K2**: 1 Kapsel *(5.000 IE D3 + 200 µg K2 MK-7)*
3. 🐟 **Zinzino – BalanceOil+**: 10 ml flüssig *(2.065 mg Omega-3 & Oliven-Polyphenole)*
4. 🔴 **Vitabay – Astaxanthin**: 1 Softgel *(12 mg AstaPure®)*
5. 🔋 **ProFuel / GEN – Coenzym Q10**: 1 Kapsel *(200 mg CoQ10)*
6. 🍊 **VitaMoment – Vitamin C (gepuffert)**: 1 Kapsel *(500 mg Calciumascorbat)*
7. 🧠 **True Nature – Cholin Bitartrat**: 3 Kapseln *(450 mg reines Cholin)*
8. ⚡ **GEN – Acetyl-L-Carnitin (ALCAR)**: 1 Kapsel *(500 mg ALCAR)*
9. 💧 **natural elements – Hyaluronsäure**: 1 Kapsel *(500 mg 500–700 kDa)*
10. 🦴 **Warnke – Calciumcitrat**: 1 Tablette *(300 mg Calcium)*

### 🌙 Block B – Abends, 60 min vor dem Schlafen
1. 🌙 **Sports & Health – Magnesium Bisglycinat**: 3 Kapseln *(400 mg elementares Magnesium)*
2. ✨ **Nutri-Plus – Glycin Pulver**: 5 g *(5.000 mg reines L-Glycin)*
3. ⚡ **ProFuel – Taurin Kapseln**: 2 Kapseln *(2.000 mg Taurin)*
4. 🦴 **Warnke – Calciumcitrat**: 1 Tablette *(300 mg Calcium)*

### ⚡ Protein-Shake & Kreatin (Post-Workout / Nachmittags)
1. ⚡ **Gloryfeel – Kreatin Creapure®**: 1 Messlöffel *(3.000 mg Creapure® direkt im Shake)*
2. 🍋 **Vit4ever – Yummy Whey Protein**: 30 g Pulver *(23 g Protein + 18 Aminosäuren)*

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


