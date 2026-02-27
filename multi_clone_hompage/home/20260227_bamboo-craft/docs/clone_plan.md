# Clone Plan — TAKE Bamboo Craft Atelier

## Template Identity
- **Slug:** `20260227_bamboo-craft`
- **Category:** Luxury Artisan / Traditional Craft
- **Hero Type:** G — Scroll-Driven Text Transform
- **Palette:** P10 Dark Olive
- **Target Industry:** Japanese bamboo craft, traditional artisan studios

## Reference Concepts

This template draws conceptual inspiration from the following real-world craft atelier models:

| Reference | Element Borrowed |
|---|---|
| Kyoto traditional craft studios (Nishiki district) | Japanese minimalism, material-first narrative |
| Neri&Hu studio aesthetic | High-contrast dark background, serif headline scale |
| Nendo design studio | Negative space philosophy, restrained animation |
| Shokosai V bamboo art | Craft authenticity, process documentation depth |

No design assets, code, or copy was copied from any external source. All design, code, and written content is original.

## Page Architecture

```
20260227_bamboo-craft/
├── index.html          — Primary landing page (Hero G)
├── about.html          — Master craftsman story + heritage
├── collection.html     — Product categories with filter
├── process.html        — Five-stage craft process
├── contact.html        — Commission form + FAQ + visit info
├── meta.json           — Template metadata
├── readme.md           — Technical + brand documentation
├── images/
│   ├── hero-1..4.webp
│   ├── product-1..4.webp
│   ├── ambient-1..3.webp
│   └── thumbnail.webp
└── docs/
    ├── clone_plan.md
    ├── originality_report.md
    └── image_validation.md
```

## Section Map — index.html

| # | Section | Key Component |
|---|---|---|
| 1 | Preloader | Kanji 竹 + progress bar |
| 2 | Scroll Indicator | Fixed right, animated line |
| 3 | Navbar | Logo + links + CTA button |
| 4 | Hero (Type G) | Scroll-driven parallax, dual-language title |
| 5 | Stats | 4-column counter grid (500+, 30, 20, 3) |
| 6 | Philosophy | 3-column CSS grid, numbered cards |
| 7 | Collection Preview | Featured grid (2-col + 1-col) |
| 8 | Workshop | Image + text split layout |
| 9 | Process Overview | 5-step horizontal line |
| 10 | Heritage | Text + image grid with background kanji |
| 11 | Testimonials | Swiper 11 carousel, 4 cards |
| 12 | Commission Form | 2-col layout with detail list |
| 13 | Footer | 4-col grid, social, legal |

## Design Decisions

### Typography Scale
- Hero word-1: `clamp(6rem, 16vw, 14rem)` — dominant presence
- Hero word-2 (kanji): `clamp(3rem, 8vw, 7rem)` — secondary accent
- Section titles: `clamp(2.5rem, 5vw, 4rem)`
- Body text: 1rem / line-height 1.8
- Labels: 0.65rem / letter-spacing 0.45em

### Animation Philosophy (A5 — Organic)
- `y: gsap.utils.random(20, 28)` — slight variation feels natural
- `duration: gsap.utils.random(1.0, 1.4)` — breathing rhythm
- `ease: 'power2.out'` — weighted landing
- `stagger: 0.09` — closely spaced without feeling mechanical
- `immediateRender: false` — mandatory at top level of all gsap.from() calls

### Japanese Aesthetic Choices
- Kanji characters as design elements (竹, 林, 零, 永, 道, 依)
- Dark olive palette references bamboo grove at dusk
- Negative space used deliberately — low content density per screen
- Border elements very dark (near-invisible) — structural not decorative
- Accent green (#8AB56A) references fresh bamboo shoot colour

## Responsive Strategy

| Breakpoint | Changes |
|---|---|
| ≤1024px | 2-col grids collapse to 1-col, nav padding reduced |
| ≤768px | Mobile nav overlay, all sections to single column |
| ≤480px | Container padding reduced to 1.25rem |
