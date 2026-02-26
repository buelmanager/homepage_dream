# MUSHIN — Dojo Retreat Landing Page

**Slug:** `20260226_dojo-retreat`
**Created:** 2026-02-26
**Tier:** PRO
**Status:** PUBLISHED

## Brand Concept

MUSHIN (無心 — "empty mind") is a luxury retreat center in a restored 17th-century Japanese temple outside Kyoto. The brand serves high-performing individuals seeking transformative experiences through traditional Japanese martial arts and meditation. Programs are limited to 12 guests, led by 6 masters in residence.

**Tagline:** *Empty the Mind. Find the Edge.*

## Design System

| Token | Value | Notes |
|-------|-------|-------|
| `--bg` | `#181410` | avg=20 ✓ passes dark check |
| `--surface` | `#221C16` | Card backgrounds |
| `--accent` | `#C04020` | Vermilion — samurai red |
| `--accent2` | `#E8C080` | Tatami gold |
| `--text` | `#F5EDE0` | Warm off-white |
| `--text-muted` | `#907060` | Secondary text |

**Fonts:**
- Heading: Cormorant Garamond (Google Fonts) — 300/400/600 weights + italic
- Body: Inter — 300/400/500 weights

## File Structure

```
20260226_dojo-retreat/
├── index.html          — Main landing page (hero + 5 sections)
├── about.html          — Temple history, philosophy, masters
├── programs.html       — 4 disciplines + Full Immersion
├── retreat.html        — Accommodation, cuisine, seasons, arrival
├── contact.html        — Application form, pricing, contact info
├── meta.json           — Template metadata
├── readme.md           — This file
├── images/
│   └── thumbnail.webp  — 600px wide, 22KB
└── docs/
    ├── clone_plan.md
    ├── originality_report.md
    └── image_validation.md
```

## Pages

### index.html — Main Landing Page
- Ink-brush enso SVG preloader animation
- Fixed left-side scroll indicator with vermilion accent
- Hero: cinematic full-screen with MUSHIN letter-by-letter reveal, floating kanji, 3 stats
- Section 1: The Arts — 4 discipline cards with kanji icons and philosophy quotes
- Section 2: The Temple — split layout (image + content)
- Section 3: A Week at MUSHIN — vertical timeline (alternating left/right)
- Section 4: The Masters — 3 portrait cards with hover bio reveal
- Section 5: Apply CTA — centered with watermark kanji
- Footer: 4-column

### about.html — Temple & Masters
- Temple history (1682–2019 timeline)
- Three Pillars philosophy (Emptiness / Form / Interval)
- 3 masters with full horizontal cards (image + bio)

### programs.html — Disciplines
- Overview intro
- 4 full-section discipline blocks (Aikido / Iaido / Zazen / Traditional Arts)
- Full Immersion section with inclusion grid

### retreat.html — The Experience
- Accommodation details with image grid
- Shojin Ryori cuisine (3 meals)
- 4-season calendar
- 4-step arrival guide

### contact.html — Application
- 4-step process explanation
- Full inquiry form (7 fields, no fake submission)
- 3-tier pricing grid
- Contact information + location detail

## GSAP Implementation

All animations follow the project standard:
- `immediateRender: false` at **top level** of `gsap.from()` (never inside scrollTrigger)
- No CSS `opacity: 0` on content elements
- ScrollTrigger start positions: `top 75%` – `top 88%` depending on element
- Stagger range: 0.06–0.15
- Duration range: 0.9–1.2s
- Ease: `power2.out` throughout

## Images (Unsplash)

All images validated via HTTP 200 check before embedding:

| ID | Usage |
|----|-------|
| `1528360983277-13d401cdc186` | Hero (Japanese forest/temple) |
| `1509631179647-0177331693ae` | Temple architecture |
| `1551488831-00ddcb6c6bd3` | Dojo interior / Aikido |
| `1485125639709-a60c3a500bf1` | Iaido / sword |
| `1503342394128-c104d54dba01` | Zen garden |
| `1553361371-9b22f78e8b1d` | Calligraphy |
| `1600607687939-ce8a6c25118c` | Accommodation |
| `1558618666-fcd25c85cd64` | Garden |
| `1524504388940-b1c1722653e1` | Cedar forest |
| `1555597673-b21d5c935865` | Thumbnail source |

## Thumbnail

- Source: Unsplash `1555597673-b21d5c935865` (HTTP 200 validated)
- Output: `images/thumbnail.webp`
- Dimensions: 600 × 399px
- File size: ~22KB
- Quality: cwebp -q 80
