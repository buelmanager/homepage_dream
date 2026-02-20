# VERDIGRIS — Copper Bar Landing Page

## Brand
**VERDIGRIS** — A luxury craft cocktail bar. Brand voice: terse, authoritative, poetic. "Copper as metaphor — oxidation, transformation, patina earned over time."

**Tagline:** "Forged in Copper. Aged in Silence."

## Hero Type G — Scroll-Driven Text Transform
- 200vh hero section with sticky viewport
- "COP" and "PER" displayed side by side at ~14vw font size (Cormorant Garamond)
- On scroll: COP translates to -25vw + opacity fades, PER translates to +25vw + opacity fades
- Tagline fades in between 20%-40% of scroll range
- Canvas particle system: 80 warm copper-gold particles (~25-45° hue) drifting slowly

## Sections
1. **Hero (Type G)** — Scroll-split COP/PER with copper particle canvas
2. **Manifesto Strip** — "Oxidation is not decay. It is becoming." on dark copper background
3. **The Craft** — 3-column grid: The Vessel / The Alchemy / The Origin
4. **Menu Theatre** — 2-column grid styled as laboratory notebook (EXP codes + metallurgical cocktail names)
5. **The Copper Room** — Full-bleed interior with parallax scroll image + reservation CTA
6. **Atelier Process** — 5-stage Swiper with diptych cards (raw ingredient / finished vessel)
7. **The Verdigris Circle** — Private membership email capture with glass-morphism card
8. **Footer** — Address in coordinates format, hours as "Service begins at 18:00"

## Technical Details
- **Background:** `#221510` (avg RGB: 23.7) — passes ≥20 requirement
- **All section backgrounds:** ≥15 avg — verified
- **Footer:** `background: var(--bg)` only
- **GSAP:** All `gsap.from()` + ScrollTrigger use `immediateRender: false`
- **No `opacity:0` in CSS** on content elements (only via GSAP animation)
- **Philosophy section:** `display:grid`
- **Swiper:** slidesPerView: 'auto', overflow: visible

## Color Palette
| Variable | Hex | Avg RGB |
|---|---|---|
| `--bg` | `#221510` | 23.7 ✅ |
| `--bg-mid` | `#3D2218` | 39.7 ✅ |
| `--bg-surface` | `#4A2B1E` | 49.0 ✅ |
| `--copper` | `#B06A2F` | 109.7 ✅ |
| `--gold` | `#E8A84C` | 158.7 ✅ |
| `--cream` | `#F5EDE0` | 235.3 ✅ |

## Fonts
- Display: **Cormorant Garamond** (300, 400, 500, 600, 700 + italic variants)
- Body: **Jost** (200, 300, 400, 500)

## CDN Dependencies
- GSAP 3.12.5 + ScrollTrigger (cdnjs.cloudflare.com)
- Swiper 11 (cdn.jsdelivr.net)
- Google Fonts
