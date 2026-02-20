# KIRI — Japanese Sake Experience

## Brand Concept
KIRI (霧, meaning "mist" or "fog" in Japanese) is a fictional luxury sake bar founded in London's Fitzrovia in 2015. The brand occupies a singular position: treating sake as fine art, presented through the lens of Japanese wabi-sabi philosophy and European sommelier culture. Not a restaurant. Not a bar. A sanctuary of attention.

**Tagline:** Where Ceremony Meets Complexity
**Core Philosophy:** The ritual of sake is inseparable from its taste. How you are served shapes what you receive.

## Color Palette
| Name         | Hex       | Usage                          |
|--------------|-----------|--------------------------------|
| Deep Slate   | `#0C0E0D` | Primary background             |
| Surface      | `#111413` | Card backgrounds               |
| Surface 2    | `#161918` | Alternate section backgrounds  |
| Warm Sand    | `#B8A882` | Primary accent, UI elements    |
| Ivory        | `#E8E4D8` | Primary body text              |
| Smoke        | `#8E9290` | Secondary text                 |
| Muted        | `#545854` | Tertiary/footer text           |

## Typography
- **Display:** Shippori Mincho (Japanese-influenced serif, 400, 500, 600)
- **Body/UI:** DM Sans (200, 300, 400, 500)
- **Japanese Accents:** Noto Serif JP (300, 400) — used for kanji characters

The combination of Shippori Mincho (which has Japanese-influenced letterforms) with DM Sans creates a culturally resonant typographic voice without resorting to clichéd "Japanese-looking" fonts.

## UX Decisions
- **Hero Type C:** Diagonal split with clip-path polygon — creates visual tension between image world and text world. The diagonal angle (85% clip) references the asymmetric aesthetics of Japanese design
- **Kanji in preloader:** "霧" (mist) — culturally specific without being decorative excess
- **Japanese characters in navigation/philosophy:** "間" "旨" "里" add cultural depth as functional labels
- **Color filter on images:** All images use `filter: saturate(0.8-0.85)` — desaturating toward monochrome suggests wabi-sabi restraint
- **Preloader:** 4 CSS animation layers creating a measured, sequential reveal
- **Form as reservation:** Reframes the commission form as a restaurant reservation — industry-appropriate
- **Footer:** `background: var(--bg)` — no hardcoded values

## Animation Summary
- **Preloader:** CSS keyframe animations on kanji, line, brand, subtitle — staggered
- **Hero:** GSAP timeline reveal with clip-path element sliding in
- **Stats counter:** GSAP textContent animation with ScrollTrigger
- **Philosophy cards:** Stagger from Y-below with immediateRender: false
- **Atelier image:** Parallax scrub via ScrollTrigger
- **Ritual timeline:** X-translate stagger on each step
- **Swiper:** Press carousel with autoplay, 5500ms delay (contemplative pace)
