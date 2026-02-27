# ONGGI — Traditional Kimchi Cellar

**Slug:** `20260227_kimchi-cellar`
**Created:** 2026-02-27
**Status:** PUBLISHED

## Overview

A complete luxury multi-page website for ONGGI, a traditional Korean kimchi cellar and fermentation studio based in Jeonju, North Jeolla Province. The brand centers on four generations of kimchi mastery, underground onggi pot fermentation, and UNESCO-recognised kimjang culture.

## Design Specifications

| Property | Value |
|---|---|
| Hero Layout | Type G — Scroll-Driven Text Transform |
| Color Palette | P3 Forest Night |
| Font Pair | F7 — Libre Baskerville + Source Sans 3 |
| Animation | A1 Standard (y:24, dur:1.1, ease:power2.out) |
| Tier | Free |
| Price | 0 |

## Color Palette — Forest Night

```css
--bg: #0F1A10
--surface: #162016
--surface2: #1A2A1A
--accent: #4DAF6A
--accent-light: #7ACC8A
--accent-dark: #2E7A46
--ivory: #DCF0DC
--smoke: #809080
--muted: #4A6050
--border: #182018
```

## Pages

| File | Description | Min Lines |
|---|---|---|
| `index.html` | Main landing page with Hero Type G, Stats, Philosophy, Collection, Cellar, Process, Heritage, Testimonials, Order Form | 1200+ |
| `about.html` | Founder story, timeline 1947–2024, team, awards, values | 600+ |
| `collection.html` | 6 kimchi varieties with detail, seasonal guide, ingredient provenance, pairing | 600+ |
| `process.html` | 5 detailed fermentation stages, onggi specs, fermentation science | 500+ |
| `contact.html` | 3 experience options, order form, shipping info, location, FAQ accordion | 500+ |

## Images Required

Place in `images/` directory:

| File | Usage |
|---|---|
| `hero-1.webp` | Homepage hero background |
| `hero-2.webp` | About / contact page hero |
| `hero-3.webp` | Heritage section image |
| `hero-4.webp` | Master Lee / founder portrait |
| `product-1.webp` | Baechu kimchi |
| `product-2.webp` | Kkakdugi |
| `product-3.webp` | Oi Sobagi |
| `product-4.webp` | Baek Kimchi |
| `ambient-1.webp` | Underground cellar interior |
| `ambient-2.webp` | Ambient banner background |
| `ambient-3.webp` | Onggi pottery |
| `thumbnail.webp` | Template thumbnail (600px wide) |

## Technical Notes

- GSAP 3.12.2 via cdnjs (ScrollTrigger plugin registered)
- Swiper 11 via jsdelivr (testimonials carousel, index.html only)
- SplitText polyfill embedded inline (Club GSAP not CDN-available)
- `immediateRender: false` on all `gsap.from()` with scrollTrigger
- No `opacity: 0` set via CSS on animated content elements
- Scroll indicator visible via preloader callback AND setTimeout(4000)
- Philosophy section uses `display: grid` (3-column)
- Collection overflow: visible on grid
- Footer background: `var(--bg)` only — no hardcoded dark hex
- Custom scrollbar: 6px, accent-dark thumb
- Mobile responsive: breakpoints at 1024px, 768px, 480px
- Hamburger menu: transforms to X with CSS on open state

## Brand Voice

Traditional Korean cultural pride combined with fermentation science depth. The tone is reverent toward ancient craft while being accessible and precise. Every piece of copy grounds itself in specific, real cultural and geographic detail — Jeonju, West Sea salt, Ongjin saeujeot, UNESCO kimjang recognition.
