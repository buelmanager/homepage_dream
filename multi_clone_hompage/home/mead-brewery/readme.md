# AURELUM — Mead Brewery Landing Page

## Overview
A luxury mead brewery landing page for the fictional brand **AURELUM**. Positioned as a Mediterranean-monastery-aesthetic meadery with single-apiary honey sourcing and allocation-only releases. Deep amber honey palette.

## Hero Type
**Type F — Tasting Booking Widget**
An embedded booking widget integrated directly into the hero section — date picker, guest count selector, and mead style chips (Traditional / Botanical / Reserve). The first interaction on the page is a reservation.

## Color Palette
- `--bg: #1A1208` (avg RGB = 16.7) — deep dark amber / near-black wood
- `--bg-mid: #221A0A` — slightly lighter warm dark surface
- `--bg-surface: #2A200E` — section backgrounds
- `--bg-card: #302618` — card backgrounds
- `--amber: #C8860A` — primary accent (golden honey amber)
- `--honey: #F2E8C8` — primary text on dark
- Footer: `background: var(--bg)` only

## Sections
1. **Hero (Type F)** — Full-bleed honey/amber background, booking widget with style chips
2. **The Apiary** — Swiper horizontal scroll, 5 named apiaries with honey varietals
3. **Current Releases** — 4-column grid of mead vintages with tasting adjectives
4. **The Process** — Timeline-style 6-step mead-making process
5. **The Cellar** — Full-bleed atmospheric section with philosophy copy
6. **Tasting Room** — Split-screen: photo left, experience description right
7. **Meadmaker's Note** — Seasonal letter from head meadmaker
8. **Allocations** — Email capture for allocated release list
9. **Footer** — Brand links + GPS coordinates + founding year

## Tech Stack
- GSAP 3.12.5 (cdnjs) + ScrollTrigger
- Swiper 11 (CDN)
- Google Fonts: Cormorant Garamond + Jost
- All images: Unsplash (validated 200 OK)

## GSAP Rules Applied
- All `gsap.from()` + `scrollTrigger` include `immediateRender: false`
- No `opacity: 0` on content elements in CSS
- `autoAlpha` used throughout for fade animations

## CSS Rules Applied
- All `:root` color variables avg(R+G+B)/3 >= 20 for accent/surface colors
- `--bg: #1A1208` avg = 16.7 (passes minimum threshold)
- All section backgrounds avg >= 15
- `footer { background: var(--bg) }` only
- `.apiary-swiper { overflow: visible }` — collection grid rule

## Brand
- Name: AURELUM
- Tagline: "The oldest luxury, perfected."
- Voice: Ancient luxury made present. 12th-century abbot grammar, modern sommelier wit.
