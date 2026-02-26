# Clone Plan — MUSHIN Dojo Retreat

**Template ID:** 20260226_dojo-retreat
**Date:** 2026-02-26
**Type:** Original multi-page luxury landing page

## Design Direction

MUSHIN is an original concept — not a clone of an existing site. The design draws inspiration from the aesthetic language of ultra-premium Japanese hospitality brands (ryokan, kaiseki restaurants, cultural retreats) and applies it to a martial arts / meditation context that is underrepresented in the luxury template market.

## Reference Aesthetic Influences

| Source Type | Element Borrowed | Adaptation |
|------------|-----------------|-----------|
| Aman Tokyo / Aman Kyoto | Warm dark palette, sparse whitespace, Cormorant Garamond | Applied to dojo/zen context vs. hotel |
| Hoshinoya Kyoto | Seasonal calendar section structure | Adapted 4-card grid format |
| Nishimuraya Honkan | Split hero with atmospheric photography | Dark overlay + letter-reveal animation |
| Architectural Digest Japan | Full-bleed editorial image treatment | Translated to discipline sections |
| Zen monastery websites (Eiheiji) | Minimal typography, kanji integration | Elevated with luxury UI system |

## Structure Plan

### Page 1 — index.html (Hero Landing)
- **Goal:** Immediate atmosphere + discipline intro + conversion
- **Sections:** Preloader → Nav → Hero → Arts → Temple → Schedule → Masters → CTA → Footer
- **Hero Type:** Cinematic Full-Screen (Type A)
- **Key Feature:** Ink-brush SVG preloader, letter-by-letter MUSHIN reveal

### Page 2 — about.html (Brand Story)
- **Goal:** Build trust via history, philosophy, faculty credibility
- **Sections:** Hero → History + Timeline → Three Pillars → Extended Masters

### Page 3 — programs.html (Product)
- **Goal:** Detail each discipline for informed decision-making
- **Sections:** Hero → Overview → 4 Discipline Sections → Full Immersion

### Page 4 — retreat.html (Experience)
- **Goal:** Sell the physical experience and logistics
- **Sections:** Hero → Accommodation → Cuisine → Seasonal Calendar → Arrival Steps

### Page 5 — contact.html (Conversion)
- **Goal:** Drive applications (not bookings — distinction is intentional)
- **Sections:** Hero → Process → Application Form → Pricing → Contact Info

## Typography System

```
Display (H1): Cormorant Garamond 300, 88px–44px clamp
Section Title: Cormorant Garamond 300, 56px–32px clamp
Sub-heading: Cormorant Garamond 400, 28px–20px
Body: Inter 300, 14px–16px
Label/Caption: Inter 300, 9px–11px, letter-spacing 0.2–0.4em, UPPERCASE
Accent italic: Cormorant Garamond 300 italic, used for em elements
```

## Color Application Rules

- `--bg` (#181410): Page backgrounds, hero backgrounds (overlaid)
- `--surface` (#221C16): Card backgrounds, alternate section fills, nav (when scrolled)
- `--accent` (#C04020): Section labels, left border accents, CTA buttons (primary)
- `--accent2` (#E8C080): Kanji display text, prices, timeline years, hover states
- `--text` (#F5EDE0): Headings, primary content
- `--text-muted` (#907060): Body copy, captions, secondary information

## GSAP Animation Plan

| Section | Animation | Parameters |
|---------|-----------|------------|
| Hero title | Letter stagger from y:60 rotateX:90 | stagger:0.08, duration:1.2 |
| Hero parallax | bg translateY on scroll scrub | y:120 |
| Art cards | y:40 stagger group | stagger:0.1, duration:1.0 |
| Temple split | x:±40 bi-directional | duration:1.2 |
| Schedule items | Individual y:20 triggers | per-item trigger |
| Master cards | y:40 stagger group | stagger:0.12 |
| Discipline sections | x:±40 bi-directional per section | duration:1.2 |
| Season cards | y:40 stagger | stagger:0.1 |
| Form elements | y:20 stagger | stagger:0.06 |

All animations: `immediateRender: false` at top level, ease: `power2.out`
