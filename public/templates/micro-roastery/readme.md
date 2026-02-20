# MERIDIAN — Precision Micro-Roastery

## Brand Concept
MERIDIAN is a fictional Copenhagen-based specialty coffee micro-roastery founded in 2014. The brand is positioned at the intersection of scientific precision and artisanal craft — think: a chemist who learned to be a poet, rather than the reverse. The visual language borrows from technical documentation (code comments, data logs) while maintaining luxury warmth through Libre Baskerville and amber gold accents.

**Tagline:** Coffee as a Discipline
**Core Philosophy:** Precision is not the enemy of passion. It is what passion looks like when it has time to mature.

## Color Palette
| Name          | Hex       | Usage                          |
|---------------|-----------|--------------------------------|
| Deep Espresso | `#141210` | Primary background             |
| Surface       | `#1A1714` | Card backgrounds               |
| Surface 2     | `#201C18` | Alternate section backgrounds  |
| Amber Roast   | `#C4884A` | Primary accent, code comments  |
| Ivory         | `#EAE5DA` | Primary body text              |
| Smoke         | `#8C8880` | Secondary text                 |
| Muted         | `#585450` | Footer/tertiary text           |

## Typography
- **Display/Headings:** Libre Baskerville (400, 700 — italic variants) — editorial newspaper quality
- **Body/UI:** Space Grotesk (300, 400, 500, 600) — technical-meets-humanist
- **Code/Labels/Data:** Space Mono (400, 700 — italic) — laboratory precision aesthetic

The trio creates a unique voice: scientific rigour expressed through editorial typography. The monospace layer (Space Mono) adds the "precision instrument" quality without being cold.

## UX Decisions
- **Hero Type G:** Full-screen typography-driven — "M" outline as background texture at 28vw, hero data bar showing real-time origin data at top, massive editorial title
- **Code comment style labels:** All section labels use `// ` prefix mimicking code comments — reinforces the data/precision brand voice
- **Image desaturation:** All images use `filter: saturate(0.65-0.7)` — reduces coffee-cliché "brown aesthetic" in favor of editorial restraint
- **Background text element:** Outline-only large letter "M" using -webkit-text-stroke — creates depth without stock texture images
- **No hero image:** Hero entirely text and data — bold differentiation from typical coffee brand imagery
- **Parallax hero BG text:** The giant "M" scrolls at slower rate (scrub) creating depth
- **Footer:** `background: var(--bg)` — no hardcoded values

## Animation Summary
- **Preloader:** CSS keyframe stagger on mono text → brand → tagline → progress bar
- **Hero text entrance:** GSAP timeline: data bar → eyebrow → title → description → actions
- **Hero background text:** ScrollTrigger scrub parallax (yPercent +20)
- **Stats counter:** GSAP textContent animation
- **Philosophy grid:** Stagger Y-reveal with immediateRender: false
- **Collection grid:** Stagger with image filter transition
- **Atelier image:** Parallax scrub (yPercent -15)
- **Process timeline:** X-translate stagger
- **Press carousel:** Swiper 11 autoplay
- **Form reveal:** Opposing X-translate (left panel in, right panel in)
