# MANDALA — Tibetan Healing Sanctuary

**A luxury multi-page landing page for a high-altitude Tibetan wellness retreat**

## Project Overview

MANDALA is a complete 5-page luxury landing page for a fictional wellness sanctuary set in a restored 17th-century monastery above Lhasa, Tibet. The design uses a rich dark palette of saffron gold and deep warm brown inspired by monastery thangka murals and butter lamp candlelight.

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Main landing page with animated mandala preloader, cinematic hero, and 5 sections |
| `about.html` | Monastery history, healing philosophy, and master practitioners |
| `treatments.html` | Full treatment menu with 4 signature treatments and 3 complementary therapies |
| `retreat.html` | Three retreat packages, accommodation suites, sample daily itinerary, travel logistics |
| `contact.html` | Tabbed booking form (treatment / retreat / general), travel information |

## Design System

| Variable | Value | Usage |
|----------|-------|-------|
| `--bg` | `#1C1510` (avg 21.7) | Page background |
| `--surface` | `#261C14` | Section backgrounds |
| `--accent` | `#D4A020` | Saffron gold — primary accent |
| `--accent2` | `#C08040` | Copper — secondary accent |
| `--text` | `#F0E8D8` | Primary text |
| `--text-muted` | `#907060` | Secondary text |

**Heading Font:** IM Fell English (Google Fonts)
**Body Font:** Inter

## Technical Stack

- Pure HTML/CSS/JS — no build step required
- GSAP 3.12.5 + ScrollTrigger (CDN)
- All `gsap.from()` calls use `immediateRender: false` at top level (never inside scrollTrigger)
- No CSS `opacity: 0` on content elements
- Responsive breakpoint at 900px

## Sections (index.html)

1. **Hero** — Cinematic full-screen with mandala preloader, layered mist parallax, letter-stagger title reveal, floating prayer wheel
2. **Healing Arts** — 4 treatment cards with SVG icons
3. **The Sanctuary** — Split layout with monastery image and statistics
4. **Retreat Journeys** — 3 package cards
5. **Ancient Wisdom** — Typography-driven manifesto section
6. **Masters & Practitioners** — 4 team portraits

## Images

All images sourced from Unsplash. Thumbnail generated from confirmed 200-status URL as `images/thumbnail.webp`.

## Colour Safety Check

- `--bg: #1C1510` → R=28, G=21, B=16 → avg = 21.7 ✓ (above threshold of 15)
- `--surface: #261C14` → R=38, G=28, B=20 → avg = 28.7 ✓
- Footer: `background: var(--bg)` only, no hardcoded dark hex

## File Count

8 core files + 1 thumbnail image + 3 docs = 12 files total
