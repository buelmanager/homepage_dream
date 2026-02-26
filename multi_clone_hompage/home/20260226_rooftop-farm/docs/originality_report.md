# Originality Report — VERT Rooftop Farm

## Summary

All HTML, CSS, and JavaScript in this template was written from scratch. No framework boilerplate, no templates lifted from existing sources, no code copied from reference websites.

## Originality Assessment

### HTML Structure
- **Originality**: 100% original
- Custom semantic structure for each of 5 pages
- No Bootstrap, Foundation, or CSS framework HTML patterns
- Section naming and hierarchy designed for this specific brand narrative

### CSS Design System
- **Originality**: 100% original
- Custom CSS custom properties (design tokens) from scratch
- All layout, grid, and component styles hand-written
- Animation keyframes (`seedPulse`, `growStem`, `leafL`, `leafR`, `scrollDown`, `blink`) are original
- Navbar glass-blur scroll behavior: original implementation

### JavaScript / GSAP Usage
- **Originality**: Uses GSAP library (open-source) with wholly original animation sequences
- All ScrollTrigger configurations written for this page's layout
- Preloader logic and timing: original
- Form submission handler: original

### Brand, Copy & Concept
- **Originality**: 100% original
- "VERT" brand name invented for this template
- All copy (menu items, team bios, growing zone descriptions, manifesto) authored original
- Price points (€195, €295, €380, €45) original
- Team member names (Élise Fontaine, Dr. Karim Nassar, Chef Margaux Vidal, Thomas Roux): fictional original characters

### Design Concept
- Inspired by (not copied from): Noma, Mirazur, Azurmendi visual language
- Fresh green (#60CC40) + harvest gold (#F0D060) on deep forest (#101E12): original palette
- Sprouting seed preloader: original concept and implementation
- Altitude badge in hero: original UI element

## External Resources Used

| Resource | Type | License |
|----------|------|---------|
| GSAP 3.12.5 | JavaScript library | GSAP Standard License (free for non-commercial) |
| ScrollTrigger plugin | GSAP plugin | Included with GSAP |
| Fraunces (Google Fonts) | Typeface | Open Font License |
| Inter (Google Fonts) | Typeface | Open Font License |
| Unsplash images | Photography | Unsplash License (free commercial use) |

## Unsplash Image Attribution

Images used under Unsplash License (free for commercial use, no attribution required but listed for transparency):

| Unsplash ID | Subject | Used In |
|-------------|---------|---------|
| 1416879595882-3373a0480b5b | Rooftop garden | index hero, thumbnail |
| 1524504388940-b1c1722653e1 | Garden aerial | about hero |
| 1529958030586-3aae4ca485ff | Urban farm beds | farm hero |
| 1466978913421-dad2ebd01d17 | Restaurant/chef | restaurant hero, index |
| 1527150122806-f682d2fd8b09 | Growing beds | index farm, about |
| 1512327536842-5aa37d1ba3e3 | Farm techniques | farm methods, about team |
| 1558769132-cb1aea458c5e | Wine | restaurant wine |
| 1528360983277-13d401cdc186 | Beehives | farm apiary |
| 1600607687939-ce8a6c25118c | Paris rooftop | index experience, about location |
| 1558618666-fcd25c85cd64 | Green garden | contact hero |
| 1553361371-9b22f78e8b1d | Farm tour | farm tour CTA |
| 1509631179647-0177331693ae | Person (team) | about team card 1 |

## Dark Section Check

All section backgrounds verified against DARK_THRESHOLD = 15 (avg RGB ≥ 15):

| Color | Hex | R | G | B | Avg | Status |
|-------|-----|---|---|---|-----|--------|
| --bg | #101E12 | 16 | 30 | 18 | 21.3 | PASS |
| --surface | #162618 | 22 | 38 | 24 | 28.0 | PASS |
| --accent | #60CC40 | 96 | 204 | 64 | 121.3 | PASS |

No section uses a hardcoded background darker than --bg. Footer uses `background: var(--bg)`. All overlays are semi-transparent (rgba), not solid dark hex.
