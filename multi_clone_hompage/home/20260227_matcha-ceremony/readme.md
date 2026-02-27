# CHADO — Harmony in Every Bowl
**Slug:** `20260227_matcha-ceremony`

## Overview
A luxury multi-page website for a Japanese matcha tea ceremony studio. CHADO is a Urasenke-certified practice offering Usucha, Koicha, Seasonal, Private, and Corporate ceremonies. The site embodies the principles of Chado — Wa (harmony), Kei (respect), Sei (purity), and Jaku (tranquility) — through every design and content decision.

## Pages
| File | Description | Lines |
|------|-------------|-------|
| `index.html` | Homepage with Hero TYPE G scroll-driven animation | 1200+ |
| `about.html` | Tea master lineage, Urasenke tradition, philosophy | 650+ |
| `collection.html` | Five ceremony styles with FAQ and booking links | 700+ |
| `process.html` | 7-step ceremony process and utensils glossary | 650+ |
| `contact.html` | Reservation form with location and policies | 600+ |

## Design Specifications
- **Color Palette:** Forest Night (P3)
  - `--bg: #0F1A10` — near-black forest green
  - `--surface: #162016` — deep green surface
  - `--accent: #4DAF6A` — ceremonial matcha green
  - `--ivory: #DCF0DC` — pale green-ivory text
- **Typography:** DM Serif Display + Karla (Google Fonts)
- **Hero Layout:** TYPE G — Scroll-driven text transform with GSAP ScrollTrigger
- **Animation:** A2 Whisper — `duration:1.5, y:14, stagger:0.06, ease:'power1.out'`

## Technical Notes
- `immediateRender: false` correctly placed at top level of all `gsap.from()` calls
- No `opacity: 0` in CSS for content elements
- SplitText polyfill embedded in index.html (avoids Club GSAP CDN 404)
- Swiper 11 used for testimonials carousel
- Philosophy grid uses `display: grid` (not flex) per GSAP project rules
- Scroll indicator shown in preloader callback AND setTimeout(4000ms) fallback
- Custom scrollbar via `::-webkit-scrollbar`
- Fully mobile responsive (breakpoints at 1024px and 768px)

## Images Required
Place these in `images/` directory:
- `hero-1.webp` — hero background (full-screen, garden/tearoom scene)
- `hero-2.webp` — secondary hero (ceremony room or garden path)
- `hero-3.webp` — portrait of tea master
- `hero-4.webp` — traditional utensils/tools
- `product-1.webp` — usucha bowl with matcha foam
- `product-2.webp` — koicha/Iga ware bowl
- `product-3.webp` — seasonal confection/wagashi
- `product-4.webp` — stone mill or home practice
- `ambient-1.webp` — ceremony preparation detail
- `ambient-2.webp` — tearoom interior/group ceremony
- `ambient-3.webp` — garden/roji path
- `thumbnail.webp` — 600px wide thumbnail for manifest

## CDN Dependencies
- GSAP 3.12.2 (cdnjs) + ScrollTrigger
- Swiper 11 (jsdelivr)
- Google Fonts: DM Serif Display + Karla
