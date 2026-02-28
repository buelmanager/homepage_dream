# Clone Plan — 20260228_ceramic-artist-portfolio

## Project Overview

**Template Name:** TERRA FORMA — Studio Ceramics & Sculptural Objects
**Slug:** `20260228_ceramic-artist-portfolio`
**Build Date:** 2026-02-28
**Type:** Multi-page (5 HTML files)

## Design Decisions

### Hero Layout — Type B (Parallax + Ken Burns)
Selected Type B because:
- Ceramic/pottery imagery is highly tactile and atmospheric — parallax layering creates depth that suits the material's warmth
- Ken Burns zoom on static images adds cinematic movement without requiring video
- Mousemove parallax adds interactivity that rewards desktop visitors
- Two-layer approach allows foreground/background separation for visual depth

### Color Palette — P9 Rust Ember
Selected because:
- Ceramic practice is fundamentally about earth tones, fire, and iron oxide — rust/amber colors are inherently authentic to the craft
- Dark background (`#1C1008`) creates gallery-like presence that lets work photography speak
- `--accent: #D4612A` is a terracotta/ember tone that directly references fired ceramic glazes
- All background values tested: avg(R+G+B)/3 ≥ 20 to pass dark section threshold

### Typography — F4 (Cinzel + Crimson Pro)
Selected because:
- Cinzel is derived from classical Roman letterforms — appropriate for a studio with ancient craft heritage
- Crimson Pro as body text provides warmth and readability without competing with Cinzel's authority
- The combination creates an artisan-meets-institution tone that suits high-end craft portfolios

### Five Pages
1. **index.html** — Hero + collection preview (drives discovery)
2. **about.html** — Deep biography and studio story (builds trust)
3. **collection.html** — Full filtered grid (enables browsing)
4. **process.html** — Detailed making process (educates and differentiates)
5. **contact.html** — Commission form + tiers (converts)

## Section Architecture — index.html

1. **Preloader** — 2.4s with spinning emblem and fill bar
2. **Scroll indicator** — Shown after preloader + setTimeout(4000ms) fallback
3. **Navbar** — Transparent on hero, scrolled state with blur and border
4. **Hero Type B** — Dual parallax layers, Ken Burns zoom, mousemove response
5. **Philosophy** — Two-column: studio image + text + stats
6. **Collection Preview** — 3-column grid with hover overlays (6 pieces)
7. **Services** — Three commission types as card grid
8. **Process Overview** — 5-step horizontal timeline
9. **Awards/Exhibitions** — List + editorial image
10. **Contact CTA** — Full-width with background image overlay
11. **Footer** — 4-column with links

## GSAP Implementation Notes

All animations use:
- `immediateRender: false` at TOP LEVEL of `gsap.from()` — not inside scrollTrigger
- ScrollTrigger start points: `'top 80%'` to `'top 85%'`
- Stagger: `0.09` across all multi-element animations
- Duration range: `1.0–1.2s`
- Y offset range: `20–28px`
- Ease: `'power2.out'` throughout

SplitText polyfill in index.html — used only on hero title `.hero-title`.
