# Clone Plan — ENTOMO Insect Fine Dining

**Template:** `20260226_insect-fine-dining`
**Date:** 2026-02-26
**Type:** Original / Conceptual Design (not a direct clone)

---

## Brand Concept

**Restaurant Name:** ENTOMO
**Location:** Copenhagen, Denmark
**Concept:** Avant-garde fine dining centered on ethically sourced insects
**Tagline:** "The Future of Flavor"
**Covers:** 20 per night, Wednesday–Saturday
**Format:** 12-course tasting menu

### Reference Restaurants (Inspiration, Not Clones)

The ENTOMO template draws loose aesthetic inspiration from:

1. **Noma** (Copenhagen) — Nordic minimalism, fermentation focus, foraging ethos
2. **Single Thread** (Sonoma) — Luxury farm-to-table narrative, seasonal precision
3. **Atelier Crenn** (San Francisco) — Poetic menu language, chef-as-artist narrative
4. **Mirazur** (Menton) — Garden/nature integration in visual identity

None of these sites were copied. ENTOMO's visual identity is original, built from scratch with a unique color system and concept.

---

## Design Decisions

### Color System Origin
The `#131F13` background was selected as a deep forest green — evoking:
- Insect natural habitats (forest floors, soil)
- Chlorophyll in living plant matter
- The "wild" aesthetic of Nordic foraging cuisine

The `#80D040` bio-lime accent directly references:
- The green color of cricket and grasshopper exoskeletons
- Bioluminescence in nature
- Sustainable / ecological brand language

The `#F0C840` amber gold secondary accent references:
- Honey from Apis mellifera (bees on the menu)
- The amber color of cricket garum
- Luxury brand warmth

### Typography
- **Fraunces** (variable serif): Chosen for its organic ink-trap forms that suggest hand-craftsmanship, ink, and the natural world. The italic variant adds poetic weight for taglines.
- **Inter**: Clean, scientific readability for body copy — deliberately contrasting the warmth of Fraunces to represent the science/art duality.

### Layout Patterns
- Cinematic hero: Full-viewport, dark overlay, particle system
- Alternating two-column content sections (image left / text right, then reversed)
- Dense course listing in menu (document-style, not card-grid) for readability
- Calendar with color-coded availability states for reservations
- Left-fixed scroll indicator for luxury magazine aesthetic

---

## Page Architecture

```
index.html ──── Primary landing page
  ├── about.html ──── Brand story + farm sourcing
  ├── menu.html ──── Full 12-course menu + wine pairing
  ├── reservations.html ──── Booking system + FAQ
  └── contact.html ──── Press + partnerships + directions
```

All pages share:
- Identical navbar (sticky, blur effect on scroll)
- Identical footer (4-column grid)
- Same GSAP CDN includes
- Consistent CSS custom properties from `:root`

---

## Content Strategy

Menu content is fully original and researched:
- All 12 insects are real edible species
- Latin names are scientifically accurate
- Water usage statistics (beef: 15,400L/kg) are from UN FAO reports
- EU Novel Food regulation references are accurate (approved 2021)
- Chef biographies are fictional but grounded in real culinary world references (Noma, El Celler de Can Roca)

---

## Technical Implementation Plan

### Step 1: Core Layout (index.html) ✓
- Preloader SVG animation
- Canvas particle system
- Hero entrance animations
- Parallax scroll
- All 5 sections with GSAP ScrollTrigger

### Step 2: Sub-pages (about, menu, reservations, contact) ✓
- Sub-hero with parallax
- Section-specific GSAP entrance animations
- Interactive elements (FAQ accordion, calendar, forms)

### Step 3: Assets ✓
- thumbnail.webp (600px, 80% quality, ~20KB)
- Unsplash images (live CDN, no local copies)

### Step 4: Documentation ✓
- meta.json
- readme.md
- docs/ (clone_plan, originality_report, image_validation)
