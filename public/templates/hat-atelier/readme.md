# MAISON VAUCLAIRE — Hat Atelier Landing Page

**Slug:** `hat-atelier`
**Tier:** PRO ($49)
**Status:** PUBLISHED

---

## Overview

A complete ultra-luxury bespoke millinery landing page for the fictional brand **Maison Vauclaire**. The design conveys old-world Parisian couture heritage through a warm dark palette (cognac shadow, antique gold, ivory silk), Cormorant Garamond serif typography, and a hero built on the Type C Diagonal Split layout.

---

## Hero: Type C — Diagonal Split

- Left panel (`clip-path: polygon(0 0, 100% 0, 88% 100%, 0 100%)`) covers 52% of the viewport in `var(--bg)` (#221510), containing brand name, tagline, and CTA
- Right panel: full-bleed editorial hat photography at `filter: brightness(0.85)`
- Mobile: stacks vertically (image above, dark panel below)

---

## Color Palette

| Token | Hex | Role |
|---|---|---|
| `--bg` | `#221510` | Primary background (avg=20.3, passes threshold) |
| `--bg-2` | `#3D1F0D` | Secondary background |
| `--bg-3` | `#2A1A0E` | Tertiary / card background |
| `--gold` | `#C9973A` | Accent / primary highlight |
| `--ivory` | `#F5EDD8` | Primary text |
| `--sand` | `#C4AF8E` | Secondary text |
| `--rust` | `#8B3A1E` | CTA button |

---

## Sections (13 total)

1. **Preloader** — SVG monogram draw (M+V interlaced) + brand name fade + progress bar
2. **Scroll Indicator** — fixed left, dot + animated line + label + scroll progress fill
3. **Navbar** — fixed, blur + bg on scroll
4. **Hero** — Type C Diagonal Split
5. **Stats Strip** — 4-column animated counters (137 years, 2400+ commissions, 18 artisans, 46 sovereign clients)
6. **Philosophy** — 3-col CSS grid with hover border reveal
7. **Collection Grid** — 2x2, `overflow: visible`, alternating vertical transform offset
8. **Atelier** — 2-col image + text, GSAP parallax on image
9. **Process** — vertical timeline, 5 steps (Roman numerals)
10. **Heritage** — 4-milestone horizontal timeline (1887 → 1924 → 1971 → 2019)
11. **Press** — Swiper 11 carousel (3 slides/view on desktop, autoplay), publication logos
12. **Commission Form** — 2-col styled inputs, select dropdowns, textarea
13. **Footer** — 4-col, `background: var(--bg)`

---

## Tech Stack

- **Fonts:** Google Fonts — Cormorant Garamond (300/400/500, italic) + Jost (200/300/400/500)
- **Animation:** GSAP 3.12 (gsap.min.js + ScrollTrigger.min.js + SplitText.min.js) from cdnjs
- **Carousel:** Swiper 11 from cdn.jsdelivr.net
- **Images:** Validated Unsplash URLs (21 URLs, all 200 OK)

---

## GSAP Rules Applied

- All `gsap.from()` with `scrollTrigger` use `immediateRender: false`
- No `opacity: 0` on content elements in CSS
- Scroll indicator `.visible` class added in two places: preloader callback + `setTimeout(4000ms)`
- Philosophy section uses `display: grid`
- Collection grid uses `overflow: visible`

---

## Brand Identity

**Brand:** Maison Vauclaire
**Positioning:** Ultra-luxury bespoke millinery, appointment-only, Paris 8th arrondissement
**Heritage narrative:** Founded 1887, three generations of milliners
**Tagline:** "The Art of the Brim."
**Voice:** Restrained, formal, never boastful — like a letter written with a fountain pen
