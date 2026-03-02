# Clone Plan — The Folio Society of Letters

## Overview
Private literary society homepage with Hero Type G (scroll-driven text) — targeting book collectors, literary enthusiasts, and serious readers.

## Design Decisions
- Hero Type G: Large typographic words scroll apart as user scrolls, creating dramatic literary entrance
- Midnight blue (#141820) evokes late-night reading and scholarly depth
- Libre Baskerville with italic usage suggests classic book typography and editorial quality
- Fixed background image with brightness(0.22) creates cinematic depth without sacrificing text legibility

## Page Architecture
- `index.html`: Full 13-section homepage
- `about.html`: Founding story with image and 3 council member profiles
- `collection.html`: Library grid with 7 filter categories
- `process.html`: Events programme with dated listing rows
- `contact.html`: Contact form emphasising correspondence tone

## Hero Type G Implementation Notes
- `.hero-text-driven` min-height: 200vh for scroll travel distance
- `.hero-bg` uses `position: fixed` (not sticky) for true parallax
- Words scrub apart on x-axis (±25vw) with scale 0.5 as user scrolls
- Tagline and CTA fade out at 20%–50% scroll range
- Entrance animation triggers after preloader delay (2.2s)
