# Clone Plan — BRODERIE Embroidery Studio

## Project Brief

**Target Type:** Luxury multi-page website for a fine craft studio
**Industry:** Fine hand embroidery / needlework art
**Pages:** 5 (index, about, collection, process, contact)
**Hero Type:** E — Grid/Pattern Canvas
**Palette:** P4 — Deep Burgundy
**Font Pair:** F8 — Bodoni Moda + Work Sans
**Animation:** A4 — Dramatic

---

## Design Direction

### Brand Identity
BRODERIE is positioned as the apex of the fine embroidery market — a studio where wait times are measured in months, commissions in hundreds of hours, and pieces in centuries of expected longevity. The brand voice is deliberately slow: long sentences, meditative pauses, zero urgency.

### Visual Language
- Deep burgundy-black backgrounds evoking a candle-lit atelier at dusk
- Ivory and rose accents suggesting raw silk and thread
- Bodoni Moda serif for gravitas and historical continuity
- Work Sans 300 weight for a light, airy counterpoint
- Fine grid lines and dot patterns referencing the weave of embroidery fabric
- Corner accents suggesting an embroidery hoop or a museum frame

### Hero Type E Execution
The canvas draws:
1. A fine orthogonal grid at low opacity (cross-stitch reference)
2. Animated pulsing dots at grid intersections (needle-through-fabric effect)
3. Diagonal accent lines at 45° (cross-stitch diagonal pattern)
4. Corner border accents in rose gold

The background image is revealed slowly (scale 1.08 → 1 over 8 seconds) after preloader completes.

---

## Content Architecture

### Index Page Hierarchy
```
PRELOADER (brand name + loading line)
  → HERO (canvas grid + title BRODERIE + tagline)
    → STATS (30 years / 1200+ pieces / 47 techniques / 18 countries)
      → PHILOSOPHY (3 principles — Meditative Process / Heirloom Quality / Narrative Thread)
        → COLLECTION PREVIEW (asymmetric grid — 3 product images)
          → ATELIER (split — interior image + story copy)
            → PROCESS OVERVIEW (4-step horizontal flow)
              → HERITAGE (split — heritage image + tradition list)
                → TESTIMONIALS (Swiper carousel — 4 clients)
                  → COMMISSION CTA (split — info + short form)
                    → FOOTER (4-column grid)
```

### About Page Hierarchy
```
PAGE HERO (ambient image underlay)
  → FOUNDER STORY (portrait + biography + pullquote)
    → ARTISANS (4-up grid — each with portrait, name, role, speciality)
      → TIMELINE (alternating left/right — 7 milestones, 1995–2025)
        → VALUES (3×2 grid — 6 principles)
          → LOCATION (split — address + hours + image)
            → FOOTER
```

### Collection Page Hierarchy
```
PAGE HERO
  → FILTER TABS (All / Couture / Bridal / Wall Art / Heirlooms / Goldwork)
    → FEATURED WORKS (hero grid — 1 large + 2 secondary)
      → WORKS GRID (3-column — 6 specific pieces with specs)
        → CATEGORIES (4-column — browse by type)
          → CTA BAND (commission prompt)
            → FOOTER
```

### Process Page Hierarchy
```
PAGE HERO
  → FOUR STAGES (alternating full-bleed layout — each with image + copy)
    → STITCH TECHNIQUES (3×2 grid — 6 named techniques with difficulty)
      → MATERIALS (4-column — silk / linen / needles / gold thread)
        → FRAMING (split — 4-step process + image)
          → FAQ (accordion — 6 questions)
            → CTA BAND
              → FOOTER
```

### Contact Page Hierarchy
```
PAGE HERO
  → COMMISSION FORM (sidebar with info + pricing + testimonial / main form)
    → CONTACT ALTERNATIVES (3-column — email / atelier / Instagram)
      → FOOTER
```

---

## Technical Implementation Plan

### Phase 1 — Structure
- [x] Create directory structure
- [x] Set up shared CSS custom properties (P4 palette + F8 fonts)
- [x] Build reusable navbar component (fixed, scroll-darkened)
- [x] Build reusable footer component (4-column)

### Phase 2 — Index Page
- [x] Preloader with brand name and sweep animation
- [x] Hero canvas (grid + dot animation + diagonal accents)
- [x] Hero content with SplitText character animation
- [x] Corner accent elements
- [x] Stats section
- [x] Philosophy 3-column grid
- [x] Collection asymmetric preview grid
- [x] Atelier split layout
- [x] Process 4-step flow
- [x] Heritage split layout
- [x] Testimonials Swiper
- [x] Commission CTA form
- [x] Scroll indicator (preloader + setTimeout fallback)

### Phase 3 — Sub-pages
- [x] about.html — founder, artisans, timeline, values, location
- [x] collection.html — filter tabs, featured, grid, categories
- [x] process.html — stages, techniques, materials, framing, FAQ
- [x] contact.html — full commission form, sidebar, alternatives

### Phase 4 — Documentation
- [x] meta.json
- [x] readme.md
- [x] docs/clone_plan.md
- [x] docs/originality_report.md
- [x] docs/image_validation.md

---

## GSAP Animation Map

| Section | Animation | Trigger |
|---|---|---|
| Hero title | SplitText chars, y:60, stagger:0.07 | preloader complete |
| Hero eyebrow/subtitle | y:40, opacity:0 | preloader complete |
| Hero CTAs | y:40, opacity:0, delay:1.2 | preloader complete |
| Corner accents | scale:0.5, stagger:0.1 | preloader complete |
| Stats items | y:40, stagger:0.15 | `top 80%` |
| Philosophy cards | y:40, stagger:0.15 | `top 80%` |
| Collection cards | y:40, stagger:0.15 | `top 80%` |
| Atelier visual | x:-50 | `top 75%` |
| Atelier text | x:50 | `top 75%` |
| Process steps | y:40, stagger:0.15 | `top 80%` |
| Heritage | x:±50 | `top 75%` |
| Commission form | x:±50 | `top 75%` |

All use `immediateRender: false` at **top level of gsap.from() vars**.
