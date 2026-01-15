# 🔐 SSH Protected Access - Voor Razer/Marcin

**Datum**: 2026-01-15 03:30 CET
**Doel**: SSH tunnel voor veilige remote toegang

---

## 🎯 WAAROM SSH TUNNEL?

- ✅ Extra beveiliging (encrypted)
- ✅ Password/key protected
- ✅ Geen public exposure
- ✅ Werkt via Tailscale

---

## 🚀 OPTIE 1: Via Tailscale (Simpelst)

### Op Razer (Windows - WSL2):

```bash
# SSH naar DGX1 via Tailscale
ssh mpl_llm@100.96.188.90

# OF via hostname
ssh mpl_llm@spark-d12f
```

### Dan op DGX1:
```bash
cd /home/mpl_llm/Projects/verkeersborden-leren
python3 -m http.server 8888
```

### Link voor Filip:
```
http://100.96.188.90:8888/mobile.html
```

---

## 🚀 OPTIE 2: SSH Port Forward (Veiliger)

### Op Razer:

```bash
# Forward port 8888 van DGX1 naar lokaal
ssh -L 8080:localhost:8888 mpl_llm@100.96.188.90

# Nu op Razer toegankelijk via:
http://localhost:8080/mobile.html
```

### Voor Filip:
- Razer deelt via Tailscale
- Of: Razer port forwarding setup

---

## 🚀 OPTIE 3: Reverse SSH Tunnel

### Van DGX1 naar Razer:

```bash
# Op DGX1
ssh -R 8080:localhost:8888 marcin@100.104.69.125 -N &
```

Nu bereikbaar op Razer via:
```
http://localhost:8080/mobile.html
```

---

## 🎯 AANBEVELING VOOR FILIP

**Simpelste**:
1. Filip installeert Tailscale (iPhone + laptop)
2. Marcin voegt Filip toe aan netwerk
3. Filip gebruikt direct: `http://100.96.188.90:8888/mobile.html`

**Geen SSH nodig voor Filip** - alleen Tailscale!

---

## 📋 HUIDIGE STATUS

**Tailscale actief**:
- DGX1: 100.96.188.90 ✅
- Razer: 100.104.69.125 ✅

**Server**:
- Poort: 8888
- Locatie: /home/mpl_llm/Projects/verkeersborden-leren

**Link Filip**:
```
http://100.96.188.90:8888/mobile.html
```

---

**SSH alleen nodig voor admin/debug - Filip gebruikt Tailscale direct! 🔒**
