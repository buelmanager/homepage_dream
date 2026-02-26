# DUENDE — The Flamenco Academy

**Tagline:** Where Passion Becomes Precision
**Location:** Seville, Andalusia, Spain
**Status:** PUBLISHED
**Tier:** PRO

---

## Overview

DUENDE is a world-class, multi-page luxury landing page for a premier flamenco dance academy in Seville. The design captures the drama, passion, and precision of flamenco through a deep crimson and gold palette, Cinzel serif typography, and immersive GSAP animations.

---

## Pages

| File | Description |
|---|---|
| `index.html` | Main landing — diagonal split hero, performances, art section, class tiers, maestros, CTA |
| `about.html` | Academy history (1987–present), philosophy pillars, full faculty profiles, stats banner |
| `classes.html` | 4 program tiers, intensive week schedule, full weekly timetable, FAQ |
| `performances.html` | Featured event, full show calendar, tablao night series, student showcases, press quotes |
| `contact.html` | Enrollment inquiry form, contact info, visit directions, private event options |

---

## Design System

| Variable | Value | Purpose |
|---|---|---|
| `--bg` | `#231010` | Main background (avg 22.3 — SAFE) |
| `--surface` | `#2D1414` | Card/section background |
| `--accent` | `#CC2020` | Deep red — primary accent |
| `--accent2` | `#F0C040` | Gold — secondary accent, labels |
| `--text` | `#F5E8D0` | Primary text |
| `--text-muted` | `#A07060` | Secondary text |

**Fonts:** Cinzel (headings) + Raleway (body) — Google Fonts
**Animations:** GSAP 3.12.5 + ScrollTrigger — all with `immediateRender: false` at top level

---

## GSAP Implementation Notes

- All `gsap.from()` calls use `immediateRender: false` at top level (NOT inside scrollTrigger)
- Animation parameters: `y: 20–28px`, `duration: 0.9–1.2s`, `ease: 'power2.out'`, `start: 'top 85%'`
- No `opacity: 0` set via CSS on content elements
- Preloader hides after 2.4s with scroll indicator activated from preloader callback AND setTimeout(4000ms)
- Hero letters animated individually with stagger: 0.08

---

## Assets

- `images/thumbnail.webp` — 600×400px, 33KB (WebP quality 80)
- All Unsplash images loaded via CDN with validated HTTP 200 URLs
- Primary hero: `photo-1504609813442-a8924e83f76e` (confirmed 200)
- Fallback: `photo-1558618666-fcd25c85cd64` (confirmed 200)

---

## Template Info

- **Type:** Multi-page (5 HTML files)
- **Hero Layout:** Type C — Diagonal Split (see `hero-layouts.md`)
- **Page Count:** 5 pages
- **Section Count:** 5+ per page
- **Color Safety:** All sections avg ≥ 15, bg avg = 22.3 ✓
