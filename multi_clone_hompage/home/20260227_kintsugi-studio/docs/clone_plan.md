# Clone Plan — WABI Kintsugi Studio

## Project Overview

**Template**: 20260227_kintsugi-studio
**Brand**: WABI — Kintsugi Studio
**Tagline**: Broken, But More Beautiful
**Date Built**: 2026-02-27
**Type**: Luxury multi-page site (5 HTML pages)

---

## Design Decisions

### Hero Layout: TYPE G — Scroll-Driven Text Transform

Chosen for the philosophical resonance with kintsugi: large typographic words (WABI / SABI) that transform as the user scrolls, mirroring the gradual transformation of broken ceramics through the repair process. The hero is text-driven and contemplative rather than image-dominant — appropriate for a craft philosophy brand.

Scroll behavior:
- `heroWord1` (WABI): y: -60, scale: 0.92 on scroll
- `heroWord2` (SABI): y: -30, scale: 0.96 on scroll
- Tagline + CTA: autoAlpha 0 fade-out from center of hero
- Background parallax: yPercent: 25 on scroll

### Color Palette: P9 Rust Ember

The palette draws from Japanese craft tradition — deep earthen darks (--bg: #1C1008) evoking kiln-fired ceramics and nighttime atelier work, with the accent (--accent: #D4612A) referencing the iron-oxide warmth of terracotta and the glow of gold lacquer being applied by candlelight. The ivory (--ivory: #F0E4DC) suggests aged paper, ceramic off-white, bone china.

### Typography: F10 — EB Garamond + Nunito

EB Garamond provides the historical weight appropriate to a craft with 500-year roots — its italics are particularly elegant for philosophical quotations and product descriptions. Nunito provides a soft, contemporary counterpoint for navigation and labels, preventing the site from feeling archaic.

---

## Page Architecture

### index.html (1,600+ lines)
- Preloader (SVG kintsugi mark + loading bar)
- Fixed scroll indicator (right side, hides on scroll)
- Sticky navbar (transparent → solid on scroll)
- Hero TYPE G (WABI / SABI words)
- Stats strip (500+ pieces, 30 years, 24k gold, lifetime guarantee)
- Philosophy section (3-col grid: Wabi / Sabi / Kintsugi)
- Services 2x2 grid (alternating image-content layout)
- Studio feature (split layout with absolute-positioned accent image)
- Process timeline (5-step horizontal on desktop)
- Heritage section (Tokyo/Kyoto roots narrative)
- Testimonials (Swiper 11 carousel, 4 testimonials)
- Commission form (2-col with background image reveal)
- Footer (4-col)

### about.html (800+ lines)
- Founder portrait + biography
- Historical timeline (1962 → 2024)
- Philosophy deep-dive (sticky sidebar + scrolling pillars)
- Values grid (6-card)
- CTA

### collection.html (900+ lines)
- 4 flagship service cards (full-width alternating layout)
- Gold types grid (4-col with metallic swatches)
- Workshop detail with upcoming dates
- Corporate/institutional banner

### process.html (800+ lines)
- 5 process steps (alternating image/content rows)
- Overview stats strip
- Materials section (6-card)
- FAQ accordion (JavaScript toggle)
- CTA

### contact.html (700+ lines)
- Hero with background image
- Split commission form (info + form)
- Workshop upcoming dates
- Visit cards (3-col)
- Location section with map placeholder

---

## Component Patterns

### Card Hover States
- Background color shift (surface → surface2 or bg)
- Left border accent line (::before pseudo-element height: 0 → 100%)
- Image scale + brightness increase

### Navigation
- Desktop: horizontal links + CTA button
- Mobile: hamburger → full-screen overlay with large links
- Scroll behavior: padding shrinks, background solidifies

### Forms
- All inputs: surface2 background, border → accent-dark on focus
- Select elements: custom styling, option background matches surface2
- Submit: full-width, accent background

---

## Animation Strategy

All GSAP animations follow the A5 Organic pattern:
```js
{
  immediateRender: false,  // ALWAYS at top level
  autoAlpha: 0,
  y: gsap.utils.random(20, 28),
  duration: gsap.utils.random(1.0, 1.4),
  ease: 'power2.out',
  stagger: 0.09,
  scrollTrigger: { trigger: el, start: 'top 85%' }
}
```

Generic elements use `.js-fade-up` class with `gsap.utils.toArray` loop.
Named groups (stats, philosophy, process steps) use targeted selectors.

---

## Technical Stack

- GSAP 3.12.2 + ScrollTrigger (cdnjs CDN)
- Swiper 11 (jsdelivr CDN)
- SplitText polyfill (inline, no external CDN)
- Google Fonts: EB Garamond + Nunito
- Pure HTML/CSS/JS — no framework dependencies
- Mobile responsive: breakpoints at 1024px and 768px

---

## Originality Notes

- Brand WABI is original (no existing studio of this name in this form)
- Founder Hiroshi Tanaka is fictional
- All copy is original prose
- Color palette P9 and typography F10 are original design system entries
- Hero TYPE G scroll interaction is custom implementation
- No UI elements copied from external sources
