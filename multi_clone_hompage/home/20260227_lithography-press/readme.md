# OFFSET — Fine Art Lithography Press

**Slug:** `20260227_lithography-press`
**Created:** 2026-02-27
**Status:** PUBLISHED
**Tier:** Free

## Overview

A complete luxury multi-page website for OFFSET, a fine art stone lithography press studio established in 1970. The brand centers on traditional Bavarian limestone lithography, limited edition fine art prints, and artist collaborations.

**Tagline:** Ink Ground Into History
**Industry:** Fine Art Printmaking / Lithography

## Design System

| Property | Value |
|----------|-------|
| Color Palette | P8 — Onyx Stone |
| Font Pair | F3 — Bebas Neue + DM Sans |
| Animation | A3 — Precise (x:-20 horizontal slide) |
| Hero Layout | TYPE G — Scroll-Driven Text Transform |
| Primary Color | #B0B0C0 (accent) |
| Background | #181818 |

### Color Variables
```css
--bg: #181818;
--surface: #222222;
--surface2: #2A2A2A;
--accent: #B0B0C0;
--accent-light: #D0D0E0;
--accent-dark: #808090;
--ivory: #EEEEF2;
--smoke: #909090;
--muted: #606060;
--border: #1E1E1E;
```

## Pages

| File | Description | Lines (approx.) |
|------|-------------|-----------------|
| `index.html` | Homepage with Hero G, Stats, Philosophy, Collection, Press Room, Process, Heritage, Testimonials, Commission Form | 1200+ |
| `about.html` | Master printer bio, press history timeline, team, collaborating artists | 600+ |
| `collection.html` | Full edition catalogue with filter, featured edition, edition cards | 600+ |
| `process.html` | Detailed 5-step lithographic process, chemistry explainer, materials | 500+ |
| `contact.html` | Tabbed contact forms (commission / edition enquiry / studio visit), location, FAQ | 500+ |

## Sections — index.html

1. Preloader (bar animation, 2s)
2. Scroll Indicator (right-fixed, line animation)
3. Navbar (transparent → blur on scroll, mobile hamburger)
4. Hero TYPE G — "OFF / SET" in Bebas Neue, scroll parallax transform
5. Stats — 150+ Editions, Bavarian Limestone, 1970 Press, 45 Artists
6. Philosophy — 3-column CSS grid (Stone First / Edition Integrity / Master Craft)
7. Edition Collection — 2x2 grid with hover scale
8. Press Room — split layout with press list
9. Process — 5-step horizontal grid
10. Print Heritage — quote, image grid
11. Testimonials — Swiper (4 slides, autoplay)
12. Commission Form — inquiry form with validation
13. Footer — 4-column grid

## Technical Notes

- GSAP 3.12.2 + ScrollTrigger from cdnjs CDN
- Swiper 11 from jsdelivr CDN
- SplitText polyfill (inline, Club GSAP replacement)
- Fonts: Google Fonts (Bebas Neue + DM Sans)
- All `gsap.from()` calls include `immediateRender: false` at top level
- No `opacity: 0` set in CSS on content elements
- Scroll indicator shown in preloader callback AND setTimeout(4000ms)
- Philosophy grid uses `display: grid` (not flex)
- Collection grid uses `overflow: visible`
- Mobile responsive via CSS grid breakpoints
- Custom scrollbar (6px, accent-dark thumb)

## Images Required

Place in `images/` folder:

| File | Usage |
|------|-------|
| `hero-1.webp` | Hero background (index) |
| `hero-2.webp` | Press room detail / heritage image |
| `hero-3.webp` | Edition card / materials section |
| `hero-4.webp` | Edition card / signing section |
| `product-1.webp` | Limestone Horizon edition |
| `product-2.webp` | Study In Graphite edition |
| `product-3.webp` | Solnhofen Fragment edition |
| `product-4.webp` | Ink Archaeology edition |
| `ambient-1.webp` | Press room / founder photo |
| `ambient-2.webp` | Stone with drawing / location map |
| `ambient-3.webp` | Ink detail / etching |
| `thumbnail.webp` | Template thumbnail (600px wide) |

## Thumbnail Generation

```bash
cwebp -q 80 -resize 600 0 \
  multi_clone_hompage/home/20260227_lithography-press/images/thumbnail.jpg \
  -o multi_clone_hompage/home/20260227_lithography-press/images/thumbnail.webp
```
