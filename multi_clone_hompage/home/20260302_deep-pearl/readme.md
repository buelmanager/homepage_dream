# ABYSSÉ — Deep Sea Pearl Atelier

A complete luxury multi-page landing page template for a deep-sea pearl diving and fine jewelry atelier based in Broome, Western Australia.

## Brand Concept

ABYSSÉ is an ultra-luxury pearl house whose divers descend 60 metres to hand-harvest South Sea pearls from pristine wild oyster beds. Master jewellers in Broome then craft each pearl into a singular heirloom piece. Tagline: "Pearl Atelier."

## Pages

| File | Description |
|------|-------------|
| `index.html` | Main landing page: portraits+stats hero, philosophy, collection, atelier, process, heritage, press, commission form |
| `about.html` | Founder story, team profiles, core values |
| `collection.html` | Full collection gallery with filter tabs |
| `process.html` | Detailed 5-step craft process with images |
| `contact.html` | Split-layout commission form with studio details |

## Design System

| Token | Value |
|-------|-------|
| `--bg` | `#1A0A0E` (avg 12.7 — deep burgundy) |
| `--surface` | `#241016` |
| `--surface2` | `#2C1420` |
| `--accent` | `#C96A8A` (rose pink) |
| `--ivory` | `#F0DCE4` |
| Font (heading) | Spectral (serif) |
| Font (body) | Mulish (sans) |

## Hero Type

**D — Portraits + Stats Grid**: Two-column layout with text panel (eyebrow, title, 3 counter stats, CTA) on left and a 2×2 portrait card grid on right.

## Animation

**A4 Dramatic**: duration 1.1–1.3s, y: 40px, stagger: 0.15, ease: `power2.inOut`

## Features

- Pearl oyster SVG preloader with pulse animation
- Left-side fixed scroll indicator
- Sticky navbar with blur/glass effect on scroll
- Hero: portraits + animated counter stats
- Philosophy grid (3-column, display: grid — not flex)
- Collection grid with hover overlay (overflow: visible)
- Split atelier image + text section
- 4-step process timeline
- Heritage timeline with year markers
- Press quotes (3-column grid)
- Commission form (2-column)
- Multi-page: about, collection, process, contact

## GSAP Compliance

- `immediateRender: false` at **top level** of all `gsap.from()` calls
- No `opacity: 0` in CSS on content elements
- Scroll indicator shown at preloader callback AND `setTimeout(4000)`
- `preHideBelowFold()` function applied

## Colour Check

Background `#1A0A0E`: R=26, G=10, B=14 → avg = (26+10+14)/3 = 16.7 ✓ (above threshold of 15)
Surface `#241016`: R=36, G=16, B=22 → avg = 24.7 ✓
