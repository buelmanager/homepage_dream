# FROST & CO — Ice Sculpting Atelier

**Slug:** `20260226_ice-atelier`
**Tier:** PRO ($49)
**Status:** PUBLISHED
**Created:** 2026-02-26

## Brand Concept

FROST & CO is a world-class ice sculpting atelier creating monumental ice installations for luxury events, hotels, and brand activations. Every piece is carved from -40°C ultra-clear glacial ice. The studio also runs exclusive ice-carving workshops.

**Tagline:** "Clarity. Precision. Impermanence."

## Design System

| Token       | Value     | Notes                        |
|-------------|-----------|------------------------------|
| `--bg`      | `#0F1C24` | avg 26.3 (passes dark check) |
| `--surface` | `#162230` | Card / section background    |
| `--accent`  | `#80D4F0` | Ice blue                     |
| `--accent2` | `#C8E8FF` | Frost white / pale blue      |
| `--text`    | `#EEF8FF` | Primary text                 |
| `--text-muted` | `#5080A0` | Secondary text            |

**Fonts:** Montserrat (100, 300, 400, 700) — headings / Montserrat logo; Inter (300, 400, 500) — body copy

## File Structure

```
20260226_ice-atelier/
├── index.html         # Main landing page (cinematic hero, 5 sections)
├── about.html         # Studio story, master carvers, ice source
├── gallery.html       # Portfolio: weddings, hotels, brands, fine art
├── workshops.html     # 3-tier workshop programme with booking
├── contact.html       # Commission inquiry form + studio locations
├── meta.json          # Template metadata
├── readme.md          # This file
├── images/
│   └── thumbnail.webp # 600px thumbnail for marketplace
└── docs/
    ├── clone_plan.md
    ├── originality_report.md
    └── image_validation.md
```

## Pages

### index.html — Main Landing Page
- Preloader: crystal/snowflake SVG with rotation animation
- Scroll indicator: fixed left, fade-in after preloader
- Navbar: fixed with scroll backdrop-filter
- **Hero:** Cinematic full-screen with parallax bg, letter-by-letter title reveal, floating crystal CSS shapes, stats (200+ sculptures / 40 countries / -40°C)
- Section 1: Featured Works — 6-image masonry grid
- Section 2: The Ice — source/process story with image
- Section 3: For Your Event — 4 event-type cards
- Section 4: Workshops — 3 pricing tier cards
- Section 5: Commission CTA
- Footer

### about.html — Studio Story
- Origin story with timeline (2004–2024)
- Master carvers profiles (3 carvers with credentials)
- Ice source deep-dive (Norwegian glacial water)
- Philosophy grid (Clarity / Precision / Impermanence)

### gallery.html — Portfolio
- Full gallery masonry grid (12 works, varied sizes)
- Filter tabs (All / Weddings / Hotels / Brand Events / Fine Art)
- Category sections: Weddings, Hotels, Brand Activations, Fine Art

### workshops.html — Workshop Programme
- 3-tier pricing cards: Discovery (€380), Artisan (€780), Master Class (€3,200)
- What to Expect — 4-step process
- Calendar grid of upcoming dates
- FAQ accordion (6 questions)

### contact.html — Commission & Booking
- 3 inquiry type cards (Commission / Workshop / General)
- Full commission inquiry form (name, email, type, date, location, budget, message)
- 3 studio location cards (Oslo, London, Dubai)
- 5-step commission process timeline

## GSAP Implementation

All animations follow the mandatory rules:
- `immediateRender: false` at top level of `gsap.from()` calls
- No `opacity: 0` in CSS on content elements
- Scroll indicator shown in two places (preloader callback + setTimeout 4000ms)
- Stagger values: 0.08–0.15 (within safe range)
- y values: 20–32px (within safe range)
- duration: 0.9–1.2s, ease: 'power2.out'

## Image Sources

All images sourced from Unsplash (free to use). Primary images:
- Hero: photo-1548247416-ec66f4900b2e (ice/winter)
- Gallery: Multiple validated Unsplash IDs (see image_validation.md)
- All images lazy-loaded with `loading="lazy"`

## Color Check

- `--bg: #0F1C24` → R=15, G=28, B=36 → avg = (15+28+36)/3 = **26.3** ✓ (passes ≥20 rule)
- `--surface: #162230` → R=22, G=34, B=48 → avg = **34.7** ✓
- Footer uses `background: var(--bg)` — no hardcoded hex ✓
- All sections use `--bg` or `--surface` — no dark hex values ✓
