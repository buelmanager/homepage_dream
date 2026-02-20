# KANADE — Kimono Atelier Landing Page

**Slug:** kimono-atelier
**Tier:** PRO
**Industry:** Kimono Atelier / Japanese Luxury Textile
**Hero Type:** C — Diagonal Split

## Brand

**KANADE 奏** (Maison Kanade — Atelier de Kimono de Luxe)
Ultra-luxury bespoke kimono atelier. Commission-only. Founded by a 5th-generation Kyoto Nishijin-ori weaver.

Tagline: *Woven from Silence. Worn for Eternity.*

## Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| --bg | #1a2240 | Primary background (dark navy indigo) |
| --surface | #1c2a3e | Card / section surface |
| --gold | #C9A96E | Kincha gold — all luxury accents |
| --white | #f5f0e8 | Shiro-iro silk white — primary text |
| --gray | #8a8078 | Nezumi warm gray — secondary text |

## Typography

- **Display / Italic headlines:** Cormorant Garamond (300, 400, 500)
- **Japanese / Section headings:** Shippori Mincho (400–800)
- **UI / Body / Labels:** Jost (100–600)

## Sections (13 total)

1. **Preloader** — SVG kanji stroke draw animation for 奏, gold loading bar
2. **Scroll Indicator** — fixed left rail with animated gold line (2nd instance inside hero)
3. **Navbar** — fixed, glassmorphism blur on scroll
4. **Hero** — TYPE C Diagonal Split: dark navy left panel (clip-path polygon), editorial image right, gold diagonal divider line via ::after pseudo-element
5. **Stats Strip** — 4 animated counters (generations, timeline, commissions, year founded)
6. **Philosophy** — 3-column CSS grid, hover gold underline reveal, kanji numerals
7. **Collection Grid** — 2×2 asymmetric (first item spans 2 rows), overflow:visible, editorial hover
8. **Atelier** — 2-col: image with frame accent + master's biography + Japanese signature
9. **Process** — vertical timeline, 5 weaving stages with kanji labels, scroll-driven line fill
10. **Heritage** — 5-milestone horizontal timeline from 1555 to 2024
11. **Press** — Swiper 11 carousel, 4 editorial quotes, auto-play 7s
12. **Commission Form** — 2-col layout: atelier details left, 2-row form grid right
13. **Footer** — 4-col grid, var(--bg) background, Kyoto + Paris addresses

## Tech Stack

- GSAP 3.12.5 (cdnjs) + ScrollTrigger + SplitText
- Swiper 11 (jsdelivr)
- Google Fonts: Shippori Mincho, Jost, Cormorant Garamond
- No build system — single self-contained HTML file

## GSAP Rules Applied

- All `gsap.from()` with ScrollTrigger include `immediateRender: false`
- No `opacity:0` in CSS on content elements
- SplitText wrapped in try/catch for graceful fallback

## Images (All validated 200 OK)

All images sourced from Unsplash (validated in `/tmp/kimono-atelier-validated.txt`).

## Files

- `index.html` — complete single-file landing page
- `meta.json` — template manifest
- `readme.md` — this file
