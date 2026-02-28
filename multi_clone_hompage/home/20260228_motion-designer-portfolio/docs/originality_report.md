# Originality Report — KINETIC Motion Designer Portfolio

## Original Design Decisions

### Color Palette (P3 — Forest Night)
- `#0F1A10` as base: A very dark forest green, warmer than pure black
- avg(R+G+B)/3 = (15+26+16)/3 = 19 — passes minimum threshold
- Surface `#162016` avg = (22+32+22)/3 = 25.3 — well above minimum
- Accent `#4DAF6A`: Vibrant mid-green, not standard neon green — original positioning

### Hero Canvas Implementation
- Custom canvas animation with 3 layered effects:
  1. Grid lines (60px spacing, very low opacity)
  2. Intersection dot pulses (sine wave phase offset per column/row)
  3. Diagonal streak animations (8 streaks, rAF-driven)
- This creates a "living circuit board" effect unique to this template

### Typography Application
- Bebas Neue at 0.9 line-height for hero titles — creates compressed, kinetic feel
- DM Sans 300 weight for body — airy contrast to heavy display
- Custom letter-spacing: 0.04em on headings (not default 0)

### Layout Innovations
- Hero: true 50/50 grid split — content left, 3x2 image panel grid right
- Process page: vertical phase cards with "writing-mode: vertical-rl" for phase numbers
- Rates: 3-tier grid with center card using accent-dark background (not gradient)
- Contact: availability calendar as visual element (not just text)

## Content Originality

All copy is 100% original:
- Brand name "KINETIC" — coined for this template
- Tagline "Motion that moves culture." — original
- Process phases descriptions — original writing
- Career timeline, client names (APEX, Nova Films, etc.) — fictional entities
- Award names — fictionalised but plausible
- Rate structures — based on real industry benchmarks, expressed originally

## Image Usage

All images from Unsplash under Unsplash License (free commercial use).
No modifications beyond WebP conversion and crop — no person faces in any hero image.

## Technical Originality

- Inline SplitText polyfill: proprietary implementation (not Club GSAP)
- Canvas grid animation: custom implementation, not a library
- Preloader: custom percentage counter with GSAP title animation
- Filter system: vanilla JS (no jQuery/Isotope dependency)
