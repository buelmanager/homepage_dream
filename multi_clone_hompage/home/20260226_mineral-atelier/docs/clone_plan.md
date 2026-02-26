# Clone Plan — LITHIC Mineral Atelier

**Template:** `20260226_mineral-atelier`
**Created:** 2026-02-26
**Status:** Complete

---

## Project Scope

Build a complete luxury multi-page landing page for LITHIC, a fictional exclusive mineral specimen and gemstone gallery. All design, copy, code, and structure is original — no external site was cloned or directly reproduced.

---

## Concept Development

### Reference Mood

The design takes aesthetic inspiration from:
- **Museum galleries** — restrained, dark backgrounds, specimen-forward photography
- **Luxury auction houses** (Christie's, Bonhams) — provenance documentation emphasis, serif typography
- **High-end jewellery boutiques** — gold accent palette, white-glove language
- **Science institutions** — mineralogical nomenclature, geological accuracy

All design decisions, copy, layout architecture, and interactive patterns are original creations. No single website was replicated.

---

## Design Rationale

### Colour System
- `--bg: #1A1A1F` — Near-black with slight blue-violet undertone (echoes deep earth, night sky). Average: 27.7 — passes DARK_THRESHOLD=15 test.
- `--surface: #222230` — Slightly lighter, used for cards and footers
- `--accent: #C0A040` — Warm gold (geological gold veins, luxury)
- `--accent2: #9080C0` — Amethyst purple (ties directly to the primary mineral category)
- `--text: #F0EEF8` — Warm white with slight violet tint

### Typography
- **Bodoni Moda** (headings): Classic serif with high contrast — geological elegance, museum authority
- **Inter** (body): Modern, readable, scientific precision

### Layout Decisions
- **Hero type A (Cinematic):** Full-screen mineral macro photography. Dark overlay at 0.38 brightness to ensure text legibility while showing mineral colour.
- **Crystal facet SVG overlay:** Thin-stroke polygon mesh creates geological texture without obscuring imagery.
- **Masonry-style specimen grid:** Staggered vertical offsets on cards 2 and 5 create visual dynamism while maintaining grid structure.
- **Category grid:** Full-bleed edge-to-edge (2px gap only) for maximum visual impact.

---

## Page Architecture

### index.html
- **Purpose:** Primary landing and conversion page
- **Key sections:** Preloader → Hero → Specimens (masonry) → Categories → Bespoke → Provenance → CTA → Footer
- **Conversion goals:** Drive to collection.html or contact.html

### about.html
- **Purpose:** Build authority and trust via team credentials and sourcing philosophy
- **Key sections:** Story (with stats) → Philosophy (3 pillars) → Team (3 profiles) → Sourcing regions

### collection.html
- **Purpose:** Main catalogue page for specimen discovery
- **Key sections:** Filter bar → Collection grid (10 cards, 2 featured) → Specimen of Month highlight → Meteorite special

### bespoke.html
- **Purpose:** Convert interior designers, architects, and corporate clients to consultation
- **Key sections:** Intro → Services (3 cards) → Portfolio (full-bleed + 2-col) → 5-step process → Testimonials → CTA

### contact.html
- **Purpose:** Capture qualified leads via detailed inquiry form
- **Key sections:** Type tabs → Form + info panel → Viewing formats → 4-gallery location cards

---

## GSAP Implementation

All animations follow project GSAP rules:
1. `immediateRender: false` at TOP LEVEL of all `gsap.from()` with ScrollTrigger
2. No `opacity: 0` in CSS on content elements
3. Preloader exits via `gsap.to(preloader, { opacity: 0 })`
4. Scroll indicator shown in two places: preloader onComplete callback + setTimeout(4000ms)
5. Hero parallax: scrub-based, no scroll trigger once
6. Stagger values: 0.08–0.15 (within 0.08–0.12 recommendation)
7. y values: 20–40px max
8. Duration: 0.85–1.2s
9. Ease: 'power2.out' throughout

---

## Responsive Breakpoints

- **1280px+:** Full desktop layout (4-col grids, side-by-side layouts)
- **1024px–1280px:** 3-col → 2-col reductions, stacked layouts
- **640px–1024px:** 2-col or single column, hidden nav links
- **< 640px:** Full mobile — single column, condensed spacing, hidden scroll indicator

---

## Completion Checklist

- [x] index.html — all sections complete
- [x] about.html — all sections complete
- [x] collection.html — all sections complete
- [x] bespoke.html — all sections complete
- [x] contact.html — all sections complete
- [x] meta.json — all fields populated
- [x] readme.md — complete documentation
- [x] docs/clone_plan.md (this file)
- [x] docs/originality_report.md
- [x] docs/image_validation.md
- [x] images/thumbnail.webp — generated and verified
- [x] All nav links use real page paths (no href="#")
- [x] GSAP rules compliance verified
- [x] Background colour avg ≥ 20 confirmed (#1A1A1F avg = 27.7)
