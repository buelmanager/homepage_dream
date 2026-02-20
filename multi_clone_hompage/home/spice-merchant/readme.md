# SAFFRANIA — Spice Merchant Landing Page

## Brand
**SAFFRANIA** — A luxury rare spice merchant. Brand voice: ancient, scholarly, sensory. "Rare spices as time-collapsed geography."

**Tagline:** "Since the First Caravan."

## Hero Type G — Scroll-Driven Text Transform
- 200vh hero section with sticky viewport
- "SPICE" and "HOUSE" stacked vertically at ~14vw font size (Playfair Display)
- On scroll: SPICE translates to -25vw + opacity fades, HOUSE translates to +25vw + opacity fades
- Tagline in IBM Plex Mono fades in at 20%-40% scroll range
- Canvas particle system: 100 warm saffron-gold particles (28-53° hue) drifting upward like spice dust

## Sections
1. **Hero (Type G)** — Scroll-split SPICE/HOUSE with upward gold particle system
2. **Origin Intro** — 2-column: poetic quote left + philosophy text right, on dark bg-mid
3. **The Twelve** — 8-item spice grid (4 columns) with Latin name, harvest year, origin coordinates
4. **Harvest Journal** — 4-slide Swiper with editorial spread layout (image + data panel)
5. **Atelier Blending** — Full-bleed parallax image with "1:400 ratio" stat overlay
6. **The Collection** — 3 product cards with hover-reveal pricing (luxury friction)
7. **Caravan Dispatch** — Newsletter "join the caravan" with minimal email capture
8. **Footer** — Trade house address format, founding year in Roman numerals, lat/long coordinates

## Technical Details
- **Background:** `#28180E` (avg RGB: 26.0) — passes ≥20 requirement
- **All section backgrounds:** ≥15 avg — verified
- **Footer:** `background: var(--bg)` only
- **GSAP:** All `gsap.from()` + ScrollTrigger use `immediateRender: false`
- **No `opacity:0` in CSS** on content elements
- **collection-grid:** `display:grid; overflow:visible`
- **Swiper:** slidesPerView: 'auto', overflow: visible

## Color Palette
| Variable | Hex | Avg RGB |
|---|---|---|
| `--bg` | `#28180E` | 26.0 ✅ |
| `--bg-mid` | `#341F11` | 33.3 ✅ |
| `--bg-surface` | `#3F2616` | 41.0 ✅ |
| `--saffron` | `#C8760A` | 109.3 ✅ |
| `--red` | `#8B2E1A` | 70.3 ✅ |
| `--gold` | `#D9A63C` | 147.7 ✅ |
| `--parchment` | `#F2E8D5` | 229.0 ✅ |

## Fonts
- Display: **Playfair Display** (400, 500, 700, 900 + italic variants)
- Body: **Jost** (200, 300, 400, 500)
- Data/Labels: **IBM Plex Mono** (300, 400)

## CDN Dependencies
- GSAP 3.12.5 + ScrollTrigger (cdnjs.cloudflare.com)
- Swiper 11 (cdn.jsdelivr.net)
- Google Fonts
