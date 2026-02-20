# HERBA CARTA — Botanical Preservation Atelier Landing Page

**Hero Type B — Botanical Illustration Parallax + SVG Line Drawings + Petal Particles**
Brand: HERBA CARTA
Tagline: Each Specimen, Once Living. Now Eternal.
Industry: Luxury botanical pressed-flower art
Location: Bath, Somerset, UK

---

## Design Overview

A luxury botanical preservation atelier. The brand positions pressed flowers as specimens — collected with the precision of natural history, preserved as art objects. The visual language references 19th-century natural history museums: specimen cards, Latin taxonomy, archival parchment, botanical illustration line drawings.

### Color Palette

| Token       | Hex       | avg(R+G+B)/3 |
|-------------|-----------|--------------|
| `--bg`      | `#1E1614` | 24.0 ✅     |
| `--surface` | `#261C18` | 30.0 ✅     |
| `--rose`    | `#B87A6A` | accent       |
| `--sage`    | `#6A8A6A` | accent       |
| `--ivory`   | `#EDE4D4` | text         |

### Typography
- **Display**: Gilda Display (400)
- **Body/UI**: Jost (200–600)
- **Monospace**: Courier New (specimen labels, coordinates, dates)

---

## Hero: Type B — Botanical Parallax + SVG + Particles

Four distinct layers:

**Parallax Layers (images):**
- Layer 1 (parchment-toned background) — filter: brightness(0.28) sepia(0.4)
- Layer 2 (botanical mid-ground) — filter: brightness(0.22) sepia(0.3), opacity: 0.7
- Layer 3 (foreground flowers) — filter: brightness(0.20) sepia(0.5), opacity: 0.45

**SVG Botanical Line Drawing Layer:**
- 5-element botanical SVG (branches, leaves, flowers) at `opacity: 0.06`
- Moves on mousemove at `x: ±16px` — creates the "floating illustration" editorial feel
- Also scrolls at slower `yPercent` rate via ScrollTrigger

**Canvas Petal Particle System:**
- 45 petal-shaped particles (CSS ellipse via canvas `ctx.ellipse`)
- Colors: rose `rgba(184,122,106,α)`, sage `rgba(106,138,106,α)`, parchment, stone
- Motion: gentle downward gravity drift + rotation + slow fade out

**Hero Specimen Card:**
- Absolute-positioned card overlay (bottom-left) with Courier New type
- Shows: Specimen No., Latin name, collection date, location, press duration

All `gsap.from()` + ScrollTrigger: `immediateRender: false`.

---

## Sections

1. **Preloader** — SVG botanical stem + leaf draw animation (stroke-dasharray)
2. **Navbar** — Fixed with scroll blur; mobile menu
3. **Hero** — Type B: 3 parallax layers + SVG botanical overlay + petal particles + specimen card
4. **The Collection** — Museum-style specimen grid (4 columns, `overflow: visible`) — price visible on hover only
5. **The Atelier** — Four stages: Collection, Arrangement, Pressing, Mounting with field notes
6. **Seasonal Archive** — Horizontal drag-scroll with Spring / Summer / Autumn / Winter panels + tinted overlays
7. **Commission** — Two-column: atmospheric photography + specimen intake form (styled in Courier New labels)
8. **The Library** — Three field journal entries with specimen reference codes
9. **Available Works** — Three full-height atmospheric shots, price visible on hover only
10. **Correspondence** — Botanical Record newsletter capture
11. **Footer** — `background: var(--bg)` — studio location, founding year

---

## Unique Differentiators

- Specimen card in hero — museum taxonomy applied to the landing page
- Pricing visible only on hover — luxury friction, gallery convention
- Seasonal archive organized by collection season, not category
- Commission form styled as specimen intake document
- Blog posts reference specific specimen numbers
- SVG botanical illustration layer that shifts on mousemove independently of photo layers
- Petal particles in warm botanical palette (not just white)

---

## Technical Notes

- GSAP 3.12 via cdnjs + ScrollTrigger + SplitText
- Swiper 11 via cdn.jsdelivr.net
- Google Fonts: Gilda Display + Jost
- Canvas API petal system + SVG botanical draw preloader
- All images: validated Unsplash URLs (200 OK)
- No `opacity: 0` on content elements in CSS
- `collection-grid`: `display: grid; overflow: visible`
- Seasons drag scroll: native `scrollLeft` manipulation
- Custom cursor GSAP dot + ring
- Responsive breakpoints: 1200px, 1024px, 768px
