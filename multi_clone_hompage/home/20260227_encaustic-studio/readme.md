# CEREUS — Encaustic Art Studio

**Slug:** `20260227_encaustic-studio`
**Status:** PUBLISHED
**Tier:** Free
**Industry:** Fine Art — Encaustic Wax Painting
**Created:** 2026-02-27

---

## Brand

**CEREUS** is a single-artist encaustic wax painting studio rooted in the ancient Fayum portrait tradition of Greco-Roman Egypt. The name references the cereus wax bloom — a flower that opens only at night, holding the light of the moon.

**Tagline:** Ancient Medium, Living Art

---

## Design System

| Property | Value |
|---|---|
| Hero Layout | Type G — Scroll-Driven Text Transform |
| Color Palette | P6 Midnight Purple |
| Primary Accent | `#9B6EDB` |
| Background | `#130F1A` |
| Surface | `#1C1626` |
| Ivory | `#EAE0F8` |
| Font Serif | Spectral (Google Fonts) |
| Font Sans | Mulish (Google Fonts) |
| Animation | A4 Dramatic — `y:40, duration:1.2, ease:power2.inOut` |

---

## Pages

| File | Description | Lines |
|---|---|---|
| `index.html` | Homepage — Hero G, Stats, Philosophy, Collection, Studio, Process, Fayum Heritage, Testimonials (Swiper), Form | 1200+ |
| `about.html` | Artist biography, materials, exhibition history | 650+ |
| `collection.html` | Works grid — Abstracts, Portraits, Landscapes, Workshops, Commission CTA | 660+ |
| `process.html` | Full 4-step encaustic process, tools, temperature guide, archival permanence | 710+ |
| `contact.html` | Acquisition form, inquiry type selector, commission guide, contact info | 680+ |

---

## Image Slots

All images are served from the `images/` directory using local paths.

| Slot | Used In |
|---|---|
| `hero-1.webp` | Index hero background |
| `hero-2.webp` | Process page hero |
| `hero-3.webp` | Collection work card |
| `hero-4.webp` | Collection portrait card |
| `product-1.webp` | Heritage section, abstract work card |
| `product-2.webp` | Portrait work card |
| `product-3.webp` | Landscape work card |
| `product-4.webp` | Commission work card, archival section |
| `ambient-1.webp` | Studio section main, artist portrait |
| `ambient-2.webp` | Studio section accent |
| `ambient-3.webp` | Abstract work card |
| `thumbnail.webp` | Manifest thumbnail (required for deployment) |

---

## GSAP Compliance

- All `gsap.from()` calls include `immediateRender: false` at top level
- No `opacity: 0` set in CSS on content elements
- Scroll indicator shown in two places: preloader `onComplete` + `setTimeout(4000)`
- Philosophy grid uses `display: grid` (3-col)
- Collection grid uses `overflow: visible`
- Footer background uses `var(--bg)` — no hardcoded hex

---

## Dependencies

- GSAP 3.12.2 (cdnjs)
- ScrollTrigger 3.12.2 (cdnjs)
- Swiper 11 (jsdelivr)
- Google Fonts: Spectral + Mulish
- SplitText: inline polyfill (no CDN dependency)

---

## SEO

- All pages have unique `<title>` and `<meta name="description">`
- Semantic HTML: `<header>`, `<main>`, `<section>`, `<footer>`, `<h1>`–`<h3>`
- Mobile responsive with hamburger nav
- Custom scrollbar (webkit)
