# TERRA FORMA — Studio Ceramics & Sculptural Objects

**Slug:** `20260228_ceramic-artist-portfolio`
**Created:** 2026-02-28
**Tier:** Free
**Hero Layout:** Type B — Parallax + Ken Burns Full-Screen
**Palette:** P9 — Rust Ember
**Font:** F4 — Cinzel + Crimson Pro

## Overview

TERRA FORMA is a luxury landing page template for ceramic artists, studio potters, and craft-based creative studios. It features an earthy, warm color palette with rust/ember tones, a dual-layer parallax hero with Ken Burns zoom animation and mousemove parallax, and rich editorial typography using the Cinzel serif paired with Crimson Pro.

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Main portfolio page with Hero Type B, Philosophy, Collection Preview, Services, Process, Awards, CTA |
| `about.html` | Artist biography, studio story, materials & methods, exhibitions |
| `collection.html` | Full collection grid with filter tabs (Vessels / Sculptures / Tableware / Series) |
| `process.html` | 5-step ceramic making process with detailed editorial layout and materials sourcing |
| `contact.html` | Commission enquiry form, studio location, commission tiers |

## Color Palette — P9 Rust Ember

```css
--bg: #1C1008;
--surface: #261608;
--surface2: #2E1C0A;
--accent: #D4612A;
--accent-light: #E8884A;
--accent-dark: #9C3C14;
--ivory: #F0E4DC;
--smoke: #A07860;
--muted: #604840;
--border: #201408;
```

## Typography — F4

- **Display / Headings:** Cinzel (400, 600, 700)
- **Body / Subheadings:** Crimson Pro (300, 400, italic 300)
- Google Fonts import included in all pages

## Hero Layout — Type B

- Dual parallax background layers (`.layer-1` + `.layer-2`)
- Ken Burns zoom animation (GSAP `scale` on loop with `yoyo: true`)
- Mousemove parallax: `layer-1` at 50% speed, `layer-2` at 100% speed
- Floating badge with counter-rotation animation
- Gradient overlay from transparent to `rgba(28,16,8,0.85)` at bottom

## GSAP Animations

- `immediateRender: false` at top level of all `gsap.from()` calls with ScrollTrigger
- SplitText polyfill embedded in `index.html` (not CDN — Club GSAP premium)
- Philosophy/grid sections use `display: grid` (not flex)
- Collection grid uses `overflow: visible`
- A5 Organic timing: duration 1.0–1.4s random, y 20–28px, stagger 0.09

## Images

25 WebP images, all validated 200 OK from Unsplash before download:
- `hero-1.webp`, `hero-2.webp`, `hero-3.webp` — hero parallax layers
- `product-1.webp` through `product-6.webp` — collection pieces
- `workspace-1.webp`, `workspace-2.webp` — studio workspace
- `ambient-1.webp` through `ambient-4.webp` — atmospheric shots
- `detail-1.webp` through `detail-4.webp` — close detail shots
- `extra-1.webp` through `extra-6.webp` — additional collection images
- `thumbnail.webp` — 600px wide preview thumbnail

## Brand Voice

- Name: TERRA FORMA (fictional studio)
- Ceramicist: Eleanor Voss (fictional)
- Location: Abergavenny, Wales
- Kiln: Wood-fire noborigama
- Collections: Vessels, Sculptures, Tableware

## Usage

All pages are self-contained HTML files with inline CSS and GSAP loaded from cdnjs CDN. No build process required — open any `.html` file directly in a browser.
