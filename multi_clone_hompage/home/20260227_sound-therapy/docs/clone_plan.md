# Clone Plan — RESONANCE Sound Healing Studio

**Template Slug:** `20260227_sound-therapy`
**Date:** 2026-02-27
**Category:** Wellness / Sound Therapy

---

## Concept Origin

This template draws inspiration from the premium wellness and sound healing studio space — specifically the aesthetic language of luxury retreat centres, crystal bowl studios, and frequency-healing practices that have grown from Tibetan and Himalayan sound traditions. The brand RESONANCE is a wholly original creation.

---

## Hero Architecture — TYPE E (Canvas Pattern)

The TYPE E hero uses an animated HTML5 canvas as a layered background element. The implementation here adapts the TYPE E "grid/pattern canvas" concept into a **concentric circle / sound wave ring animation** — thematically appropriate to a sound healing studio where ring propagation is the core visual metaphor.

### Canvas Implementation
```js
// Rings spawn from canvas center
// Each ring expands at speed 0.6–1.0 px/frame
// Alpha fades from 0.18 → 0 as radius reaches maxR
// Secondary inner ring at 85% radius at 40% alpha
// Spawn rate: 1 new ring every 1800ms
// requestAnimationFrame loop — no GSAP dependency
```

### Hero Layers (z-index stack)
```
z: 0  — hero-bg (background image)
z: 1  — hero-grid-canvas (animated rings)
z: 2  — hero-overlay (gradient darkening layer)
z: 5  — hero-corner-accents (decorative corners)
z: 10 — hero-content (text + CTAs)
```

---

## Page Architecture

### index.html — Structure Map

| Section | Purpose | Animation |
|---------|---------|-----------|
| Preloader | Brand reveal ritual | GSAP fade out after 1.4s |
| Scroll Indicator | Scroll guidance | CSS pulse + GSAP show/hide |
| Navbar | Fixed navigation | Scroll-triggered frosted glass |
| Hero E | Primary visual impact | SplitText chars + ring canvas |
| Stats | Social proof | ScrollTrigger stagger from |
| Philosophy | Brand values (3-col grid) | ScrollTrigger stagger from |
| Session Collection | Product preview (2-col grid) | ScrollTrigger stagger from |
| Sound Chamber | Space showcase | ScrollTrigger slide from sides |
| Process | 5-step horizontal steps | ScrollTrigger stagger from |
| Heritage | Brand story + quote | ScrollTrigger slide from sides |
| Testimonials | Social proof (Swiper) | Custom prev/next buttons |
| Booking Form | Lead capture | ScrollTrigger stagger from |
| Footer | Navigation + info | Static |

---

## Color Usage Strategy

| Color | Usage |
|-------|-------|
| `--bg: #130F1A` | Page backgrounds, footer |
| `--surface: #1C1626` | Card backgrounds, navbar |
| `--surface2: #231D30` | Testimonials section, hover states |
| `--accent: #9B6EDB` | CTAs, eyebrows, icons, borders |
| `--accent-light: #B894EE` | Price display, hover text, links |
| `--accent-dark: #6840A8` | Button hover states, scrollbar |
| `--ivory: #EAE0F8` | Primary text, headings |
| `--smoke: #907890` | Secondary text, labels |
| `--muted: #544860` | Tertiary text, footer copy |
| `--border: #181420` | All dividers and card borders |

---

## Typography System

| Element | Font | Weight | Size |
|---------|------|--------|------|
| Logo | Fraunces | 600 | 1.25rem |
| Hero Title | Fraunces | 600 | clamp(4rem, 12vw, 10rem) |
| Section Titles | Fraunces | 300 | clamp(1.8rem, 4vw, 3.2rem) |
| Subtitles | Fraunces | 300 italic | varies |
| Eyebrows | Inter | 300 | 0.68rem, 0.45em tracking |
| Body | Inter | 300 | 0.88–1rem |
| Labels | Inter | 400–500 | 0.65–0.75rem |
| Price | Fraunces | 300 | 1.1–1.6rem |

---

## Animation System — A2 Whisper

All scroll-triggered animations follow the Whisper profile:

```js
{
  duration: 1.5,
  y: 14,           // max vertical travel (some elements use y:20-28 for greater depth)
  stagger: 0.06,   // per-element stagger within groups
  ease: 'power1.out',
  immediateRender: false,  // CRITICAL — always at top level of gsap.from()
  scrollTrigger: { start: 'top 80%' }
}
```

---

## Section Grid Specifications

### Philosophy Grid (3-column)
```css
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 2px;
```
Uses `display: grid` (NOT flex) per project rules.

### Collection Grid (2-column)
```css
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 2rem;
overflow: visible;
```

### Process Steps (5-column → responsive)
```css
display: grid;
grid-template-columns: repeat(5, 1fr);
/* 1024px: repeat(3, 1fr) */
/* 768px: repeat(2, 1fr) */
```

---

## Mobile Breakpoints

| Breakpoint | Changes |
|------------|---------|
| 1024px | Stats 2x2, collection 1-col, chamber/heritage stack, process 3-col, footer 2-col |
| 768px | Nav hidden (hamburger), sections 1.5rem padding, process 2-col, booking form 1-col |
