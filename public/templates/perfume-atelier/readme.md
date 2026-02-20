# SÈVE — Parfums d'Exception

## Brand Concept
SÈVE (French for "sap" — the vital essence of living things) is a fictional Parisian bespoke fragrance atelier founded in 2008. The brand positions at the absolute apex of luxury perfumery: commission-only, radically exclusive, and deeply personal. Brand persona: a master perfumer who treats fragrance as fine art — patient, poetic, technically rigorous.

**Tagline:** Where Memory Becomes Scent
**Core Philosophy:** Every fragrance is a narrative. Every commission is irreproducible.

## Color Palette
| Name       | Hex       | Usage                          |
|------------|-----------|--------------------------------|
| Deep Noir  | `#0E0B0A` | Primary background             |
| Surface    | `#130F0D` | Card/section backgrounds       |
| Surface 2  | `#1A1410` | Alternate section backgrounds  |
| Amber Gold | `#C9A96E` | Primary accent, headings       |
| Gold Light | `#E2C898` | Italic text, hover states      |
| Gold Dark  | `#7A5A2A` | Decorative frames              |
| Ivory      | `#EDE8DC` | Primary body text              |
| Smoke      | `#9A9490` | Secondary/description text     |
| Muted      | `#5A5250` | Footer/tertiary text           |

## Typography
- **Display/Headings:** Playfair Display (300, 400, 600 — italic variants)
- **Body/UI:** Inter (200, 300, 400, 500)
- **Decorative Italic:** Cormorant (300, 400 — italic)

Typographic hierarchy leans heavily on the contrast between Playfair Display's editorial quality and Inter's restrained precision.

## UX Decisions
- **Hero Type F:** Mousemove depth parallax with 3 independent layers (bg/mid/fg) at different parallax intensities — creates genuine dimensionality
- **Dark theme:** avg background RGB ~27 — above minimum threshold of 20
- **Preloader:** SVG circle draw animation + brand name fade — eliminates flash of unstyled content
- **Scroll indicator:** Fixed left, visible class added in preloader callback AND setTimeout(4000ms) fallback
- **Overlays:** All hero/banner overlays at ≤0.60 opacity (within 0.65 limit)
- **Commission form:** Borderless bottom-line style preserves dark luxury aesthetic
- **Navbar:** Transparent on hero, blurred dark on scroll
- **Footer:** `background: var(--bg)` — no hardcoded values

## Animation Summary
- **Preloader:** SVG stroke dashoffset animation + CSS keyframe fades
- **Hero entrance:** GSAP timeline with SplitText char stagger
- **Mousemove parallax:** GSAP.to() on layers — 3 depth levels
- **Stats counter:** GSAP textContent animation with ScrollTrigger
- **Sections:** All use `gsap.from()` with `immediateRender: false` + ScrollTrigger (once: true)
- **Atelier image:** Parallax scrub via ScrollTrigger
- **Press carousel:** Swiper 11 with autoplay + pagination
- **Collection grid:** Hover scale on images via CSS transition
