# Clone Plan — MERIDIEM Management Consulting

**Generated:** 2026-02-28
**Slug:** 20260228_management-consulting

---

## Project Summary

Build a complete luxury multi-page website for a premium global management consulting firm called MERIDIEM Strategy Partners. The site serves as a marketing and engagement tool for Fortune 500 and high-growth company clients seeking strategic and operational consulting.

---

## Forced Constraints

| Constraint | Value |
|-----------|-------|
| Hero Layout | **Type F** — Interactive depth-layer hero with service selector widget |
| Color Palette | **P5 — Arctic Slate** (`--bg: #141820`, `--accent: #A0C4D8`) |
| Font Pair | **F6 — DM Serif Display + Karla** |
| Animation | **A1 Standard** — `y:24, duration:1.1, stagger:0.10, ease:'power2.out'` |
| Tier | free |
| Price | 0 |

---

## Pages Planned

### 1. index.html (Home)
**Target:** 1400+ lines
**Sections:**
- Preloader (animated loading bar + logo)
- Scroll indicator (right side, fixed)
- Nav (transparent → frosted on scroll)
- Hero — Type F: full-screen hero-1.webp + "TRANSFORM" float text + 4-tab service selector widget (Strategy / Operations / Digital / Transformation)
- Philosophy — 3-column grid of 6 philosophy cards
- Services Overview — 2×2 grid of 4 service cards with hover line animation
- Numbers Banner — animated counter (1,200 / 40 / 98% / 30)
- Approach Preview — image + 4-step methodology list
- Testimonials — Swiper 11 carousel with 3 client quotes
- Gallery — asymmetric 4-column image grid
- CTA Banner — centered with dual CTAs
- Footer — 4-column grid

### 2. about.html (~500 lines)
**Sections:**
- Nav (scrolled state always active)
- Page Hero (split: text left, bg image right)
- Story — image + company timeline (1995 → 2026)
- Values — 4-card 2×2 grid
- Leadership Team — 6-card 3-column grid
- Global Presence — offices list + stats
- Careers CTA — image + copy

### 3. collection.html (Practice Areas)
**Sections:**
- Page Hero
- Filter bar (All / Strategy / Operations / Digital / Transformation)
- 4 full-width practice area items (alternating image/content layout)
- Industries grid (6 sectors)
- Results strip (3 impact metrics)
- CTA section

### 4. process.html (Our Approach / Methodology)
**Sections:**
- Page Hero
- 4-phase Meridiem Method (Diagnose / Design / Deliver / Embed) — horizontal phase items with duration and output callouts
- 6 guiding principles — 3-column grid
- Case study feature (Axiom Industrials — $340M savings)
- Proprietary tools (4 tools grid)
- CTA

### 5. contact.html
**Sections:**
- Page Hero
- Contact form (left: info + methods; right: full form)
- 6 global offices grid
- FAQ accordion (6 questions)
- Footer

---

## Technical Plan

### Hero Type F Implementation
```html
<!-- Full-screen hero with bg image -->
<div class="hero-bg"> <!-- brightness(0.4) -->
<div class="hero-float-text">TRANSFORM</div> <!-- rgba accent 0.06 -->
<!-- Right-side widget -->
<div class="hero-service-widget">
  <!-- 4 tabs with data-tab attribute -->
  <!-- Description area below tabs -->
</div>
```
Tab interaction: JS click handler → toggle .active class + GSAP fade on description text.

### GSAP Rules (Non-Negotiable)
```js
// CORRECT pattern
gsap.from('.el', { immediateRender: false, scrollTrigger: {...}, y: 24, opacity: 0, duration: 1.1, ease: 'power2.out', stagger: 0.10 });
// immediateRender MUST be at top level, NOT inside scrollTrigger
```

### SplitText Polyfill
Inline on every page before Swiper script tag.

### Counter Animation
ScrollTrigger `once: true` → animate `{ val: 0 }` → target value using `gsap.to()`.

---

## Image Strategy
- All images from local `images/` directory
- No external URLs
- 11 images: hero-1 to hero-4, product-1 to product-4, ambient-1 to ambient-3

---

## Originality Approach
- Brand name: MERIDIEM (coined — not a real firm)
- All client names, statistics, and case studies are fictional
- Design system is original (P5 palette + F6 fonts — not copied from existing templates)
- Hero widget interaction pattern adapted from Type F specification
