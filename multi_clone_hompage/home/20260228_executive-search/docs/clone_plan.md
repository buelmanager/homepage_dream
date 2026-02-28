# Clone Plan — 20260228_executive-search

## Project Overview

**Template:** MERIDIAN SEARCH — Executive Search & Board Advisory
**Slug:** `20260228_executive-search`
**Generated:** 2026-02-28
**Type:** Multi-page luxury website (5 pages)
**Tier:** Free

---

## Forced Constraints Applied

| Constraint | Value | Applied |
|---|---|---|
| Hero Layout | F — Interactive Search Widget | ✅ |
| Color Palette | P6 — Midnight Purple | ✅ |
| Font Pair | F8 — Bodoni Moda + Work Sans | ✅ |
| Animation | A3 Precise (x:-20, 0.75s, stagger 0.04) | ✅ |
| Tier | Free (price: 0) | ✅ |

---

## Site Architecture

```
20260228_executive-search/
├── index.html         ← Hero F + Stats + Philosophy + Services + Process + Gallery + Testimonials + Industries + CTA
├── about.html         ← Timeline + Values + Team + Recognition + CTA
├── collection.html    ← Filter Tabs + Practice Cards + Featured + Industries Grid + CTA
├── process.html       ← 5-Phase Detail + Guarantee + Comparison Table + FAQ + CTA
├── contact.html       ← Contact Info + Offices + Form + Assurances
├── meta.json
├── readme.md
├── images/            ← 12 image slots (hero-1..4, product-1..4, ambient-1..3, thumbnail.webp)
└── docs/
    ├── clone_plan.md         ← this file
    ├── originality_report.md
    └── image_validation.md
```

---

## Design Decisions

### Hero — Type F: Interactive Depth-Layer
The hero implements Type F as a corporate adaptation of the interactive widget concept:
- Full-bleed background image (`hero-1.webp`) at `brightness(0.35)` with subtle scale animation on load
- Multi-layer depth: radial gradient depth layer + CSS parallax on scroll
- Floating large headline: "Finding the EXTRAORDINARY" in Bodoni Moda at `clamp(3.2rem, 8vw, 7.5rem)`
- Below headline: glassmorphism "Search by Role" widget
  - 6 category buttons: CEO / CFO / CTO / COO / Board / CHRO
  - On click: button highlights (accent purple), badge animates in with count
  - Result text updates with GSAP `fromTo` fade+slide
  - Backdrop-blur card with `rgba(28,22,38,0.72)`

### Color Palette — P6 Midnight Purple
Deep purple-black backgrounds create an authoritative, high-trust atmosphere appropriate for a C-suite search firm. The `#9B6EDB` accent reads as premium without being flashy. The ivory `#EEE8F8` has a subtle purple warmth that ties the palette together.

### Typography — F8 Bodoni Moda + Work Sans
Bodoni Moda's high-contrast thick/thin strokes convey editorial luxury and institutional gravitas. Work Sans at 300 weight for body text creates excellent contrast without competing with the headline typeface. The combination reads as established, trustworthy, and quietly premium.

### Animation — A3 Precise
Corporate context demands precision over flamboyance. The `x:-20` horizontal slide is directional and purposeful. The `0.04s` stagger creates cascading reveals that feel information-rich rather than decorative. Duration of `0.75s` with `power3.out` is fast enough to feel responsive, slow enough to feel considered.

---

## Section-by-Section Plan

### index.html

| Section | Elements | GSAP Animations |
|---|---|---|
| Preloader | Logo + bar + counter | gsap.to fadeOut on complete |
| Hero | BG + overlay + headline + widget + scroll indicator | SplitText chars x:-20 stagger + widget y:20 |
| Stats Strip | 4 stats (2400/94%/18/1987) | x:-20 stagger |
| Philosophy | Image + accent block + 3-col grid | Image x:-20, block x:20, cards stagger |
| Services | 4 cards with hover states | x:-20 stagger |
| Process Preview | 5 connected steps | x:-20 stagger |
| Gallery | 5-image asymmetric grid | x:-20 stagger |
| Testimonials | Swiper 2-up with nav buttons | x:-20 header |
| Industries | 12-item icon grid | x:-20 stagger |
| CTA | Headline + 2 CTAs | x:-20 stagger |
| Footer | 4-col grid | static |

### about.html

| Section | Content |
|---|---|
| Page Hero | Split grid: headline left, image right |
| Timeline | 7 milestones 1987–2024 with dot-connected vertical line |
| Values | 6-card grid with large numeral watermarks |
| Team | 4 partner profiles with grayscale photos |
| Recognition | Award list with year column |
| CTA | "Begin a Conversation" |

### collection.html

| Section | Content |
|---|---|
| Page Hero | Full-width headline |
| Filter Tabs | 7 tabs with JS filter animation (gsap opacity) |
| Practice Cards | 6 cards with image, tag, title, text, stats, link |
| Featured | CEO/Board deep-dive split layout |
| Industries | Full 18-item 6-column grid |
| CTA | Schedule a Consultation |

### process.html

| Section | Content |
|---|---|
| Page Hero | Split: headline + process image |
| 5 Phases | 3-column layout per phase: number/duration + content + deliverables |
| Guarantee | Badge circle + 3 stats + descriptive text |
| Comparison | 8-row table vs. typical search firm |
| FAQ | 7 questions accordion (open/close) |
| CTA | "Ready to Begin?" |

### contact.html

| Section | Content |
|---|---|
| Page Hero | Centered headline |
| Contact Split | Info left, form right (sticky) |
| Form | 8 fields + radio group + checkbox + submit |
| Success State | Hidden div shown on submit |
| Assurances | 4 commitment cards |

---

## GSAP Compliance Checklist

- [x] `immediateRender: false` at TOP LEVEL of every `gsap.from()` — never inside scrollTrigger
- [x] No CSS `opacity: 0` on content elements
- [x] Scroll indicator shows in preloader `onComplete` callback
- [x] Scroll indicator also shows in `setTimeout(4000)`
- [x] Philosophy grid uses `display: grid; grid-template-columns: repeat(3, 1fr)`
- [x] Collection grid has `overflow: visible`
- [x] Footer uses `background: var(--bg)` only — no hardcoded colors
- [x] SplitText polyfill inline before Swiper script tag
- [x] GSAP 3.12.2 from cdnjs
- [x] Swiper 11 from jsdelivr

---

## Color Compliance Check

| Element | Color | Avg RGB | Pass |
|---|---|---|---|
| `--bg` | `#130F1A` | (19+15+26)/3 = 20.0 | ✅ (≥20) |
| `--surface` | `#1C1626` | (28+22+38)/3 = 29.3 | ✅ |
| `--surface2` | `#221C2E` | (34+28+46)/3 = 36.0 | ✅ |
| Footer bg | `var(--bg)` | 20.0 | ✅ |
| All sections | `var(--bg)` or `var(--surface)` | ≥20 | ✅ |
