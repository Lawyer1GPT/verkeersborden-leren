# 💻 VS CODE WORKSPACE - Verkeersborden Leren

**Datum**: 2026-01-15 10:27 CET
**Project**: verkeersborden-leren
**Voor**: Development & aanpassingen

---

## 🚀 OPEN IN VS CODE

```bash
code verkeersborden-leren.code-workspace
```

---

## 📁 PROJECT STRUCTUUR

```
verkeersborden-leren/
├── app.html                          # HOOFDBESTAND (deployed versie)
├── verkeersborden_officieel.json     # 186 borden database
├── logo.png                          # Lewandowski.ai logo (1MB)
├── images/                           # 189 PNG verkeersborden (32MB)
│   ├── A1.png, A2.png, ...
│   ├── C1.png, C2.png, ...
│   └── J38.png, ...
├── .vscode/settings.json             # VS Code configuratie
└── verkeersborden-leren.code-workspace
```

---

## 🎯 BELANGRIJKSTE BESTANDEN

### **app.html** - Main application
- Dark theme (default)
- Light/Dark toggle
- 186 verkeersborden met foto's
- Quiz mode (15 vragen)
- Browse mode
- Hover tooltips

### **verkeersborden_officieel.json** - Data
- 186 borden
- Exacte RVV 1990 beschrijvingen
- Georganiseerd per hoofdstuk (A-L)

### **images/** - Officiële PNG's
- 189 bestanden
- Van wetten.overheid.nl
- Public domain

---

## 🔧 QUICK EDITS

### Logo aanpassen:
```html
Regel 576: <img src="logo.png" ...>
```
Vervang `logo.png` met ander bestand

### Kleuren aanpassen:
```css
Regel 16: background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
```
Wijzig gradient kleuren

### Foto grootte aanpassen:
```css
Regel 331-334: .sign-image { max-width: 78px; ...}
```
Wijzig max-width/height

---

## 🌐 DEPLOYMENT

**GitHub**: Automatisch via `git push`
**Live URL**: https://lawyer1gpt.github.io/verkeersborden-leren/app.html

### Deploy nieuwe versie:
```bash
git add app.html
git commit -m "beschrijving wijziging"
git push
```

Wacht 1-2 min → Live!

---

## 📊 DATA BRONNEN

**Officiële RVV 1990**:
- `/home/mpl_llm/Public/exchange-folder/from-razer/RVV_1990_2026-01-01.txt`
- `/home/mpl_llm/Public/exchange-folder/from-razer/RVV_1990_2026-01-01.xml`
- `/home/mpl_llm/Public/exchange-folder/from-razer/RVV_1990_2026-01-01.pdf`

**Bijlage 1 extract**:
- `bijlage1_extract.txt` (regel 1347-2174 uit RVV)

**Image mapping**:
- `complete_image_map.txt` (189 bord codes → image numbers)

---

## 🔍 HUIDIGE ISSUES

### Foto scaling:
- Container: 200px hoog
- Foto: 78px (40% reductie van origineel 130px)
- Padding: 20px
- **Als te klein**: Verhoog max-width/max-height in regel 331-332

### Logo:
- Huidige: `logo.png` (1MB, ChatGPT neon versie)
- Alternatieven in project folder:
  - `logo_crt_bicolor_dark_v2.png` (43KB)
  - `logo_crt_green_solid.png` (53KB)

---

## 🎮 QUIZ UITBREIDEN

**Huidige quiz**: 15 vragen (8 borden + 7 verkeersregels)

**Uitbreiden**:
1. Edit regel ~1100-1200 (quiz questions array)
2. Voeg meer questions toe met RVV artikelen
3. Test in browser

---

## ✅ GIT STATUS

**Branch**: master
**Remote**: https://github.com/Lawyer1GPT/verkeersborden-leren
**Commits**: 20+
**Last**: "fix: A1 rode rand zichtbaar (78px + padding)"

---

## 🛠️ VS CODE EXTENSIONS

Aanbevolen:
- Live Server (voor local testing)
- Prettier (voor formatting)
- HTML CSS Support

---

**Open workspace en werk verder! 💻**
