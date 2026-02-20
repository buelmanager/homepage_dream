# LUMARA — Crystal Healing Spa

**Tier:** PRO | **Price:** $49 | **Industry:** Crystal Spa / Luxury Wellness

---

## Overview

A complete luxury crystal healing spa landing page for the fictional brand **LUMARA Crystal Spa**, positioned as a high-end destination wellness brand using crystalline mineral science. Built to Hero Type D specification (Portraits + Stats two-column grid).

**Brand:** LUMARA Crystal Spa
**Tagline:** "Where Crystal Meets Consciousness"
**Color Palette:** Deep amethyst purple (#1A1428 bg), warm mineral gold (#C9A96E accent), iridescent lavender (#D4A8FF highlight)

---

## Sections (13 total)

1. **Preloader** — Animated crystal gem SVG facet with rotating facets and loading bar
2. **Scroll Indicator** — Left fixed animated line (position 1) + inline below hero CTA (position 2)
3. **Navbar** — Fixed, transparent-to-frosted on scroll, gold accent CTA, mobile hamburger
4. **Hero (Type D)** — Two-column grid: LEFT brand + 4 GSAP animated stat counters; RIGHT 2x2 portrait/ambiance photo grid
5. **Stats Strip** — 4-column dark surface strip with scroll-triggered counters
6. **Philosophy** — 3-column grid: Clarity (Clear Quartz) / Harmony (Amethyst) / Energy (Rose Quartz) with Hz frequency tags
7. **Collection Grid** — 2x2 treatment cards: Amethyst Resonance / Selenite Alignment / Rose Quartz Restoration / Grand Ritual
8. **Atelier** — 2-column split: large treatment room photo with accent overlay + feature list
9. **Process** — 5-step horizontal timeline: Consultation → Crystal Assessment → Treatment → Integration → Follow-up
10. **Heritage** — Milestone timeline from 2006–2024 with animated line
11. **Press** — Swiper 11 carousel with client testimonials and star ratings
12. **Booking Form** — 2-column: atmospheric left photo + right form (name, email, treatment selector, date, notes)
13. **Footer** — 4-column grid on --bg background: brand, treatments, discover, locations

---

## Technical Specs

- **Fonts:** Cormorant Garamond (serif display) + Jost (sans body) via Google Fonts
- **GSAP:** 3.12.5 via cdnjs — all `gsap.from()` use `immediateRender: false`
- **ScrollTrigger:** Registered, all scroll animations use `once: true`
- **Swiper:** v11 via jsdelivr — loop, autoplay, responsive breakpoints
- **Images:** Validated Unsplash URLs (all returned HTTP 200 per validation report)
- **No opacity:0 on content elements** in CSS — all hiding handled by GSAP
- **Portrait images:** `filter: brightness(0.82)` (above 0.75 minimum)
- **--bg:** `#1A1428` (avg ≥ 20 threshold met)
- **Footer background:** `var(--bg)`
- **philosophy:** `display: grid`
- **collection-grid:** `overflow: visible`

---

## Stat Counters

| Stat | Value | Label |
|------|-------|-------|
| Treatments | 12,400+ | Treatments Performed / Year |
| Experience | 18 | Years of Crystal Mastery |
| Sourcing | 23 | Countries Sourcing Crystals |
| Specialists | 47 | Certified Crystal Specialists |

---

## Crystal Treatments

| Treatment | Duration | Hz | Price |
|-----------|----------|----|-------|
| Amethyst Resonance Journey | 90 min | 432 Hz | £285 |
| Selenite Alignment Protocol | 75 min | 528 Hz | £240 |
| Rose Quartz Restoration | 60 min | 639 Hz | £195 |
| The LUMARA Grand Ritual | 3 hrs | Full Spectrum | £680 |

---

## Validated Image URLs

All images sourced from Unsplash and validated (HTTP 200):

- Hero portraits: therapist, crystal macro, treatment room, spa ambiance
- Collection grid: crystal modality images per treatment
- Atelier: treatment room interior, crystal detail
- Press: client avatar portraits
- Booking: atmospheric crystal spa background
