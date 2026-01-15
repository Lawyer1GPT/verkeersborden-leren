# Quick Start: Verkeersborden Leren App

**Date**: 2026-01-15 07:35 CET
**New App**: `/home/mpl_llm/Projects/verkeersborden-leren/app.html`

---

## What's New?

Complete verkeersborden learning app with:
- **Official RVV 1990** traffic sign images from wetten.overheid.nl
- **186 signs** with exact official descriptions
- **18 real images** (not emojis!)
- **Quiz mode** with 10 random questions
- **Mobile-optimized** for iPhone/iPad

---

## Start the App (3 Steps)

### 1. Start Server on DGX1

```bash
cd /home/mpl_llm/Projects/verkeersborden-leren
python3 -m http.server 8080
```

### 2. Access on iPhone/iPad

**On same WiFi network**:
```
http://192.168.2.71:8080/app.html
```

**Via Tailscale**:
```
http://spark-d12f:8080/app.html
```

### 3. Use the App

**Browse Mode** (default):
- Scroll through all 186 signs
- Search by code or description
- Filter by category (A-L)

**Quiz Mode**:
- Tap "Quiz" button
- Answer 10 questions
- Get instant feedback
- See your score

---

## Features Overview

### Browse Mode
- **Visual cards** with official images
- **Real-time search**: Type "parkeren", "A1", "snelheid"
- **Category filters**: Click chapter buttons (A-L)
- **Statistics**: Shows total and filtered sign counts

### Quiz Mode
- **10 random questions** per quiz
- **4 multiple choice options**
- **Instant feedback**: Green = correct, Red = wrong
- **Score tracking**: See results at the end
- **Restart anytime**: Practice unlimited times

---

## Example Usage

### Search Examples
1. Type **"A1"** → Shows Maximumsnelheid sign
2. Type **"parkeren"** → Shows all parking signs
3. Type **"voorrang"** → Shows priority signs

### Category Filter Examples
1. Click **"A. Snelheid"** → Shows 5 speed limit signs
2. Click **"J. Waarschuwing"** → Shows 39 warning signs
3. Click **"Alle"** → Shows all 186 signs

### Quiz Flow
1. Tap **"Quiz"** button
2. See traffic sign image
3. Choose correct description
4. Tap **"Volgende"** for next question
5. See final score after 10 questions
6. Tap **"Opnieuw Starten"** to retry

---

## Mobile Tips

- **Full screen**: Add to home screen on iPhone
- **No zoom needed**: App auto-sizes to screen
- **Smooth scrolling**: Native-like feel
- **Touch-friendly**: Large buttons and cards

---

## Troubleshooting

**Images not showing?**
- Check internet connection (images from wetten.overheid.nl)
- Wait a few seconds for loading

**Can't access on iPhone?**
- Ensure iPhone on same WiFi as DGX1
- Check IP address: `192.168.2.71:8080`
- Try Tailscale if direct access fails

**Quiz says "not enough signs"?**
- Ensure `verkeersborden_officieel.json` is in same folder
- Check server is running (`python3 -m http.server 8080`)

---

## Files Location

All files in: `/home/mpl_llm/Projects/verkeersborden-leren/`

**Main files**:
- `app.html` ← **NEW APP** (open this!)
- `verkeersborden_officieel.json` ← Database (186 signs)
- `APP_DOCUMENTATION_20260115_073500.md` ← Full docs

---

## What Makes This Official?

1. **Data source**: RVV 1990 Bijlage 1 (official regulation)
2. **Images**: Direct from wetten.overheid.nl (government site)
3. **Descriptions**: Exact official text (no rewrites)
4. **Date**: Valid for 2026-01-01 version

---

## Next Steps

1. **Test on DGX1 browser** first
2. **Test on iPhone** via network access
3. **Practice quiz mode** to learn signs
4. **Give feedback** for improvements

---

**Ready to learn verkeersborden!**
