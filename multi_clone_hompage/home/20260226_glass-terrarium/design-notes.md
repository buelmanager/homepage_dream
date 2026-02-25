# VIRIDIS — Design Notes

## Brand
- Name: VIRIDIS
- Tagline: Worlds Within Glass
- Category: Luxury Glass Terrarium & Botanical Atelier

## Color System (LIGHT THEME)
- `--bg: #F2F5EE` — avg 241.7 (light botanical cream)
- `--surface: #E8EDE2` — avg 231.7
- `--surface2: #DDE4D6` — avg 221.0
- All backgrounds avg(R+G+B)/3 well above 20 threshold

## Hero Type
- Type A: Cinematic Full-Screen
- Background: Unsplash photo-1485955900006-10f4d324d411 (glass terrarium plants)
- Overlay: gradient left 88% to 30% allowing image visible on right side

## Preloader
- SVG glass sphere assembling with botanical growth animation
- Paths drawn with stroke-dashoffset animation
- Leaves scale from 0 with back.out easing
- Progress bar sweeps to 100%

## Sections (13 total)
1. Preloader — glass sphere SVG + plant growth + VIRIDIS reveal
2. Navbar — light minimal, sticky on scroll with backdrop blur
3. Hero — cinematic full-screen, italic type, floating badge
4. Collection — 4 cards: Geometric / Wardian Case / Biome Sphere / Architectural Column
5. Ecosystems — 5 eco cards: Tropical Rainforest / Desert Diorama / Moss Garden / Fern Grotto / Carnivorous
6. Commission Process — 4 steps with dark green background
7. Scale — Tier I–IV from desk to architectural with image left, tiers right
8. Care Service — Monthly maintenance subscription, 4 feature cards
9. Workshop — Public sessions with 4 session cards
10. Gallery — 6-item grid (1 large + 5 regular) on dark text background
11. Testimonials — 3 client cards (art collector, interior designer, CEO)
12. Commission Form — Left info panel + right form with stats
13. Footer — surface background with 4-column grid

## Scroll Indicator
- Fixed left position
- Botanical leaf-shaped markers (CSS border-radius leaf shape)
- Active leaves update on scroll progress

## GSAP Rules Applied
- CDN: gsap 3.12.2 + ScrollTrigger from cdnjs
- ALL gsap.from() with scrollTrigger have `immediateRender: false` at TOP LEVEL
- NO `opacity: 0` in CSS (all autoAlpha animations only via GSAP)
- SplitText inline polyfill included
- Hero parallax via ScrollTrigger onUpdate

## Footer Color
- `background: var(--surface)` — #E8EDE2 (avg 231.7, well above 15 threshold)
