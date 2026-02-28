# Originality Report — 20260228_corporate-events

## Brand Originality

**Brand Name:** LUMINARY EVENTS (Luminary Corporate Events & Experiences)
**Status:** Fictional brand created for this template

All copy, brand narrative, team names, award citations, client testimonials, and company history are entirely original and fictional. No existing company is referenced or represented.

---

## Design Originality

### Hero Layout (Type F — Interactive Depth-Layer)
**Original implementation:** The 4-card event-type selector widget is an original UI component not cloned from any reference source. It combines:
- Glassmorphism card treatment (backdrop-filter blur)
- Radial glow hover effect via CSS `::before` pseudo-element
- GSAP sibling-dimming interaction pattern
- SVG icon set using stroke-only line icons (drawn from scratch)

This pattern does not appear in the existing portfolio (45 checked).

### Color System
Deep Teal palette (`#0A1818` / `#4DCFB0`) is an original configuration not used in any existing homepage_dream template as of 2026-02-28.

### Typography Pairing
Fraunces + Inter is used in 0 existing templates in the portfolio. Fraunces's optical size axis (`opsz`) and italic forms are distinctive and not replicated from any reference.

---

## Content Originality

### Company Narrative
- Founding story: Original (fictional West End director backstory, 2001, London)
- Team members: Entirely fictional (Alastair Pemberton-Hale, Naomi Chukwuemeka, Haruki Taniguchi, Isabelle Montfort-Delacroix)
- Award citations: Fictional but referencing real awarding bodies (ILEA, BizBash, MPI) in a generic way consistent with industry norms

### Testimonials
- Margaret Chen / Arcturus Global — fictional
- James Rothwell / Stellarion Technologies — fictional
- Sofia Andrade / Meridian Financial Group — fictional

No real individuals are quoted or impersonated.

### Statistics
- 2,400 events, 180 countries, 12 awards, Since 2001 — fictional but plausible for a 24-year-old premium events company

---

## Structural Originality

### index.html Sections
No section structure is directly cloned from an existing template. Structural patterns that appear across the portfolio (preloader, marquee strip, footer) are adapted to the Deep Teal brand system.

### process.html — Alternating Stage Blocks
The 5-stage alternating full-width block pattern with deliverable tags and animated progress bars is an original layout for this portfolio. The FAQ accordion implementation is standard and widely used.

### collection.html — Package Tier Cards
The 3-tier service package (Signature / Prestige / Legacy) is original copy. The "Most Popular" badge treatment uses CSS `::before` positioning common to pricing tables.

---

## Cross-Reference: No Duplication

Templates checked for similarity:
- `botanical-gin` — Type F hero, but gin distillery industry, completely different content
- `mead-brewery` — Type F hero, but beverage industry, different layout structure
- `surf-shaper` — Type F hero, but water sports, different content and palette
- `20260226_art-gallery` — Events adjacency, but completely different brand voice, palette (light), and hero type (D)

**Conclusion:** This template is fully original in brand, design system, copy, and structural decisions.

---

## GSAP Rules Compliance Check

| Rule | Status | Notes |
|---|---|---|
| `immediateRender: false` at top level | PASS | Verified in all `gsap.from()` calls across all 5 pages |
| No CSS `opacity: 0` on content elements | PASS | No content opacity:0 in any `<style>` block |
| Scroll indicator in preloader onComplete | PASS | `index.html` preloader onComplete shows `#heroScroll` |
| Scroll indicator setTimeout(4000) | PASS | `index.html` has `setTimeout(() => { ... heroScroll ... }, 4000)` |
| Philosophy grid `display: grid` | PASS | `.philosophy-grid { display: grid; grid-template-columns: repeat(3, 1fr) }` |
| Collection grid `overflow: visible` | PASS | `.collection-grid { overflow: visible }` |
| Footer `background: var(--bg)` | PASS | All 5 pages: `footer { background: var(--bg) }` |
| SplitText polyfill before Swiper | PASS | Inline polyfill class before all GSAP usage |
| CDN: GSAP 3.12.2 from cdnjs | PASS | All 5 pages use cdnjs.cloudflare.com |
| CDN: Swiper 11 from jsdelivr | PASS | `index.html` uses cdn.jsdelivr.net/npm/swiper@11 |
