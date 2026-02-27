# Clone Plan — GROTTO Cave Hotel

**Template:** `20260227_cave-hotel`
**Build Date:** 2026-02-27
**Category:** Luxury Hospitality / Cave Hotel

---

## Concept Origin

GROTTO is a wholly original concept for a fictional ultra-luxury underground cave hotel in Cappadocia, Turkey. The design draws inspiration from:

- The real Cappadocian cave hotel sector (Argos in Cappadocia, Museum Hotel Antique) — as market context only
- The ancient underground city tradition of the Göreme valley
- Subterranean luxury hospitality as a design philosophy (no single source)

No existing website was cloned, referenced, or imitated. All copy, brand identity, visual design, and UI patterns are original.

---

## Design System

### Hero — Type B (Parallax)
**Reference:** `multi_clone_hompage/prompt/hero-layouts.md` — Type B definition
- Two background image layers (hero-1.webp, hero-2.webp)
- Layer 1: Ken Burns animation, brightness(0.55)
- Layer 2: CSS `mix-blend-mode: overlay`, reverse Ken Burns
- JavaScript mousemove parallax: layers move in opposite directions at different speeds
- Floating badge: positioned bottom-right, `floatBadge` keyframe animation

### Color Palette — P6 Midnight Purple
All color values sourced from the design brief specification. Verified against DARK_THRESHOLD rule:
- `--bg: #130F1A` → avg RGB = (19+15+26)/3 = 20.0 ✓ (≥ 20)
- `--surface: #1C1626` → avg = (28+22+38)/3 = 29.3 ✓
- `--surface2: #231D30` → avg = (35+29+48)/3 = 37.3 ✓

### Typography
- Cinzel (Google Fonts) — for all headings, labels, CTAs, nav logo
- Crimson Pro (Google Fonts) — for body text, descriptions, captions
- No system fonts used except `Georgia` fallback for Crimson Pro

### Animation System
All GSAP animations comply with memory rules:
- `immediateRender: false` at top level of vars (NOT inside scrollTrigger)
- `opacity: 0` never set via CSS on animated elements
- ScrollTrigger `start: 'top 85%'` used throughout for early trigger

---

## Page Architecture

### index.html — Core Landing (13 sections)
| Section | Component Pattern |
|---------|------------------|
| Preloader | SVG icon + brand text + progress bar |
| Scroll Indicator | Fixed left, CSS line animation |
| Navbar | Transparent → frosted glass scroll state |
| Hero | Type B dual-layer parallax |
| Stats | 4-column border-divided grid |
| Philosophy | 3-col CSS grid with animated border-left reveal |
| Suite Collection | 2×2 image card grid with hover text reveal |
| Stone Atelier | Two-image offset layout + feature list |
| Process | 4-step connected horizontal layout |
| Heritage | Parallax-tinted bg + two-column timeline |
| Testimonials | Swiper 2-per-view carousel |
| Reservation | Split form + info panel |
| Footer | 4-column grid + bottom bar |

### Sub-pages
- **about.html:** Intro narrative + geology section + full 9-event timeline + founders grid
- **collection.html:** Full-width alternating suite layout + amenities grid
- **process.html:** 4 experience acts (alternating layout) + spa menu + dining grid
- **contact.html:** Contact info + full reservation form + FAQ accordion + location section

---

## Technical Decisions

1. **SplitText polyfill** included inline before Swiper — avoids premium GSAP dependency
2. **Swiper 11** used for testimonials — stable CDN version
3. **GSAP 3.12.2** from cdnjs — exact version specified to avoid breaking changes
4. **Custom scrollbar** via `::-webkit-scrollbar` — accent purple color, 6px wide
5. **Mobile hamburger** — shows/hides nav-links via JS toggle, no third-party dependency
6. **Form submit** — JavaScript simulation with success state (no backend)
7. **FAQ accordion** — pure JS toggle, no library required
8. **Ken Burns animation** — pure CSS `@keyframes` with `alternate` direction

---

## Quality Checklist

- [x] All 5 HTML files created and complete
- [x] Color palette P6 applied consistently across all pages
- [x] Font pair F4 loaded from Google Fonts CDN on all pages
- [x] GSAP + ScrollTrigger + Swiper CDN linked on all pages
- [x] `immediateRender: false` at correct top-level position in all animations
- [x] No `opacity: 0` in CSS on animated content elements
- [x] Scroll indicator visible in 2 places (preloader callback + setTimeout 4000)
- [x] Philosophy grid uses `display: grid`
- [x] SplitText polyfill included before Swiper in index.html
- [x] Navbar scroll state (transparent → frosted glass) functional
- [x] Custom scrollbar styled in Midnight Purple
- [x] Mobile responsive breakpoints at 1024px, 768px, 480px
- [x] All inter-page navigation links correct
- [x] meta.json complete with all required fields
- [x] readme.md complete
- [x] All docs created
