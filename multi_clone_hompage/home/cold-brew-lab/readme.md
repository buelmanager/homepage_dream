# CRYO LAB — Cold Brew Lab Landing Page

## Brand
**CRYO LAB** — A luxury precision cold brew coffee brand. Brand voice: precise, minimal, scientific. "Process as luxury. Temperature as the single variable that changes everything."

**Tagline:** "Extracted at 2°C. For 22 Hours."

## Hero Type G — Scroll-Driven Text Transform (Cold/Brew Variation)
- 200vh hero section with sticky viewport
- "COLD" and "BREW" displayed side by side at ~14vw font size (Space Grotesk 700)
- On scroll: COLD translates to -25vw + upward -3vh + opacity fades; BREW translates to +25vw + downward +3vh + opacity fades
- Lab ruler (vertical 1px line) scales in between the words as they split
- Temperature readout "2.1°C" in Space Mono fades in between the words
- Tagline "Extracted at 2°C. For 22 Hours." fades in at 20%-40% scroll range

## Sections
1. **Hero (Type G)** — COLD splits left+up, BREW splits right+down; lab ruler + 2.1°C readout between
2. **The Variable** — Full-width dark panel with "22:00:00" count-up animation on scroll-enter
3. **Process Timeline** — 6-stage Swiper: Water → Filter → Grind → Steep → Press → Package (each with data overlay)
4. **The Spectrum** — 3 expression comparison cards with animated TDS percentage bars
5. **Origin Series** — 3 single-origin cards with elevation, process, TDS target, and flavor notes
6. **Lab Notes** — Blog section styled as experiment log: EXP-047, EXP-052, EXP-061
7. **The Extract** — Subscription with frequency selector (Weekly/Bi-weekly/Monthly) styled as lab dial
8. **Footer** — Lab address, batch series identifier, "All batches numbered" copyright

## Technical Details
- **Background:** `#1C1610` (avg RGB: 22.0) — passes ≥20 requirement
- **bg-void:** `#141009` (avg RGB: 15.0) — passes ≥15 requirement
- **All section backgrounds:** ≥15 avg — verified
- **Footer:** `background: var(--bg)` only
- **GSAP:** All `gsap.from()` + ScrollTrigger use `immediateRender: false`
- **No `opacity:0` in CSS** on content elements
- **Swiper:** slidesPerView: 'auto', overflow: visible
- **TDS bars:** CSS `width` transition, triggered by ScrollTrigger

## Color Palette
| Variable | Hex | Avg RGB |
|---|---|---|
| `--bg` | `#1C1610` | 22.0 ✅ |
| `--bg-void` | `#141009` | 15.0 ✅ |
| `--bg-panel` | `#252018` | 31.0 ✅ |
| `--bg-surface` | `#2E2820` | 39.3 ✅ |
| `--blue` | `#4A8FA8` | 128.3 ✅ |
| `--blue-light` | `#8FC4D4` | 183.7 ✅ |
| `--amber` | `#C8A46A` | 156.7 ✅ |
| `--cream` | `#E8E0D4` | 222.7 ✅ |

## Fonts
- Display: **Space Grotesk** (300, 400, 500, 600, 700)
- Body: **Jost** (200, 300, 400, 500)
- Data/Labels: **Space Mono** (400, 700)

## CDN Dependencies
- GSAP 3.12.5 + ScrollTrigger (cdnjs.cloudflare.com)
- Swiper 11 (cdn.jsdelivr.net)
- Google Fonts
