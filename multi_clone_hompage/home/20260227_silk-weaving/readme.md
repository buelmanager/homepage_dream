# FILAMENT — Silk Weaving Atelier

**Thread by Thread, Story by Story**

A luxury multi-page website for a heritage silk weaving atelier.

## Pages

| File | Description |
|------|-------------|
| `index.html` | Main landing page — Preloader, Hero Type B, Stats Strip, Philosophy Grid, Collection, Atelier, Process, Heritage Timeline, Testimonials (Swiper), Commission Form, Footer |
| `about.html` | Studio history, master weavers (8 profiles), loom heritage, values |
| `collection.html` | Five silk collections: Dupioni, Charmeuse, Jacquard, Organza, Custom |
| `process.html` | Full five-stage process: Reeling, Dyeing, Warping, Weaving, Finishing |
| `contact.html` | Full commission form with FAQ accordion and studio visit information |

## Design System

- **Color Palette:** P5 — Arctic Slate (`--bg: #141820`, `--accent: #A0C4D8`)
- **Typography:** F7 — Libre Baskerville (serif headings) + Source Sans 3 (body)
- **Hero Type:** B — Parallax with mousemove parallax and Ken Burns layers
- **Animation:** A1 — Standard (`opacity:0, y:24, duration:1.1, ease:'power2.out'`)
- **Libraries:** GSAP 3.12.2 + ScrollTrigger, Swiper 11

## Brand

- **Brand:** FILAMENT — Silk Weaving Atelier
- **Tagline:** Thread by Thread, Story by Story
- **Founded:** 1982 (fictional)
- **Location:** Lyon, France (fictional)
- **Industry:** Traditional silk weaving, handloom textiles
- **Tone:** Artisanal precision, textile heritage, cool ethereal luxury

## Technical Compliance

- No `opacity:0` set in CSS on content elements
- All `gsap.from()` calls use `immediateRender: false` at top level
- Scroll indicator shown after preloader + setTimeout(4000ms) fallback
- Philosophy section uses CSS `display: grid` (not flex)
- SplitText polyfill embedded before Swiper script
- Custom scrollbar via `::-webkit-scrollbar`
- Mobile responsive with breakpoints at 768px and 1024px
- All image paths relative (`images/` directory)

## Images Required

Place the following in `images/` directory:

- `hero-1.webp`, `hero-2.webp` — Hero background layers (full-bleed)
- `hero-3.webp`, `hero-4.webp` — Additional hero assets
- `product-1.webp` — Dupioni Silk
- `product-2.webp` — Charmeuse Silk
- `product-3.webp` — Jacquard Silk
- `product-4.webp` — Organza Silk
- `ambient-1.webp`, `ambient-2.webp`, `ambient-3.webp` — Atelier/process shots
- `thumbnail.webp` — Template thumbnail (600px wide, gitignore jpg version)

## Thumbnail Generation

```bash
cwebp -q 80 -resize 600 0 \
  multi_clone_hompage/home/20260227_silk-weaving/images/thumbnail.jpg \
  -o multi_clone_hompage/home/20260227_silk-weaving/images/thumbnail.webp
```
