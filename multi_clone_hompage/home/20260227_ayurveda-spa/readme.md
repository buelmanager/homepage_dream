# VAIDYA — Authentic Ayurveda Healing Spa

A complete luxury multi-page website for an authentic Ayurveda healing spa, built with the Deep Teal palette, Fraunces serif typography, and serene A2 Whisper animation persona.

## Brand Identity

- **Brand**: VAIDYA — Authentic Ayurveda Healing
- **Tagline**: Ancient Wisdom, Living Balance
- **Industry**: Ayurveda spa and wellness retreat
- **Tone**: Serene, healing, ancient wisdom, holistic luxury
- **Founded**: 2008 (fictional brand)

## Design Specifications

- **Hero Layout**: Type B — Parallax with Ken Burns + mousemove parallax
- **Color Palette**: P7 Deep Teal (`#0A1818` bg, `#4DCFB0` accent)
- **Font Pair**: F5 — Fraunces (headings) + Inter (body)
- **Animation Persona**: A2 Whisper (duration: 1.4–1.6s, y: 14px, stagger: 0.06)
- **Tier**: Free / Price: 0

## Pages

| File | Description | Lines |
|------|-------------|-------|
| `index.html` | Main landing page with all sections | 1200+ |
| `about.html` | Founder story, practitioners, lineage | 620+ |
| `collection.html` | Full treatment menu with filters | 640+ |
| `process.html` | 6-step healing journey, dosha guide | 580+ |
| `contact.html` | Booking form, locations, FAQ | 550+ |

## Sections — index.html

1. Preloader (mandala spinner + brand name)
2. Scroll indicator (fixed right edge)
3. Navbar (transparent → frosted glass on scroll)
4. Hero (Type B Parallax — Ken Burns + mousemove)
5. Stats Strip (5000+ guests, 17 years, 48 rituals, 6 vaidyas)
6. Philosophy (3-column grid — Dosha Harmony, Sacred Herbs, Seasonal Alignment)
7. Treatments (image + treatment list)
8. Atelier / Treatment Room (split layout with room features)
9. Process / Journey (6-step grid)
10. Heritage (background image + timeline)
11. Testimonials (Swiper carousel)
12. Booking Form (info + form side by side)
13. Footer (4-column grid)

## Technical Stack

- Pure HTML5 / CSS3 / Vanilla JS
- GSAP 3.12.2 (ScrollTrigger) — CDN
- Swiper 11 — CDN
- Google Fonts: Fraunces + Inter
- No build tools required
- No frameworks or dependencies
- Custom SplitText polyfill (Club GSAP replacement)

## GSAP Compliance

- All `gsap.from()` calls include `immediateRender: false` at top level
- No `opacity: 0` set via CSS on content elements
- A2 Whisper parameters: `duration: 1.5, y: 14, stagger: 0.06, ease: 'power1.out'`
- Ken Burns: `gsap.to('.layer-1', { scale: 1.08, duration: 20, ease: 'none' })`
- Scroll indicator shown in BOTH preloader callback AND setTimeout(4000)

## Color Compliance

- `--bg: #0A1818` — avg RGB = (10+24+24)/3 = 19.3 (above minimum 15)
- `--surface: #0F2020` — avg = 21.3 ✓
- All sections use CSS variables, never hardcoded dark hex
- Footer: `background: var(--bg)` only

## File Structure

```
20260227_ayurveda-spa/
├── index.html
├── about.html
├── collection.html
├── process.html
├── contact.html
├── meta.json
├── readme.md
├── images/
│   ├── hero-1.webp – hero-4.webp
│   ├── product-1.webp – product-4.webp
│   ├── ambient-1.webp – ambient-3.webp
│   └── thumbnail.webp
└── docs/
    ├── clone_plan.md
    ├── originality_report.md
    └── image_validation.md
```
