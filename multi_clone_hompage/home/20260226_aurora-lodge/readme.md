# BOREALIS — Aurora Lodge

## Industry
Ultra-exclusive Arctic Aurora Experience Lodge

## Brand Concept
**BOREALIS — Where Night Becomes Myth**
An ultra-exclusive arctic expedition lodge hosting a maximum of 8 guests per season window. Operating across Norwegian Fjords, Iceland, Finnish Lapland, and the Svalbard Archipelago. The brand voice is hushed, mystical, and cinematic — positioned above mainstream luxury toward the realm of transformative experience.

## Color Palette
| Token | Hex | RGB avg | Status |
|---|---|---|---|
| --bg | #141830 | 30.7 | PASS |
| --surface | #1C2240 | 42.0 | PASS |
| --surface2 | #222848 | 45.3 | PASS |
| --accent | #1DB4A0 | aurora teal | — |
| --gold | #E8935A | arctic amber | — |
| --text | #EEF0F8 | near white | — |
| --text-muted | #8892B0 | slate blue | — |

## Typography
- **Headings:** Cormorant Garamond (Google Fonts) — 300/400/500/600 weights, italic variants
- **Body:** Inter (Google Fonts) — 300/400/500/600 weights

## Sections
1. Preloader — SVG aurora path animation with stroke-dashoffset, progress bar
2. Navbar — transparent → frosted glass on scroll, CTA button
3. Hero — Canvas aurora animation + parallax BG + SplitText headline + floating badge
4. Stats — 4 animated counters (12 Seasons, 847 Guests, 2400+ Hours, 4 Destinations)
5. Experiences — 3 hover-reveal cards (Aurora Vigil, Ice Cathedral, Midnight Photography)
6. Accommodations — 2 cards with floating detail slide-in panel
7. The Journey — 4-step illustrated timeline with connecting line
8. Testimonials — 3-slide auto-advancing slider with dot navigation
9. Gallery — 6-image masonry grid with full lightbox
10. Reserve — Full-width CTA with contact form and aurora overlay
11. Footer — 4-column, background: var(--bg)

## Left Scroll Indicator
Fixed left-side indicator showing section number, fill progress line, and section title — updated via IntersectionObserver.

## Animation Technology
- **GSAP 3.12.2** + **ScrollTrigger** (cdnjs CDN)
- **Canvas API** — procedural aurora band animation (5 sinusoidal gradient bands)
- **IntersectionObserver** — scroll indicator + section tracking
- **CSS keyframes** — preloader paths, pulse dots, reserve aurora overlay
- **Inline SplitText polyfill** — hero headline character-split reveal
- All `gsap.from()` calls with scrollTrigger use `immediateRender: false` at top level

## Image Sources
All images from Unsplash (free to use). Pre-validated IDs embedded directly in HTML.
See docs/image_validation.md for full table.
