# The Grand Chess Guild — Chess Club Landing Page

**Slug:** 20260302_chess-guild
**Category:** Club / Society
**Tier:** Free
**Hero Layout:** Type G — Scroll-Driven Text Transform

## Overview

A luxury multi-page landing page for a competitive chess guild. Uses Cinzel serif typography for its classical authority, with Crimson Pro for body text. Dark monochrome palette (#181818) with silver accent (#B0B0C0). The hero features the words GRAND and CHESS diverging on scroll, with chess piece symbols used throughout as decorative elements.

## Pages

- `index.html` — Full landing page with all 13 sections
- `about.html` — Guild history and coaching faculty
- `collection.html` — Tournament and competition calendar
- `process.html` — Membership tiers (Initiate / Member / Patron)
- `contact.html` — Contact form and details

## Key Design Details

- Checkered pattern stripe (CSS repeating-linear-gradient) as section divider
- Chess unicode pieces (♚ ♛ ♜ ♞) used as decorative icons
- Cinzel + Crimson Pro — classical/academic authority
- Left-border quote style for review cards
- Roman numerals (I–V) for timeline

## Technical Notes
- Hero Type G: both words scrub outward with scale 0.4 / opacity 0.05
- All GSAP immediateRender: false at top level
- Philosophy grid: display:grid (3-col)
- Collection grid: overflow:visible
- Footer: background:var(--bg) only
