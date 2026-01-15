# 🌐 Tailscale - Remote Toegang Filip

**Datum**: 2026-01-15 03:30 CET
**Beste optie**: Veilig, simpel, altijd bereikbaar

---

## ✅ WAAROM TAILSCALE?

- ✅ **Veilig**: Encrypted VPN
- ✅ **Simpel**: Zero-config
- ✅ **Altijd**: Werkt overal (WiFi, 4G, 5G)
- ✅ **Gratis**: Voor persoonlijk gebruik
- ✅ **Geen port forwarding** nodig

---

## 🚀 SETUP (EENMALIG)

### 1. **Op DGX1** (als niet al actief):

```bash
# Check of tailscale actief is
tailscale status

# Zo niet, installeer:
curl -fsSL https://tailscale.com/install.sh | sh
sudo tailscale up
```

### 2. **Op Filip's iPhone**:

1. Download **Tailscale app** van App Store (gratis)
2. Open app
3. Log in met Google/Microsoft/Apple account (zelfde als Marcin)
4. Klaar!

### 3. **Start verkeersborden server**:

```bash
cd /home/mpl_llm/Projects/verkeersborden-leren
python3 -m http.server 8080 &
```

---

## 📱 VOOR FILIP

### **Tailscale IP van DGX1**:

Als tailscale actief is, krijg je IP zoals:
```
100.x.x.x
```

### **Link voor Filip**:

```
http://100.x.x.x:8080/mobile.html
```

*(vervang 100.x.x.x met echte tailscale IP van DGX1)*

---

## 🎯 HOE HET WERKT

1. **Marcin** en **Filip** beide in **Tailscale netwerk**
2. Filip's iPhone kan DGX1 bereiken alsof in hetzelfde WiFi
3. Werkt overal:
   - Thuis
   - School
   - Op vakantie
   - Met 4G/5G

---

## ⚡ SNEL COMMANDO

### Get Tailscale IP:
```bash
tailscale ip -4
```

### Volledige link:
```bash
echo "http://$(tailscale ip -4):8080/mobile.html"
```

Copy-paste deze link naar Filip via WhatsApp/Signal!

---

## ✅ VOORDELEN

| Aspect | Ngrok | Router Forward | Tailscale |
|--------|-------|----------------|-----------|
| **Veiligheid** | Medium | Laag | ✅ Hoog |
| **Setup** | 5 min | 15 min | ✅ 5 min |
| **Permanent** | ❌ Nee | ✅ Ja | ✅ Ja |
| **HTTPS** | ✅ Ja | ❌ Nee | HTTP (encrypted VPN) |
| **Kosten** | Gratis (beperkt) | Gratis | ✅ Gratis |
| **Werkt overal** | ✅ Ja | ✅ Ja | ✅ Ja |

**Winner**: **TAILSCALE** 🏆

---

## 📝 VOOR MARCIN

### **Check tailscale status**:
```bash
tailscale status
```

### **Get IP voor Filip**:
```bash
tailscale ip -4
```

### **Start app server**:
```bash
cd /home/mpl_llm/Projects/verkeersborden-leren
python3 -m http.server 8080 &
```

### **Geef aan Filip**:
```
http://[TAILSCALE_IP]:8080/mobile.html
```

---

**Simpelste en veiligste oplossing! 🔒**
