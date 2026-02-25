# AQUA SANCTUM — Floating Spa Landing Page

**Slug:** `20260226_floating-spa`
**Brand:** AQUA SANCTUM — Suspended in Serenity
**Category:** Ultra-Luxury Overwater Spa

## Concept

An overwater floating spa retreat set in the Maldives. Glass-floor treatment pods suspended 2 metres above a living coral reef. The page communicates radical stillness, aquatic luxury, and transcendent wellness.

## Sections

1. **Preloader** — Animated water ripple SVG + brand reveal
2. **Navbar** — Transparent -> frosted glass on scroll
3. **Hero** — Aerial overwater bungalow + SplitText reveal + wave overlay
4. **Treatments** — 4 signature treatments with pricing
5. **Facilities** — 5 facility descriptions + image with floating stat
6. **Experience** — Immersive 2-column narrative
7. **Packages** — 3 tier packages with featured highlighted
8. **Nutrition** — Plant-based wellness menu
9. **Testimonials** — 3 guest reviews with star ratings
10. **Reservations** — Full booking form
11. **Footer** — Brand info, links, social

## Color System

| Variable     | Value     | Avg(R+G+B)/3 |
|--------------|-----------|--------------|
| --bg         | #071820   | 21.0 ✅      |
| --surface    | #0D2230   | 24.0 ✅      |
| --accent     | #2BC0C0   | Tropical Teal|
| --accent2    | #E8C88A   | Sand Gold    |

## GSAP

- Version: 3.12.2 via cdnjs
- ScrollTrigger plugin
- SplitText inline polyfill
- All `gsap.from()` + scrollTrigger: `immediateRender: false` at top level
- No `opacity: 0` in CSS content elements

## Images (Unsplash)

All images validated in `docs/image_validation.md`.

## Created

2026-02-26
