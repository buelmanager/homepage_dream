# Clone Plan — SELVA Jungle Eco-Lodge

## Project Overview

**Target:** Ultra-luxury Amazon eco-lodge landing page
**Slug:** 20260226_jungle-lodge
**Created:** 2026-02-26
**Tier:** PRO ($49)

## Design Reference Sources

- Brand archetype: Nihi Sumba, Singita, &Beyond style luxury lodge
- Layout inspiration: Aman Resorts structure (hero + editorial sections)
- Color palette: Original dark jungle system (not derived from any single source)
- Typography: Fraunces (premium Google Font) + Inter system

## Page Architecture

```
index.html          → 6 sections + footer
about.html          → 5 sections + footer
villas.html         → 4 sections + footer
experiences.html    → 5 sections + footer
contact.html        → 5 sections + footer
```

## Section Breakdown — index.html

1. **Preloader** — SVG leaf unfurling animation with CSS dasharray stroke animation, GSAP fade-out
2. **Hero** — Cinematic full-screen canopy aerial, CSS mist layers (3 animated divs), bird silhouette SVGs, clip-path SELVA title reveal
3. **The Villas** — 4-card grid, hover reveal descriptions, background image per card
4. **The Rainforest** — Parallax full-bleed photo, 3 stats (3M+ species, 400+ birds, 8 villas)
5. **Experiences** — Left timeline + sticky right image, 5 expedition types
6. **Zero-Impact Promise** — Left promise card + right 2x2 stats grid
7. **Reserve CTA** — Full-bleed background photo, centered text + pulsing availability indicator
8. **Footer** — 4-column: brand + explore + plan + contact, conservation partners list

## Hero Implementation Detail

- Background: Unsplash `photo-1516026672322-bc52d61a55d5` at 1800px width
- Mist: 3 `div.mist-layer` with `border-radius:50%` gradient fills, CSS `@keyframes mistDrift` (translateX + scaleY)
- Wildlife: 3 `div.bird` with inline SVG wing path, `@keyframes birdFloat` (translateY + translateX loop)
- Title: `clip-path: inset(0 0 100% 0)` → GSAP to `inset(0 0 0% 0)` on preloader exit
- Scroll indicator: Left fixed position, `opacity: 0` → class `visible` on preloader exit + 4s fallback

## GSAP Animation Catalogue

| Element | Type | Trigger | Duration |
|---------|------|---------|----------|
| Hero title | clip-path reveal | preloader exit | 1.2s power3 |
| Hero eyebrow/tagline/CTA | fade + y | after title | 0.8s power2 stagger |
| Hero bg | parallax | scroll | scrub:1 |
| Villa cards | fade + y | top 80% | 1s stagger 0.12 |
| Rainforest bg | parallax | scroll | scrub:1 |
| Rainforest stats | fade + y | top 80% | 0.9s stagger 0.15 |
| Exp items | fade + x | top 80% | 0.9s stagger 0.1 |
| Sustainability promise | fade + x | top 75% | 1s |
| Sustain stats | fade + y | top 80% | 0.9s stagger 0.1 |
| CTA content | fade + y | top 75% | 1s stagger 0.12 |

## Critical Rules Applied

- All `immediateRender: false` at top level of `gsap.from()` vars object
- No `opacity: 0` in CSS on any content element
- Preloader CSS element excluded from content (correct — it's a UI overlay)
- `--bg: #131F13` avg = 23, above minimum threshold of 20
