# Clone Plan — Celestial Society

## Source Inspiration
Original design system built from scratch. Inspired by high-end science institution websites and luxury observatory branding. No direct clone source.

## Design Decisions

### Hero (Type G — Scroll-Driven Text Transform)
Large typographic words CELESTIAL and SOCIETY sit in a sticky wrapper. As the user scrolls, the words slide apart (left and right respectively) and scale down to near-invisibility, creating a dramatic reveal of the content below. The fixed background image adds depth.

### Colour Strategy
Deep navy (#101420) background gives the impression of a night sky. Cyan accent (#4EE8FF) represents starlight and creates excellent contrast. All section backgrounds use CSS variables to stay within the safe colour range.

### Section Order
1. Preloader → 2. Scroll Indicator → 3. Navbar → 4. Hero (Type G) → 5. Stats Strip → 6. Philosophy (display:grid 3-col) → 7. Collection Grid (2×2) → 8. Atelier/Story → 9. Timeline (5 steps) → 10. Heritage Milestones (4 items) → 11. Reviews (Swiper 3 slides) → 12. Membership Form → 13. Footer

### Typography
Spectral (400/600 weight) for display text; Mulish (300/400) for body. Combination gives academic authority with modern lightness.

## Technical Notes
- All GSAP animations use immediateRender: false at top level
- No CSS opacity:0 on content elements
- Footer uses background: var(--bg) only
- Philosophy uses display:grid (not flex)
- Collection uses overflow:visible
