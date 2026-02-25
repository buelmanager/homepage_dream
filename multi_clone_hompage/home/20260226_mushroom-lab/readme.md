# MYCEL — Grown in Silence

**Template:** `20260226_mushroom-lab`
**Category:** Artisan Gourmet Mushroom Cultivation Lab
**Page Type:** Single-page luxury landing page

## Brand Overview

MYCEL is a premium artisan mushroom cultivation lab specializing in rare and gourmet fungi. The brand sits at the intersection of underground science and earthy luxury — cultivating Lion's mane, black truffles, Japanese shiitake, reishi, oyster clusters, and chaga conk in ISO 5 certified clean rooms.

## Sections

1. **Preloader** — Animated SVG mycelium network branching + MYCEL brand reveal
2. **Navbar** — Fixed dark green minimal with Subscribe CTA
3. **Hero** — Cinematic macro mushroom photo, "Grown in Silence" headline, substrate stats
4. **Species** — 6 cultivated species grid with scientific names, flavor profiles, and hover reveal
5. **The Lab** — 5-stage cultivation process with clean room imagery
6. **Subscriptions** — 3 box tiers (Explorer $48 / Connoisseur $98 / Chef's Reserve $220)
7. **Restaurant Partners** — Michelin restaurant logos + wholesale stats
8. **Foraging Kits** — 4 DIY home growing kit cards
9. **Science** — Mycelium network + medicinal property benefits
10. **Gallery** — 6 macro mushroom photographs
11. **Order** — Subscription signup form
12. **Footer** — Brand, links, certifications

## Technical Details

- **GSAP 3.12.2** via cdnjs (ScrollTrigger)
- **SplitText** inline polyfill (no Club GSAP dependency)
- All `gsap.from()` with ScrollTrigger have `immediateRender: false` at top level
- No `opacity: 0` in CSS (all initial states set by GSAP)
- Scroll indicator: fixed left, organic spore green animation
- Hero parallax: `scrub: true` for smooth depth effect
- Responsive: 3-col → 2-col → 1-col breakpoints at 1024px / 768px

## Color System (all pass avg(R+G+B)/3 >= 20)

| Variable     | Hex       | Avg    |
|-------------|-----------|--------|
| --bg        | #181E14   | 24.7   |
| --surface   | #202817   | 31.7   |
| --accent    | #7EC84A   | 119.3  |
| --accent2   | #C8A060   | 142.7  |
| --text      | #EAF2E0   | 232.0  |
| --text-muted| #7A9860   | 90.7   |

## Images

All images: Unsplash (free license, no attribution required for commercial)

- Hero: `1504545102780-26b9839a2b3b` — mushrooms macro close
- Species 2: `1518977676878-fa2c67c10e2d` — wild forest mushrooms
- Species 3: `1508424757381-4db63d473630` — gourmet cooking
- Species 4: `1535185384036-28bbc7ec3b52` — forest floor fungi
- Species 5: `1416879595882-3373a0480b5b` — botanical lab
- Species 6 / Gallery: `1474979266404-7eaacbcd87c5` — wooden crate
- Lab: `1491553895911-0055eca6402d` — clean room
- Science / Gallery: `1530062845289-9109b2c9d409` — earthy texture
