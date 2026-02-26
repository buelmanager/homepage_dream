# Clone Plan — VERT Rooftop Farm

## Project Brief

**Concept**: VERT is a luxury rooftop urban farm and farm-to-table restaurant atop a Paris skyscraper. 2,400 m² of growing beds, beehives, and micro-herb gardens supply a 40-cover restaurant directly below.

**Tagline**: "From Our Sky to Your Plate"

## Reference Inspirations

This page draws design language from:
- **Noma** (noma.dk) — radical farm-to-table narrative, seasonal truth philosophy
- **Azurmendi** (azurmendi.restaurant) — rooftop garden restaurant integration
- **Les Cols** (lescols.com) — deep green palette, premium typography
- **Mirazur** (mirazur.fr) — garden-to-plate story, location pride
- **Architectural Digest Gardening** — visual language of serious urban horticulture

No direct HTML/CSS from any of these sources was used. All code is original.

## Structural Plan

### Site Map
```
index.html          Main landing (hero, harvest, farm, restaurant, experience, season)
about.html          Origin story, team (3 people), milestones timeline, Paris location
farm.html           12 zones, growing methods, apiary, seasonal calendar, tour CTA
restaurant.html     Chef philosophy, 2 tasting menus, wine list, practical info
contact.html        3 booking options, enquiry form, contact details, private events
```

### Design Decisions

1. **Palette**: Deep forest green (#101E12) — warm, not cold. Passes avg ≥ 15 dark threshold at avg 21.3.
2. **Typography**: Fraunces (display serif with optical size axis) + Inter (clean body). Pairing evokes editorial food journalism.
3. **Hero**: Cinematic aerial view of rooftop greenery against Paris skyline. Large italic Fraunces title. Altitude badge right-anchored.
4. **Scroll Indicator**: Left-side fixed, animated green line. Appears after preloader, hides after 200px scroll.
5. **Preloader**: CSS sprouting seed animation — seed scales, stem grows upward, leaves unfold. Brand-appropriate micro-interaction.
6. **Sections**: Alternating full-width backgrounds (--bg / --surface) for visual rhythm.

### Page-Specific Plans

**index.html**
- Preloader: seed → sprout CSS keyframe sequence (~2.8s then fades)
- Hero: Cinematic layout, parallax bg on scroll, altitude badge, season indicator ticker
- Today's Harvest: 4 cards in 4-column grid on --surface background
- The Farm: 2-col grid, image left / text + stats right
- Restaurant: 2-col grid on --surface, text + menu list left / image right
- Experience CTA: Full-bleed background image, left-anchored content, price + features + CTA
- This Season: 3x2 grid of seasonal crop cards

**about.html**
- 2-col origin story (text + image)
- Full-width manifesto quote on --surface
- 3-col team grid (founder, agronomist, chef)
- Single-column timeline (5 milestones 2019–2024)
- 2-col Paris location section

**farm.html**
- Left-anchored hero with farm bg image
- 3x2 growing zones grid on --bg
- 2-col methods section (image + numbered method list) on --surface
- 2-col bees section (text + stats + image) on --bg
- Full-width seasonal calendar table on --surface
- 2-col tour CTA over full-bleed image

**restaurant.html**
- Centered hero with Michelin stars indicator
- 2-col chef philosophy (image + text)
- 2-col tasting menu cards on --surface (Le Jardin / La Ferme)
- 2-col wine section (text + image) on --bg
- 3x2 practical info grid on --surface
- Centered reservation CTA over full-bleed image

**contact.html**
- Left-anchored hero
- 2-col main grid: 3 booking option cards (left) + sticky enquiry form (right)
- 4-col contact details strip on --surface
- 2-col private events section over full-bleed image

## GSAP Animation Strategy

| Element | Animation | Trigger |
|---------|-----------|---------|
| Hero elements | `from: opacity:0, y:28` staggered | Timeline on load |
| Harvest cards | `from: opacity:0, y:28` stagger 0.1 | ScrollTrigger top 85% |
| Farm 2-col | `from: opacity:0, x:±30` | ScrollTrigger top 80% |
| Stat items | `from: opacity:0, y:20` stagger 0.12 | ScrollTrigger top 85% |
| Team cards | `from: opacity:0, y:24` stagger 0.12 | ScrollTrigger top 80% |
| Timeline items | `from: opacity:0, x:-20` stagger 0.12 | ScrollTrigger top 80% |
| Zone cards | `from: opacity:0, y:24` stagger 0.1 | ScrollTrigger top 85% |
| Menu cards | `from: opacity:0, y:28` stagger 0.15 | ScrollTrigger top 80% |

**CRITICAL RULE**: `immediateRender: false` at top-level of ALL `gsap.from()` calls.
