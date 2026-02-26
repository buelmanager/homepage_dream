# Clone Plan — LEVAIN Sourdough Bakery

## Project Overview

| Field | Value |
|-------|-------|
| Slug | 20260226_sourdough-bakery |
| Type | Luxury Multi-Page Landing |
| Pages | 5 (index, about, bread, classes, contact) |
| Style | Luxury / Warm Dark / Heritage Craft |
| Industry | Food & Artisan Bakery |
| Created | 2026-02-26 |

## Design Reference & Concept

LEVAIN is an entirely original luxury brand concept. No direct visual reference was cloned. The design draws inspiration from the aesthetic language of:

- High-end Parisian patisseries (typographic restraint, gold accents)
- Natural wine bar and restaurant identities (warm dark palettes, editorial photography)
- Craft brewery landing pages (process transparency, heritage narrative)
- Luxury watch and perfume brand conventions (section pacing, whitespace, cinematic hero)

The combination of these references in the context of sourdough bread is original.

## Page Architecture

### index.html
**Hero Type:** Cinematic Full-Screen (Type A)
**Sections:**
1. The Daily Loaves — 4-card bread grid with large featured card
2. The Culture — Two-column feature: image + story + 4 stats
3. The School — 3-column class overview grid with hover effect
4. The Bakers — 3 portrait cards
5. Reserve Your Loaf — Subscription plan comparison

**Animations:**
- Preloader: Dual-ring spinner with fill bar
- Hero: Letter-by-letter title reveal from bottom (GSAP)
- Scroll Indicator: Left-side vertical with animated line
- Sections: ScrollTrigger opacity+y reveals

### about.html
**Hero:** 60vh cinematic with starter culture image
**Sections:**
1. Story — Timeline grid (4 milestones)
2. The Culture — Feature with image stack, float card, 3 pillars
3. The Grain — 6-variety grid
4. The Bakers — 3 full biography cards
5. Values — Quote + 4-column stats grid

### bread.html
**Hero:** 55vh cinematic with bread close-up
**Sections:**
1. Filter bar (UI only)
2. Bread Grid — 6 product cards with metadata and pricing
3. Featured Loaf — Two-column seasonal feature
4. Process — 5-step baking ritual (connected with timeline line)
5. Nutrition — Table + sticky image

### classes.html
**Hero:** 65vh cinematic with scoring image + body text
**Sections:**
1. Stats bar — 4 quick figures
2. Classes Grid — 4 classes in 2x2 split-image layout
3. Schedule Table — 7 upcoming sessions with booking status
4. Private Sessions — Feature + 3 pillars
5. Testimonials — 3 cards
6. Booking CTA

### contact.html
**Hero:** 55vh cinematic with rye bread image
**Sections:**
1. Visit — Map placeholder + address + hours grid
2. Order Online — Pre-order form + how-it-works explanation
3. Class Booking — Image + full booking form
4. Subscription — Plan selector + signup form
5. Social proof strip — 5 numbers

## Colour System Compliance

| Variable | Hex | R | G | B | Avg | Status |
|----------|-----|---|---|---|-----|--------|
| --bg | #1F1A10 | 31 | 26 | 16 | 24.3 | PASS (≥20) |
| --surface | #2A231A | 42 | 35 | 26 | 34.3 | PASS |
| Footer | uses var(--bg) | — | — | — | 24.3 | PASS |
| All sections | --bg or --surface | — | — | — | ≥24 | PASS |

## GSAP Compliance

- All `gsap.from()` calls include `immediateRender: false` at TOP LEVEL (not inside scrollTrigger)
- No `opacity: 0` in CSS on content elements
- Animation parameters: y: 20–28, duration: 0.9–1.2, ease: 'power2.out', stagger: 0.08–0.15
- SplitText: Not used (no Club GSAP dependency). Title split implemented via JS innerHTML loop.
- ScrollTrigger start: 'top 75%' to 'top 85%' (smooth reveal, no blinking)
