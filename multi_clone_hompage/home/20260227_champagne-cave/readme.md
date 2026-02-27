# MAISON ÉCLAT — Champagne Cave Luxury Website

**Slug:** `20260227_champagne-cave`
**Status:** PUBLISHED
**Tier:** Free
**Industry:** Wine & Champagne
**Style:** Luxury / French Elegance

---

## Overview

A complete multi-page luxury website for MAISON ÉCLAT, a prestige champagne cave and tasting estate fictionally located in Oger, Côte des Blancs, Champagne, France. The site features a scroll-driven typography hero (Type G), Deep Burgundy color palette, EB Garamond + Nunito typography, and A2 Whisper animation persona.

---

## Pages

| File | Description | Lines |
|------|-------------|-------|
| `index.html` | Full landing page with Type G scroll hero, all sections | ~1,350 |
| `about.html` | Maison story, winemaker profile, terroir, awards | ~700 |
| `collection.html` | Full cuvée collection with filter, featured prestige, food pairings | ~680 |
| `process.html` | Méthode Champenoise — 6 detailed steps, timeline | ~600 |
| `contact.html` | Cave experiences, booking form, directions | ~620 |

---

## Design System

### Color Palette — P4 Deep Burgundy
```css
--bg: #1A0A0E;
--surface: #241016;
--surface2: #2C1420;
--accent: #C96A8A;
--accent-light: #E090A8;
--accent-dark: #8A3A5C;
--ivory: #F0DCE4;
--smoke: #A08088;
--muted: #604A52;
--border: #200C12;
```

### Typography — F10
- **Heading:** EB Garamond (400, 600, italic)
- **Body:** Nunito (300, 400, 600)

### Animation — A2 Whisper
- Duration: 1.4–1.6s (gsap.utils.random)
- Y offset: 14px
- Stagger: 0.06s
- Ease: power1.out

### Hero Type — G (Scroll-Driven Text Transform)
- `min-height: 200vh` sticky container
- MAISON scrolls left + scales down to 0.4
- ÉCLAT scrolls right + scales down to 0.4
- Tagline fades out on scroll
- GSAP scrub: 1.2 with ScrollTrigger

---

## Brand Identity

**Brand:** MAISON ÉCLAT
**Tagline:** The Art of Effervescence
**Founded:** 1892 (fictional)
**Location:** Oger, Côte des Blancs, Champagne, France
**Chef de Cave:** Caroline Lefèvre (fictional)

### Key Cuvées
- Cuvée Lumière — NV Brut Blanc de Blancs (€98)
- Nuit Étoilée — Vintage 2016 Extra Brut Blanc de Noirs (€185)
- Rêve Rosé — Vintage 2018 Brut Rosé (€142)
- Cuvée Aurore — NV Extra Brut Premier Cru (€68)
- Les Craies — Solera Brut Nature (€340)
- Rosée du Matin — NV Brut Rosé (€88)

---

## Technical Notes

### GSAP Implementation
- `immediateRender: false` at TOP LEVEL of all `gsap.from()` calls (never inside scrollTrigger)
- No `opacity: 0` in CSS on content elements
- Scroll indicator activated in BOTH preloader callback AND `setTimeout(4000)`
- SplitText inline polyfill included (no Club GSAP dependency)

### CDN Dependencies
```html
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,600;1,400&family=Nunito:wght@300;400;600&display=swap" rel="stylesheet">
<!-- Swiper CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">
<!-- GSAP Core -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<!-- ScrollTrigger -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
<!-- Swiper JS -->
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
```

### Layout Rules Applied
- Philosophy grid: `display: grid; grid-template-columns: repeat(3, 1fr)` — no flexbox
- Collection/cuvée grids: `overflow: visible`
- Footer: `background: var(--bg)` only — no hardcoded hex
- Custom scrollbar: `scrollbar-width: thin; scrollbar-color: var(--accent-dark) var(--bg)`
- Mobile responsive: 480px / 768px / 1024px breakpoints

---

## Image Requirements

Place images in `images/` directory:

| Filename | Usage |
|----------|-------|
| `hero-1.webp` | Hero background |
| `hero-2.webp` | Process step (harvest) |
| `hero-3.webp` | Process step (riddling) |
| `hero-4.webp` | Process step (disgorgement) |
| `product-1.webp` | Cuvée Lumière |
| `product-2.webp` | Nuit Étoilée |
| `product-3.webp` | Rêve Rosé |
| `product-4.webp` | Cuvée Aurore |
| `ambient-1.webp` | Cave / barrel room |
| `ambient-2.webp` | Cave bottles |
| `ambient-3.webp` | Cave ambience |
| `thumbnail.webp` | Template thumbnail (600px wide) |

---

## Thumbnail Generation

```bash
cwebp -q 80 -resize 600 0 \
  multi_clone_hompage/home/20260227_champagne-cave/images/thumbnail.jpg \
  -o multi_clone_hompage/home/20260227_champagne-cave/images/thumbnail.webp
```

---

## Created

- **Date:** 2026-02-27
- **Generator:** Claude Code (claude-sonnet-4-6)
