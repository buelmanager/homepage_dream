# HALITE — Salt Cave Therapy

**Slug:** `20260227_halotherapy-cave`
**Tier:** Free
**Status:** Published
**Industry:** Wellness / Halotherapy
**Style:** Luxury

## Overview

A complete luxury multi-page website for HALITE, a Himalayan salt cave halotherapy center. The site presents a premium wellness brand centered on mineral healing, respiratory therapy, and crystalline salt cave experiences.

## Design System

**Color Palette P7 — Deep Teal**
- Background: `#0A1818`
- Surface: `#0F2020`
- Surface 2: `#142828`
- Accent: `#4DCFB0`
- Accent Light: `#7ADFC8`
- Accent Dark: `#2A9A80`
- Ivory: `#DCEFEC`
- Smoke: `#809890`
- Muted: `#4A6860`
- Border: `#0C1E1E`

**Typography F6 — DM Serif Display + Karla**
- Serif: DM Serif Display (headings, display text)
- Sans: Karla 300/400/500 (body, UI)
- Loaded via Google Fonts CDN

**Animation A2 — Whisper**
- duration: 1.5s
- y: 14px
- stagger: 0.06s
- ease: power1.out
- immediateRender: false (all GSAP from() calls)

**Hero Layout: TYPE B — Parallax + Ken Burns**
- Layer 1: hero-1.webp — Ken Burns CSS animation (scale 1→1.08)
- Layer 2: hero-2.webp — luminosity blend, 0.35 opacity
- Mousemove parallax: layer 1 (0.6x), layer 2 (0.3x)
- Floating badge: "84 Trace Minerals — Himalayan Crystal Salt"

## Pages

| File | Description | Min Lines |
|------|-------------|-----------|
| `index.html` | Homepage — full experience with all sections | 1200+ |
| `about.html` | Halotherapy science, history, clinical evidence | 600+ |
| `collection.html` | Sessions listing, pricing, packages, FAQ | 600+ |
| `process.html` | 5-step healing journey, preparation, aftercare | 500+ |
| `contact.html` | Booking form, location, hours | 500+ |

## Homepage Sections (index.html)

1. **Preloader** — Branded loading bar with progress counter
2. **Scroll Indicator** — Fixed animated line, shown after preload + setTimeout(4000)
3. **Navbar** — Fixed, transparent → frosted glass on scroll
4. **Hero (Type B)** — Parallax dual-layer, Ken Burns, floating badge, CTA
5. **Stats** — 84 Minerals / 45min / 98% Relief / 4.5μm — animated counters
6. **Philosophy** — 3-column CSS grid (NOT flex)
7. **Session Collection** — 2x2 grid with image cards, overflow: visible
8. **Salt Cave Chamber** — Full-width split with image + features
9. **Process** — 5-step horizontal journey
10. **Heritage / Science** — Split with timeline facts
11. **Testimonials** — Swiper.js carousel with pagination
12. **Booking Form** — 2-col grid with full form
13. **Footer** — 4-col grid, social links, copyright

## Brand

- **Name:** HALITE — Salt Cave Therapy
- **Tagline:** Breathe Deeper. Heal From Within.
- **Location:** Harrogate, North Yorkshire, UK
- **Industry:** Himalayan salt cave halotherapy, respiratory healing
- **Tone:** Mineral healing, crystalline clarity, Himalayan mountain luxury

## Sessions

| Session | Duration | Price |
|---------|----------|-------|
| Respiratory Relief | 45 min | £65 |
| Children's Cave | 30 min | £38 |
| Couples Salt Room | 45 min | £110 |
| Overnight Retreat | 8 hrs | £280 |

## Technical Implementation

- **GSAP 3.12.2** — ScrollTrigger, all animations
- **SplitText Polyfill** — Inline class (no Club GSAP dependency)
- **Swiper 11** — Testimonials carousel
- **Google Fonts** — DM Serif Display + Karla
- **No frameworks** — Pure HTML/CSS/JS
- **Mobile responsive** — Custom breakpoints at 1024px and 768px
- **Custom scrollbar** — `#0A1818` track, `#2A9A80` thumb
- **GSAP CRITICAL** — `immediateRender: false` at top level of all `gsap.from()` calls
- **No CSS opacity:0** on content elements

## Images Required

Place in `images/` directory:
- `hero-1.webp` — Glowing salt cave interior (primary hero layer)
- `hero-2.webp` — Salt cave overlay/texture (blend layer)
- `hero-3.webp` — Salt cave ambient (used in collection/process pages)
- `hero-4.webp` — Cave therapy session (used in process page)
- `product-1.webp` — Respiratory relief session
- `product-2.webp` — Children's cave
- `product-3.webp` — Couples salt room
- `product-4.webp` — Overnight retreat
- `ambient-1.webp` — Chamber interior detail
- `ambient-2.webp` — Himalayan salt wall/science
- `ambient-3.webp` — Post-session/integration space
- `thumbnail.webp` — 600px wide, preview thumbnail (Git-tracked)
