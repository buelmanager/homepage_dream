# Clone Plan — CEREUS Encaustic Art Studio

**Template Slug:** `20260227_encaustic-studio`
**Date:** 2026-02-27
**Category:** Fine Art / Luxury Single-Artist Studio

---

## Concept

CEREUS is modelled on the archetype of the single-artist luxury studio website — a typology common in high-end art practice where the artist's voice, technique, and heritage are the primary differentiator. The design draws inspiration from:

- Ancient manuscript aesthetics (deep purple-black palette, burnished gold accents)
- Fayum portrait tradition (2,000-year-old Greco-Egyptian encaustic paintings)
- Contemporary luxury art gallery digital presence

The brand is entirely fictional and original. No specific real-world studio was replicated.

---

## Hero Type Selection: G — Scroll-Driven Text Transform

**Rationale:** Type G was chosen because the encaustic medium is inherently about transformation under heat. The scroll-driven text transform — where "CEREUS" and "WAX" move at different rates as the user scrolls — enacts the quality of molten wax in motion. The large typographic hero also references the ancient monumental inscription tradition (Greek stelae, Roman tomb panels).

**Implementation:**
- `word-1` (CEREUS) scrolls upward at `yPercent: -40`, `scale: 0.85`
- `word-2` (WAX) scrolls downward at `yPercent: 60`, `scale: 1.15`
- Background parallax at `yPercent: 30`
- All scroll transforms use `scrub: true` via ScrollTrigger
- Hero entrance uses `gsap.from()` with `immediateRender: false`

---

## Color Palette: P6 Midnight Purple

| Role | Hex | Rationale |
|---|---|---|
| Background | `#130F1A` | Deep purple-black — night, mystery, ancient tomb |
| Surface | `#1C1626` | avg(28+22+38)/3 = 29.3 — above dark threshold |
| Surface2 | `#231D30` | avg(35+29+48)/3 = 37.3 — above dark threshold |
| Accent | `#9B6EDB` | Amethyst purple — link to ancient Tyrian pigment |
| Ivory | `#EAE0F8` | Warm lavender white — aged papyrus, bleached linen |
| Smoke | `#907890` | Cool mid-tone for body copy |

**Dark Section Audit:**
- `--bg: #130F1A` → avg = (19+15+26)/3 = 20 — exactly at safe minimum
- `--surface: #1C1626` → avg = 22.7 — safe
- Footer: uses `background: var(--bg)` — no hardcoded hex

---

## Typography: F9 — Spectral + Mulish

- **Spectral:** Old-style serif with true italics — chosen for its manuscript quality and connection to archival printing. The italic `font-style: italic` on hero-word-2 ("WAX") creates elegant contrast.
- **Mulish:** Geometric humanist sans — clean, contemporary, legible at small tracking values.

---

## Section Architecture

### index.html
1. Preloader (bar animation, 1.8s delay before dismiss)
2. Scroll Indicator (fixed right, shown after preloader + setTimeout 4000ms)
3. Navbar (fixed, scrolled state on scroll > 60px, mobile hamburger)
4. Hero Type G (scroll-driven, parallax bg, two-word typographic hero)
5. Stats (4-col grid: 300+ Works, 2000 Year Method, 40 Pigments, Intl. Exhibitions)
6. Philosophy (3-col CSS grid, NOT flex)
7. Collection (2-col asymmetric grid, overflow: visible)
8. Studio (2-col, media left + content right with blockquote)
9. Process (4-step horizontal grid)
10. Fayum Heritage (2-col, content left + portrait image right)
11. Testimonials (Swiper, 3 slides, autoplay 6s)
12. Acquisition Form (grid, 6 fields)
13. Footer (`background: var(--bg)`)

### about.html
- Artist portrait, biography, quote, credentials timeline
- Materials: Beeswax, Damar Resin, Mineral Pigments (3-col grid)
- Exhibition history (tabular list)
- CTA strip

### collection.html
- Filter tabs (JS show/hide by category)
- 5 category sections: Abstracts (6 cards), Portraits (2 large), Landscapes (3), Commissions (CTA)
- Workshop section (3 cards: Foundation, Intermediate, Advanced)

### process.html
- 4-step detailed process with number, title, description, technical specs
- Tools section (4 cards)
- Temperature reference table
- Archival permanence section with 4 bullet points

### contact.html
- Inquiry type selector (4 visual cards)
- Full form (name, email, phone, inquiry type, budget range, context, message, newsletter)
- Form success state (replaces form on submit)
- Contact info (3 cards)
- Commission walkthrough (4-step guide)

---

## Animation System: A4 Dramatic

```js
// Standard entrance
gsap.from(el, {
  immediateRender: false,
  opacity: 0,
  y: 40,
  duration: 1.2,
  ease: 'power2.inOut',
  stagger: 0.15,
  scrollTrigger: { trigger: el, start: 'top 85%' }
});
```

All animations use `immediateRender: false` at top level. No `opacity: 0` in CSS.
