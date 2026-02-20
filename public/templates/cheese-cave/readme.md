# Grotte Dorée — Cheese Cave Luxury Landing Page

## Concept
A fictional French artisan cave-aging atelier positioned as the apex of cheese culture. The cave itself is the protagonist — not merely the cheese. Dark luxury aesthetic borrowed from the wine world, applied to artisan cheese with geological and philosophical gravitas.

**Brand:** Grotte Dorée ("Golden Cave")
**Tagline:** Where Time Becomes Flavor
**Positioning:** Ultra-premium, cave-aged, time-obsessed, terroir-driven

## Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| `--bg` | `#120F0C` | Base background |
| `--surface` | `#1C1915` | Card & section backgrounds |
| `--accent` | `#C89B3C` | Amber gold — primary accent |
| `--ivory` | `#F2E8D5` | Text & headings |
| `--muted` | `#6B6456` | Secondary text |

## Typography
- **Display:** Cormorant Garamond (weight 300–500) — conveys age, tradition, European elegance
- **Body:** DM Sans (weight 300–500) — clean legibility against dark backgrounds
- **Numerals:** Large serif number treatments for aging days (01, 30, 90, 180, 365+)

## Section Architecture
1. **Preloader** — SVG arch draw animation + brand name, counter
2. **Scroll Indicator** — Left-fixed dot-line-label progress system
3. **Navbar** — Transparent → blur on scroll
4. **Hero** — 3-layer: Ken Burns cave image + split-text headline + floating stats + particle drift
5. **Stats Strip** — 4 key metrics with counter animation
6. **Philosophy** — 3-col CSS grid (vertical CAVE letter + pillars + quote/image)
7. **Collection** — 3-col offset grid with hover detail overlay (6 cheese varietals)
8. **Atelier** — 2-col split (parallax cave photo + metrics + text)
9. **Aging Process** — 5-step vertical timeline with line draw + active node states
10. **Heritage** — 5-milestone horizontal timeline (1847–2024)
11. **Press** — Swiper carousel with fade transition, 3 editorial quotes
12. **Reserve Form** — 2-col commission form with styled inputs
13. **Footer** — 4-col minimal footer

## GSAP Animations
- Hero: clip-path word reveal + mousemove parallax on bg + floating stats
- Stats: counter animation on ScrollTrigger enter
- Philosophy: staggered fade-up from left/bottom
- Collection: staggered scale+opacity reveal
- Atelier: clip-path horizontal reveal on image + parallax scrub
- Process: timeline spine draw (scrub) + per-step reveals + active node class
- Heritage: staggered fade-up
- Press: GSAP fade + Swiper autoplay
- Form: staggered x-reveal on inputs

## How to Run
```bash
open multi_clone_hompage/home/cheese-cave/index.html
# or serve with live-server for full experience
npx live-server multi_clone_hompage/home/cheese-cave/
```
