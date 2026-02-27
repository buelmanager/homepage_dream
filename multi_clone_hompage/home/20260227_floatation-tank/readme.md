# ZERO — Float Therapy Studio

**Slug:** 20260227_floatation-tank
**Created:** 2026-02-27
**Status:** PUBLISHED

## Overview

A complete luxury multi-page website for **ZERO Float Therapy Studio**, a sensory deprivation float tank and wellness studio. The brand voice is minimal, transcendent, and scientifically grounded — designed for a discerning audience who values both evidence and experience.

## Pages

| File | Description |
|---|---|
| `index.html` | Homepage with Type G Hero (scroll-driven text transform), stats, philosophy, experience types, pod chamber, process, science, testimonials (Swiper), and booking form |
| `about.html` | Science of floating, historical timeline (1954–2018), founder story, core values, research evidence |
| `collection.html` | All five float session types with full details, pricing grid, membership tiers, FAQ accordion |
| `process.html` | Five-stage experience journey, neuroscience brainwave guide, preparation checklist and contraindications |
| `contact.html` | Full booking form with radio, checkbox, select inputs; studio hours; contact info; map placeholder; policies |

## Design Specification

- **Hero Layout:** TYPE G — Scroll-Driven Text Transform
- **Color Palette:** P7 Deep Teal
  - `--bg: #0A1818` | `--surface: #0F2020` | `--surface2: #142828`
  - `--accent: #4DCFB0` | `--accent-light: #7ADFC8` | `--accent-dark: #2A9A80`
  - `--ivory: #DCEFEC` | `--smoke: #809890` | `--muted: #4A6860`
- **Font Pair:** F5 — Fraunces (serif) + Inter (sans)
- **Animation:** A2 Whisper — `duration:1.5, y:14, stagger:0.06, ease:'power1.out', immediateRender:false`

## Brand

- **Brand Name:** ZERO — Float Therapy Studio
- **Tagline:** "Nothing Between You and Everything"
- **Industry:** Wellness / Sensory Deprivation / Float Therapy
- **Tone:** Minimal, void, transcendent silence, scientific luxury

## Image Slots

All images are local references in `images/`:

- `hero-1.webp` through `hero-4.webp` — Hero backgrounds
- `product-1.webp` through `product-4.webp` — Pod and studio product shots
- `ambient-1.webp` through `ambient-3.webp` — Ambient and lounge photography
- `thumbnail.webp` — Template preview thumbnail (600px wide)

## Technical Notes

- Custom scrollbar: `scrollbar-width:thin; scrollbar-color:var(--accent-dark) var(--bg)`
- GSAP 3.12.2 via cdnjs, ScrollTrigger registered
- Swiper 11 via jsdelivr (testimonial carousel on index.html)
- SplitText inline polyfill embedded in index.html
- All `gsap.from()` calls use `immediateRender:false` at top level
- Philosophy grid uses `display:grid; grid-template-columns:repeat(3,1fr)` (not flex)
- Footer uses `background:var(--bg)` only, no hardcoded hex
- Responsive breakpoints: 600px, 900px, 1200px
- Mobile nav toggle with full-screen overlay menu

## Preloader

- Brand name animates in with line-scale animation
- Fades out at 2.2s delay (0.8s fade)
- Scroll indicator shown on preloader complete AND setTimeout(4000ms) fallback

## Sessions / Pricing

| Session | Duration | Price |
|---|---|---|
| First Float Package | 60 min | £45 |
| Introductory Float | 60 min | £60 |
| Deep Float | 90 min | £85 |
| Extended Void | 120 min | £110 |
| Private Suite | 90 min (×2) | £195 |

## Membership Tiers

| Tier | Price | Includes |
|---|---|---|
| Still | £120/mo | 2× 90-min floats |
| Deep | £220/mo | 4× floats, guest pass |
| Void | £380/mo | Unlimited floats, EEG quarterly |
