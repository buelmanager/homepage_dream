# AquaVerde Foundation — Clean Water Fund Template

**Slug:** `20260302_clean-water-fund`
**Tier:** Premium ($49)
**Hero Layout:** Type G (Scroll-Driven Text Transform)
**Category:** Nonprofit / NGO — Clean Water Access

---

## Overview

A premium multi-page landing site for a clean water access foundation. The design uses a deep teal dark palette (#0A1818 background, #4DCFB0 accent) with DM Serif Display headings and Karla body type. The Type G scroll-driven hero features large-scale words ("CLEAN" and "WATER") that move apart as the user scrolls, revealing an impact image and statistics beneath.

The site spans five pages: a dramatic landing page with impact stats (840,000 people reached, 97% operational rate), an About page with the foundation's founding story and values, a Projects collection with filter bar, a How We Work process page with 6 detailed steps, and a Contact page with form and donation flow.

---

## Pages

| File | Title | Description |
|---|---|---|
| `index.html` | Home | Type G hero, impact stats, project preview, press section, CTA |
| `about.html` | About AquaVerde | Mission, founding story, values, timeline |
| `collection.html` | All Projects | Filterable 3-column grid of 6 active projects |
| `process.html` | How We Work | 6-step process from assessment to 5-year monitoring |
| `contact.html` | Contact | Split layout with info + form, donation amount selector |

---

## Design System

| Token | Value |
|---|---|
| `--bg` | `#0A1818` |
| `--surface` | `#0F2020` |
| `--accent` | `#4DCFB0` |
| `--ivory` | `#DCEFEC` |
| `--smoke` | `#809890` |
| `--muted` | `#4A6860` |
| `--border` | `#0C1E1E` |
| Serif | DM Serif Display |
| Sans | Karla 300/400/500 |

---

## Animation Spec (A2)

- **y:** 14px
- **duration:** 1.4–1.6s
- **ease:** power1.out
- **stagger:** 0.06
- **start:** top 85%

---

## Hero Type G

The scroll-driven hero uses a `min-height: 200vh` wrapper with a sticky inner panel. Two large words ("CLEAN" and "WATER") animate away from center using GSAP ScrollTrigger scrub:

- Word 1 → `x: -28vw`, `scale: 0.45`, `opacity: 0.1`
- Word 2 → `x: +28vw`, `scale: 0.45`, `opacity: 0.1`
- Scroll end reveals impact content section behind/below

---

## Images Used

All images from Unsplash (no licensed or identifiable individuals):

- Hero: `photo-1505118380757-91f5f5632de0` — water infrastructure
- About: `photo-1505118380757-91f5f5632de0` — water field work
- Projects: various landscape/infrastructure shots

---

## Technical Notes

- GSAP 3.12.2 + ScrollTrigger via CDN
- SplitText inline polyfill (GSAP Club CDN unavailable)
- `immediateRender: false` at top-level of all `gsap.from()` calls
- No CSS `opacity: 0` on content elements
- Philosophy grid: `display: grid`
- Collection grid: `overflow: visible`
- Footer: `background: var(--bg)` only
- Stats counter: `.toLocaleString()` for numbers above 1,000
