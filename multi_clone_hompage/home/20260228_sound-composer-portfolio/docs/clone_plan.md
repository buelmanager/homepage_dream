# Clone Plan — 20260228_sound-composer-portfolio

## Brief

**Brand**: RESONANCE — Sound Design & Musical Composition
**Industry**: Music / Audio / Sound Design Portfolio
**Target User**: Freelance composers, sound designers, audio directors seeking premium portfolio presence

## Design Decisions

### Hero (Type G)
The typographic hero uses `font-size: clamp(8rem, 18vw, 22rem)` for the title "RESONANCE" split across two lines:
- Line 1: "RESO" — filled ivory
- Line 2: "NANCE" — outlined with `--webkit-text-stroke: 1px var(--accent)`

A subtle SVG waveform overlays the background at 6% opacity, providing sonic visual metaphor without competing with the typography. Scroll-driven parallax moves the title upward at `y: -60px` as the user scrolls.

### Color Strategy
Deep teal palette creates:
- Professional darkness without being harsh (`--bg: #0A1818` avg brightness ~16)
- Warm teal accent that reads as sophisticated rather than digital
- High contrast between `--ivory` text and dark backgrounds

### Section Backgrounds (Dark Section Safety)
- Hero: `var(--bg)` (#0A1818) — minimal overlay only
- Portfolio: `var(--bg)`
- Services: `var(--surface)` (#0F2020) — slight lift
- Clients: `var(--bg)`
- Philosophy: `var(--surface)`
- Studio: `var(--bg)`
- Contact CTA: `var(--surface)`
- Footer: `var(--bg)` with border

All section backgrounds intentionally reference CSS variables, never hardcoded hex, for theme consistency.

### Animation System (A2 Whisper)
- Duration: 1.4–1.6s
- y offset: 14px
- Stagger: 0.06s
- Ease: power1.out
- All `immediateRender: false` at TOP LEVEL (not inside scrollTrigger)

### Portfolio Grid
Uses `display: grid` with `grid-template-columns: repeat(3, 1fr)`. The featured item uses `grid-column: span 2` on collection.html.

## Page Architecture

### index.html
Preloader → Scroll indicator → Navbar → Hero (Type G) → Portfolio Grid → Services 4-up → Clients 8-logo grid → Philosophy split → Studio image grid → Contact CTA → Footer

### about.html
Banner hero → Biography split (image + text) → Discography grid (3-col, cover thumbnails) → Awards 2-col list

### collection.html
Banner hero → Filter bar (sticky) → Works grid (3-col, 12 items, featured spans 2) → Case study split

### process.html
Banner hero → 5-phase accordion list → Studio walkthrough 2x2 grid → Tech 3-col list → Testimonial

### contact.html
Banner hero → Contact split (info + form) → Rates 3-col grid
