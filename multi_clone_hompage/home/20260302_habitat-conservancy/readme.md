# Sylvan Conservancy — Preserving Nature's Inheritance

**Slug:** `20260302_habitat-conservancy`
**Tier:** Free
**Hero Layout:** Type B (Parallax Dual-Layer)
**Industry:** Habitat conservation, rewilding, nature reserve stewardship

---

## Overview

A luxury landing page for **Sylvan Conservancy**, a fictional UK-based habitat restoration charity. Established in 1988, Sylvan Conservancy stewards 290,000 hectares of ancient woodland, upland bog, lowland fen, and native grassland across England and Wales.

The design uses a deep forest-green palette (`#0F1A10` background, `#4DAF6A` accent) with EB Garamond serif editorial typography and Nunito for body text — creating a refined, nature-rooted aesthetic that conveys authority and ecological credibility.

---

## Pages

| File | Title | Description |
|---|---|---|
| `index.html` | Homepage | Type B parallax hero, stats strip, philosophy, collection, heritage timeline, press, CTA |
| `about.html` | About | Mission, values grid, heritage timeline, leadership team |
| `collection.html` | Our Reserves | Reserve card grid with filter bar, interactive map placeholder |
| `process.html` | Our Work | Restoration framework, 5-step process timeline, science section |
| `contact.html` | Contact | Split enquiry form, location, social links |

---

## Design System

| Token | Value |
|---|---|
| `--bg` | `#0F1A10` |
| `--surface` | `#172016` |
| `--surface2` | `#1E2A1E` |
| `--accent` | `#4DAF6A` |
| `--accent-light` | `#72C985` |
| `--accent-dark` | `#2F8A47` |
| `--ivory` | `#E8F0E8` |
| `--smoke` | `#8AA08A` |
| `--font-serif` | EB Garamond |
| `--font-sans` | Nunito |

---

## Hero (Type B — Parallax)

- Dual-layer background: deep forest (`1426604966848-d7adac402bfd`) + misty canopy (`1419242902214-272b3f66ee7a`)
- `mousemove` interaction: layers respond at different parallax rates
- Particle overlay canvas (floating spores/seeds effect)
- Tagline: *Preserving Nature's Inheritance*

---

## Key Sections

- **Stats Strip:** 290K ha · 14 Reserves · 6,200+ Species · Est. 1988
- **Philosophy Grid:** 3-column display:grid layout with numbered conservation principles
- **Collection:** 2×2 offset card layout — Old-Growth Reserve, Broadmere Fen, Native Woodland, Wildflower Grassland
- **Atelier/Heritage:** Parallax image band with 4-milestone heritage timeline
- **Press:** Swiper carousel with fictional conservation award mentions
- **Contact CTA:** Full-width section with inline membership enquiry link

---

## GSAP Notes

- All `gsap.from()` with scrollTrigger use `immediateRender: false` at top level
- No `opacity: 0` on content elements in CSS
- Scroll indicator visible in preloader callback and `setTimeout(4000)`
- SplitText polyfill inline — no CDN dependency

---

## Images

All images from Unsplash CDN:
- Forest dawn: `1441974231531-c6227db76b6e`
- Aerial forest: `1470770221589-5ccc730bddf0`
- Ancient woodland: `1426604966848-d7adac402bfd`
- Misty forest: `1419242902214-272b3f66ee7a`
