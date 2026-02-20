# SILVARDIN — Botanical Gin Landing Page

## Overview
A luxury single-harvest botanical gin landing page for the fictional brand **SILVARDIN**. Positioned as a forest-foraged, allocation-only gin from the Scottish Highlands. Dark editorial aesthetic with deep forest green palette.

## Hero Type
**Type F — Interactive Botanical Tags**
Clickable ingredient chips below the hero headline. Each chip reveals a tasting note descriptor line. Active state styled with copper fill.

## Color Palette
- `--bg: #1C2414` (avg RGB = 21.3) — deep forest green
- `--bg-mid: #222B18` — slightly lighter mid-tone surface
- `--bg-surface: #283020` — card and section backgrounds
- `--bg-card: #2E381E` — atlas card backgrounds
- `--copper: #B87333` — primary accent
- `--cream: #F0EBD8` — primary text on dark
- Footer: `background: var(--bg)` only

## Sections
1. **Hero (Type F)** — Full-bleed forest background, botanical tag chips, tasting note display
2. **The Harvest** — Typography-led harvest year, season, coordinates
3. **Botanicals Atlas** — Swiper horizontal scroll, 5 botanical cards with Latin names
4. **The Still** — Grid split-screen: image left, distillation philosophy right
5. **Tasting Notes** — 3-column note grid: nose / palate / finish
6. **The Bottle** — Full-bleed product hero with specs overlay
7. **Provenance Map** — 2-column: map visual with animated dots + location list
8. **Acquire** — Email capture for harvest allocation list
9. **Footer** — Brand links + GPS coordinates

## Tech Stack
- GSAP 3.12.5 (cdnjs) + ScrollTrigger
- Swiper 11 (CDN)
- Google Fonts: Playfair Display + Jost
- All images: Unsplash (validated 200 OK)

## GSAP Rules Applied
- All `gsap.from()` + `scrollTrigger` include `immediateRender: false`
- No `opacity: 0` on content elements in CSS
- `autoAlpha` used for fade animations (handles visibility + opacity together)

## CSS Rules Applied
- All `:root` color variables avg(R+G+B)/3 >= 20
- All section backgrounds avg >= 15
- `footer { background: var(--bg) }` only
- `.atlas-swiper { overflow: visible }` — collection grid rule

## Brand
- Name: SILVARDIN
- Tagline: "Distilled from the forest floor."
- Voice: Hushed reverence. Botanist's field journal prose.
