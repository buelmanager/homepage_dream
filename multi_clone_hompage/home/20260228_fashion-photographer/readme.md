# ELARA LENS — Fashion & Editorial Photography

**Slug:** `20260228_fashion-photographer`
**Tier:** PRO — $49
**Created:** 2026-02-28

## Overview

A luxury five-page portfolio template for high-end fashion and editorial photographers. The template uses a deep burgundy color palette (P4), Playfair Display + Lato typography (F2), and Type D Hero (Portrait + Stats Grid) layout.

## Pages

| File | Description |
|------|-------------|
| `index.html` | Main portfolio page — Hero D, editorial masonry, services, press, process |
| `about.html` | Biography, career timeline, awards, clients list |
| `collection.html` | Full portfolio with filterable gallery (Editorial/Campaign/Runway/Beauty) |
| `process.html` | 5-step creative process, equipment specs, collaboration philosophy |
| `contact.html` | Booking form, studio locations (London/Paris/NYC), rate card |

## Design System

- **Palette:** Deep Burgundy (P4)
  - `--bg: #1A0A0E` | `--surface: #241016` | `--surface2: #2C1420`
  - `--accent: #C96A8A` | `--accent-light: #E090A8` | `--accent-dark: #8A3A5C`
  - `--ivory: #F0DCE4` | `--smoke: #A08088` | `--muted: #604A52`
- **Fonts:** Playfair Display (serif headlines) + Lato (sans body)
- **Hero:** Type D — Portrait left, content + 2x2 stats grid right
- **Animation:** A4 Dramatic — 1.1–1.3s duration, y: 40px, stagger: 0.15, ease: power2.inOut

## Images (20 WebP files)

All images downloaded at 1920px wide, q82 WebP compression from validated Unsplash sources.

- `hero-1.webp`, `hero-2.webp` — fashion editorial dark
- `portrait-1.webp` through `portrait-4.webp` — model fashion studio
- `product-1.webp` through `product-6.webp` — haute couture / accessories
- `workspace-1.webp` — photography studio workspace
- `ambient-1.webp` through `ambient-7.webp` — editorial / backstage / luxury

## Technical Notes

- GSAP 3.12.5 + ScrollTrigger from cdnjs CDN
- SplitText inline polyfill (Club GSAP premium — NOT from CDN)
- `immediateRender: false` at top level of all `gsap.from()` calls
- No `opacity: 0` on content elements in CSS
- Scroll indicator visible after preloader + setTimeout(4000ms)
- All grids use `display: grid` (not flex)
- Responsive breakpoints: 1024px and 768px
