# Coffee Roastery — ORIGIN ROASTERS Specialty Coffee Roastery & Tasting Room

## Overview
A premium single-page website template for a specialty coffee roastery. Warm, artisanal, and inviting — built for coffee roasters, specialty cafes, and bean subscription services.

## Cloned From
`multi_clone_hompage/home/pet-clinic/index.html` (PAWSOME VET — Premium Animal Clinic)

## Design Decisions

### Color Palette
- **Background**: `#0F0D0A` (deep espresso)
- **Surface**: `#1A1714` (dark roast)
- **Accent**: `#C87941` (warm copper)
- **Text**: `#F5EDE4` (cream)
- **Muted**: `#9C8B7A` (coffee muted)

### Typography
- **Headings**: Fraunces (organic, vintage serif)
- **Body**: Source Sans 3 (clean modern sans-serif)

### Sections
1. **Preloader** — Coffee bean cascade/pour animation
2. **Hero** — Roastery interior with warm lighting
3. **Banner** — "Fresh Roast Daily" highlight (replaces emergency banner)
4. **Marquee** — Coffee origins scrolling: Ethiopia, Colombia, Guatemala, Kenya, Brazil, etc.
5. **Services** — 6 service cards (Single Origin, Espresso Bar, Brewing Workshops, Subscriptions, Tastings, Corporate)
6. **Origin Tabs** — 4 coffee origin tabs (Ethiopian, Colombian, Guatemalan, Indonesian) with images and flavor profiles
7. **Team Carousel** — Barista/roaster cards with Swiper
8. **Gallery** — Roastery & cafe photos in grid (4-col, first item 2x2)
9. **FAQ** — Coffee-specific questions
10. **Contact** — Visit & order with opening hours
11. **Footer** — Social links, services, info

### Key Differentiators from Source
- Coffee bean cascade preloader (vs paw print walk)
- Copper/espresso palette (vs amber/brown)
- Fraunces + Source Sans 3 (vs Quicksand + Nunito Sans)
- Coffee-specific content: origins, roast profiles, brewing methods
- "Fresh Roast Daily" banner (vs 24h emergency)
- All content in English (source had Korean mixed)
- IntersectionObserver animations (no ScrollTrigger for reveals)

## Tech Stack
- HTML5 / CSS3
- GSAP 3.12 (timeline, fromTo animations)
- Swiper 11 (team carousel)
- IntersectionObserver (scroll reveal, iframe compatible)
- Google Fonts (Fraunces + Source Sans 3)
- Unsplash images (free commercial use)

## Files
- `index.html` — Full single-page template
- `meta.json` — Template metadata for scan API
- `readme.md` — This file
- `images/` — Screenshots folder
