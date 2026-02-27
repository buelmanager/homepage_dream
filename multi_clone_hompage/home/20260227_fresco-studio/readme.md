# INTONACO — Renaissance Fresco & Mural Studio

**Slug:** `20260227_fresco-studio`
**Tier:** Free
**Status:** PUBLISHED

## Overview

INTONACO is a luxury multi-page website for a fictional Renaissance fresco and mural painting studio based in Florence. The site uses the Midnight Purple color palette, Spectral serif typography, and GSAP Dramatic (A4) animation persona to create a dark, literary atmosphere befitting a studio that works in the tradition of Giotto and Michelangelo.

## Pages

| File | Description |
|------|-------------|
| `index.html` | Full landing page with Hero Type E (grid canvas), stats, philosophy, portfolio, atelier, process, heritage, testimonials, commission form |
| `about.html` | Studio history, founding story, timeline, master painters, values, recognition |
| `collection.html` | Commission portfolio with featured work, filterable grid, category breakdown, restoration programme |
| `process.html` | Deep process guide: five movements (consultation, sinopia, intonaco, pigment, conservation), pigment palette, giornata schedule |
| `contact.html` | Commission inquiry form, FAQ accordion, conservation care programme, studio locations |

## Design Specifications

- **Hero Layout:** Type E — Animated Grid/Pattern Canvas (geometric grid with purple accent nodes)
- **Color Palette:** P6 — Midnight Purple (`--bg: #130F1A`, `--accent: #9B6EDB`)
- **Font Pair:** F9 — Spectral (serif) + Mulish (sans)
- **Animation Persona:** A4 — Dramatic (duration 1.1–1.3s, y: 40px, stagger: 0.15, ease: power2.inOut)
- **GSAP Rules:** All gsap.from() with `immediateRender: false` at top level; no CSS opacity:0 on content elements; SplitText inline polyfill included

## Brand Identity

- **Brand Name:** INTONACO
- **Tagline:** "Painting the World's Walls"
- **Industry:** Fine art fresco painting, mural restoration, architectural art
- **Tone:** Renaissance grandeur, artistic mastery, timeless craftsmanship
- **Founded:** Florence, 2012 (fictional)

## Images Required

Place the following images in the `images/` directory:

- `hero-1.webp` through `hero-4.webp` — fresco/mural/painting scenes
- `product-1.webp` through `product-4.webp` — artwork/detail shots
- `ambient-1.webp` through `ambient-3.webp` — studio atmosphere
- `thumbnail.webp` — 600px wide thumbnail for manifest

## Technical Notes

- Mobile responsive at 375px, 768px, 1440px breakpoints
- Philosophy grid uses `display: grid; grid-template-columns: repeat(3, 1fr)` (not flexbox)
- Collection grid has `overflow: visible`
- Footer uses `background: var(--bg)` only
- Hero canvas grid: animated with purple lines `rgba(155,110,219,0.12)` and accent nodes
- Testimonials powered by Swiper 11 with autoplay
- FAQ accordion built in vanilla JS
