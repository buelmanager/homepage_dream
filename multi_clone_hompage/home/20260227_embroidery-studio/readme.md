# BRODERIE — Fine Hand Embroidery Studio

**Slug:** `20260227_embroidery-studio`
**Created:** 2026-02-27
**Status:** PUBLISHED
**Tier:** Free

---

## Overview

BRODERIE is a complete luxury multi-page website for a fine hand embroidery studio. The site presents a meditative, feminine luxury brand with deep burgundy palette, dramatic Bodoni Moda typography, and a Hero Type E animated canvas grid. The brand voice is unhurried, introspective, and deeply committed to craft traditions.

**Brand:** BRODERIE — Fine Embroidery Studio
**Tagline:** Every Stitch, a Meditation
**Industry:** Hand embroidery, needlework art, silk thread embroidery studio

---

## Design System

### Color Palette — P4 Deep Burgundy
| Variable | Value |
|---|---|
| `--bg` | `#1A0A0E` |
| `--surface` | `#241016` |
| `--surface2` | `#2C1420` |
| `--accent` | `#C96A8A` |
| `--accent-light` | `#E090A8` |
| `--accent-dark` | `#8A3A5C` |
| `--ivory` | `#F0DCE4` |
| `--smoke` | `#A08088` |
| `--muted` | `#604A52` |
| `--border` | `#200C12` |

### Font Pair — F8
- **Serif:** Bodoni Moda (headings, brand name, quotes)
- **Sans:** Work Sans 300/400/500 (body, labels, navigation)

### Hero Type — E (Grid/Pattern Canvas)
Animated HTML5 canvas with:
- Fine grid lines at `rgba(201,106,138,0.07)` stroke
- Pulsing dot grid with per-dot phase animation
- Diagonal cross-stitch accent lines
- Four corner accent borders in `var(--accent)` at 60% opacity

### Animation — A4 Dramatic
- `opacity: 0`, `y: 40`
- `duration: 1.2`
- `ease: 'power2.inOut'`
- `stagger: 0.15`
- `immediateRender: false` (critical — always at top level of gsap.from vars)

---

## Pages

| File | Description | Lines |
|---|---|---|
| `index.html` | Main landing page with all primary sections | ~1,200 |
| `about.html` | Founder story, artisans, timeline, values, location | ~620 |
| `collection.html` | Featured works, grid, category browser | ~640 |
| `process.html` | Four stages, stitch techniques, materials, framing, FAQ | ~680 |
| `contact.html` | Full commission form, pricing guide, alternatives | ~540 |

### Index Page Sections
1. Preloader
2. Scroll Indicator
3. Navbar (fixed, scrolled state)
4. Hero Type E (animated canvas + corner accents)
5. Stats (30 years / 1,200+ commissions / 47 techniques / 18 countries)
6. Philosophy (3-column grid — Meditative Process, Heirloom Quality, Narrative Thread)
7. Collection preview (asymmetric grid)
8. Atelier section (split layout)
9. Process overview (4-step linear)
10. Heritage (split layout with badge)
11. Testimonials (Swiper carousel — 4 testimonials)
12. Commission CTA (split form)
13. Footer

---

## Images Required

All images are loaded from `images/` with local paths.

| File | Usage |
|---|---|
| `hero-1.webp` | Main hero background |
| `hero-2.webp` | Atelier accent / artisan portrait |
| `hero-3.webp` | Framing section / artisan portrait |
| `hero-4.webp` | Artisan portrait card |
| `product-1.webp` | Featured couture work / goldwork bodice |
| `product-2.webp` | Featured bridal work |
| `product-3.webp` | Featured wall art |
| `product-4.webp` | Sashiko heirloom work |
| `ambient-1.webp` | Atelier interior / founder portrait |
| `ambient-2.webp` | Heritage / location exterior |
| `ambient-3.webp` | Process / stitching close-up |
| `thumbnail.webp` | Manifest thumbnail (600px wide) |

---

## CDN Dependencies

```html
<!-- Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,700;1,6..96,400&family=Work+Sans:wght@300;400;500&display=swap" rel="stylesheet">

<!-- Swiper CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">

<!-- GSAP + ScrollTrigger -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>

<!-- Swiper JS -->
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
```

---

## Technical Notes

### GSAP Critical Rules
- `immediateRender: false` is placed at the **top level** of all `gsap.from()` calls, never inside `scrollTrigger:{}`
- No `opacity: 0` set in CSS on any content element
- All scroll animations use `start: 'top 80%'` or `start: 'top 75%'` for fade-ins

### SplitText
Uses inline polyfill class (not Club GSAP premium). Included in index.html only for hero title character animation.

### Canvas Animation
The hero canvas draws every frame via `requestAnimationFrame`. Resize handler re-builds the dot array. Dots animate with per-dot phase offset for an organic breathing effect. Grid lines and diagonal cross-stitch lines are static overlays drawn each frame.

### Scroll Indicator
Shown after preloader completes (with 400ms delay) AND via `setTimeout(4000)` fallback. Hidden when user scrolls past 60px.

### Swiper
Auto-play 6000ms, loop, pagination. Used only on index.html testimonials section.

---

## Thumbnail Generation

```bash
# Generate thumbnail after capturing
cwebp -q 80 -resize 600 0 \
  multi_clone_hompage/home/20260227_embroidery-studio/images/thumbnail.jpg \
  -o multi_clone_hompage/home/20260227_embroidery-studio/images/thumbnail.webp
```
