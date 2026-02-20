# PELLUCID — Surf Shaper Landing Page

## Overview
A luxury custom surfboard shaper landing page for the fictional brand **PELLUCID**. Positioned as a bespoke-only atelier where every board is made for a single surfer's specific home wave. Deep ocean blue palette.

## Hero Type
**Type F — Board Configurator**
Interactive chip selectors for Shape (Shortboard / Fish / Longboard) and Material (PU/Polyester / EPS/Epoxy / Balsa Wood). A live summary line updates with the configuration and lead time. CTA links to consultation section.

## Color Palette
- `--bg: #141E2A` (avg RGB = 20) — deep ocean blue
- `--bg-mid: #1A2535` — slightly lighter dark blue
- `--bg-surface: #1E2D3E` — section backgrounds
- `--bg-card: #243448` — card backgrounds
- `--foam: #F5F0E8` — primary text on dark (natural foam white)
- `--wood: #8B6914` — accent (stringer amber)
- Footer: `background: var(--bg)` only

## Sections
1. **Hero (Type F)** — Full-bleed ocean background, board configurator with shape + material chips, live summary
2. **The Interview** — Two-column: manifesto left, 5 consultation questions right
3. **The Shapes** — Swiper horizontal scroll, 5 shapes with SVG board outlines
4. **Materials Lab** — 3-column grid: PU/Polyester, EPS/Epoxy, Balsa Wood
5. **The Shaper** — Full-bleed atmospheric section with shaper stats
6. **Archive** — 3-column grid of completed boards with surfer names + home breaks
7. **Begin** — Email capture for consultation request
8. **Footer** — Brand links + workshop GPS coordinates + current season

## Tech Stack
- GSAP 3.12.5 (cdnjs) + ScrollTrigger
- Swiper 11 (CDN)
- Google Fonts: Barlow Condensed + Jost
- SVG board outlines rendered inline
- All images: Unsplash (validated 200 OK)

## GSAP Rules Applied
- All `gsap.from()` + `scrollTrigger` include `immediateRender: false`
- No `opacity: 0` on content elements in CSS
- `autoAlpha` used throughout for fade animations

## CSS Rules Applied
- All `:root` color variables avg(R+G+B)/3 >= 20
- `--bg: #141E2A` avg = (20+30+42)/3 = 30.7 — comfortably above threshold
- All section backgrounds avg >= 15
- `footer { background: var(--bg) }` only
- `.shapes-swiper { overflow: visible }` — collection grid rule

## Configurator Logic
- Balsa Wood material triggers extended lead time copy (14–18 weeks vs 8–12)
- `configs` object tracks current selections across both groups
- Each `.config-chips` group maintains independent active state

## Brand
- Name: PELLUCID
- Tagline: "Shaped for one wave."
- Voice: Spare. Technical but poetic. Short declarative sentences. Trust through restraint.
