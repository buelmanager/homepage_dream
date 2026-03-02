# Alpine Meridian Club — Mountain Club Landing Page

**Slug:** 20260302_mountain-club
**Category:** Club / Society
**Tier:** Premium
**Hero Layout:** Type B — Parallax with Mousemove Interaction

## Overview

A premium luxury multi-page landing page for an alpine mountaineering club. Deep forest green palette (#0F1A10) with vivid alpine green accent (#4DAF6A). Fraunces serif + Inter sans typography. The hero features a dual-layer parallax with scroll-based and mousemove-based depth, plus a subtle gradient overlay.

## Pages

- `index.html` — Full landing page
- `about.html` — Club history and notable expeditions
- `collection.html` — Expedition calendar
- `process.html` — Membership tiers
- `contact.html` — Contact form

## Key Design Details

- Altitude indicator element in hero bottom-right
- Triangle symbols (▲) used as bullets and decorative icons
- Expedition list layout with altitude information
- Mountain-specific membership naming (Hillwalker / Alpine Member / Expedition Leader)

## Technical Notes
- Hero Type B: layer-1 and layer-2 respond to both scroll (gsap scrub) and mousemove
- GSAP parallax on scroll: layer-1 yPercent -20, layer-2 yPercent -30
- All GSAP immediateRender: false at top level
- Footer background: var(--bg) only
- Philosophy: display:grid 3-col
- Collection: overflow:visible
