# Clone Plan — OBSCURA Night Photography Academy

## Concept

**OBSCURA** is an original luxury brand concept for an elite night photography academy and dark-sky expedition operator. This is not a clone of any existing website — it is an original design created to fill the "luxury photography education" category in the template library.

## Design Inspiration Sources

The design draws from multiple luxury brand categories for different elements:

| Element | Inspiration Category |
|---------|---------------------|
| Dark color palette (deep indigo + star gold) | Luxury watchmakers (Vacheron Constantin, IWC) |
| Star-field preloader | Planetarium / observatory brand identities |
| Cinematic full-screen hero | Luxury travel brand landing pages (Aman, Six Senses) |
| Character-entrance text animation | Fashion luxury (Bottega Veneta, Loewe) |
| Workshop card layout (image + content) | Premium culinary schools (Le Cordon Bleu, Alain Ducasse) |
| Expedition destination cards | Luxury safari operators (Singita, andBeyond) |
| Fixed side scroll indicator | Contemporary luxury architecture studios |

## Page Architecture Decision

| Page | Rationale |
|------|-----------|
| `index.html` | Full luxury landing — hook, portfolio, academy, expeditions, masters, CTA |
| `about.html` | Story-first approach — critical for premium trust-building |
| `workshops.html` | Product/service page — drives primary conversion |
| `expeditions.html` | Experiential page — highest ASP, requires immersive detail |
| `contact.html` | Conversion page — multi-inquiry-type form, FAQ to reduce friction |

## GSAP Animation Strategy

### Hero
- Individual character entrance (`gsap.from('.char', {...})`) — staggered 0.08s
- `immediateRender: false` at top level
- Aperture SVG: CSS `rotate` animation (not GSAP — avoids layout jank)

### Scroll Sections
- All sections use `scrollTrigger: { start: 'top 80%' }` or `'top 85%'`
- `immediateRender: false` mandatory on all `gsap.from()` calls
- `y: 20–28px`, `duration: 0.9–1.1s`, `ease: 'power2.out'`
- `stagger: 0.08–0.15s` for grid/list items

### Preloader
- Pure CSS animations for star-field dots (`@keyframes starAppear`)
- Loading bar CSS animation (`@keyframes barFill`, duration 2.4s)
- GSAP `to` for preloader fade-out after `window.load` + 2.8s delay

## Color Validation

| Token | Hex | R | G | B | Avg | Pass? |
|-------|-----|---|---|---|-----|-------|
| `--bg` | `#15151E` | 21 | 21 | 30 | 24.0 | YES (≥20) |
| `--surface` | `#1C1C2A` | 28 | 28 | 42 | 32.7 | YES |
| `--accent` | `#8060FF` | 128 | 96 | 255 | 159.7 | YES |
| `--accent2` | `#F0C840` | 240 | 200 | 64 | 168.0 | YES |

All section backgrounds use `var(--bg)` or `var(--surface)` — no hardcoded dark hex values in section backgrounds.
Footer uses `var(--bg)` only.

## Responsive Breakpoints

| Breakpoint | Changes |
|-----------|---------|
| `max-width: 900px` | Switch to single column, hide side scroll indicator, stack hero columns |
| `max-width: 600px` | Stack all grids to single column, reduce font sizes |

## Typography Scale

| Element | Font | Weight | Size |
|---------|------|--------|------|
| Hero title | Space Grotesk | 700 | clamp(4rem, 12vw, 10rem) |
| Section titles | Space Grotesk | 700 | clamp(2rem, 5vw, 3.5rem) |
| Nav logo | Space Grotesk | 700 | 1.1rem |
| Body text | Inter | 400 | 1rem |
| Labels/tags | Inter | 400 | 0.6–0.72rem + letter-spacing |

## Unique Design Elements

1. **Star-field preloader** — JavaScript generates 120 DOM star dots, each with randomized `animation-delay` and `animation-duration`. No external libraries.

2. **Aperture SVG** — Pure inline SVG mimicking a camera aperture with 6 blades. CSS `rotate` animation (30s linear infinite).

3. **SVG World Map** — Hand-crafted simplified continent paths in `expeditions.html`. Expedition location pins render as animated circles with labels.

4. **Character-entrance hero** — "OBSCURA" characters wrapped individually in `<span class="char">` elements, animated with GSAP stagger.

5. **FAQ Accordion** — Pure JavaScript expand/collapse with CSS `max-height` transition. No external libraries.
