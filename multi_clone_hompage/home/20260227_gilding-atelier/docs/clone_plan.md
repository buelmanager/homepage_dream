# Clone Plan — AURUM Gilding Atelier

## Project Overview

**Template:** `20260227_gilding-atelier`
**Design Reference:** Original composition — no single source cloned
**Hero Type:** G (Scroll-Driven Text Transform)
**Palette:** P9 Rust Ember
**Font Pair:** F4 Cinzel + Crimson Pro

---

## Design Inspiration Sources

This template is an original composition drawing on visual language from multiple reference categories — none copied directly:

### Typography Influence
- Large-scale typographic heroes driven by scroll (reference: studio-style agency sites, Pentagram's older portfolio presentations)
- Cinzel typeface communicates Roman antiquity and gold's classical associations
- Crimson Pro provides the warmth and readability of a well-set art catalogue

### Color Palette Influence
- Rust Ember palette references the warm darkness of heated metal workshops — furnaces, kilns, foundries
- Bole red and burnt orange echo actual gilding bole clay (Armenian bole, terra rossa) used in traditional water gilding
- No reference to existing commercial template palettes

### Layout Influence
- Alternating full-bleed image / content split layouts: reference French luxury maisons (Hermès, Maison Margiela editorial)
- Vertical timeline: references museum exhibition catalogue design
- Four-column process steps: references craft documentation layouts common in conservation publications

### Content Reference
- Gilding methodology: reference to Koo Schadler's "Egg Tempera Painting" and Mary C. Black's gilding manuals
- Museum partnership framing: references standard institutional conservation mandate language
- Pricing structure: references typical London/Paris specialist conservation pricing (2024 market)

---

## Build Architecture

### File Structure
```
20260227_gilding-atelier/
├── index.html          (1200+ lines)
├── about.html          (600+ lines)
├── collection.html     (600+ lines)
├── process.html        (500+ lines)
├── contact.html        (500+ lines)
├── meta.json
├── readme.md
├── images/
│   ├── hero-1.webp .. hero-4.webp
│   ├── product-1.webp .. product-4.webp
│   ├── ambient-1.webp .. ambient-3.webp
│   └── thumbnail.webp
└── docs/
    ├── clone_plan.md
    ├── originality_report.md
    └── image_validation.md
```

### CSS Architecture
- All CSS is inline `<style>` within each HTML file (no external stylesheet)
- CSS custom properties defined on `:root` in every file for consistency
- Mobile-first breakpoints: 1024px (tablet), 768px (mobile)
- No CSS framework dependency

### JavaScript Architecture
- GSAP 3.12.2 + ScrollTrigger loaded from cdnjs CDN
- Swiper 11 loaded from jsdelivr CDN
- SplitText polyfill inline (Club GSAP premium unavailable on CDN)
- No jQuery or other JS framework dependency
- All animations use `immediateRender: false` at top level

---

## Section Build Plan (index.html)

| # | Section | Design Pattern | Notes |
|---|---------|---------------|-------|
| 1 | Preloader | Emblem ring + loading bar | Exits upward on load |
| 2 | Scroll Indicator | Line + vertical label | Fades on scroll past 300px |
| 3 | Navbar | Fixed, transparent → scrolled | Two-line logo, 4 nav links |
| 4 | Hero TYPE G | 200vh sticky text wrap | Words scroll apart via ScrollTrigger scrub |
| 5 | Stats | 4-col horizontal grid | Animated count-up on enter |
| 6 | Philosophy | 3-col CSS grid | Cards fade up staggered |
| 7 | Services | 2×2 image grid | Overlay reveals on hover |
| 8 | Workshop | 50/50 split | Image + feature list |
| 9 | Process | 4-step timeline | Roman numerals, horizontal line |
| 10 | Heritage | 2-col with watermark | Quote block + dual image grid |
| 11 | Testimonials | Swiper 2-up | 4 cards, autoplay 6s |
| 12 | Commission CTA | Centred + concentric rings | Two buttons |
| 13 | Footer | 4-col grid | Full sitemap + contact |

---

## Quality Checklist

- [x] No `opacity: 0` in CSS
- [x] `immediateRender: false` at top level of all `gsap.from()`
- [x] Scroll indicator visible after preloader + setTimeout 4000ms
- [x] Philosophy grid: `display: grid` (not flex)
- [x] SplitText polyfill embedded
- [x] Mobile responsive (1024px, 768px breakpoints)
- [x] Custom scrollbar styled
- [x] All image paths use `images/` local prefix
- [x] meta.json complete
- [x] All 5 HTML pages with 500+ lines each
- [x] English only — no Lorem Ipsum
- [x] Original brand copy throughout
