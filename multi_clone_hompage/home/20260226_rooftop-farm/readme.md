# VERT — From Our Sky to Your Plate

Luxury multi-page landing page for a Parisian rooftop urban farm and farm-to-table restaurant.

## Pages

| File | Description |
|------|-------------|
| `index.html` | Main landing page — hero, harvest cards, farm section, restaurant preview, experience CTA, seasonal list |
| `about.html` | Brand story, founder, agronomist, chef, timeline, Paris location |
| `farm.html` | 12 growing zones, growing methods, beehive apiary, seasonal calendar, tour CTA |
| `restaurant.html` | Chef philosophy, two tasting menus (Le Jardin €195 / La Ferme €295), wine list, practical info |
| `contact.html` | Three booking options (dinner, farm tour, combined), contact form, private events |

## Design System

- **Background**: `#101E12` (avg 21.3 — passes dark check)
- **Surface**: `#162618`
- **Accent**: `#60CC40` (fresh green)
- **Accent 2**: `#F0D060` (harvest gold)
- **Text**: `#F0F5E8`
- **Text Muted**: `#608050`
- **Heading Font**: Fraunces (Google Fonts — serif, optical size range)
- **Body Font**: Inter

## Brand

**VERT** — A luxury rooftop urban farm and farm-to-table restaurant atop a Paris skyscraper.
- 2,400 m² of growing beds, beehives, and micro-herb gardens
- Supplies a 40-cover restaurant directly below
- 30-minute farm tour + chef's tasting menu experience
- **Tagline**: "From Our Sky to Your Plate"

## Technical Notes

- All pages: GSAP 3.12.5 + ScrollTrigger from cdnjs CDN
- `immediateRender: false` at TOP LEVEL of all `gsap.from()` calls (not inside scrollTrigger)
- No CSS `opacity: 0` on content elements
- Scroll indicator on index (left-fixed, green accent line)
- Preloader: sprouting seed CSS animation on index
- Navbar fixed with glass blur on scroll
- All inter-page links functional (no `href="#"`)
- Google Fonts loaded via `<link>` with `preconnect`
- Fully responsive (breakpoint at 768px)

## Images

All images from Unsplash (free tier, verified working):
- `1416879595882-3373a0480b5b` — Rooftop garden (hero, thumbnail source)
- `1524504388940-b1c1722653e1` — Garden aerial (about hero)
- `1529958030586-3aae4ca485ff` — Urban farm beds (farm hero)
- `1466978913421-dad2ebd01d17` — Restaurant/chef (restaurant)
- `1527150122806-f682d2fd8b09` — Growing beds
- `1512327536842-5aa37d1ba3e3` — Farm techniques
- `1558769132-cb1aea458c5e` — Wine selection
- `1528360983277-13d401cdc186` — Beehives
- `1600607687939-ce8a6c25118c` — Paris rooftop view
- `1558618666-fcd25c85cd64` — Contact hero
- `1553361371-9b22f78e8b1d` — Tour background

## Thumbnail

`images/thumbnail.webp` — 600×400px WebP, ~43KB
