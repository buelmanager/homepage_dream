# Clone Plan — 20260227_resin-studio

## Overview

**Project:** ARDENT Resin Art Studio — Multi-Page Luxury Website
**Date:** 2026-02-27
**Template Slug:** 20260227_resin-studio
**Tier:** Free
**Pages:** 5 (index, about, collection, process, contact)

---

## Design Brief Summary

| Attribute | Value |
|---|---|
| Hero Layout | Type B — Parallax + Ken Burns, mousemove parallax |
| Color Palette | P9 Rust Ember |
| Font Pair | F4 (Cinzel / Crimson Pro) |
| Animation Persona | A5 Organic |
| Primary Accent | #D4612A |
| Industry | Luxury Resin / Epoxy Art |

---

## Page Plan

### Page 1: index.html (Landing Page)

**Goal:** Create a fiery, artisanal luxury first impression with immersive hero and full product showcase.

**Sections planned:**
1. Preloader — SVG brand mark (star polygon in circle), brand name, animated loading bar
2. Scroll Indicator — fixed left, dot + animated line + label + progress bar
3. Navbar — fixed, blur + border on scroll
4. Hero (Type B) — two parallax layers, mousemove offset, floating "Est. 2019" badge, large title
5. Stats Strip — 4-col grid, animated number counters
6. Philosophy — 3-col CSS grid (NO flex), accent border hover cards
7. Collection Grid — 2x2 CSS grid, product images with overlay
8. Atelier — 2-col (image left, content right), image scale on scroll
9. Process — vertical timeline, 5 steps, line fill on scroll
10. Heritage — 4-col milestone grid
11. Press — Swiper carousel, 3 testimonials with author avatars
12. Commission Form — 2-col form grid, styled selects
13. Footer — 4-col grid, var(--bg) background

**GSAP Animations:**
- Hero reveal sequence (eyebrow → title → subtitle → CTA, staggered delay)
- Mousemove parallax on .layer-1 and .layer-2 at different intensities
- Counter animation on stats (ScrollTrigger, once)
- Philosophy cards: stagger 0.09, y random 20-28
- Collection items: stagger 0.09
- Atelier image: scale from 1.08 to 1.0
- Timeline line fill: updated on scroll progress
- Badge: continuous rotation animation (20s loop)

---

### Page 2: about.html (Studio Story)

**Goal:** Humanize the brand, tell the founder story, establish craft credentials.

**Sections planned:**
1. Navbar (same)
2. Page hero — large ARDENT watermark text in background
3. Founder story — 2-col split, image + blockquote
4. Studio philosophy — 2x2 values grid with SVG icons
5. Team / artisans — 3-col cards with circular avatar placeholders
6. Awards timeline — vertical list, year / title / body / org
7. Footer (same)

---

### Page 3: collection.html (Art Collection)

**Goal:** Showcase the full range of products, enable filtering by category.

**Sections planned:**
1. Navbar (same)
2. Page hero — decorative symbol watermark
3. Filter tabs — All / Resin Tables / Wall Art / Jewelry / Custom
4. Collection grid — 3-col, 9 products, JS filter on tab click
5. Showcase banner — full-width image with overlay text + CTA
6. Footer (same)

---

### Page 4: process.html (Creation Process)

**Goal:** Build trust and transparency by detailing the 6-step creation method.

**Sections planned:**
1. Navbar (same)
2. Page hero — split layout with image on right
3. Process intro header
4. 6 step blocks — alternating left/right layout, each with number, title, text, image
5. Video placeholder — thumbnail + play button overlay
6. FAQ accordion — 6 questions with toggle animation
7. Footer (same)

---

### Page 5: contact.html (Commission & Contact)

**Goal:** Convert visitors into commission inquiries with a detailed, trust-building form.

**Sections planned:**
1. Navbar (same)
2. Page hero — full-bleed image with overlay
3. Commission form — comprehensive: name, email, phone, project type, dimensions, budget, timeline, interests checkboxes, vision message, source
4. Studio info — address, phone, email, hours, timeline steps
5. Map placeholder — CSS grid pattern with animated pin
6. Trust section — 3 cards (originals / pricing / support)
7. Footer (same)
8. Form success state — fade in after submit

---

## Shared Components

**Navbar:** All 5 pages share identical navbar HTML. Active state applied per page via `.active` class.

**Footer:** All 5 pages share identical 4-col footer. `background: var(--bg)` only.

**CSS Variables:** Identical `:root` block on every page for palette consistency.

**GSAP:** All 5 pages load GSAP 3.12.2 + ScrollTrigger from cdnjs. Swiper only on index.html.

---

## Asset Requirements

Images must exist at these paths:
- `images/hero-1.webp` through `images/hero-4.webp`
- `images/product-1.webp` through `images/product-4.webp`
- `images/ambient-1.webp` through `images/ambient-3.webp`
- `images/thumbnail.webp` (600px wide, for manifest)

---

## Quality Checks

- [ ] All section backgrounds use CSS variables (no hardcoded dark hex below avg 20)
- [ ] Footer uses `background: var(--bg)` on all 5 pages
- [ ] Philosophy grid uses `display: grid; grid-template-columns: repeat(3, 1fr)`
- [ ] Collection grid uses `overflow: visible`
- [ ] All `gsap.from()` calls have `immediateRender: false` at top level
- [ ] No `opacity: 0` in CSS on content elements
- [ ] Scroll indicator shows on preloader callback AND setTimeout(4000)
- [ ] Custom scrollbar: `scrollbar-width: thin; scrollbar-color: var(--accent-dark) var(--bg)`
- [ ] All pages mobile responsive at 375px, 768px, 1440px
- [ ] English-only content
- [ ] No SplitText CDN (inline polyfill in index.html)
