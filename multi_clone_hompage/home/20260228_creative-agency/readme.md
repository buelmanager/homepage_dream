# EMBER STUDIO — Award-Winning Creative Agency

**Template:** `20260228_creative-agency`
**Tier:** Premium · £49
**Created:** 2026-02-28

---

## Overview

EMBER STUDIO is a premium multi-page luxury template for an award-winning creative branding and integrated communications agency. The design is authoritative, dark, and architecturally bold — built around Bebas Neue headlines and the Rust Ember palette (P9).

---

## Pages

| File | Description |
|------|-------------|
| `index.html` | Full landing page with preloader, Type F hero, all sections |
| `about.html` | Agency story, leadership team, values grid, global offices |
| `collection.html` | Work / Case studies with filterable project grid |
| `process.html` | 6-phase creative methodology with timeline + FAQ |
| `contact.html` | Full contact form with budget selector + office sidebar |

---

## Hero Layout — Type F (Interactive Depth-Layer)

Full-screen dark hero with:
- `hero-1.webp` at `brightness(0.3)`
- Massive Bebas Neue headline: "WE BUILD BRANDS THAT LEAD" at `clamp(5rem, 14vw, 12rem)`
- Orange gradient overlay
- Interactive work-type selector widget with 5 clickable tags:
  **Branding / Digital / Campaign / Identity / Strategy**
- Each tag click triggers an animated reveal of a brief description
- Active tag has orange accent glow
- Stats bar at bottom: 340+ Brands / 28 Cannes Lions / 180 Staff / 17 Years

---

## Color Palette — P9 Rust Ember

| Variable | Value | Use |
|----------|-------|-----|
| `--bg` | `#1C1008` | Page background |
| `--surface` | `#261608` | Cards, nav |
| `--surface2` | `#301E08` | Gallery bg, testimonials |
| `--accent` | `#D4612A` | Primary accent, CTAs |
| `--accent-light` | `#EC8050` | Hover states |
| `--ivory` | `#F5EDE0` | Body text, headings |
| `--smoke` | `#C8B8A0` | Secondary text |
| `--muted` | `#887060` | Muted labels |

---

## Typography — F3 Bebas Neue + DM Sans

- **Headings:** `Bebas Neue` — Massive scale, letter-spacing 0.02–0.25em
- **Body:** `DM Sans` 300/400/500 — Clean, readable, modern

---

## Animation — A3 Precise

```js
{ x: -20, duration: 0.75, stagger: 0.04, ease: 'power3.out' }
```

All `gsap.from()` calls with `scrollTrigger` include `immediateRender: false` at TOP LEVEL.

---

## GSAP Critical Rules Applied

- `immediateRender: false` at top level of all `gsap.from()` — NEVER inside `scrollTrigger:{}`
- No `opacity: 0` set via CSS on content elements
- Scroll indicator shown in: preloader `onComplete` AND `setTimeout(4000)`
- Philosophy grid: `display: grid; grid-template-columns: repeat(3, 1fr)`
- Collection/work grid: `overflow: visible`
- Footer: `background: var(--bg)` — no hardcoded hex

---

## Required Images

```
images/
  hero-1.webp      — Hero background (full screen)
  hero-2.webp      — Awards section accent
  hero-3.webp      — Testimonial avatar / gallery
  hero-4.webp      — Contact map overlay / process
  product-1.webp   — Case study: Vanta Financial
  product-2.webp   — Case study: Oriole / Slate Urban
  product-3.webp   — Case study: Nova Wellness / Meridian
  product-4.webp   — Case study: Meridian Identity / Echo
  ambient-1.webp   — Studio interior / awards
  ambient-2.webp   — Brand board / Korova campaign
  ambient-3.webp   — Strategy session / Aurelius
  thumbnail.webp   — 600px wide preview thumbnail
```

---

## Brand Identity

- **Agency Name:** EMBER STUDIO (Ember Creative Studio)
- **Tagline:** "We build brands that lead. Campaigns that move."
- **Founded:** 2008, Shoreditch London
- **Offices:** London (HQ) · New York · Tokyo
- **Staff:** 180+
- **Notable:** 28 Cannes Lions, 14 D&AD Pencils, 9 Clios

---

## CDN Dependencies

- GSAP 3.12.2: `cdnjs.cloudflare.com`
- ScrollTrigger 3.12.2: `cdnjs.cloudflare.com`
- Swiper 11: `cdn.jsdelivr.net`
- Google Fonts: Bebas Neue + DM Sans
- SplitText: **inline polyfill** (no Club GSAP dependency)
