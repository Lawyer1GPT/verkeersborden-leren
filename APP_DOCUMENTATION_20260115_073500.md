# Verkeersborden Leren App - Complete Documentation

**Created**: 2026-01-15 07:35 CET
**Location**: `/home/mpl_llm/Projects/verkeersborden-leren/app.html`
**Data Source**: Official RVV 1990 (Reglement verkeersregels en verkeerstekens 1990)

---

## Overview

A comprehensive, mobile-friendly web application for learning Dutch traffic signs using **official RVV 1990 images** and **exact official descriptions**.

### Key Features

1. **Official Content**
   - 186 traffic signs from RVV 1990 Bijlage 1
   - 18 official PNG images from wetten.overheid.nl
   - Exact official descriptions (no rewrites)

2. **Browse Mode**
   - Visual grid display of all signs
   - Real-time search functionality
   - Category filters (A-L chapters)
   - Responsive card layout

3. **Quiz Mode**
   - 10 random questions per quiz
   - Multiple choice (4 options)
   - Only uses signs with official images
   - Score tracking and results

4. **Mobile Optimized**
   - Responsive design for iPhone/iPad
   - Touch-friendly interface
   - No pinch-zoom needed
   - Smooth animations

---

## Technical Implementation

### Data Sources

1. **Official Descriptions**: `bijlage1_extract.txt`
   - Parsed 186 traffic signs
   - Organized by chapters (A through L)
   - Stored in: `verkeersborden_officieel.json`

2. **Official Images**: `image_urls.txt`
   - 18 official PNG images from wetten.overheid.nl
   - Direct links to government website
   - Embedded in application code

### Architecture

```
app.html (Single Page Application)
├── HTML Structure
│   ├── Header (title, subtitle)
│   ├── Controls (search, filters, mode switcher)
│   ├── Browse Mode (grid of sign cards)
│   └── Quiz Mode (question/answer interface)
├── CSS Styling
│   ├── Gradient background
│   ├── Card-based layout
│   ├── Responsive breakpoints
│   └── Smooth animations
└── JavaScript Logic
    ├── Data loading (JSON fetch)
    ├── Search & filter functions
    ├── Browse mode renderer
    └── Quiz engine
```

### Image Mapping

The app includes 18 official images mapped by code:

| Category | Codes | Count |
|----------|-------|-------|
| A. Snelheid | A1, A2, A3, A4, A5 | 5 |
| E. Parkeren | E1, E2, E9, E10, E11, E12 | 6 |
| J. Waarschuwing | J16, J17, J21, J22, J38 | 5 |
| L. Informatie | L1, L2 | 2 |

**Total**: 18/186 signs with images (9.7%)

---

## Features Breakdown

### 1. Search Functionality

```javascript
// Real-time search across:
- Sign codes (A1, B3, etc.)
- Descriptions (parkeren, snelheid)
- Categories (hoofdstuk)
```

**Example Searches**:
- "A1" → Shows A1 (Maximumsnelheid)
- "parkeren" → Shows all parking-related signs
- "voorrang" → Shows all priority signs

### 2. Category Filters

Dynamic filter buttons for all 11 RVV chapters:

- **A. Snelheid** (5 signs)
- **B. Voorrang** (7 signs)
- **C. Geslotenverklaring** (27 signs)
- **D. Rijrichting** (7 signs)
- **E. Parkeren en stilstaan** (13 signs)
- **F. Overige geboden en verboden** (22 signs)
- **G. Verkeersregels** (14 signs)
- **H. Bebouwde kom** (2 signs)
- **J. Waarschuwing** (39 signs)
- **K. Bewegwijzering** (14 signs)
- **L. Informatie** (21 signs)

### 3. Browse Mode

**Visual Card Layout**:
```
┌─────────────────────┐
│   [Sign Image]      │
│                     │
│   A1                │  ← Code badge
│   Maximumsnelheid   │  ← Official description
│   A. SNELHEID       │  ← Category
└─────────────────────┘
```

**Features**:
- Hover effects for desktop
- Tap-friendly for mobile
- Automatic image fallback
- Smooth scrolling

### 4. Quiz Mode

**Question Flow**:
1. Shows official traffic sign image
2. Presents 4 multiple choice options
3. Highlights correct answer (green)
4. Shows incorrect selection (red)
5. Tracks score dynamically
6. Displays final results

**Scoring System**:
- 90-100%: "Uitstekend! Je kent de verkeersborden zeer goed!"
- 70-89%: "Goed gedaan! Je bent goed op weg!"
- 50-69%: "Niet slecht, maar er is ruimte voor verbetering."
- 0-49%: "Blijf oefenen! Je kunt het!"

---

## Usage Instructions

### For Local Development (DGX1)

1. **Navigate to project directory**:
   ```bash
   cd /home/mpl_llm/Projects/verkeersborden-leren
   ```

2. **Start local server**:
   ```bash
   python3 -m http.server 8080
   ```

3. **Access in browser**:
   ```
   http://192.168.2.71:8080/app.html
   ```

### For Remote Access (Filip's iPhone/iPad)

**Option 1: Direct Network Access**
```
http://192.168.2.71:8080/app.html
```
*(Requires same network)*

**Option 2: Tailscale Access**
```
http://spark-d12f:8080/app.html
```
*(Requires Tailscale setup - see TAILSCALE_SETUP.md)*

