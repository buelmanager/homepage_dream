# ARBORIS STUDIO — Handcrafted Furniture & Woodworking Design

**Slug:** `20260228_furniture-designer-portfolio`
**Created:** 2026-02-28
**Tier:** Free | **Price:** £0

---

## Overview

A luxury multi-page portfolio template for handcrafted furniture makers and woodworking studios. Built around the brand "ARBORIS STUDIO" — a fictitious bespoke furniture atelier based in Shropshire, England.

**Tone:** Warm, artisanal, nature-rooted, slow craft
**Palette:** P10 Dark Olive (`--bg: #141810`, `--accent: #8AB56A`, `--ivory: #E4EEE0`)
**Font:** F7 — Libre Baskerville + Source Sans 3
**Hero:** Type C — Diagonal Split
**Animation:** A5 Organic (duration 1.0–1.4s random, y 20–28px random)

---

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Main portfolio — Diagonal split hero, philosophy, selected works, made-to-order, materials, process, press, CTA |
| `about.html` | Studio story, master craftsman biography, philosophy pillars, sustainability commitment |
| `collection.html` | Full works grid (12 pieces) with filter tabs (All/Seating/Tables/Storage/Custom) |
| `process.html` | 6-step making process, wood species guide, sustainability commitments |
| `contact.html` | Commission enquiry form, lead times table, care guide, FAQ accordion |

---

## Design Decisions

### Hero Type C — Diagonal Split
The hero uses `clip-path: polygon()` to create a hard diagonal cut between the text panel (dark olive background) and the full-bleed image panel. The diagonal angle is 15% from the right edge of the left panel, creating a dynamic visual tension.

### Color Philosophy
All section backgrounds use CSS variables to ensure no section falls below the minimum brightness threshold. Footer uses `var(--bg)` only. All GSAP `opacity: 0` states are applied through JavaScript, never CSS.

### GSAP Compliance
- All `immediateRender: false` placed at TOP LEVEL of `gsap.from()` vars
- No `opacity: 0` in CSS on content elements
- SplitText uses inline polyfill class (not CDN)
- Scroll indicator shown in preloader callback AND setTimeout(4000ms)

---

## Images Used

All images sourced from Unsplash. See `docs/image_validation.md` for full URL list and validation status.

- hero-1 through hero-3: Studio/furniture atmosphere
- product-1 through product-10: Individual furniture pieces
- workspace-1 through workspace-3: Workshop interior shots
- detail-1 through detail-4: Timber grain/joinery close-ups
- ambient-1 through ambient-3: Atmospheric studio/forest images
- Banner images for each sub-page

---

## Technical Notes

- All images converted to WebP (cwebp -q 82) for optimal file size
- GSAP 3.12.5 loaded from cdnjs
- No external dependencies beyond Google Fonts and GSAP
- Responsive breakpoints at 1024px and 768px
- Works grid uses `display: grid` (not flex) per GSAP ScrollTrigger requirements
