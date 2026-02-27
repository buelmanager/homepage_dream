# AGAVERO — Born from Blue Fire
## Estate Tequila Hacienda — Complete Multi-Page Website

**Slug:** `20260227_tequila-hacienda`
**Created:** 2026-02-27
**Tier:** Free | **Price:** $0
**Industry:** Spirits / Estate Tequila Distillery
**Style:** Luxury Heritage

---

## Overview

AGAVERO is a complete luxury multi-page website for a fictional estate tequila hacienda and distillery based in the Los Altos highlands of Jalisco, Mexico. The brand centers on four-generation family heritage, 100% estate Blue Weber agave, and artisan production methods including stone tahona milling, open-air fermentation, and copper pot distillation.

---

## Design System

| Property | Value |
|---|---|
| Color Palette | P9 — Rust Ember |
| Background | `#1C1008` |
| Accent | `#D4612A` |
| Text | `#F0E4DC` (ivory) |
| Font Serif | Libre Baskerville |
| Font Sans | Source Sans 3 |
| Hero Layout | Type E — Grid/Pattern Canvas |
| Animation | A1 Standard (GSAP + ScrollTrigger) |

---

## Pages

| File | Description | Lines |
|---|---|---|
| `index.html` | Homepage — Hero(E), Stats, Philosophy, Collection, Distillery, Process, Heritage, Testimonials (Swiper), Reservation Form, Footer | 1,200+ |
| `about.html` | Family history, 4-generation timeline, Jalisco terroir, jimador tradition, brand values | 620+ |
| `collection.html` | Five expressions — Blanco, Reposado, Añejo, Extra Añejo, Cristalino — with full tasting notes | 580+ |
| `process.html` | Distillery process — Harvest, Roasting, Crushing, Fermentation, Distillation, Barrel Aging | 530+ |
| `contact.html` | Hacienda tour reservation — Three experience tiers, form, location, FAQ accordion | 560+ |

---

## Hero Canvas (Type E)

The homepage hero uses an animated HTML5 canvas overlaid on the hero background image:

- Grid lines drawn with `ctx.strokeStyle = 'rgba(212,97,42,0.10)'`
- Animated pulsing intersection dots driven by `Math.sin(phase + c * 0.4 + r * 0.6)`
- Diagonal accent line sweep animated on each frame
- Corner accent CSS elements (`.corner.tl/.tr/.bl/.br`) at 40×40px
- Canvas resizes responsively with `window.addEventListener('resize', resize)`

---

## GSAP Rules Compliance

- All `gsap.from()` calls include `immediateRender: false` at top level (never inside `scrollTrigger: {}`)
- No `opacity: 0` set in CSS on any content elements
- Scroll indicator shown in preloader callback AND `setTimeout(4000ms)` fallback
- Philosophy section uses `display: grid` (CSS Grid, not flex)
- SplitText polyfill included inline before Swiper script tag

---

## CDN Dependencies

```html
<!-- Fonts -->
https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Source+Sans+3:wght@300;400;600

<!-- Swiper CSS -->
https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css

<!-- GSAP -->
https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js
https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js

<!-- Swiper JS -->
https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js
```

---

## Images Required

Place images in `images/` directory:

| File | Usage |
|---|---|
| `hero-1.webp` | Homepage hero background, still room photo |
| `hero-2.webp` | Heritage section small image, barrel hall photo |
| `hero-3.webp` | Tahona crushing step, jimador photo |
| `hero-4.webp` | Terroir section, location photo, fermentation step |
| `product-1.webp` | Blanco expression |
| `product-2.webp` | Reposado expression |
| `product-3.webp` | Añejo expression |
| `product-4.webp` | Extra Añejo expression |
| `ambient-1.webp` | Distillery interior, horno roasting step |
| `ambient-2.webp` | Heritage large image, fermentation vats step, collection header |
| `ambient-3.webp` | Jimador portrait, copper still distillation step |
| `thumbnail.webp` | Template thumbnail (600px wide) |

---

## Brand Identity

- **Brand:** AGAVERO
- **Tagline:** Born from Blue Fire
- **Founding:** 1928 (fictional)
- **Location:** Arandas, Jalisco, Mexico (Los Altos Highlands)
- **Heritage:** 4th generation family distillery
- **Estate:** 200 acres, 1,800m altitude, organic certified
- **Methods:** Tahona stone crushing, open-air fermentation, copper pot distillation
- **Portfolio:** Blanco Cristalino, Reposado Reserva (14mo), Añejo Hacienda (36mo), Extra Añejo Fundador (8yr), Cristalino Reserva

---

## License

Free tier — available for all uses under the homepage_dream template license.
