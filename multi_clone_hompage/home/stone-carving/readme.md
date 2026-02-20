# PETRA SOMA — Stone Carving Luxury Landing Page

## Brand
**PETRA SOMA** (Greek: "Body of Stone") — Invitation-only stone carving atelier. Works accepted by invitation, 4–6 commissions per year.

**Tagline:** Stone remembers. We reveal what it holds.

## Hero Type
**TYPE E — Blueprint Grid Canvas**
Technical blueprint grid drawn on HTML5 Canvas with a progressive draw-in animation (2.4 seconds on page load). Fine grid lines (48px spacing) with major grid lines (every 4th = 192px). Cross markers with small circles at major intersections fade in at 50% draw progress. Subtle diagonal dimension lines fade in at 70% progress. Cool architectural aesthetic referencing stone survey drawings.

## Color Palette
| Token | Value | Avg RGB | Status |
|-------|-------|---------|--------|
| --bg | #181816 | 24.7 | PASS |
| --surface | #201E1C | 30.7 | PASS |
| --surface-2 | #282624 | 38.7 | PASS |
| --accent | #8B7355 | 95 | PASS |
| --accent-bright | #B09070 | 133.3 | PASS |
| --marble | #D8D4CC | 216 | PASS |

## Typography
- Display: Josefin Sans (hero, section titles — ultra-light, wide tracking — architectural feel)
- Serif: Cormorant Garamond (quotes, tasting notes, italic elements)
- Body: Jost (paragraph text)
- Mono: Letter Gothic Std / Courier New (labels, coordinates, specs)

## Sections
1. **Hero** — Blueprint grid canvas (self-drawing) + stone texture bg + CTA "Request Audience"
2. **The Stone Speaks** — Split layout with geological map image + three stone biography cards (Carrara, Lasa, Sardinian Granite)
3. **Works of Permanence** — Asymmetric 3-column masonry-style works grid (2fr+1fr+1fr, anchor spans 2 rows)
4. **The Three Carvers** — Triptych portrait grid with individual tool philosophies and specialties
5. **Time Required** — Honest time disclosure table (4 months → 24 months for different work types)
6. **Selected Commissions** — 3-column case study grid with full origin-to-installation narrative
7. **Studio Principles** — 3-column philosophy grid (I, II, III)
8. **Invitation to Commission** — Split layout with quote, contact email (no form), invitation text
9. **Footer** — Atelier coordinates + quarry sources + navigation + contact

## Technical
- GSAP 3.12.5 via cdnjs (ScrollTrigger plugin)
- Swiper 11 via jsdelivr (loaded for future use)
- All gsap.from() + ScrollTrigger use `immediateRender: false`
- No opacity:0 on content elements in CSS
- philosophy-grid: display:grid
- works-grid overflow: visible
- footer: background: var(--bg)
- Blueprint canvas: progressive draw animation using requestAnimationFrame + performance.now()

## Images (All Unsplash — Validated)
- Hero BG: photo-1512327536842-5aa37d1ba3e3
- Stone map: photo-1524504388940-b1c1722653e1
- Works grid: photos 1558769132, 1582719508, 1529958030, 1572635196, 1543076447
- Carvers: photos 1503342394, 1469334031, 1485125639
- Selected: photos 1555529669, 1551488831, 1584917865
- Invitation: photo-1558618666-fcd25c85cd64
