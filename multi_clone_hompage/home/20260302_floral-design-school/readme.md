# Bloom & Form Floral School

**Tagline:** Nature, Arranged with Intention

**Industry:** Floral Design School — Ikebana, European floristry, event design, botanical installation art

**Tier:** Premium · $49

## Design System

- **Palette:** Forest Night — Deep forest greens with emerald accent
- **Primary:** `#4DAF6A` (accent green)
- **Background:** `#0F1A10`
- **Surface:** `#162016`
- **Typography:** DM Serif Display (headings) + Karla (body)

## Hero Type

**Type E — Grid/Pattern Canvas**
A canvas element renders a fine green grid with accent intersection dots over the dark forest background, creating a sense of botanical precision and botanical graph-paper aesthetics.

## Pages

| File | Description |
|------|-------------|
| `index.html` | Full luxury landing page (~620 lines) |
| `about.html` | School history, faculty, and values |
| `collection.html` | All programs with detailed listings |
| `process.html` | Five-stage teaching methodology |
| `contact.html` | Application form and studio details |

## Images Used

All images sourced from Unsplash (validated 200 OK):

- Hero canvas: generated via `<canvas>` — no external image
- Programs: `1487530811176`, `1558618666`, `1501004318641`, `1525310072745`
- Atelier: `1444664597500`
- About: `1519671482749`
- Collection: `1508739773434`

## Sections (index.html)

1. Preloader
2. Scroll Indicator (fixed left)
3. Navbar (fixed top)
4. Hero — Type E Grid Canvas
5. Stats Strip (5 stats)
6. Philosophy Grid (3-col, display:grid)
7. Programs Grid (2x2, overflow:visible)
8. Atelier (2-col)
9. Process Timeline (5 steps)
10. Heritage (4 milestones)
11. Press Swiper (3 quotes)
12. Enrollment Form
13. Footer (background:var(--bg) only)

## Animation

**A5 Organic:** y=random(20-28px), duration=random(1.0-1.4s), ease=power2.out. All `gsap.from()` calls use `immediateRender: false` at top level.
