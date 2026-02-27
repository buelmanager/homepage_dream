# CANOPY — Forest Treehouse Lodge

**Slug:** `20260227_treehouse-lodge`
**Tier:** Free
**Industry:** Hospitality / Eco-luxury / Nature Retreat
**Style:** Wild luxury, forest immersion, elevated solitude

---

## Brand Identity

- **Brand:** CANOPY — Forest Treehouse Lodge
- **Tagline:** "Above the World, Within the Wild"
- **Concept:** Twelve handcrafted treehouses suspended in ancient forest canopy, Herefordshire, England
- **Tone:** Wild luxury · Forest immersion · Elevated solitude · Conservation-led

---

## Design System

### Color Palette — Forest Night
```css
--bg: #0F1A10;
--surface: #162016;
--surface2: #1A2A1A;
--accent: #4DAF6A;
--accent-light: #7ACC8A;
--accent-dark: #2E7A46;
--ivory: #DCF0DC;
--smoke: #809080;
--muted: #4A6050;
--border: #182018;
```

### Typography — Font Pair F5
- **Serif:** Fraunces (ital, opsz, wght 300/600)
- **Sans:** Inter (300, 400, 500)
- Google Fonts CDN loaded

### Hero Layout — Type B (Parallax)
- Two layered background divs: `layer-1` (hero-1.webp) + `layer-2` (hero-2.webp, mix-blend-mode: multiply)
- Ken Burns: `gsap.to('.hero-layer-1', {scale:1.08, duration:25, ease:'none', repeat:-1, yoyo:true})`
- Mousemove parallax: layers move in opposite directions on `mousemove`

### Animation — A5 Organic
```js
y: gsap.utils.random(20, 28),
duration: gsap.utils.random(1.0, 1.4),
ease: 'power2.out',
stagger: 0.09,
immediateRender: false
```

---

## Pages

| File | Description | Lines |
|------|-------------|-------|
| `index.html` | Main landing page — all sections | ~1250 |
| `about.html` | Lodge story, founders, timeline, conservation | ~620 |
| `collection.html` | 12 treehouses, filter bar, comparison table | ~650 |
| `process.html` | Booking journey, daily rhythm, FAQ accordion | ~550 |
| `contact.html` | Split-screen reservation form, season guide | ~530 |

---

## Sections (index.html)

1. Preloader (logo + animated bar)
2. Scroll Indicator (visible in preloader callback + setTimeout 4000ms)
3. Navbar (fixed, scrolled state, mobile hamburger)
4. Hero Type B (parallax layers, Ken Burns, mousemove)
5. Stats Strip (12 Treehouses, 3 Forest Species, 180° Views, 4.9 Stars)
6. Philosophy Grid (3-col CSS grid, NOT flex)
7. Treehouse Collection (overflow:visible, 3 cards)
8. Atelier Section (two images, overlapping accent image)
9. Process / Booking (4 steps)
10. Heritage / Conservation (image grid)
11. Testimonials (Swiper slider, 4 cards)
12. Reservation Form (8 fields, 2-col grid)
13. Footer (var(--bg), 4 columns)

---

## CDN Dependencies

```html
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Fraunces:...&family=Inter:...">

<!-- Swiper (index.html only) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

<!-- GSAP + ScrollTrigger (all pages) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
```

---

## Image Requirements

All images local in `images/` directory:

| File | Usage |
|------|-------|
| `hero-1.webp` | Hero layer-1 background (Ken Burns) |
| `hero-2.webp` | Hero layer-2 overlay + contact hero bg |
| `hero-3.webp` | Heritage section + collection card |
| `hero-4.webp` | Heritage section + collection card |
| `product-1.webp` | Canopy Suite (featured / collection) |
| `product-2.webp` | Forest Loft |
| `product-3.webp` | Woodland Nest |
| `product-4.webp` | Ash Observatory |
| `ambient-1.webp` | Atelier main + about origin + amenity |
| `ambient-2.webp` | Atelier accent + about founders + dining |
| `ambient-3.webp` | Heritage + about founders |
| `thumbnail.webp` | Template thumbnail (600px wide) |

---

## Critical Implementation Rules

- NO `opacity:0` in CSS on content elements
- `gsap.from()` only — `immediateRender:false` at TOP LEVEL (never inside scrollTrigger:{})
- Philosophy section: `display:grid; grid-template-columns:repeat(3,1fr)` — NOT flex
- Collection section: `overflow:visible`
- Footer: `background: var(--bg)` — never hardcoded dark hex
- SplitText: inline polyfill class (no CDN premium plugin)
- Custom scrollbar: `scrollbar-width:thin; scrollbar-color:var(--accent-dark) var(--bg)`

---

## Responsive Breakpoints

- 1440px — full desktop layout
- 1024px — medium desktop / tablet landscape
- 768px — tablet / mobile (hamburger nav appears)
- 480px — mobile (stacked single-column)

---

## Generated

Date: 2026-02-27
Generator: Claude Code (Sonnet 4.6)
