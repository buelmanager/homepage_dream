# Clone Plan — Grand Touring Vintage Club

## Source Inspiration
Original design. Inspired by luxury automotive brands (Bentley, Aston Martin) and classic car auction house websites. No direct clone.

## Design Decisions

### Hero (Type C — Diagonal Split)
Left panel contains all text content against the dark background. Right panel is a full-bleed classic car photograph. The diagonal clip-path polygon creates the angled split. An overlay gradient bleeds the left panel into the photo for depth.

### Colour Strategy
Monochrome graphite (#181818 base) with silver-grey accent (#B0B0C0) — evoking polished chrome and brushed metal. No warm colours; everything is cool and mechanical.

### Typography
Bebas Neue for all headlines — authoritative, mechanical, automotive. DM Sans for body text — contemporary and readable. The combination gives a luxury marque feel.

### Section Order
Preloader → Scroll Indicator → Navbar → Hero (C) → Chrome Stripe → Stats → Philosophy → Collection → Atelier → Timeline → Heritage → Reviews → Membership → Footer

## Technical Notes
- Hero clip-path: polygon(0 0, 100% 0, 88% 100%, 0 100%) on left panel
- All GSAP use x: -20 (not y) per Animation Personality A3
- immediateRender: false at top level in all gsap.from() calls
- Footer: background: var(--bg) only
