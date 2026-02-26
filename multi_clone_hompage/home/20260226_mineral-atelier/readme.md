# LITHIC — Fine Mineral & Gemstone Gallery

**Template Slug:** `20260226_mineral-atelier`
**Tier:** PRO · $49
**Status:** PUBLISHED

---

## Overview

LITHIC is a complete luxury multi-page landing page for a high-end mineral specimen and gemstone gallery. The brand concept centres on an exclusive atelier that sources extraordinary geological specimens from remote quarries worldwide, certifies them via GIA-trained gemologists, and pairs each piece with blockchain-anchored provenance documentation.

**Tagline:** "The Earth's Most Intimate Secrets."

---

## Pages

| File | Description |
|---|---|
| `index.html` | Main landing page — cinematic hero, featured specimens (masonry grid), collection categories, bespoke installations, provenance promise, CTA |
| `about.html` | Gallery story, founding philosophy, gemologist team profiles, global sourcing regions |
| `collection.html` | Full collection grid with filter bar, featured specimen highlight, meteorite special section |
| `bespoke.html` | Custom installations page — services, full-bleed portfolio, 5-step process, testimonials |
| `contact.html` | Inquiry form with type tabs, gallery locations map, private viewing info |

---

## Design System

| Token | Value |
|---|---|
| `--bg` | `#1A1A1F` (avg 27.7 — passes dark check) |
| `--surface` | `#222230` |
| `--accent` | `#C0A040` (gold) |
| `--accent2` | `#9080C0` (amethyst purple) |
| `--text` | `#F0EEF8` |
| `--text-muted` | `#706880` |
| Heading font | Bodoni Moda (Google Fonts) |
| Body font | Inter (Google Fonts) |

---

## Technical Notes

- **GSAP 3.12.5** via cdnjs CDN — ScrollTrigger registered on all pages
- All `gsap.from()` with `scrollTrigger` use `immediateRender: false` at top level (per project rules)
- No CSS `opacity: 0` on content elements
- Preloader: crystal polygon growth animation (SVG, CSS keyframes)
- Scroll indicator: left-fixed, visible after preloader exits
- Hero: parallax background via GSAP scrub
- All internal links point to real page files — no `href="#"` dead links
- Images: Unsplash CDN with validated IDs
- Thumbnail: WebP, 600px wide, ~33KB

---

## File Structure

```
20260226_mineral-atelier/
├── index.html
├── about.html
├── collection.html
├── bespoke.html
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

---

## Sections — index.html

1. Preloader (crystal polygon SVG growth animation)
2. Fixed scroll indicator (left side)
3. Fixed navigation
4. Hero — cinematic full-screen with mineral macro photography, gold foil LITHIC logotype, animated crystal facet SVG overlay, floating geo-coordinate badge
5. Featured Specimens — 6-card staggered masonry grid (amethyst, malachite, tourmaline, meteorite, labradorite, aquamarine)
6. Collection Categories — 4-col full-bleed category grid (Crystals, Agates, Fossils, Meteorites)
7. Bespoke Installations — 2 split-layout project showcases
8. Provenance Promise — 4-step verification process
9. Acquire a Piece — CTA section
10. Footer — 4-col with social, navigation links

---

*Created: 2026-02-26*
