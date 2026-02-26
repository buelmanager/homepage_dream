# SELVA — Immersed in the Infinite Green

Ultra-luxury Amazon eco-lodge landing page. Five-page multi-page template with deep forest design system, GSAP scroll animations, and complete booking inquiry flow.

## Pages

| File | Description |
|------|-------------|
| `index.html` | Main landing page — cinematic hero, villa grid, rainforest immersion, experiences timeline, sustainability stats, CTA |
| `about.html` | Founding story, philosophy, conservation mission, team profiles, certifications |
| `villas.html` | Eight villa profiles, amenities matrix, booking rates and details |
| `experiences.html` | All programmes, featured canopy walk, gastronomy, wellness, sample day itinerary |
| `contact.html` | Reservation form, contact details, travel logistics, FAQ accordion, partnerships |

## Design System

```css
--bg: #131F13       /* Deep jungle dark (avg 23 ✓) */
--surface: #1A2A1A  /* Lifted surface layer */
--accent: #78C840   /* Jungle lime green */
--accent2: #F0D060  /* Sun gold */
--text: #F0F5E8     /* Warm ivory */
--text-muted: #708060 /* Forest muted */
```

Fonts: **Fraunces** (serif headings, italic quotes) + **Inter** (body, UI)

## Technical Notes

- GSAP 3.12.5 + ScrollTrigger from cdnjs CDN
- `immediateRender: false` at top level on ALL gsap.from() calls (never inside scrollTrigger)
- No CSS opacity:0 on content elements — all opacity handled exclusively by GSAP
- Preloader with SVG leaf animation + GSAP exit sequence
- Scroll indicator shown in two places: preloader callback + setTimeout(4000ms) fallback
- Parallax on hero and rainforest section using scrub:1 ScrollTrigger
- Mist layers via pure CSS animation (no JS)
- Wildlife silhouette SVGs with CSS float animation
- FAQ accordion via vanilla JS classList toggle
- Navbar scroll state via ScrollTrigger onUpdate

## Images Used

All images from Unsplash (free license):
- `photo-1516026672322-bc52d61a55d5` — Primary jungle/rainforest hero (confirmed 200 OK)
- `photo-1529958030586-3aae4ca485ff` — Fallback (confirmed 200 OK)
- Various hospitality, nature, and wellness images throughout

## Color Compliance

- `--bg: #131F13` → RGB avg = (19+31+19)/3 = 23 ✓ (above minimum 20)
- All section backgrounds use var(--bg) or var(--surface) — no hardcoded dark hex
- Footer uses var(--surface) only
