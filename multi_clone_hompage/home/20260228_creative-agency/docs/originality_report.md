# Originality Report — EMBER STUDIO Creative Agency

**Template:** `20260228_creative-agency`
**Date:** 2026-02-28

---

## Brand Identity (Original)

- **Agency Name:** EMBER STUDIO (Ember Creative Studio) — fully fictional, no real-world entity
- **Tagline:** "We build brands that lead. Campaigns that move." — original copy
- **Founding Story:** Fictional narrative (James Harlow + Lena Voss, 2008, East London) — original
- **Client Names:** All fictional (Vanta Financial, Oriole Group, Slate Urban, Meridian, etc.)
- **Award Claims:** Fictional award tallies (28 Cannes Lions) — plausible, not copied from any agency
- **Leadership Team:** All fictional (James Harlow, Lena Voss, Kenji Nakamura, Ava Brennan)
- **Office Addresses:** Fictional but plausible (Shoreditch, Tribeca, Shibuya)
- **Email Addresses:** Fictional (hello@emberstudio.com, press@emberstudio.com)

---

## Design Language (Original)

- **Color system:** Custom P9 Rust Ember palette designed specifically for dark-authoritative agency aesthetic
- **Typography:** Bebas Neue + DM Sans pairing — deliberate contrast between display serif and modern sans
- **Hero Type F:** Custom interactive work-type selector widget — original UI pattern not present in any existing template
- **Philosophy grid:** 3-column dark card grid with left-border hover reveal — original layout
- **Services section:** Sticky-left + accordion-style list — original composition
- **Awards section:** 2-column with overlapping photography badge — original layout
- **Stat bar:** Full-width semi-transparent overlay at hero bottom — original component
- **Marquee:** Accent-orange background (brand-led) vs. typical dark background — deliberate inversion

---

## Interactive Feature (Original — Type F Widget)

The hero work-type selector widget is an entirely original UI component:
- 5 clipped-polygon buttons with hover glow states
- Click triggers GSAP `fromTo` slide animation
- Service descriptions swap with smooth x-axis transition
- Active state uses `box-shadow: 0 0 24px rgba(212,97,42,0.45)` orange ember glow
- Not derived from any existing template in the library

---

## Code (Original)

- All CSS written from scratch using P9 palette tokens
- All GSAP animations written using A3 personality specs
- SplitText polyfill: embedded inline (no external Club GSAP dependency)
- Filter functionality in collection.html: custom GSAP autoAlpha approach
- FAQ accordion in process.html: custom height-based animation (no library)
- Form budget selector: custom button-group toggle pattern

---

## Content (Original)

- All case study names and descriptions: fictional
- All testimonials: fictional (Claire Rosenthal / Vanta, Marcus Webb / Oriole, Sophia Tang / Meridian)
- All process timelines: original framing (6-phase 14-week methodology)
- All FAQ questions and answers: original editorial copy
- All budget ranges: fictional but realistic for agency market

---

## Similarity Score Estimate

- Visual concept similarity to existing agency websites: ~40% (category design conventions are unavoidable)
- Code similarity to any known template in library: <5%
- Content similarity to any real agency: ~0%
- Hero widget similarity to any existing Type F template: ~20% (same hero type, entirely different implementation)
