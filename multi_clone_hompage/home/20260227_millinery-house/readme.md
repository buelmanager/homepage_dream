# CHAPEAU NOIR — Crowned in Couture

**Slug:** `20260227_millinery-house`
**Category:** Luxury Fashion / Millinery
**Tier:** Free
**Pages:** 5 (index, about, collection, process, contact)

## Brand Identity

- **Brand Name:** CHAPEAU NOIR
- **Tagline:** Crowned in Couture
- **Industry:** Bespoke luxury hat atelier, millinery workshop, couture headwear
- **Tone:** Parisian couture, monochromatic elegance, sculptural fashion luxury
- **Founded:** 1987 (fictional)
- **Locations:** Paris, London, New York

## Design System

### Color Palette — P8 Onyx Stone
| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#181818` | Page background |
| `--surface` | `#222222` | Cards, nav |
| `--surface2` | `#2A2A2A` | Elevated surfaces |
| `--accent` | `#B0B0C0` | Primary accent |
| `--accent-light` | `#D0D0E0` | Hover states |
| `--accent-dark` | `#808090` | Subdued accent |
| `--ivory` | `#EEEEF2` | Primary text |
| `--smoke` | `#909090` | Secondary text |
| `--muted` | `#606060` | Disabled/tertiary |
| `--border` | `#1E1E1E` | Dividers |

### Typography — F8
- **Heading:** Bodoni Moda (Google Fonts, opsz 6–96, weights 400/700, includes italic)
- **Body:** Work Sans (Google Fonts, weights 300/400/500)

### Animation — A4 Dramatic
- Duration: 1.1–1.3s
- Y offset: 40px
- Stagger: 0.15
- Ease: `power2.inOut`
- Always uses `gsap.from()` with `immediateRender: false`

### Hero — Type B Parallax
- Ken Burns animation on `layer-1`
- Layer fade cycle on `layer-2`
- Mousemove parallax (±18px x-axis, ±12px y-axis)

## File Structure

```
20260227_millinery-house/
├── index.html          # Main landing page (1200+ lines)
├── about.html          # Maison history, founder, awards, team
├── collection.html     # Hat collections with filter bar
├── process.html        # 4-stage craft process detail
├── contact.html        # Commission inquiry form + FAQ
├── meta.json           # Template metadata
├── readme.md           # This file
├── images/             # Local image assets (webp)
│   ├── hero-1.webp … hero-4.webp
│   ├── product-1.webp … product-4.webp
│   ├── ambient-1.webp … ambient-3.webp
│   └── thumbnail.webp
└── docs/
    ├── clone_plan.md
    ├── originality_report.md
    └── image_validation.md
```

## Key Sections (index.html)

1. Preloader (animated logo + progress bar)
2. Scroll indicator (dual reveal: preloader callback + 4000ms timeout)
3. Navbar (fixed, transparent → frosted glass on scroll)
4. Hero — Type B Parallax (Ken Burns + mousemove + layered backgrounds)
5. Stats Strip (4 metrics)
6. Philosophy (3-column CSS Grid — NO flexbox)
7. Collection Preview (4-column grid, overflow: visible)
8. Atelier (50/50 split — image + content)
9. Process / Craft (4-step horizontal timeline)
10. Heritage (timeline + image)
11. Press / Testimonials (Swiper carousel with fade effect)
12. Commission Form
13. Footer (background: var(--bg) only)

## Technical Notes

- SplitText polyfill included inline (Club GSAP CDN is unavailable)
- All GSAP reveals use `gsap.from()` with `immediateRender: false` at top level
- No `opacity: 0` in CSS on content elements
- Philosophy grid uses `display: grid; grid-template-columns: repeat(3, 1fr)`
- Collection grid uses `overflow: visible`
- Footer uses `background: var(--bg)` — no hardcoded hex
- Fully responsive: 375px, 768px, 1440px breakpoints
