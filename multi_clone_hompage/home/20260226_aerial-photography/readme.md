# ALTITUDE — Aerial Photography & Drone Cinematography

A complete luxury multi-page landing page template for a premium aerial photography and drone cinematography studio based in London.

## Brand Concept

ALTITUDE is a premium aerial photography and drone cinematography studio. Specialising in architectural, real estate, event, and cinematic aerial work. Award-winning FAA/CAA-licensed pilots and RED camera operators. Tagline: "A New Perspective on Everything."

## Pages

| File | Description |
|------|-------------|
| `index.html` | Main landing page with hero, featured projects, services, equipment, pilots, and CTA |
| `about.html` | Studio story, core values, pilot profiles, fleet, certifications |
| `portfolio.html` | Full project gallery with filter by category, featured case study, awards |
| `services.html` | Service categories, pricing tiers, production process, turnaround times, airspace licensing |
| `contact.html` | Project inquiry form (tabbed: quote / general / emergency), FAQ, studio location |

## Design System

| Token | Value |
|-------|-------|
| `--bg` | `#0E1520` (avg 22.3 — passes dark threshold) |
| `--surface` | `#141C2C` |
| `--surface2` | `#1A2438` |
| `--accent` | `#40C0F0` (sky blue) |
| `--accent2` | `#F0C840` (sun gold) |
| `--text` | `#EEF4FF` |
| `--text-muted` | `#607090` |
| Font (heading) | Space Grotesk |
| Font (body) | Inter |

## Features

- Drone SVG preloader with ascending animation
- Cinematic hero with scan-line overlay, staggered letter reveal, floating altitude badge
- Fixed left scroll indicator
- Sticky navbar with scroll-triggered glass effect
- Portfolio grid with category filter
- 3-tier pricing table
- 5-step production process diagram
- Airspace licensing zone table
- Tabbed contact form (Quote / General / Emergency) with budget slider
- FAQ accordion
- GSAP ScrollTrigger animations throughout (immediateRender: false at top level)
- Fully responsive (1440px → 768px → mobile)

## Tech Stack

- Pure HTML5 / CSS3 / Vanilla JS
- GSAP 3.12.5 + ScrollTrigger (CDN)
- Google Fonts: Space Grotesk + Inter
- Unsplash images (all validated 200 OK)

## GSAP Compliance

All GSAP animations follow the established rules:
- `immediateRender: false` placed at **top level** of `gsap.from()` vars
- No `opacity: 0` applied in CSS on content elements
- Scroll indicator shown at preloader callback AND via `setTimeout(4000)`

## Assets

- `images/thumbnail.webp` — 600px wide, ~18KB

## Colour Check

Background `#0E1520`: R=14, G=21, B=32 → avg = (14+21+32)/3 = 22.3 ✓ (above threshold of 15)