**Option 3: SSH Tunnel**
```bash
# On Filip's device
ssh -L 8080:localhost:8080 mpl_llm@192.168.2.71
# Then open: http://localhost:8080/app.html
```

### For Production Deployment

1. **Copy files to web server**:
   ```bash
   scp app.html verkeersborden_officieel.json user@server:/var/www/html/
   ```

2. **Configure web server** (Apache/Nginx)

3. **Enable CORS** for wetten.overheid.nl images

---

## Mobile Optimization

### iPhone/iPad Specific Features

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
```

**Responsive Breakpoints**:
- Desktop: 3-4 cards per row
- Tablet: 2-3 cards per row
- Mobile: 2 cards per row

**Touch Optimizations**:
- Large tap targets (minimum 44px)
- No hover effects on mobile
- Smooth scroll behavior
- Native-like animations

---

## File Dependencies

The app requires these files in the same directory:

```
verkeersborden-leren/
├── app.html                          ← Main application
├── verkeersborden_officieel.json     ← Sign database (REQUIRED)
├── bijlage1_extract.txt              ← Source data (reference)
└── image_urls.txt                    ← Image mapping (reference)
```

---

## Data Structure

### JSON Format (verkeersborden_officieel.json)

```json
{
  "metadata": {
    "bron": "Reglement verkeersregels en verkeerstekens 1990 (RVV 1990)",
    "datum": "2026-01-01",
    "bijlage": "Bijlage 1. Verkeersborden",
    "totaal_aantal": 186
  },
  "borden": [
    {
      "code": "A1",
      "omschrijving": "Maximumsnelheid",
      "hoofdstuk": "A. Snelheid"
    }
  ]
}
```

### Image URL Pattern

```
https://wetten.overheid.nl/afbeelding?toestandid=BWBR0004825/2026-01-01_0&naam=[IMAGE_ID].png
```

**Parameters**:
- `toestandid`: RVV 1990 regulation ID + date
- `naam`: Unique image identifier (e.g., 269359.png)

---

## Known Limitations

1. **Limited Images**: Only 18/186 signs have official images
   - Quiz mode only uses signs with images
   - Browse mode shows "Afbeelding niet beschikbaar" for others

2. **External Image Dependencies**:
   - Images loaded from wetten.overheid.nl
   - Requires internet connection
   - Subject to government website availability

3. **Browser Compatibility**:
   - Modern browsers only (ES6+)
   - No IE11 support
   - Requires JavaScript enabled

---

## Future Enhancements

### Recommended Improvements

1. **More Official Images**
   - Extract all 186 images from wetten.overheid.nl
   - Update image_urls.txt mapping
   - Enhance quiz with full coverage

2. **Offline Support**
   - Download images locally
   - Service Worker for PWA
   - Cache JSON data

3. **Additional Features**
   - Progress tracking (localStorage)
   - Custom quiz settings (difficulty, length)
   - Print-friendly flashcards
   - Category-specific quizzes

4. **Accessibility**
   - ARIA labels for screen readers
   - Keyboard navigation
   - High contrast mode

---

## Troubleshooting

### Common Issues

**Problem**: Images not loading
- **Solution**: Check internet connection
- **Check**: Open image URL directly in browser
- **Verify**: CORS policy allows cross-origin images

**Problem**: Search not working
- **Solution**: Ensure JavaScript is enabled
- **Check**: Browser console for errors

**Problem**: Quiz shows "not enough signs"
- **Solution**: Verify JSON file is accessible
- **Check**: At least 4 signs have imageUrl property

**Problem**: Mobile layout broken
- **Solution**: Clear browser cache
- **Check**: Viewport meta tag is present

---

## Testing Checklist

### Desktop Testing
- [ ] Browse mode loads all signs
- [ ] Search filters correctly
- [ ] Category filters work
- [ ] Images display properly
- [ ] Quiz mode completes full cycle
- [ ] Score tracking accurate

### Mobile Testing (iPhone/iPad)
- [ ] Responsive layout adapts
- [ ] Touch interactions smooth
- [ ] No horizontal scrolling
- [ ] Quiz buttons accessible
- [ ] Images load on cellular/WiFi

### Cross-Browser Testing
- [ ] Chrome/Edge (Chromium)
- [ ] Safari (iOS/macOS)
- [ ] Firefox

---

## License & Attribution

**Data Source**: Reglement verkeersregels en verkeerstekens 1990 (RVV 1990)
**Image Source**: wetten.overheid.nl (Dutch Government)
**Official Reference**: BWBR0004825 - Bijlage 1

**Legal Notice**: This application uses official Dutch traffic sign data and images from government sources for educational purposes. All traffic sign designs and descriptions are property of the Dutch government.

---

## Support & Contact

**Project Location**: `/home/mpl_llm/Projects/verkeersborden-leren/`
**Primary User**: Filip (iPhone/iPad)
**System**: DGX1 (spark-d12f) @ 192.168.2.71

**Related Documentation**:
- `README_FINAL.md` - Project overview
- `SETUP_FILIP_IPHONE.md` - Mobile access instructions
- `TAILSCALE_SETUP.md` - Remote access configuration

---

## Version History

**v1.0** (2026-01-15 07:35 CET)
- Initial release
- 186 official RVV signs
- 18 official images
- Browse and Quiz modes
- Full mobile support
- Search and filter functionality

---

**End of Documentation**
