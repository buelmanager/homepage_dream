# IGNIS LAMA — Knife Forge Luxury Landing Page

## Brand
**IGNIS LAMA** (Latin: "Blade of Fire") — Commission-only bladesmithing studio. Maximum 12 blades per year.

**Tagline:** Forged in fire. Finished in silence.

## Hero Type
**TYPE E — Canvas Grid Animation**
Animated hexagonal grid drawn on HTML5 Canvas with radial gradient opacity (brighter at center, fading at edges). Slow upward drift animation. Forge photography background at 15% opacity with radial vignette overlay.

## Color Palette
| Token | Value | Avg RGB | Status |
|-------|-------|---------|--------|
| --bg | #1C1A18 | 27.3 | PASS |
| --surface | #242220 | 32.7 | PASS |
| --surface-2 | #2C2A28 | 43.3 | PASS |
| --accent | #C8A03C | 120 | PASS |
| --ember | #D4541A | 99.3 | PASS |
| --steel | #A8B0B8 | 176 | PASS |

## Typography
- Display: Bebas Neue (hero, section titles)
- Serif: Cormorant Garamond (quotes, subtitle, italic elements)
- Body: Inter (paragraph text)
- Mono: Space Mono (labels, coords, codes, form labels)

## Sections
1. **Hero** — Hex grid canvas + forge bg + corners + CTA "Enter the Forge"
2. **Provenance** — Split layout with forge image + coordinate badge + stats (12/33/1)
3. **The Twelve** — 8-slot commission grid with OPEN/CLAIMED status badges
4. **Material Codex** — 12-cell periodic-table-style material grid
5. **Process Ritual** — 7-stage horizontal drag-scroll with macro photography
6. **Maker** — Split portrait + quote + bio section (maker: E. Varga)
7. **Blades of Note** — Swiper 11 gallery carousel
8. **Philosophy** — 3-column principles grid (I, II, III)
9. **Commission Gate** — Split layout with application form
10. **Footer** — Forge coordinates + navigation + contact

## Technical
- GSAP 3.12.5 via cdnjs (ScrollTrigger plugin)
- Swiper 11 via jsdelivr
- All gsap.from() + ScrollTrigger use `immediateRender: false`
- No opacity:0 on content elements in CSS
- philosophy-grid: display:grid
- collection/gallery overflow: visible
- footer: background: var(--bg)
- Canvas hex grid with animated vertical drift

## Images (All Unsplash — Validated)
- Hero BG: photo-1529958030586-3aae4ca485ff
- Provenance: photo-1512327536842-5aa37d1ba3e3
- Process stages: photos 1558618666, 1524504388, 1543076447, 1551488831, 1503342394, 1469334031, 1485125639
- Gallery: photos 1555529669, 1572635196, 1558769132, 1582719508, 1528360983
- Maker: photo-1600607687939
