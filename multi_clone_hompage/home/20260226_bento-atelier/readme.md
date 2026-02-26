# BENTO BIJOU — A Box That Tells a Story

## Overview

A complete luxury multi-page landing page for **BENTO BIJOU**, a high-end artisan bento studio in Kyoto crafting jewel-like bento boxes for corporate gifting, weddings, and private ceremonies. The brand has been active since 1988 and offers bento-making workshops alongside its commissioning service.

**Tagline:** "A Box That Tells a Story."

---

## Pages

| File | Description |
|---|---|
| `index.html` | Main luxury landing page with cinematic hero, preloader, and 5 content sections |
| `about.html` | Studio story, master artisans, seasonal philosophy, and 1988–2024 timeline |
| `collection.html` | Full bento collection — 6 seasonal editions + 2 signature commissions + corporate/wedding |
| `workshops.html` | Three class types, curriculum schedule, team events, and testimonials |
| `contact.html` | Order inquiry, workshop booking, corporate gifting form + FAQ + directions |

---

## Design System

| Token | Value |
|---|---|
| `--bg` | `#181810` (avg 21.3 — passes dark threshold) |
| `--surface` | `#201E14` |
| `--accent` | `#E84820` (vermilion red) |
| `--accent2` | `#F0C840` (gold) |
| `--text` | `#F5F0E8` |
| `--text-muted` | `#908060` |
| Heading font | Cormorant Garamond (Google Fonts) |
| Body font | Inter (Google Fonts) |

---

## Hero

- **Type:** Cinematic full-screen with parallax background
- **Image:** Japanese food / table overhead shot (Unsplash)
- **Preloader:** Chopstick cross animation + progress bar
- **Title:** Character-by-character reveal via SplitText polyfill
- **Stats:** 40 Seasonal Items / Est. 1988 / 200 Boxes / Month
- **Scroll indicator:** Fixed left side, appears after preloader

---

## GSAP Notes

- `gsap.registerPlugin(ScrollTrigger)` on every page
- `immediateRender: false` at **top level** of every `gsap.from()` call
- No CSS `opacity: 0` on any content element
- SplitText polyfill embedded inline (Club GSAP not used)
- All animations use `ease: 'power2.out'`, `duration: 0.9–1.2s`, `y: 20–40px`

---

## Image Sources

All images via Unsplash CDN (`images.unsplash.com`). No local image files except `thumbnail.webp`.

---

## Folder Structure

```
20260226_bento-atelier/
├── index.html
├── about.html
├── collection.html
├── workshops.html
├── contact.html
├── meta.json
├── readme.md
├── images/
│   └── thumbnail.webp
└── docs/
    ├── clone_plan.md
    ├── originality_report.md
    └── image_validation.md
```
