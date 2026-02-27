# Clone Plan — AGAVERO Estate Tequila Hacienda

**Template:** 20260227_tequila-hacienda
**Date:** 2026-02-27
**Status:** Complete

---

## Brief

Design a complete luxury multi-page website for an estate tequila hacienda and distillery in Jalisco, Mexico. The brand communicates Mexican heritage grandeur, artisan craft, and the luxury of time — expressed through a Rust Ember color palette, serif typography, and an animated canvas grid hero.

---

## Design Decisions

### Hero Layout (Type E — Grid/Pattern Canvas)
Chosen because it:
- Creates technical sophistication through animated geometric patterns
- The rust/amber accent color echoes agave fire and barrel warmth
- Corner accent brackets frame the brand name with luxury restraint
- Canvas animation is subtle enough to enhance, not distract, from the imagery

Alternative considered: Type G (Text-driven scroll transform) — rejected because this brand's heritage demands a strong photographic presence in the hero.

### Color Palette (P9 — Rust Ember)
- Deep near-black `#1C1008` background evokes aged oak and volcanic soil
- Rust accent `#D4612A` references agave fire, burnt copper, and terracotta clay
- Ivory `#F0E4DC` text adds warmth over cold white
- Smoke `#A07860` secondary text maintains sophisticated restraint

### Typography (F7 — Libre Baskerville + Source Sans 3)
- Libre Baskerville conveys heritage, authority, and old-world craft
- Italic weight adds poetry to blockquotes and subtitles
- Source Sans 3 in Light (300) provides clean, modern contrast
- Letter-spacing increases across UI labels for luxury feel

---

## Page Architecture

```
index.html          Primary landing — full brand experience
├── about.html      Family lineage + terroir + jimador tradition
├── collection.html Five expressions with tasting notes
├── process.html    Distillery stages — educational + atmospheric
└── contact.html    Reservation system — three-tier experience pricing
```

---

## Section Map — index.html

1. Preloader (animated bar + brand name)
2. Scroll Indicator (mouse icon, dual trigger)
3. Navbar (transparent → frosted glass on scroll)
4. Hero (Type E canvas + bg image + overlay + corner accents)
5. Stats (8yr aged, 200ac estate, 4th gen, 100% Blue Weber)
6. Philosophy (3-column CSS grid with hover top-border animation)
7. Expression Collection (2×2 grid with image+text cards)
8. Distillery Feature (image left, text right, badge overlay)
9. Process (5-step horizontal with connecting line)
10. Hacienda Heritage (text + 3-image mosaic)
11. Testimonials (Swiper carousel, 4 reviews)
12. Tasting Reservation (info + inline form)
13. Footer (4-column grid)

---

## Animation Strategy

| Element | Animation | Trigger |
|---|---|---|
| Hero canvas | RAF loop, infinite | Immediate |
| Hero content | Timeline: corners → eyebrow → title chars → subtitle → CTAs | Post-preloader |
| Stats counter | Number count-up | ScrollTrigger enter |
| Philosophy cards | `y:24 opacity:0` staggered | `top 85%` |
| Collection cards | `y:24 opacity:0` staggered | `top 90%` |
| Distillery split | `x:-30` left / `x:30` right | `top 80%` |
| Heritage split | `x:-30` left / `x:30` right | `top 80%` |
| Process steps | `y:24 opacity:0` staggered | `top 88%` |

---

## Components Reused Across Pages

- Navbar (identical structure, active state varies)
- Mobile nav overlay
- Footer (4-column grid, identical across all pages)
- Page header (hero-less header with background image at low opacity)
- Custom scrollbar (6px, accent-dark thumb)
- Button styles (btn-primary, btn-secondary)
- Section label + divider pattern

---

## Build Notes

- SplitText polyfill included inline to avoid Club GSAP CDN dependency
- Swiper testimonials configured with loop + autoplay + breakpoints
- Stats counter uses `gsap.to()` with `onUpdate` rather than `gsap.fromTo()` for cleaner implementation
- Form submission uses `e.preventDefault()` + show success message (no backend)
- FAQ accordion uses pure JS `classList.toggle` — no library needed
- Experience selection on contact.html syncs to form dropdown via `selectExperience()` function

---

## Quality Checklist

- [x] All sections have avg background brightness >= 15 (using var(--bg) / var(--surface) / var(--surface2))
- [x] No CSS `opacity: 0` on content elements
- [x] All `gsap.from()` have `immediateRender: false` at top level
- [x] Scroll indicator shown in both preloader callback and setTimeout(4000)
- [x] Philosophy grid uses `display: grid`
- [x] SplitText polyfill present before Swiper script
- [x] Mobile-responsive at 768px and 1024px breakpoints
- [x] Custom scrollbar styled
- [x] Footer uses `var(--bg)` — no hardcoded dark hex
- [x] All 5 pages functional with internal linking
