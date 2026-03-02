# Clone Plan — 20260302_ocean-fund

## Source Inspiration
Original fiction. Inspired visually by premium marine conservation organisations but with wholly original design, copy, and identity.

## Design Decisions
- Type G hero chosen for dramatic large-scale text reveal matching ocean scale
- Deep teal palette (#0A1818) — avg RGB = 16.7, surface layers ensure safe section brightness
- Spectral italic serif evokes scientific journals and ocean depth
- Scroll-driven word divergence creates memorable first impression

## Technical Notes
- Type G hero uses gsap.to() for scroll-driven transforms (correct for scrub)
- Initial reveal uses gsap.from() with immediateRender: false
- No CSS opacity:0 on content elements
- Footer uses background: var(--bg) only
