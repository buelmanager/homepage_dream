# LEPIDOPTERA — Butterfly Conservatory

**Tagline:** Where Wings Tell Stories
**Industry:** Tropical butterfly conservatory and botanical immersion
**Tier:** Free
**Status:** PUBLISHED

---

## Overview

LEPIDOPTERA is a complete luxury multi-page website for a fictional tropical butterfly conservatory. The brand represents a living butterfly museum and botanical garden founded in 1987 by fictional lepidopterist Dr. Elena Maris and botanist Alejandro Vega in Costa Rica.

## Design System

### Color Palette — Forest Night
| Variable       | Value     | Role                        |
|----------------|-----------|-----------------------------|
| `--bg`         | `#0F1A10` | Page background             |
| `--surface`    | `#162016` | Card / section surfaces     |
| `--surface2`   | `#1A2A1A` | Nested surfaces             |
| `--accent`     | `#4DAF6A` | Primary accent (green)      |
| `--accent-light`| `#7ACC8A`| Hover / italic highlights   |
| `--accent-dark`| `#2E7A46` | Depth / secondary accent    |
| `--ivory`      | `#DCF0DC` | Primary text                |
| `--smoke`      | `#809080` | Secondary text              |
| `--muted`      | `#4A6050` | Tertiary text / labels      |
| `--border`     | `#182018` | All border lines            |

### Typography
- **Serif:** DM Serif Display — headings, brand name, numbers
- **Sans:** Karla — body copy, labels, UI text

### Animation — Organic A5
- `y: gsap.utils.random(20, 28)`
- `duration: gsap.utils.random(1.0, 1.4)`
- `ease: 'power2.out'`
- `stagger: 0.09`
- `immediateRender: false` on all gsap.from() calls

### Hero — Type B (Parallax + Ken Burns)
- Two layered background images with CSS Ken Burns animation
- Mousemove parallax: layer 1 moves at +18x/+12y, layer 2 at -12x/-8y
- Mix-blend-mode: overlay on second layer
- Floating badge positioned bottom-right

## Pages

| File             | Lines | Purpose                                      |
|------------------|-------|----------------------------------------------|
| `index.html`     | 1300+ | Full landing page with 10 sections           |
| `about.html`     | 650+  | Founders, mission, timeline, science team    |
| `collection.html`| 700+  | Species highlights + 48-cell gallery grid    |
| `process.html`   | 600+  | Lifecycle stages, biome zones, breeding       |
| `contact.html`   | 700+  | Booking, group events, hours, FAQ            |

## Sections — index.html

1. **Preloader** — animated wing SVG + loading bar
2. **Scroll Indicator** — appears after preloader, hides on scroll
3. **Navbar** — fixed, transparent to frosted-glass on scroll
4. **Hero B** — parallax + Ken Burns, floating badge
5. **Stats** — 2000+ butterflies, 300 species, 5 zones, 40°C
6. **Philosophy** — 3-column CSS grid (not flex)
7. **Species Collection** — 4-column image grid
8. **Greenhouse** — full-bleed parallax image with text overlay
9. **Process/Journey** — 4-step lifecycle with connecting line
10. **Heritage** — 2-column with layered images and facts grid
11. **Testimonials** — Swiper with 3-up cards and pagination
12. **Experience Booking** — experiences list + inquiry form
13. **Footer** — 4-column with social, links, contact

## Technical Notes

- SplitText polyfill embedded before Swiper in index.html
- `immediateRender: false` at top level of all `gsap.from()` calls
- No CSS `opacity: 0` on content elements
- Scroll indicator shown in preloader callback AND setTimeout(4000)
- Philosophy grid uses `display: grid`, not flex
- Custom scrollbar via `:-webkit-scrollbar` pseudoelements
- All images referenced from local `images/` directory
- CDN: GSAP 3.12.2, Swiper 11, Google Fonts

## Image Slots

All images are referenced locally and must be placed in `images/`:
- `hero-1.webp`, `hero-2.webp`, `hero-3.webp`, `hero-4.webp`
- `product-1.webp`, `product-2.webp`, `product-3.webp`, `product-4.webp`
- `ambient-1.webp`, `ambient-2.webp`, `ambient-3.webp`
- `thumbnail.webp` (required for manifest)

Inline SVG butterfly illustrations are used as fallbacks when images are absent.
