# UMBRA CACAO — Cacao Workshop Luxury Landing Page

## Brand
**UMBRA CACAO** (Latin: "Shadow Cacao") — Single-origin chocolate atelier. Seven bars per year, one farm per bar.

**Tagline:** From the shadow of the bean, the light of the bar.

## Hero Type
**TYPE E — Animated Dot Grid Canvas**
Pulsing dot grid on HTML5 Canvas. Each dot fades in and out in a wave pattern controlled by sin(time + phase), with radial proximity weighting (brighter near centre). Warm cacao-gold dots (#C49A3C) on deep cacao-brown background.

## Color Palette
| Token | Value | Avg RGB | Status |
|-------|-------|---------|--------|
| --bg | #221510 | 20.3 | PASS |
| --surface | #2A1C12 | 24.7 | PASS |
| --surface-2 | #32211A | 34.3 | PASS |
| --accent | #C49A3C | 120.7 | PASS |
| --ivory | #F5EDD6 | 234 | PASS |

## Typography
- Display: Playfair Display (hero, section titles — italic editorial warmth)
- Serif: Libre Baskerville (body emphasis, quotes)
- Body: Jost (clean paragraph text)
- Mono: Courier New (labels, coords, batch numbers)

## Sections
1. **Hero** — Animated dot grid canvas + cacao bg + corners + CTA "Enter the Atelier"
2. **Intro / Philosophy** — Split layout with cacao pod image + stats (7/1/72h/0)
3. **Seven Origins** — Horizontal drag-scroll with 7 origin cards (farm, GPS, flavor profile)
4. **From Shadow to Bar** — 8-stage vertical process list with temperature + sensory notes
5. **Tasting Archive** — 3-column grid of past editions with tasting note quotes
6. **Atelier's Principles** — 3-column philosophy grid (I, II, III)
7. **Commission Your Origin** — Split layout with commission form
8. **Origin Dispatches** — 3-column editorial journal grid
9. **Footer** — Atelier coordinates + navigation + contact

## Technical
- GSAP 3.12.5 via cdnjs (ScrollTrigger plugin)
- Swiper 11 via jsdelivr (loaded but not used — horizontal scroll is custom drag)
- All gsap.from() + ScrollTrigger use `immediateRender: false`
- No opacity:0 on content elements in CSS
- philosophy-grid: display:grid
- tasting-grid overflow: visible
- footer: background: var(--bg)
- Dot grid: requestAnimationFrame loop with time-based wave phase

## Images (All Unsplash — Validated)
- Hero BG: photo-1558618666-fcd25c85cd64
- Intro visual: photo-1524504388940-b1c1722653e1
- Origins: photos 1572635196, 1490481651, 1503342394, 1469334031, 1555529669, 1528360983, 1509631179
- Tasting: photos 1553361371, 1584917865, 1600607687
- Commission: photo-1582719508461
- Journal: photos 1515886657, 1543076447, 1551488831
