# Clone Plan — ZERO Float Therapy Studio

**Slug:** 20260227_floatation-tank
**Date:** 2026-02-27
**Status:** Complete

## Concept

An original luxury multi-page website for a premium sensory deprivation float therapy studio. The concept is built around the idea of "nothingness as luxury" — the brand voice is minimal, scientific, and transcendent.

## Design System

### Color Palette P7 — Deep Teal
| Token | Value | Role |
|---|---|---|
| `--bg` | `#0A1818` | Page background (avg brightness: ~16) |
| `--surface` | `#0F2020` | Card and section backgrounds |
| `--surface2` | `#142828` | Elevated surfaces |
| `--accent` | `#4DCFB0` | Primary brand color, CTAs, labels |
| `--accent-light` | `#7ADFC8` | Hover states |
| `--accent-dark` | `#2A9A80` | Dividers, secondary accents |
| `--ivory` | `#DCEFEC` | Primary text, headings |
| `--smoke` | `#809890` | Body text |
| `--muted` | `#4A6860` | Meta labels, captions |
| `--border` | `#0C1E1E` | Grid lines, dividers |

### Font Pair F5 — Fraunces + Inter
- `--font-serif: 'Fraunces', Georgia, serif` — Headings, hero words, brand name
- `--font-sans: 'Inter', system-ui, sans-serif` — Body, labels, navigation

### Animation A2 — Whisper
- `duration: 1.5s`
- `y: 14px`
- `stagger: 0.06`
- `ease: 'power1.out'`
- `immediateRender: false` (ALWAYS at top level of gsap.from())

## Hero Layout G — Scroll-Driven Text Transform

Implementation:
- `.hero-text-driven { min-height: 200vh }` — creates scroll space
- `.hero-text-wrap { position: sticky; top: 0; height: 100vh }` — sticky viewport panel
- `.hero-word { font-size: clamp(5rem, 18vw, 18rem) }` — massive type
- GSAP ScrollTrigger: words drift apart (x: ±80) as user scrolls
- Tagline fades in with scroll parallax

## Page Architecture

### index.html (1200+ lines)
1. Preloader with line-scale animation
2. Fixed scroll indicator (shown on preloader complete + setTimeout 4000ms)
3. Fixed navbar with scroll state management
4. Mobile fullscreen overlay menu
5. Hero — Type G scroll-driven text
6. Stats — 4-col grid with brand numbers
7. Philosophy — 3-col CSS grid (NOT flex) with numbered cards
8. Experience Types — 3-col card grid
9. Pod Chamber — 2-col with image + spec grid
10. Process — 5-step horizontal grid
11. Science — 2-col with image and research list
12. Testimonials — Swiper carousel with pagination
13. Booking form — 2-col with form + info sidebar
14. Footer — 4-col with links and legal

### about.html (700+ lines)
- Page hero with background image
- 2-col intro with founder context
- Historical timeline (1954–2018)
- 2×2 values grid
- Research evidence with numbered items
- Founder dual-biography with quote

### collection.html (800+ lines)
- Page hero
- 2-col featured session pair with images
- Full-width Extended Void card
- Full-width reversed Private Suite card
- 5-item pricing strip with highlighted "most popular"
- 3 membership tiers
- Accordion FAQ (5 questions)

### process.html (700+ lines)
- Page hero with background image
- 2-col overview intro
- 5-stage journey with alternating images (3-col grid layout per stage)
- 4-col brainwave state grid (β, α, θ, δ)
- 2-col preparation + contraindications guide

### contact.html (600+ lines)
- Page hero
- 2-col booking form + sticky sidebar
- Full booking form with radio groups, checkboxes, selects
- Success state after submission
- Studio hours grid
- Map placeholder with grid overlay
- Cancellation policy in sidebar
- 3-col policies strip

## GSAP Rules Applied

All animations follow CRITICAL GSAP RULES:
- No `opacity:0` in CSS on content elements
- `gsap.from()` always has `immediateRender:false` at TOP LEVEL (not inside scrollTrigger)
- Scroll indicator: preloader callback + `setTimeout(()=>{...}, 4000)` fallback
- Philosophy grid: `display:grid; grid-template-columns:repeat(3,1fr)` — no flex
- Collection grid: `overflow:visible`
- Footer: `background:var(--bg)` only

## Responsive Breakpoints

| Breakpoint | Layout Changes |
|---|---|
| 1200px | Reduced padding (80px → 48px), 2-col footer, some grid adjustments |
| 900px | Mobile nav toggle shown, single-column grids, 3-col process → 2-col |
| 600px | Minimum padding (24px), all grids become 1-col, stacked footer |

## CDN Dependencies

```html
<!-- Google Fonts -->
https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;1,9..144,300&family=Inter:wght@300;400;500

<!-- GSAP 3.12.2 -->
https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js
https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js

<!-- Swiper 11 (index.html only) -->
https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css
https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js
```

## SplitText Note

SplitText is a Club GSAP premium plugin and is NOT available on CDN. A custom inline polyfill class is embedded in index.html before the Swiper script, providing `chars` and `words` split functionality.
