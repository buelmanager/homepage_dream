# PÉTALE Botanical Atelier — Luxury Landing Page

## Business Type
Luxury Floral Atelier / Bespoke Botanical Design Studio

## Concept
PÉTALE positions flower arrangement as spatial architecture — "Where Flowers Become Architecture." The dark botanical aesthetic (forest green, champagne gold, near-black) creates a premium, editorial feel distinct from typical floristry branding. The brand exists at the intersection of Cartier-level luxury and the transient beauty of living botanicals.

## Design System
- **Primary palette**: Deep forest (#080C09), Sage (#8FA876), Gold (#C8A96E), Ivory (#EDE8DC)
- **Typography**: Cormorant Garamond (serif headlines, quotes, numerals) + Jost (sans body/labels/nav)
- **Motion**: GSAP 3.12.2 with ScrollTrigger — stagger reveals, parallax, line-by-line hero entrance, continuous float animation

## Sections
1. Preloader (botanical SVG stroke-dasharray drawing animation)
2. Hero (3-layer cinematic with floating botanical SVG silhouettes + mouse parallax)
3. Season Strip (4-column stats band)
4. Philosophy (3-column CSS grid — Three Laws of Living Beauty)
5. Seasonal Collection (2×2 grid with transform offset on cards 2 and 3)
6. Atelier (two-column: image left, text + quote right)
7. Bespoke Process (5-step timeline with Roman numerals)
8. Heritage Timeline (5 milestones 2009–Today)
9. Press Carousel (Swiper 11, fade effect, 4 quotes)
10. Commission Form (two-column: editorial intro + form)
11. Footer (5-column with brand description)

## Technical
- Pure HTML/CSS/JS (no framework)
- GSAP 3.12.2 + ScrollTrigger (cdnjs)
- Swiper 11 (cdn.jsdelivr.net)
- Google Fonts: Cormorant Garamond + Jost
- Progressive enhancement: all content visible without JS (gsap.from() not gsap.to())
- Left-side fixed scroll indicator with progress fill + active section detection
- Scroll indicator show guaranteed by two mechanisms: preloader callback + 4s setTimeout fallback
- Responsive: collapses to single-column on tablet/mobile; scroll indicator hides on small screens

## Image Sources
All images from Unsplash (validated 200 status before use):
- Hero: photo-1495121605193 (dark moody florals)
- Spring ALBA: photo-1561336313 (floral)
- Summer SOLEIL: photo-1519378058457 (floral)
- Autumn CRAMOISI: photo-1515377905703 (floral)
- Winter NOCTURNE: photo-1462530260150 (floral)
- Atelier: photo-1501004318641 (botanical/garden)
- Commission BG: photo-1526047932273 (botanical)

## Files
- `index.html` — main landing page
- `meta.json` — project metadata
- `readme.md` — this file
- `docs/clone_plan.md` — development checklist
- `docs/originality_report.md` — originality documentation
- `docs/image_validation.md` — image URL validation results
- `images/fullpage.png` — full-page screenshot
