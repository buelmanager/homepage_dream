# ENTOMO — The Future of Flavor

## Concept

ENTOMO is a progressive fine-dining restaurant specializing in insect-based haute cuisine. The brand bridges cutting-edge sustainable gastronomy with luxury dining, positioning entomophagy as the inevitable evolution of fine food. The aesthetic marries deep forest tones with scientific precision — a visual language that feels both ancient and futuristic.

## Industry & Concept
- **Industry**: Restaurant / Fine Dining / Sustainable Gastronomy
- **Concept**: Insect-forward luxury fine dining — where ecology meets haute cuisine
- **Tone**: Bold, intellectual, pioneering, luxurious

## Research Summary
Inspired by the avant-garde food philosophy of Noma, Mugaritz's experimental sensory approach, and emerging sustainable fine-dining concepts. Differentiated by insect-forward menu framing, entomological visual language, and science-meets-nature aesthetic.

## Style Direction — Luxury Keywords
- Forest-laboratory aesthetic
- Deep forest green + bio-luminescent chartreuse
- Scientific precision in typography
- Organic textures meeting clinical restraint

## Color Palette
| Role | Hex | Notes |
|------|-----|-------|
| Background | `#131F13` | Deep forest (avg RGB 21.7 — passes threshold) |
| Surface | `#1A2A1A` | Mid-forest |
| Accent | `#80D040` | Chartreuse / bio-luminescent |
| Accent 2 | `#F0C840` | Amber gold |
| Text | `#F0F5E8` | Pale leaf cream |

## Typography
- **Headings**: Fraunces (optical size variable, weight 300–700) — organic, literary
- **Body**: Inter (weight 300–600) — precision counterpoint

## Pages
- `index.html` — Main landing: preloader, hero, menu preview, reservations CTA
- `about.html` — Chef story, philosophy, sustainability mission
- `menu.html` — Full tasting menu with insect taxonomy details
- `reservations.html` — Reservation system, private dining, tasting experiences
- `contact.html` — Location, hours, press, group bookings

## Core UX/UI Decisions
- Scroll indicator: fixed left column with section number, name, progress fill
- Preloader: SVG insect wing/chrysalis animation in chartreuse on forest background
- Hero: Cinematic full-screen with specimen label floating UI
- Section transitions: staggered reveal via GSAP ScrollTrigger
- All nav links point to real .html files (no href="#")

## Animation & Interaction
- **GSAP 3.12.x** via cdnjs — ScrollTrigger for all scroll animations
- `immediateRender: false` at top level of all `gsap.from()` calls
- Scroll-synced parallax on hero image layers
- Section fade + translate reveal (y: 24px, stagger 0.1s)
- Custom left-side scroll indicator with progress line fill

## Performance & Accessibility
- All images: Unsplash URLs confirmed HTTP 200 pre-embed
- Google Fonts: Fraunces + Inter via preconnect
- `prefers-reduced-motion` media query respected
- Semantic HTML5 structure throughout

## Run / Build
Static HTML — open any `.html` file directly in a browser. No build step required.

```
20260226_insect-fine-dining/
├── index.html
├── about.html
├── menu.html
├── reservations.html
├── contact.html
├── meta.json
├── readme.md
├── images/thumbnail.webp
└── docs/
    ├── clone_plan.md
    ├── originality_report.md
    └── image_validation.md
```
