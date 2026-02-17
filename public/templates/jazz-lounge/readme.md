# Jazz Lounge — BLUE NOTE Underground Jazz Club

## Overview
A premium single-page website template for an underground jazz lounge and vinyl bar. Dark, moody, and sophisticated — built for music venues, cocktail bars, and live performance spaces.

## Cloned From
`public/templates/bookstore/index.html` (CHAPTER ONE — Independent Bookstore & Cafe)

## Design Decisions

### Color Palette
- **Background**: `#0A0E1A` (deep midnight navy)
- **Surface**: `#141B2D` (charcoal navy)
- **Accent**: `#D4A853` (warm amber gold)
- **Text**: `#F0F0F5` (soft white)
- **Muted**: `#8B8FA3` (steel gray)

### Typography
- **Headings**: Playfair Display (elegant serif)
- **Body**: Inter (clean sans-serif)

### Sections
1. **Preloader** — Spinning vinyl record with tonearm animation
2. **Hero** — Full-bleed jazz club interior with typewriter tagline
3. **Marquee** — Scrolling jazz legends: Miles Davis, Coltrane, Monk, etc.
4. **Experience** — 6 service cards (Live Performance, Vinyl Listening, Cocktail Bar, Private Sessions, Jazz Workshops, Late Night Jams)
5. **Sound Explorer** — Tabbed genre pills (Bebop, Cool Jazz, Fusion, Latin Jazz, Free Jazz, Vocal Jazz) with album cards
6. **Vinyl Vault** — Album covers displayed on wooden shelves with 3D hover
7. **Jam Session** — Featured artist residency with weekly schedule
8. **FAQ** — Accordion with venue-specific questions
9. **Contact** — Reservations, directions, performance hours
10. **Footer** — Social links, navigation, newsletter

### Key Differentiators from Source
- Vinyl record spinning preloader (vs book page flip)
- Album cover cards (vs book spine cards)
- Music genre explorer (vs literary genre explorer)
- Jam session schedule (vs reading club)
- Gold accent on deep navy (vs emerald on forest green)
- All content in English (source had Korean mixed)
- IntersectionObserver animations (no ScrollTrigger dependency for reveals)

## Tech Stack
- HTML5 / CSS3
- GSAP 3.12 (timeline, fromTo animations)
- IntersectionObserver (scroll reveal)
- Google Fonts (Playfair Display + Inter)
- Unsplash images (free commercial use)

## Files
- `index.html` — Full single-page template
- `meta.json` — Template metadata for scan API
- `readme.md` — This file
- `images/` — Screenshots folder
