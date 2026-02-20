# URWA 漆和 — Japanese Lacquer Studio

## Overview
Luxury landing page for URWA, a Japanese urushi lacquer studio based in Higashiyama, Kyoto. Features a Hero Type C diagonal split layout, deep black-red lacquer palette, and 13 fully animated sections.

## Business Details
- **Business Type**: Luxury Craft Studio — Japanese Lacquerware (Urushi)
- **Brand Name**: URWA (漆和)
- **Tagline**: "Silence applied. Layer by layer."
- **Location**: Higashiyama, Kyoto, Japan
- **Founded**: 1983

## Design Specifications

### Color Palette
- **Background**: Deep Lacquer Black-Red `#261210`
- **Surface**: Dark Vermilion Shadow `#321816`
- **Surface-2**: `#3D1E1B`
- **Accent**: Bengara Red (iron oxide vermilion) `#C0392B`
- **Gold**: Aged Maki-e Gold `#B8A06A`
- **Text**: Washi Ivory `#F5EDE0`
- **Muted**: Aged Lacquer `#8A6E68`
- **Deep**: Kurourushi Black `#0D0A09`

### Typography
- **Primary**: Noto Serif JP (traditional Japanese serif — headings, brand, UI)
- **Secondary**: Jost (geometric sans — body, labels, captions)

### Hero Type
- **Type C — Diagonal Split**
- Left panel: dark lacquer background with JP/EN brand name, tagline, two CTAs
- Diagonal cut via `clip-path: polygon(0 0, 100% 0, 84% 100%, 0 100%)`
- Right panel: full-bleed lacquerware photography with brightness 0.8 and directional gradient overlay

### Preloader Animation
- SVG lacquer drip — body fills from top, drop falls and dissipates
- Brand kanji and logotype fade in
- Loading bar fills over 2 seconds

## Website Sections

1. **Preloader** — SVG lacquer drip animation with brand reveal
2. **Scroll Indicator** — Left-side fixed with animated drop line (2 instances)
3. **Navbar** — Fixed, scrolled glass effect, Commission CTA
4. **Hero** — Type C diagonal split (left panel + right full-bleed image)
5. **Stats Strip** — 4 animated counters: 41yr craft, 80+ layers, 127 commissions, 4 masters
6. **Philosophy** — 3-column grid: Wabi / Sabi / Mono no Aware
7. **Collection Grid** — 2x2 lacquerware pieces (Negoro-nuri, Maki-e, Raden, Tsuishu)
8. **Atelier** — 2-col with pullquote, studio narrative, signature
9. **Process** — 5-step timeline (Base / Undercoat / Mid / Top / Polish) + image strip
10. **Heritage** — Studio milestones from 1983–2024 with year badge
11. **Press** — Swiper 3-up carousel with quotes from Wallpaper*, FT, Monocle, etc.
12. **Commission Form** — Minimal dark form with scarcity copy
13. **Footer** — `var(--bg)` background, 4-col grid, social, legal

## GSAP Animations
- All `gsap.from()` / `gsap.fromTo()` use `immediateRender: false`
- ScrollTrigger on all section entries
- Counter animation on stats
- Staggered card reveals for philosophy, collection, process steps, milestones
- Parallax on atelier image
- Process track fill animation
- Hero entrance timeline after preloader

## Tech Stack
- **Fonts**: Google Fonts — Noto Serif JP + Jost
- **Animation**: GSAP 3.12 (cdnjs)
- **Carousel**: Swiper 11

## Image Sources
- All images validated from Unsplash (HTTP 200 confirmed)
- Hero: lacquerware bowls on dark vermilion surface
- Collection: lacquer bowls, boxes, mother-of-pearl trays, cinnabar vessels
- Process: craft studio, workshop, ceramic/lacquer detail shots
- Heritage: traditional Japanese craft environment

## Files
- `index.html` — Complete single-file website
- `meta.json` — Template metadata
- `readme.md` — This file

## Usage
Open `index.html` in a web browser to view the website.
