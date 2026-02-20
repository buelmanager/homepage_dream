# Caelum House — Luxury Astrology Consultation Studio

## Overview

Premium luxury astrology consultation studio landing page. Positioned as an appointment-only private practice for high-net-worth clients who view astrology as precision cartography, not spiritual entertainment. The aesthetic mirrors a Savile Row tailor crossed with a rare book library — aristocratic, contemplative, deeply authoritative.

## Industry

Luxury Astrology / Private Consultation Studio

## Brand

- **Name**: CAELUM HOUSE
- **Tagline**: "Your celestial blueprint, interpreted."
- **Sub-tagline**: "Private astrology consultations of uncommon depth."
- **Locations**: Zürich · London · New York

## Language

English

## Style

- **Theme**: Luxury, Contemplative, Aristocratic, Cosmic-Dark
- **Color Palette**:
  - Background: #141830 (Deep Midnight Navy, avg luminance 21.7)
  - Surface: #1C2040 (Cosmic Deep Indigo, avg luminance 32)
  - Accent Gold: #D4AF37 (Antique Gold Star)
  - Accent Violet: #6B3FA0 (Cosmic Violet, used sparingly)
  - Nebula Blue: #3D5A8A (Subtle glow effects)
  - Text Primary: #F0EDE8 (Pale Starlight)
  - Text Secondary: #8A99B8 (Muted Celestial Blue)
- **Typography**:
  - Headings: Cinzel (Google Fonts — uppercase Roman authority)
  - Decorative: Cinzel Decorative (logo/display moments)
  - Body: Jost (modern geometric sans, light weight)
- **Visual Effects**:
  - SVG constellation draw animation (preloader)
  - GSAP counter animations (immediateRender: false, snap)
  - ScrollTrigger reveal animations throughout
  - Swiper 11 testimonial carousel with pagination
  - Starfield particle background (hero)
  - Gold border-top accent lines on cards
  - Glow hover states on collection cards

## Hero Type

**TYPE D — PORTRAITS + STATS GRID**

Exact implementation per spec:
- `.hero { display: grid; grid-template-columns: 1fr 1fr; min-height: 100vh; }`
- `.hero-stats { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin: 36px 0; }`
- `.stat-num { font-size: 3rem; font-family: var(--font-serif); color: var(--accent); display: block; }`
- `.hero-right { display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; gap: 10px; height: 100vh; }`
- GSAP counters: `immediateRender: false, snap: { val: 1 }`

**Stats (hero)**:
1. 22 — Years of chart interpretation
2. 8,400+ — Consultations conducted
3. 147 — Unique chart configurations studied
4. 12 — Masters specializing by house & sign

## 13 Sections

1. **Preloader** — SVG constellation draw animation with path stroke-dashoffset reveal; star dots appear in sequence; gold wordmark and loading bar fade in
2. **Scroll Indicator** — Left-fixed vertical scroll indicator with animated gold sweep line
3. **Navbar** — Fixed navigation, transparent on hero, frosted-glass on scroll; gold CTA "Request Appointment"
4. **Hero** — TYPE D: Left panel (wordmark, tagline, 2×2 stats grid, CTAs) / Right panel (2×2 Unsplash image grid at 100vh)
5. **Stats Strip** — 4-column strip: Cities, Countries Served, Disciplines, Client Return Rate; GSAP scroll-triggered counters
6. **Philosophy** — 3-column grid: The Natal Chart / Transits & Timing / Synastry — each with custom SVG symbol, numbered I/II/III, copy, and hover gold top-line reveal
7. **Collection Grid** — 2×2 card grid with overflow:visible; four consultation types (Natal, Solar Return, Synastry, Jyotish) with image, duration, price; hover lift + gold glow
8. **Atelier** — 2-column: astrologer portrait (600px tall) with floating accent stat card + text panel with bio, blockquote, and credential tags
9. **Process** — 5-step vertical timeline: Submit Birth Data → Chart Calculation → Private Session → Written Report → Follow-Up Access; left line track with numbered circles
10. **Heritage** — 5-milestone horizontal grid from 2002–2024 with dot-on-line timeline; large ghost text watermark "Caelum" in background
11. **Press** — Swiper 11 carousel; client testimonials (anonymous, initials + city only); custom prev/next buttons + bullet pagination
12. **Booking Form** — 2-column: left side (heading + statement + 4 detail rows) / right side (complete form: name, email, birth date, birth time, birth city, consultation type, optional note); validation + submit feedback
13. **Footer** — 4-column grid (brand + 3 link columns); bg: var(--bg) strictly; copyright + legal links

## Technologies

- GSAP 3.12 (cdnjs) — ScrollTrigger, ScrollToPlugin
- Swiper 11 (jsdelivr cdn)
- Google Fonts: Cinzel, Cinzel Decorative, Jost
- Pure HTML/CSS/JS — no framework dependencies

## Color Rule Compliance

- `--bg: #141830` — avg luminance 21.7 ✅ (>20)
- `--surface: #1C2040` — avg luminance 32 ✅ (>20)
- All `:root` variables avg ≥ 20 ✅
- All section backgrounds avg ≥ 15 ✅
- Footer: `background: var(--bg)` ONLY ✅
- No `opacity: 0` on content elements in CSS ✅
- All `gsap.from() + scrollTrigger` use `immediateRender: false` ✅

## Image Sources

All images from Unsplash (validated 200 OK):
- `photo-1529958030586-3aae4ca485ff` — Night sky / cosmic scene
- `photo-1512327536842-5aa37d1ba3e3` — Manuscript / chart detail
- `photo-1543076447-215ad9ba6923` — Dark atmospheric interior
- `photo-1558618666-fcd25c85cd64` — Portrait / contemplative figure
- `photo-1524504388940-b1c1722653e1` — Portrait study

## Differentiators

- Positions astrology as precision cartography, not mysticism — appeals to skeptical luxury clients
- Appointment-only language throughout ("Request" not "Book") — mirrors private banking UX
- Testimonials fully anonymised (initials + city only) — signals discretion as luxury value
- Multi-city presence (Zürich, London, New York) — signals global consultancy
- Master specialization per astrologer (Hellenistic, Jyotish, Mundane) — signals depth
- Written report delivered by courier — tactile luxury differentiator

## File Structure

```
astrology-studio/
├── index.html      # Complete landing page (single file)
├── meta.json       # Template metadata
├── readme.md       # This file
└── images/         # Screenshots directory
```

## Created

February 2026
