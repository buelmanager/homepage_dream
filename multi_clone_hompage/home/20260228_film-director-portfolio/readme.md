# APERTURE NOIR — Film Director & Cinematographer Portfolio

**Slug**: `20260228_film-director-portfolio`
**Tier**: PRO · $49
**Created**: 2026-02-28
**Category**: Film / Creative Portfolio

---

## Overview

APERTURE NOIR is a luxury multi-page portfolio template for film directors and cinematographers. Built around a dark cinematic aesthetic inspired by film noir, it presents a director's body of work with festival-grade sophistication and industry-standard presentation.

**Brand**: APERTURE NOIR — "Frame by Frame."

---

## Design Specifications

| Property | Value |
|---|---|
| Hero Layout | Type G — Scroll-Driven Text Transform |
| Color Palette | P2 Cool Obsidian |
| Font Pair | F5 — Fraunces + Inter |
| Animation | A3 Precise (x:-20px, 0.75s, stagger:0.04, power3.out) |
| Primary Color | #4EE8FF (Cyan accent) |
| Background | #101420 (Deep navy-black) |

### Color System

```css
--bg: #101420;
--surface: #181E2A;
--surface2: #1E2438;
--accent: #4EE8FF;
--accent-light: #8AF3FF;
--accent-dark: #22B8CC;
--ivory: #DCE8F0;
--smoke: #8090A0;
--muted: #506070;
--border: #1A2234;
```

---

## Pages

### index.html — Main Portfolio
1. Film countdown preloader (3-2-1 → play)
2. Fixed navbar with scroll-blur effect
3. **Hero Type G** — Massive Fraunces typography (clamp 6rem→16rem) with GSAP scroll-driven diverging text animation
4. Selected Films — 3-card grid with hover overlay and play button
5. Director's Statement — Full-width cinematic quote + 3-column philosophy grid
6. Filmography — Filterable table (Feature / Short / Commercial / Documentary)
7. Awards & Festivals — 8-card grid (Cannes, Sundance, Venice, BAFTA, etc.)
8. Collaborators — Animated list with hover slide effect
9. Behind the Frame — 4-card process image grid
10. New Project CTA — Full-width call to action
11. Footer

### about.html — Director Bio
- Split-screen page hero with image
- Long-form biography
- Statistics sidebar
- Cinematic vision statement with pull quote
- Education & training timeline
- Mentors & influences grid (6 cards)

### collection.html — Filmography
- Full-width page header with ghost typography
- Sticky filter bar (All / Feature / Short / Documentary / Commercial)
- Featured film hero banner
- Film poster grid with hover info overlays and festival awards
- Commercial projects list

### process.html — Method
- 4-phase workflow (Pre-production, Production, Post, Distribution)
- Each phase: alternating image + content layout with step cards
- Equipment & format section (cameras, lenses, film stocks)
- Feature film production timeline

### contact.html — Inquiries
- Animated hero
- Full project inquiry form with project type, timeline, budget selectors
- Contact information with representation details
- Press kit download section
- Availability badge with pulse animation

---

## Technical Notes

- **GSAP**: ScrollTrigger with `immediateRender: false` on ALL `gsap.from()` calls
- **SplitText**: Not used directly (polyfill available in GSAP rules)
- **Hero G**: Uses `min-height: 200vh` + `position: sticky` for scroll-driven animation
- **Film strip**: CSS animation decorative element at hero bottom
- **Filmography filter**: Vanilla JS tab filtering (no dependencies)
- **Images**: All webp, 17 images validated via HTTP 200

---

## Images Used

| File | Source ID | Subject |
|---|---|---|
| hero-1.webp | 1535016120720 | Film production dark |
| hero-2.webp | 1489599849927 | Cinema interior |
| film-1.webp | 1536440136628 | Clapperboard/cinema |
| film-2.webp | 1478720568477 | Film production |
| film-3.webp | 1574267432553 | Movie equipment |
| cinema-1.webp | 1512070679279 | Cinema theater |
| cinema-2.webp | 1517604931442 | Dark cinema screen |
| set-1.webp | 1524712245354 | Film set |
| set-2.webp | 1560109947 | Film set equipment |
| production-1.webp | 1542204165 | Behind the scenes |
| director-1.webp | 1485846234645 | Film direction |
| light-1.webp | 1518929458119 | Cinematic lighting |
| reel-1.webp | 1516035069371 | Film reel |
| reel-2.webp | 1611532736597 | Film strip |
| festival-1.webp | 1598899134739 | Festival/awards |
| abstract-1.webp | 1500462918059 | Abstract/visual |
| shoot-1.webp | 1551817958 | Behind camera |

---

## Fictional Brand Context

**Director**: Marcus V. Reyes
**Location**: Los Angeles, CA
**Credits**: 47 films · 12+ festival awards
**Key Films**: Into the Silence (Cannes 2024), The Weight of Salt (Venice 2022), Carbon Dreamers (Hot Docs 2020)
**Equipment**: ARRI Alexa 35, Arriflex 435 (35mm), Cooke S4/i Primes
**Representation**: CAA Narrative Film

---

*Template by APERTURE NOIR — Frame by Frame.*
