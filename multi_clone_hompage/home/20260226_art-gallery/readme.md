# MERIDIAN GALLERY — Where Art Finds Its Horizon

**Template Slug:** `20260226_art-gallery`
**Category:** Contemporary Fine Art Gallery
**Type:** Single Page
**Created:** 2026-02-26

---

## Overview

MERIDIAN GALLERY is a luxury landing page for a contemporary fine art gallery representing 40+ international artists. The design embodies refined minimalism, intellectual authority, and masterful use of white space — qualities consistent with museum-grade presentation.

## Color System (Light Theme)

| Token         | Value     | Avg(R+G+B)/3 | Status |
|---------------|-----------|--------------|--------|
| `--bg`        | `#F7F4EF` | 246          | PASS   |
| `--surface`   | `#EFEBE4` | 234          | PASS   |
| `--accent`    | `#1A1A1A` | N/A (text)   | —      |
| `--accent2`   | `#C85D3A` | N/A (accent) | —      |
| `--text-muted`| `#6B6560` | N/A (text)   | —      |

This is a **light theme** — distinct from most templates in the library.

## Sections

1. **Preloader** — SVG frame/canvas line drawing animation (rect, horizon line, circle)
2. **Navbar** — minimal wordmark + links + "Visit Gallery" CTA; scrolled state adds bg
3. **Hero** — 2-column: large editorial typography left, artwork image right + floating exhibition tag
4. **Marquee Strip** — dark band, scrolling exhibition/fair text
5. **Current Exhibition** — large image + full description, artist, dates, media
6. **Artists** — 3×2 grid of artist cards with portrait images, grayscale hover reveal
7. **Collection Highlights** — masonry 3-column grid, 6 artworks, hover price/title overlay
8. **Art Fairs** — dark section, numbered list of 4 upcoming fairs with hover underline animation
9. **About** — 2-column: editorial text + large image, 4 values grid
10. **Contact/Visit** — gallery hours + address + inquiry form
11. **Footer** — surface bg, 4-column links + social links + legal

## GSAP Implementation

- CDN: `gsap 3.12.2` + `ScrollTrigger` from cdnjs
- All `gsap.from()` with `scrollTrigger` use `immediateRender: false` at top level
- No `opacity: 0` on content elements in CSS
- Inline `SplitText` polyfill for hero heading character animation
- Scroll indicator: fixed left, dark lines, section number counter
- Parallax on hero image via `scrub: 1`

## Unsplash Images Used

| Usage                  | Photo ID                      |
|------------------------|-------------------------------|
| Gallery interior (hero)| 1578301978018-3005759f48f7   |
| Abstract painting      | 1544967082-d9d25d867d66      |
| Museum corridor        | 1541961017774-22349e4a1262   |
| Art installation       | 1580136579312-4b4d99f7e5b3   |
| Painting detail        | 1513519245088-0e12902e35ca   |
| Sculpture exhibit      | 1518998053901-5348d3961a04   |
| Gallery opening night  | 1531243625752-c0eb5edc17a5   |
| Artist with artwork    | 1460661419201-fd4cecdf8a8b   |
