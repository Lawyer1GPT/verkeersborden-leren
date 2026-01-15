# 🌐 Remote Toegang - Verkeersborden App

**Datum**: 2026-01-15 03:28 CET
**Doel**: Filip kan app overal gebruiken (niet alleen thuis netwerk)

---

## ✅ OPTIE 1: Ngrok (Snelst - 5 min)

### Installeer ngrok:
```bash
# Download
wget https://bin.equinox.io/c/bNyj1mQVY4c/ngrok-v3-stable-linux-amd64.tgz
tar xvzf ngrok-v3-stable-linux-amd64.tgz -C /usr/local/bin
```

### Start tunnel:
```bash
# Terminal 1: Start app server
cd /home/mpl_llm/Projects/verkeersborden-leren
python3 -m http.server 8080

# Terminal 2: Start ngrok tunnel
ngrok http 8080
```

### Resultaat:
```
Forwarding: https://abc-123-def.ngrok-free.app → http://localhost:8080
```

**Geef aan Filip**: `https://abc-123-def.ngrok-free.app/mobile.html`

**Pro**: Direct remote HTTPS
**Con**: Gratis versie = tijdelijk (max 2 uur sessies)

---

## ✅ OPTIE 2: Router Port Forwarding (15 min)

### Op je router:
1. Login router admin (bijv. 192.168.2.1)
2. Port Forwarding toevoegen:
   - **Extern poort**: 8888
   - **Intern IP**: 192.168.2.71
   - **Intern poort**: 8080
   - **Protocol**: TCP

3. Check je publieke IP:
```bash
curl ifconfig.me
```

**Geef aan Filip**: `http://[JOUW_PUBLIEK_IP]:8888/mobile.html`

**Pro**: Permanent, geen externe tool
**Con**: Security risk (publiek toegankelijk)

---

## ✅ OPTIE 3: SSH Tunnel via Razer (10 min)

Als Razer publiek IP heeft:

### Op DGX1:
```bash
# Start reverse tunnel naar Razer
ssh -R 8080:localhost:8080 marcin@192.168.2.65 -N &
```

### Op Razer (Windows):
Port forwarding vanaf Razer publiek IP

**Pro**: Gebruikt bestaande infrastruktur
**Con**: Razer moet online zijn

---

## 🎯 AANBEVELING

**Voor tijdelijk gebruik**: **OPTIE 1 (Ngrok)**
- Gratis
- HTTPS
- 5 minuten setup

**Voor permanent**: **OPTIE 2 (Router)**
- Altijd beschikbaar
- Geen externe afhankelijkheid

---

## 🚀 QUICK START: LOKAAL (BINNEN NETWERK)

```bash
cd /home/mpl_llm/Projects/verkeersborden-leren
python3 -m http.server 8080 &
```

**Link Filip** (thuis WiFi):
```
http://192.168.2.71:8080/mobile.html
```

---

## 📝 INSTRUCTIES VOOR FILIP

Zie: `VOOR_FILIP.md`

---

**Kies optie en ik help met setup! 🌐**
