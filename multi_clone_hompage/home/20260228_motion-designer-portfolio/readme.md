# KINETIC — Motion Design & Animation

**Slug**: `20260228_motion-designer-portfolio`
**Tier**: PRO | **Price**: $49
**Created**: 2026-02-28

## Overview

A premium luxury portfolio template for motion designers and animation studios. Features a dynamic forest-green color palette, canvas-based animated grid hero (Type E), and a futuristic tech-meets-art aesthetic built with Bebas Neue + DM Sans typography.

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Main portfolio — canvas hero, projects, services, process teaser, tools |
| `about.html` | Designer bio, career timeline, philosophy pillars, awards |
| `collection.html` | Full project grid (12 works), filterable by category, featured case study |
| `process.html` | 5-phase workflow, technical approach, software stack, rates overview |
| `contact.html` | Project inquiry form, availability calendar, studio location |

## Design System

- **Palette**: P3 — Forest Night (`#0F1A10` bg, `#4DAF6A` accent)
- **Fonts**: F3 — Bebas Neue (headings) + DM Sans (body)
- **Hero**: Type E — Canvas-based animated pixel grid + image panel grid
- **Animation**: A3 Precise (0.7–0.8s, x: -20px, stagger: 0.04, power3.out)

## Hero Canvas

The `heroCanvas` element renders an animated background:
- 60px spaced grid lines in `rgba(77,175,106,0.06)`
- Pulsing glowing dots at grid intersections
- Diagonal light streak animations
- requestAnimationFrame loop — stops when preloader hides

## Technical Notes

- GSAP 3.12.5 + ScrollTrigger from cdnjs CDN
- SplitText: inline polyfill (not CDN) — embedded in index.html
- `immediateRender: false` at TOP LEVEL of all gsap.from() calls
- No `opacity:0` on content elements in CSS
- Scroll indicator shown in 2 places: preloader callback + setTimeout(4000)

## Image Credits

All images from Unsplash (validated 200 OK at time of creation).
See `docs/image_validation.md` for full URL list.
