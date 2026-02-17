# Bespoke Tailor — SAVILE & SON Premium Tailoring Atelier

## Overview
A premium single-page website template for a luxury bespoke tailoring atelier. Refined, elegant, and sophisticated — built for high-end tailoring houses, bespoke suiting, and custom menswear ateliers.

## Cloned From
`multi_clone_hompage/home/watch-atelier/index.html` (HOROLOGIE — Luxury Watch Atelier)

## Design Decisions

### Color Palette
- **Background**: `#0C0B0E` (deep charcoal-plum)
- **Surface**: `#171419` (dark grape)
- **Accent**: `#BFA07A` (warm champagne/camel)
- **Text**: `#F5F0EB` (warm cream)
- **Muted**: `#9E958C` (warm gray)

### Typography
- **Headings**: Cormorant Garamond (elegant serif, more refined than Cinzel)
- **Body**: DM Sans (modern clean sans-serif)

### Sections
1. **Preloader** — Needle & thread stitching animation
2. **Hero** — Radial composition with concentric measuring-tape rings, tailor workshop backdrop
3. **Marquee** — Scrolling fabric houses: Loro Piana, Holland & Sherry, Scabal, Dormeuil, etc.
4. **Collection** — Swiper carousel showcasing bespoke suits with fabric/construction details
5. **Craftsmanship** — 6-step circular process (Consultation, Measure, Pattern, Cut, Baste & Fit, Finish) with SVG scissors animation
6. **Materials** — 4-column fabric gallery with shimmer sweep (Super 150s Merino, Cashmere, Silk, Irish Linen)
7. **Gallery** — Workshop photos in masonry grid (measuring, cutting, sewing, fitting)
8. **FAQ** — Bespoke tailoring specific questions
9. **Contact** — "By Appointment Only" with fitting schedule and reservation form
10. **Footer** — Social links, services, navigation

### Key Differentiators from Source
- Needle & thread preloader (vs clock hands)
- Champagne/camel accent on charcoal-plum (vs amber on warm brown)
- Cormorant Garamond + DM Sans (vs Cinzel + Lato)
- Tailoring-specific content: fabrics, measurements, fittings
- SVG scissors animation in craftsmanship (vs gear rotation)
- All content in English (source had Korean)
- IntersectionObserver animations (no ScrollTrigger for reveals)

## Tech Stack
- HTML5 / CSS3
- GSAP 3.12 (timeline, fromTo animations)
- Swiper 11 (collection carousel)
- IntersectionObserver (scroll reveal, iframe compatible)
- Google Fonts (Cormorant Garamond + DM Sans)
- Unsplash images (free commercial use)

## Files
- `index.html` — Full single-page template
- `meta.json` — Template metadata for scan API
- `readme.md` — This file
- `images/` — Screenshots folder
