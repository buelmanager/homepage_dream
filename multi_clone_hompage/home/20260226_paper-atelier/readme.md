# FOLIO — Pressed from Water, Dried by Air, Held for Centuries

## Concept

FOLIO is a luxury Japanese washi paper-making atelier offering handcrafted sheets, custom stationery, and immersive papermaking workshops. The brand channels the meditative precision of traditional Japanese craft into a modern luxury context — where every sheet carries centuries of technique.

## Industry & Concept
- **Industry**: Luxury Craft / Japanese Stationery / Paper Arts
- **Concept**: Washi paper atelier — slow craft elevated to fine art
- **Tone**: Meditative, precise, heritage-rich, quietly luxurious

## Research Summary
Inspired by the craft philosophy of Haibara (Tokyo), the washi revival at Echizen, and the luxury stationery world of Smythson. Differentiated by: handcrafted-from-fiber narrative, seasonal paper collections, and immersive workshop programming.

## Style Direction — Luxury Keywords
- Warm parchment warmth
- Aged paper texture language
- Scholarly precision in typography
- Silence as a design element

## Color Palette
| Role | Hex | Notes |
|------|-----|-------|
| Background | `#1E1A14` | Deep aged parchment dark (avg RGB 25.3) |
| Surface | `#28221C` | Warm mid-tone |
| Surface 2 | `#322A22` | Elevated warm surface |
| Accent | `#C0A060` | Aged gold |
| Accent 2 | `#E8D8B8` | Pale fiber cream |
| Text | `#F0EAD8` | Warm ivory |

## Typography
- **Headings**: IM Fell English (italic, weight 400) — antique scholarly gravitas
- **Body**: Inter (weight 300–600) — clean precision

## Pages
- `index.html` — Main landing: preloader, hero with fiber texture, collection preview, workshop CTA
- `about.html` — Master papermaker story, 300-year lineage, Echizen heritage
- `collection.html` — Sheet grades, seasonal collections, custom orders
- `workshops.html` — Immersive workshop program: half-day, full-day, residential
- `contact.html` — Custom commission form, studio visits, wholesale inquiries

## Core UX/UI Decisions
- Scroll indicator: fixed left column with section index + progress fill
- Preloader: Animated water-ripple effect over fiber grid pattern
- Hero: Full-screen with slow Ken Burns on paper macro texture
- Section transitions: masked reveal (clip-path) on key headings
- All nav links point to real .html files (no href="#")

## Animation & Interaction
- **GSAP 3.12.x** via cdnjs — ScrollTrigger for all scroll animations
- `immediateRender: false` at top level of all `gsap.from()` calls
- Parallax layers on hero: fiber texture at different scroll speeds
- Text stagger reveal: y: 24px, stagger 0.1s, ease power2.out
- Custom left-side scroll indicator with progress line fill

## Performance & Accessibility
- All images: Unsplash URLs confirmed HTTP 200 pre-embed
- Google Fonts: IM Fell English + Inter via preconnect
- `prefers-reduced-motion` media query respected
- Semantic HTML5 structure throughout

## Run / Build
Static HTML — open any `.html` file directly in a browser. No build step required.

```
20260226_paper-atelier/
├── index.html
├── about.html
├── collection.html
├── workshops.html
├── contact.html
├── meta.json
├── readme.md
├── images/thumbnail.webp
└── docs/
    ├── clone_plan.md
    ├── originality_report.md
    └── image_validation.md
```
