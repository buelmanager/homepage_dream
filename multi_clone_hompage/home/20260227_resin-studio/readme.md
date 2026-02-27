# ARDENT — Where Fire Meets Form

**A luxury multi-page website for a resin and epoxy art studio.**

---

## Brand Identity

- **Brand Name:** ARDENT
- **Tagline:** Where Fire Meets Form
- **Industry:** Luxury Resin & Epoxy Art Studio
- **Tone:** Artistic, fiery, craft-forward, artisanal luxury
- **Location:** Portland, Oregon (fictional)
- **Founded:** 2019

---

## Design System

### Color Palette — Rust Ember (P9)
| Token | Hex | Usage |
|---|---|---|
| `--bg` | `#1C1008` | Page background |
| `--surface` | `#261608` | Card / section backgrounds |
| `--surface2` | `#2E1C0A` | Alternate section backgrounds |
| `--accent` | `#D4612A` | Primary brand color, CTAs |
| `--accent-light` | `#E8884A` | Hover states, highlights |
| `--accent-dark` | `#9C3C14` | Muted accent, decorative |
| `--ivory` | `#F0E4DC` | Primary text |
| `--smoke` | `#A07860` | Secondary text |
| `--muted` | `#604840` | Tertiary text, borders |
| `--border` | `#201408` | Dividers, borders |

### Typography — Font Pair F4
- **Heading:** Cinzel (400, 600, 700) — Google Fonts
- **Body:** Crimson Pro (300, 400, italic 300) — Google Fonts
- `--font-serif: 'Cinzel', 'Times New Roman', serif`
- `--font-sans: 'Crimson Pro', Georgia, serif`

### Animation Persona — A5 Organic
- `y: gsap.utils.random(20, 28)`
- `duration: gsap.utils.random(1.0, 1.4)`
- `ease: 'power2.out'`
- `stagger: 0.09`
- `immediateRender: false` (always at top level of gsap.from())

---

## File Structure

```
20260227_resin-studio/
├── index.html          # Main landing page (1200+ lines)
├── about.html          # Studio story, founder, artisans, awards
├── collection.html     # Full collection with filter tabs
├── process.html        # 6-step creation process + FAQ
├── contact.html        # Commission inquiry form + studio info
├── meta.json           # Template metadata
├── readme.md           # This file
├── images/
│   ├── hero-1.webp     # Hero parallax layer 1
│   ├── hero-2.webp     # Hero parallax layer 2 (overlay blend)
│   ├── hero-3.webp     # Contact page hero
│   ├── hero-4.webp     # Additional hero asset
│   ├── product-1.webp  # Ember Flow table
│   ├── product-2.webp  # Inferno Tide wall art
│   ├── product-3.webp  # Molten Drop jewelry
│   ├── product-4.webp  # Cinderfall vessel
│   ├── ambient-1.webp  # Atelier interior
│   ├── ambient-2.webp  # Founder / studio scene
│   ├── ambient-3.webp  # Studio atmosphere
│   └── thumbnail.webp  # Template thumbnail (600px wide)
└── docs/
    ├── clone_plan.md
    ├── originality_report.md
    └── image_validation.md
```

---

## Pages

### index.html — Landing Page
- Preloader with SVG brand mark and animated loading bar
- Fixed scroll indicator (left-side, dot + line + label + progress)
- Fixed navbar with blur-on-scroll effect
- Hero (Type B): Parallax with two layered backgrounds + mousemove parallax + floating Est. 2019 badge
- Stats strip: 200+ Commissions / 48+ Colors / 12+ Awards / 15 Years
- Philosophy: 3-column CSS grid with stagger reveal cards
- Collection: 2x2 product grid with image overlay
- Atelier: 2-col layout (image + text) with parallax
- Process: Vertical timeline, 5 steps, animated line draw
- Heritage: 4 milestones horizontal grid
- Press: Swiper carousel, 3 testimonials
- Commission form: styled inputs
- Footer: 4-column layout

### about.html — Studio Story
- Page hero with large decorative text watermark
- Founder story (2-col image + text)
- Studio philosophy (2x2 values grid)
- Team / artisans (3-col cards)
- Awards timeline (vertical list)

### collection.html — Art Collection
- Page hero with decorative symbol watermark
- Filter tabs: All / Resin Tables / Wall Art / Jewelry / Custom
- 3-column product grid with filter functionality
- Collection showcase banner with CTA

### process.html — Creation Process
- Page hero with image background (right half)
- 6-step creation process (alternating left/right layout with images)
- Video placeholder with play button overlay
- FAQ accordion (6 questions)

### contact.html — Commission & Contact
- Full-bleed hero with image background
- 2-column layout: commission form + studio info
- Commission form: name, email, phone, project type, dimensions, budget, timeline, checkboxes, vision message, source
- Studio info block with address / phone / email / hours
- Commission timeline steps
- Map placeholder (CSS grid pattern with pin)
- Trust section: 3 cards (True Originals / Transparent Pricing / Lifetime Support)

---

## Technical Notes

### CDN Dependencies
- GSAP 3.12.2 (cdnjs) — gsap.min.js + ScrollTrigger.min.js
- Swiper 11 (jsdelivr) — CSS + JS (index.html only)
- Google Fonts — Cinzel + Crimson Pro

### GSAP Rules Applied
- No `opacity: 0` in CSS on content elements
- All reveals use `gsap.from()` not `gsap.to()`
- `immediateRender: false` is always at TOP LEVEL of gsap.from() vars
- SplitText inline polyfill included (no CDN dependency)
- Scroll indicator shows in both preloader callback AND setTimeout(4000)

### Responsive Breakpoints
- 1440px — full desktop layout
- 1200px — reduced padding
- 768px — single column, nav hidden
- 375px — mobile optimized

### Accessibility
- Semantic HTML5 elements (section, nav, footer, form, article)
- ARIA-compatible form labels
- Alt text on all images
- Focus-visible styles via browser defaults
- Sufficient color contrast ratios throughout

---

## Color Validation

All section backgrounds use CSS variables with avg(R+G+B)/3 values:
- `--bg: #1C1008` → avg = (28+16+8)/3 = 17.3 (above minimum of 15)
- `--surface: #261608` → avg = (38+22+8)/3 = 22.7
- `--surface2: #2E1C0A` → avg = (46+28+10)/3 = 28.0
- Footer uses `background: var(--bg)` only, no hardcoded hex

---

*Template created 2026-02-27. ARDENT brand identity is entirely fictional and original.*
