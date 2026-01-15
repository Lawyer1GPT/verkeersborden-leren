# 🧪 TESTEN VANAF RAZER

**Datum**: 2026-01-15 03:31 CET
**Voor**: Marcin - Test vanaf Razer machine

---

## ⚡ SNELLE TEST (1 minuut)

### **Optie 1: Via Tailscale (Direct)**

**Op Razer (Windows browser)**:

1. Open **Chrome** of **Edge**

2. Type:
   ```
   http://100.96.188.90:8888/mobile.html
   ```

3. **App moet laden** - check:
   - ✅ 35 borden zichtbaar
   - ✅ Zoeken werkt
   - ✅ Filters werken
   - ✅ Tik op J38 → detail view

**Klaar!** ✅

---

### **Optie 2: Via WSL2 (Command line check)**

**Op Razer (WSL2 terminal)**:

```bash
# Check of DGX1 bereikbaar is
curl -I http://100.96.188.90:8888/mobile.html

# Moet tonen:
# HTTP/1.0 200 OK
```

---

### **Optie 3: Via SSH + Port Forward**

**Op Razer (WSL2)**:

```bash
# SSH naar DGX1
ssh mpl_llm@100.96.188.90

# Check of server draait
ps aux | grep "http.server 8888"

# Test lokaal
curl -s http://localhost:8888/mobile.html | head -5
```

---

## ✅ VERWACHT RESULTAAT

**Browser toont**:
- Header: "🚦 Verkeersborden NL"
- Zoekbalk
- Filter knoppen (Alle, Snelheid, Waarschuwing, etc.)
- Borden lijst gegroepeerd per categorie

**Bij klik op J38**:
- Modal opent
- Toont: "J38 - Verkeersdrempel"
- Betekenis + wettelijke basis (RVV 1990)

---

## 🔍 TROUBLESHOOTING

### App laadt niet?

**Check 1: Server draait?**
```bash
ssh mpl_llm@100.96.188.90 "ps aux | grep http.server"
```

**Check 2: Tailscale verbinding?**
```bash
tailscale status | grep spark-d12f
```
Moet tonen: "100.96.188.90   spark-d12f"

**Check 3: Poort bereikbaar?**
```bash
curl -I http://100.96.188.90:8888
```
Moet tonen: "HTTP/1.0 200 OK"

---

## 🐛 ALS NIET WERKT

### **Fix 1: Herstart server**
```bash
ssh mpl_llm@100.96.188.90
pkill -f http.server
cd /home/mpl_llm/Projects/verkeersborden-leren
python3 -m http.server 8888 &
```

### **Fix 2: Check firewall**
```bash
ssh mpl_llm@100.96.188.90
sudo ufw status
# Moet poort 8888 toestaan
```

### **Fix 3: Tailscale restart**
```bash
tailscale down
tailscale up
```

---

## ✅ QUICK TEST COMMANDO

**Op Razer (Windows browser)**:

Gewoon open:
```
http://100.96.188.90:8888/mobile.html
```

**Moet werken direct!**

---

## 📱 MOBIEL TESTEN (Razer telefoon)

Als je Tailscale op je Android/iPhone hebt:

1. Open Tailscale app
2. Zorg dat connected
3. Open browser
4. Type: `http://100.96.188.90:8888/mobile.html`

---

**Simpel: Open link in browser - klaar! 🚦**
