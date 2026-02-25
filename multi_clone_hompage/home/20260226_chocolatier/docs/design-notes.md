# NOIR CACAO — Design Notes

## Brand Identity
- **Name**: NOIR CACAO — The Architecture of Chocolate
- **Founded**: Brussels, 1983 (fictional)
- **Concept**: Ultra-luxury Belgian/French artisan chocolatier with single-origin grand cru cacao

## Color System
| Token | Hex | Avg RGB | Status |
|---|---|---|---|
| --bg | #201509 | (32+21+9)/3 = 20.7 | PASS |
| --surface | #2A1A0C | (42+26+12)/3 = 26.7 | PASS |
| --surface2 | #321F0E | (50+31+14)/3 = 31.7 | PASS |
| --accent | #D4A853 | gold | — |
| --accent2 | #8B2500 | deep ruby | — |

## Sections
1. Preloader — cacao pod SVG stroke-draw animation + letter reveal
2. Navbar — dark elegant with gold accent, scroll-aware
3. Hero — full-screen chocolate pour image, cinematic parallax
4. Origins — SVG world map with animated pins + 4 origin cards
5. Collections — 3 luxury gift box cards with hover effects
6. Atelier Process — 5 steps with icon circles and connecting line
7. Grand Cru Selection — 6-item bar grid with tasting notes
8. Bespoke Orders — split layout with image frame trick
9. Tasting Events — date list with animated row entries
10. Testimonials — 3-column quote cards
11. Footer — background: var(--bg) ONLY per rules

## GSAP Implementation
- All gsap.from() with scrollTrigger use `immediateRender: false` at TOP LEVEL
- No opacity: 0 set in CSS on content elements
- SplitText inline polyfill embedded
- Hero parallax: scrub-based yPercent
- Preloader SVG: stroke-dashoffset draw technique
- Scroll indicator: auto-reveal after 4000ms

## Left Scroll Indicator
Fixed left:32px, 8 dots for all major sections, gold active state, label tooltip on hover

## Images (all Unsplash)
- Hero: photo-1481391319972-72a274e6e698 (dark chocolate melting)
- Collections 1: photo-1548907994-b5b42ef7d4ca (bonbons)
- Collections 2: photo-1606312619070-d48b4c652a52 (cacao beans)
- Collections 3: photo-1549007953-19d6c6a4c4c9 (pralines box)
- Bespoke: photo-1578985545062-69928b1d9587 (dark cake)
- Bars: validated IDs from project memory

## Typography
- Headings: Cormorant Garamond (serif, editorial)
- Display/UI: Cinzel (all-caps, architectural)
- Body: EB Garamond (classical, legible)
