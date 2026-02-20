# ATHENAION ESTATE — Luxury Olive Oil Landing Page

**Hero Type B — Multi-Layer Parallax**
Brand: ATHENAION ESTATE
Tagline: Three Hundred Years of Pressing.
Industry: Single-estate luxury olive oil
Location: Peloponnese, Greece

---

## Design Overview

A luxury landing page for a single-estate ultra-premium olive oil producer. The brand communicates ancient provenance, scientific precision (polyphenol counts), and the rarity of a 300-year-old grove. The visual language draws from Mediterranean limestone, golden-hour olive grove photography, and antique cartography.

### Color Palette

| Token       | Hex       | avg(R+G+B)/3 |
|-------------|-----------|--------------|
| `--bg`      | `#1A2210` | 25.3 ✅     |
| `--surface` | `#212D14` | 32.7 ✅     |
| `--gold`    | `#B8961E` | accent       |
| `--ivory`   | `#F0EBD8` | text         |

### Typography
- **Display**: Cormorant Garamond (300, 400 italic, 500, 600)
- **Body/UI**: Jost (200–600)

---

## Hero: Type B — Multi-Layer Parallax

Three parallax layers move at different rates on `mousemove`, creating a genuine depth illusion:

- **Layer 1** (sky/distant hills) — slowest: `x: ±12px, y: ±8px`
- **Layer 2** (mid olive grove) — medium: `x: ±24px, y: ±16px`
- **Layer 3** (foreground stone) — fastest: `x: ±40px, y: ±28px`

All three layers additionally scroll at different `yPercent` rates via GSAP ScrollTrigger (scrub: true). All `gsap.from()` + ScrollTrigger calls use `immediateRender: false`.

Floating rotating seal badge (SVG text on circle path) with CSS `rotate` animation.

---

## Sections

1. **Preloader** — Botanical emblem SVG with stroke-dasharray draw animation
2. **Navbar** — Fixed with scroll-triggered backdrop blur; mobile fullscreen menu
3. **Hero** — Type B three-layer mousemove parallax
4. **The Age** — Animated "300" numeral clip-path fill reveal on scroll
5. **Harvest Window** — Live countdown timer to November harvest season
6. **Three Expressions** — Collection grid (3 columns, `overflow: visible`) — Koroneiki, Manaki, Athinolia varieties with polyphenol specs
7. **The Grove** — Immersive full-height section with scroll parallax background
8. **Harvest Journal** — Three editorial blog posts styled as field notes
9. **The Amphora** — Product reservation section with numbered bottle details
10. **Provenance Map** — Full-width antique SVG map of the Peloponnese with estate location marker
11. **Footer** — `background: var(--bg)` — estate GPS coordinates, founding year

---

## Technical Notes

- GSAP 3.12 via cdnjs + ScrollTrigger + SplitText
- Swiper 11 via cdn.jsdelivr.net
- Google Fonts: Cormorant Garamond + Jost
- All images: validated Unsplash URLs (200 OK)
- No `opacity: 0` on content elements in CSS
- `collection-grid`: `display: grid; overflow: visible`
- Custom cursor with GSAP-driven dot + ring
- Countdown timer updates every second via `setInterval`
- Responsive breakpoints: 1024px, 768px
