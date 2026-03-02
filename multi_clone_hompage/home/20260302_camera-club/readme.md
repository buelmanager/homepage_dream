# The Aperture Society — Photography Club Landing Page

**Slug:** 20260302_camera-club
**Category:** Club / Society
**Tier:** Free
**Hero Layout:** Type D — Portraits + Stats Grid

## Overview

A luxury multi-page landing page for a fine art photography club. Uses Spectral serif + Mulish sans typography. Dark graphite palette (#181818) with silver accent (#B0B0C0). The hero splits into a content panel (left) with animated stat counters and a portrait grid (right) with three image cards, one spanning two rows.

## Pages

- `index.html` — Full landing page
- `about.html` — Society history and founding members
- `collection.html` — Gallery and programme listing
- `process.html` — Membership tiers (Associate / Member / Fellow)
- `contact.html` — Contact form

## Key Design Details

- Aperture animation in preloader (circle expanding/contracting)
- Film strip decorative element between hero and stats
- Gallery cards with grayscale-to-color hover effect
- Circle symbols (○) used as list bullets
- Photography-specific membership naming

## Technical Notes
- Hero Type D: grid layout (1fr 1fr), portrait grid (repeat(2,1fr)) with pc-large grid-row: span 2
- Hero stats animated with counter on page load (delay 1.3s)
- Stats strip counters triggered by ScrollTrigger
- All GSAP immediateRender: false at top level
- Footer: background: var(--bg) only
- Philosophy: display:grid 3-col
- Collection: overflow:visible
