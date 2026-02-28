# FORMA ATELIER — Architecture Studio Portfolio

**Slug**: `20260228_architect-portfolio`
**Tier**: PRO · **Price**: $49
**Created**: 2026-02-28

---

## Brand

| Field | Value |
|-------|-------|
| Studio Name | FORMA ATELIER |
| Tagline | Space as Statement. |
| Industry | Architecture & Spatial Design |
| Tone | Precise, intellectual, minimalist Scandinavian |
| Locations | Oslo · Copenhagen · Tokyo |

---

## Design System

| System | Value |
|--------|-------|
| Color Palette | P5 Arctic Slate |
| Background | #141820 |
| Accent | #A0C4D8 |
| Heading Font | Bebas Neue |
| Body Font | DM Sans 300/400/500 |
| Hero Layout | Type E — Grid/Pattern Canvas |
| Animation | A3 Precise: x:-20px, 0.75s, power3.out |

---

## Pages

1. **index.html** — Homepage with Type E Grid Canvas hero
2. **about.html** — Studio manifesto, principal architect, team, accolades
3. **collection.html** — Filterable projects grid (Residential/Commercial/Cultural)
4. **process.html** — 6-phase design process, materials, sustainability
5. **contact.html** — Project inquiry form, office addresses, press kit

---

## Hero Type E Implementation

The hero uses a CSS Grid of 6 image panels occupying the right 55% of the viewport, combined with an animated architectural grid canvas rendered via `<canvas>`. Key features:

- Canvas draws architectural grid lines with dot intersections at 70px intervals
- Image panels reveal sequentially with GSAP stagger (scale + opacity)
- Left side fades to solid background for text legibility
- Corner accent brackets at all four viewport corners
- Coordinate marker bottom-right (Oslo lat/long)

---

## Images (22 validated webp)

| File | Content |
|------|---------|
| hero-1.webp | Modern architectural facade |
| hero-2.webp | Minimalist interior space |
| hero-3.webp | Architectural model/drawing |
| hero-4.webp | Glass and steel building |
| hero-5.webp | Concrete minimal architecture |
| hero-6.webp | Geometric building detail |
| hero-7.webp | Studio workspace |
| hero-8.webp | Steel structure detail |
| project-1.webp | Vantage Residence — Bergen |
| project-2.webp | Meridian Cultural Center |
| project-3.webp | Axiom Tower — Oslo |
| project-4.webp | Fjord House — Stavanger |
| project-5.webp | Yanaka Studios — Tokyo |
| project-6.webp | Strata HQ — Copenhagen |
| studio-1.webp | Studio workspace |
| studio-2.webp | Office environment |
| studio-3.webp | Team working |
| interior-1.webp | Interior residential |
| interior-2.webp | Interior commercial |
| interior-3.webp | Interior cultural |
| process-1.webp | Construction detail |
| process-2.webp | Blueprint/documentation |

All images validated HTTP 200 before download. Converted to WebP q82 at 1920px width.

---

## GSAP Notes

- All animations use `immediateRender: false` at top level
- No `opacity:0` in CSS on content elements
- A3 Precise: `x: -20`, `duration: 0.75`, `stagger: 0.04`, `ease: 'power3.out'`
- SplitText inline polyfill included in index.html
- Scroll indicator shown in 2 places: preloader callback + setTimeout 4000ms
