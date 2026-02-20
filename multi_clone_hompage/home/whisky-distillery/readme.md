# Cragmòr — Whisky Distillery Landing Page

## Concept
**Brand:** Cragmòr (fictional — Scottish Gaelic for "Great Crag")
**Tagline:** "Born in Fire. Rested in Stone."
**Core Philosophy:** Cragmòr is not distilled — it is extracted. The peat that burns beneath their stills was alive 10,000 years ago. The stone that holds their casks has never moved.

## Color Palette
| Role | Hex | Description |
|------|-----|-------------|
| Background | `#221A13` | Peat Dark — warm near-black |
| Surface | `#2A2118` | Smoke Stone — section backgrounds |
| Surface 2 | `#332719` | Deep stone |
| Copper | `#B5702A` | Distillery stills, aged warmth |
| Amber | `#D4A240` | Whisky in glass, primary accent |
| Parchment | `#EDE0CA` | Aged certificate, primary text |
| Ash | `#6B5E52` | Secondary text |

## Typography
- **Serif:** EB Garamond — reads like an 18th-century distillery charter
- **Sans:** IBM Plex Sans — technical precision for distillation logs, cask numbers

## Section Structure
1. Preloader — SVG flame draw + brand reveal
2. Scroll Indicator — fixed left, dot + progress fill + section label
3. Navbar — fixed, blur on scroll
4. Hero — cinematic distillery BG + Ken Burns + smoke particles + mousemove parallax
5. Stats Strip — 1893 / 21 Yrs / 68% ABV / 10,000 Yr Peat
6. Philosophy — 3-col CSS grid with Roman numeral anchors
7. Collection — 3-col offset grid, hover reveals cask + tasting notes
8. Atelier — 2-col (distillery image + copy), parallax scroll
9. Process — 6-act vertical timeline with GSAP spine-draw
10. Heritage — 5-milestone timeline 1893→2024
11. Press — Swiper carousel with awards/quotes
12. Commission — Private Cask Programme form
13. Footer — 4-col minimal

## Animations
- Ken Burns hero background + mousemove depth parallax
- Smoke particle canvas overlay in hero
- GSAP `from()` with `immediateRender: false` on all ScrollTrigger reveals
- Process spine line draws as section scrolls into view
- Parallax scrub on atelier image
- Card stagger reveals on collection and philosophy
- Custom cursor (dot + trailing ring) with mix-blend-mode:difference
- Swiper autoplay for press quotes

## Running
Open `index.html` in a browser — no build step required.
All assets loaded from CDN (Google Fonts, GSAP, Swiper).
