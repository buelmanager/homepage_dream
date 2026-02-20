# IGNIS ATELIER — Luxury Candle Studio Landing Page

**Hero Type B — Layered Candlelight Parallax + Canvas Particle System**
Brand: IGNIS ATELIER
Tagline: Light as a Material. Flame as a Craft.
Industry: Hand-poured luxury candles
Location: Antwerp, Belgium

---

## Design Overview

A luxury candle atelier page that treats flame as the primary design element — not scent, not aesthetics. The visual language is warm near-black amber: extreme contrast from deep shadow to bright flame core. Wax texture, dripping wax, smoke wisps. The brand voice is contemplative and slow.

### Color Palette

| Token       | Hex       | avg(R+G+B)/3 |
|-------------|-----------|--------------|
| `--bg`      | `#201508` | 20.3 ✅     |
| `--surface` | `#281A0A` | 25.3 ✅     |
| `--flame`   | `#D4882A` | accent       |
| `--cream`   | `#F0E8D8` | text         |

### Typography
- **Display**: Playfair Display (400, 400 italic, 500, 700)
- **Body/UI**: Jost (200–600)

---

## Hero: Type B — Candlelight Parallax + Particles

Three parallax layers with mousemove + two special effects:

**Parallax Layers:**
- Layer 1 (deep background) — filter: brightness(0.25)
- Layer 2 (mid) — filter: brightness(0.20), opacity: 0.65
- Layer 3 (foreground) — filter: brightness(0.18), opacity: 0.40

**Canvas Particle System:**
- 50 upward-drifting amber particles
- Each particle: radial gradient from `rgba(240,180,60,α)` to transparent
- Motion: `vy = -(0.3–0.9)`, horizontal sway via `sin(phase)`, gentle fade out

**Glow Halo:**
- CSS `radial-gradient` centered on hero
- `animation: glowPulse 3s ease-in-out infinite` — scale 1.0 → 1.08
- Shifts on mousemove via GSAP (separate from parallax layers)

All `gsap.from()` + ScrollTrigger: `immediateRender: false`.

---

## Sections

1. **Preloader** — SVG flame with CSS `scaleX`/`skewX` dance animation
2. **Navbar** — Fixed with scroll blur; mobile menu
3. **Hero** — Type B parallax + particle sparks + glow halo
4. **Flame Typology** — Three flame types: STILL / DANCING / PULSE with SVG flame icons (animated pulse on PULSE type)
5. **Scent Architecture** — 2-axis grid (Warm/Cool × Dark/Light) with 8 positioned scent nodes
6. **Atelier Process** — Three stages: Sourcing, Blending, Pouring with photography
7. **Collection Grid** — 4-column product grid (`overflow: visible`) with 4 candles, Batch No. labeling
8. **Light Study** — Two full-bleed room photographs showing actual light quality
9. **Ceremony** — Four ritual steps for lighting IGNIS candles
10. **Inner Circle** — Email capture with 5-option scent preference selector
11. **Footer** — `background: var(--bg)` — current batch number, Antwerp location

---

## Technical Notes

- GSAP 3.12 via cdnjs + ScrollTrigger + SplitText
- Swiper 11 via cdn.jsdelivr.net
- Google Fonts: Playfair Display + Jost
- Canvas API particle system (`requestAnimationFrame` loop, no libraries)
- All images: validated Unsplash URLs (200 OK)
- No `opacity: 0` on content elements in CSS
- `collection-grid`: `display: grid; overflow: visible`
- Scent preference buttons: toggle selection state
- Custom cursor GSAP dot + ring
- Responsive breakpoints: 1024px, 768px
