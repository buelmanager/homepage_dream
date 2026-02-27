# Clone Plan — 20260227_kimchi-cellar

## Project Overview

**Template:** ONGGI — Traditional Kimchi Cellar
**Category:** Multi-page luxury site
**Industry:** Food & Beverage — Korean fermentation
**Created:** 2026-02-27

## Design Rationale

### Hero Type G — Scroll-Driven Text Transform

Type G was selected for ONGGI because the brand's core proposition is transformation through time. The two-word hero layout — "ONGGI" in solid ivory and "CELLAR" in accent-stroked outline — creates immediate visual contrast representing the duality of the brand: ancient craft (solid, grounded) and aspirational luxury (open, outlined). GSAP scroll-based parallax transforms both words in opposing horizontal directions as the user scrolls, reinforcing the sense of depth and motion inherent to fermentation. The hero background image uses `transform: scale(1.12)` with parallax scroll de-scale to 1.0, creating a slow reveal of the full cellar image.

### Color Palette — Forest Night (P3)

The Forest Night palette was chosen to evoke:
- The underground earth of Jeonju's clay cellar
- The dark interior of onggi pottery
- The deep green of fermenting brine surfaces
- The cool, mineral character of aged kimchi

The accent green (#4DAF6A) references the specific vivid green of fresh Korean chives and the mold-free surface of actively fermenting kimchi brine. High contrast with the near-black background (#0F1A10) creates luxury positioning without clinical coldness. The ivory (#DCF0DC) has a green tint, unifying all text with the palette.

### Font Pair F7 — Libre Baskerville + Source Sans 3

Libre Baskerville (serif) carries cultural weight and editorial authority — appropriate for a brand with 2,000 years of tradition behind it. Its italic variant is used for emphasis on key phrases ("Fermented by Time"), creating a spoken rhythm in headings. Source Sans 3 (sans-serif) provides modern legibility for body copy and UI elements, balancing the traditional serif without competing.

## Page Architecture

### Index (1200+ lines)
- Preloader with animated progress bar
- Scroll indicator (dual trigger: preloader callback + setTimeout 4000ms)
- Sticky navbar with scroll class
- Hero Type G: two giant words + tagline + CTA
- Stats bar: 4 metrics (50+ varieties, 2000 years, UNESCO, 300 pots)
- Philosophy: 3-column CSS grid with numbered cards
- Collection preview: 4-column product grid (overflow: visible)
- Underground cellar: 50/50 image + content split
- Fermentation process: 5-column step grid
- Ambient quote banner with parallax background
- Korean heritage: image mosaic + content grid
- Testimonials: Swiper carousel (1/2/3 col responsive)
- Order/experience form
- Footer: 4-column grid

### About (600+ lines)
- 50/50 founder portrait + story section
- Timeline: 8 events from 1947–2024
- Team: 3-column portrait cards
- Awards: 4-column recognition grid
- Values: 2x2 commitment grid
- CTA accent banner

### Collection (600+ lines)
- Filter bar (visual only, no JS filtering)
- Signature kimchi feature (large 50/50 card)
- 6-variety grid (3 columns)
- Ingredient provenance: 4-column grid
- Seasonal availability: 4-season cards
- Food pairing guide: 3 pairings

### Process (500+ lines)
- Overview stats bar: 5 metrics
- 5 detailed process steps (3-column layout: number | content | details)
- Onggi pottery deep-dive with spec table
- Fermentation science: 3 cards

### Contact (500+ lines)
- 3 experience option cards with pricing
- Split contact info + form layout
- Shipping information: 3 cards
- Map placeholder with location details
- FAQ accordion (6 questions, JS-powered)

## Technical Architecture

### GSAP Usage Pattern
All animations follow A1-Standard specification:
- `gsap.from()` with `immediateRender: false` at top level of vars
- `scrollTrigger.start: 'top 85%'` default
- `y: 24, duration: 1.1, ease: 'power2.out'`
- Stagger on grids: delay by `(i % columns) * 0.10`

### Hero Type G Scroll Animation
- `.word-1` translates to x: -8vw while scaling 1.15 (scrub: 1.2)
- `.word-2` translates to x: +8vw while scaling 1.15 (scrub: 1.2)
- `.hero-bg` de-scales from 1.12 to 1.0 (scrub: 1.5)
- All synced to ScrollTrigger from `#hero` top to bottom

### Preloader
- Simulated progress: random increment 3–15% per 80ms interval
- GSAP fade-out at 100% → calls `initScrollIndicator()`
- Scroll indicator also visible via `setTimeout(4000)` as failsafe

### Swiper Configuration (index.html only)
- slidesPerView: 1 / 2 / 3 at breakpoints 0 / 768 / 1024
- loop: true, autoplay: 5000ms
- Pagination: dot style, accent color override

## File Naming Conventions

- HTML pages: lowercase, descriptive (`about.html`, `collection.html`)
- Images: `hero-N.webp`, `product-N.webp`, `ambient-N.webp`
- Thumbnail: `thumbnail.webp` only (not .jpg — see project gitignore rules)

## Known Limitations

- Filter bar on collection.html is visual-only (no JavaScript filtering)
- Map section uses a styled placeholder (no Google Maps API integration)
- Form submissions not connected to backend (action="#")
- Images are placeholders — require real kimchi/cellar photography
