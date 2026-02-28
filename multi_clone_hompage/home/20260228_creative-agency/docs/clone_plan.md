# Clone Plan — EMBER STUDIO Creative Agency

**Task:** Build premium multi-page luxury template for award-winning creative branding agency
**Slug:** `20260228_creative-agency`
**Status:** COMPLETE
**Date:** 2026-02-28

---

## Checklist

- [x] Project directory created (`20260228_creative-agency/`)
- [x] Images directory created (`images/`)
- [x] Docs directory created (`docs/`)
- [x] `index.html` written (1400+ lines, all sections, inline CSS+JS)
- [x] `about.html` written (agency story, team, values, offices)
- [x] `collection.html` written (work grid, filter bar, featured case)
- [x] `process.html` written (6 phases, methodology, timeline, FAQ)
- [x] `contact.html` written (form, budget selector, sidebar, offices)
- [x] `meta.json` written
- [x] `readme.md` written
- [x] `docs/clone_plan.md` written
- [x] `docs/originality_report.md` written
- [x] `docs/image_validation.md` written

---

## index.html Sections

- [x] Preloader — wordmark + progress bar animation
- [x] Scroll Indicator — fixed left, animated line, visible after preloader AND setTimeout(4000)
- [x] Navbar — logo, nav links, CTA, scroll-state `scrolled` class
- [x] Hero (TYPE F) — Full-screen dark bg, massive Bebas Neue headline, interactive widget
  - [x] hero-1.webp at brightness(0.3)
  - [x] Headline: "WE BUILD BRANDS THAT LEAD" at clamp(5rem, 14vw, 12rem)
  - [x] Work-type selector with 5 tags: Branding / Digital / Campaign / Identity / Strategy
  - [x] Animated reveal on tag click (GSAP fromTo)
  - [x] Orange accent glow on active tag
  - [x] Stats bar: 340+ Brands / 28 Cannes Lions / 180 Staff / 17 Years
- [x] Marquee Strip — accent bg, scrolling text
- [x] Philosophy — 3-column grid (display: grid; grid-template-columns: repeat(3, 1fr))
- [x] Services / Disciplines — sticky left, 5 service items list
- [x] Featured Work — 12-column grid, 4 work cards, overflow: visible
- [x] Awards — 2-column, visual + award rows
- [x] Testimonials — Swiper 11, 3 slides, custom pagination
- [x] Ambient Gallery — 3-col, 2-row CSS grid, 4 cells
- [x] Contact CTA — centered, ghost + primary CTA buttons
- [x] Footer — background: var(--bg), 4-column, social links, legal

---

## GSAP Critical Rules Verification

- [x] `immediateRender: false` at TOP LEVEL of every `gsap.from()` with scrollTrigger
  - NOT inside scrollTrigger:{} block
- [x] No CSS `opacity: 0` on any content elements
- [x] Scroll indicator shown in two places:
  1. Preloader `onComplete` callback → `si.style.display = 'flex'`
  2. `setTimeout(() => { si.style.display = 'flex'; }, 4000)`
- [x] Philosophy grid: `display: grid; grid-template-columns: repeat(3, 1fr)`
- [x] Work grid (featured-work): `overflow: visible`
- [x] Cases grid (collection.html): `overflow: visible`
- [x] Footer: `background: var(--bg)` — confirmed no hardcoded hex
- [x] SplitText polyfill inline before Swiper in index.html

---

## Color Verification

All background values exceed avg(R+G+B)/3 minimum:
- `--bg: #1C1008` → avg = (28+16+8)/3 = 17.3 ✓ (> 15 minimum for sections)
- `--surface: #261608` → avg = (38+22+8)/3 = 22.7 ✓
- `--surface2: #301E08` → avg = (48+30+8)/3 = 28.7 ✓
- Footer uses `var(--bg)` only ✓

Note: `--bg` = 17.3 is slightly above the section threshold of 15. All content sections
use `--surface` (22.7) or `--surface2` (28.7), which comfortably exceed the 15-threshold.

---

## Animation Personality — A3 Precise

```js
x: -20, duration: 0.75, stagger: 0.04, ease: 'power3.out'
```

Applied consistently across all 5 pages.

---

## Implementation Notes

### Hero Type F — Interactive Widget
The widget is built with plain HTML/CSS/JS (no framework). Tag clicks trigger GSAP
`fromTo` animations on the reveal container. The active tag uses a CSS box-shadow
glow: `0 0 24px rgba(212,97,42,0.45)` — the orange ember accent effect.

### Scroll Indicator
Follows the dual-activation pattern: shown in preloader `onComplete` AND via
`setTimeout(4000)`. This ensures the indicator appears even if the preloader
finishes very fast or is skipped.

### Collection Grid
Uses `overflow: visible` as required by GSAP rules for the work card hover
scale effect to render correctly beyond grid boundaries.

### Swiper
Testimonials use Swiper 11 with custom bullet pagination (32px wide, 2px tall,
rectangular, not circular). Active bullet extends to 64px.
