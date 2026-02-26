# TERRA FORMA — Pottery Studio

**Shaped by Hand, Fired by Soul**

Luxury artisan ceramics studio landing page. Bespoke commissions, wheel-throwing workshops, gallery and process showcase. Five-page multi-page template with cinematic GSAP animations, earth-tone palette, and deeply researched ceramics craft content.

---

## Brand & Concept

**Brand:** TERRA FORMA (Latin: earth + form/shape)
**Tagline:** Shaped by Hand, Fired by Soul
**Location:** 12 Kiln Lane, Shoreditch, London — Est. 1985
**Concept:** A luxury British ceramics studio founded by Eleanor Whitmore, trained in the Shoji Hamada tradition in Mashiko, Japan. The studio uses traditional kick-wheels and a wood-fired anagama kiln, producing singular handcrafted pieces for private collectors, interior designers, and restaurants worldwide.

The brand philosophy is rooted in wabi-sabi — the beauty of imperfection, the dignity of time, and the irreplaceable quality of the human hand. Every design decision reflects this: earth tones over bright palettes, restraint over decoration, depth over speed.

---

## Research Summary

The template draws on the visual language and content conventions of established luxury British ceramics studios — Leach Pottery (St Ives), Maze Hill Pottery (London), and the broader contemporary British studio ceramics movement. Key research areas:

- **Anagama kiln technique** — 72-hour wood-firing process, natural ash glaze deposits, reduction atmosphere
- **Clay bodies** — Devon red earthenware, Cornish kaolin porcelain, Scottish Highlands stoneware
- **Mingei philosophy** — Japanese folk craft tradition; everyday beauty, honest materials
- **Wabi-sabi aesthetic** — imperfection as beauty; deliberate asymmetry, uneven rims, fire marks
- **Luxury ceramics pricing** — £480 (single plate) to £12,000+ (floor sculpture), consistent with market
- **British ceramics awards** — Crafts Council, International Ceramics Festival (Aberystwyth), V&A exhibitions

---

## Color Palette

| Variable | Hex | RGB avg | Role |
|---|---|---|---|
| `--bg` | `#1E1710` | avg 21.3 — PASS | Main background (dark earth) |
| `--surface` | `#271E14` | avg 24.3 — PASS | Card & section surfaces |
| `--accent` | `#C87840` | — | Terracotta highlight, CTAs, accents |
| `--accent2` | `#D4C4A0` | — | Raw clay secondary, eyebrows, captions |
| `--text` | `#F5EDE0` | — | Primary body text (warm white) |
| `--text-muted` | `#A08060` | — | Secondary text, metadata |

The palette was derived directly from materials referenced in the brand concept: kiln-fired terracotta, raw clay, dark kiln brick, ash residue.

---

## Typography

| Face | Weight(s) | Usage |
|---|---|---|
| Cormorant Garamond | 300, 400, 500, 600, italic | All headings, large display text, quotes |
| Inter | 300, 400, 500 | All body text, labels, nav, metadata |

Source: Google Fonts (both faces). Loaded via `<link>` preconnect for performance.

---

## Pages

| Page | File | Key Features |
|---|---|---|
| Homepage | `index.html` | SVG clay wheel preloader, parallax hero, counter stats, collection grid, process teaser, classes teaser, testimonials, CTA banner |
| Our Story | `about.html` | Founding story 2-col, master potter profile, 4-pillar philosophy grid, studio gallery, awards timeline |
| Collection | `collection.html` | Filter tabs (All/Vessels/Bowls/Plates/Sculptural), 12-item masonry grid with varied heights, piece detail modal, bespoke CTA |
| The Craft | `process.html` | 6-step detailed process (Clay/Wheel/Bisque/Glazing/Kiln/Editing), anagama kiln stats, 3-material clay sourcing cards, quality manifesto |
| Contact | `contact.html` | Studio info + Google Maps embed, 4-step commission process, commission inquiry form, 3 visit type cards |

---

## UX Decisions

- **Fixed navbar with scrolled state** — transparent on index hero, semi-opaque with backdrop-filter on sub-pages; becomes solid on scroll
- **Sub-page subhero at 60–70vh** — not full-screen; preserves reading priority, shows page is scrollable
- **Active nav state** — each page marks its own link with `class="active"` for orientation
- **Scroll indicator (index only)** — 5 terracotta dots track section position; shown after preloader and again at 4000ms fallback
- **Process page step layout** — 3-column grid (number / content / image) degrades gracefully to stacked on tablet/mobile
- **Collection modal** — click-to-expand piece details without page navigation; ESC key closes
- **Commission form with JS confirmation** — form replaced by success message on submit; no backend required
- **Footer with var(--bg) only** — never hardcoded dark hex; passes check-sections.py

---

## Animation Summary

All animations use GSAP 3.12.2 + ScrollTrigger from cdnjs CDN.

**Critical rule applied throughout:** `immediateRender: false` is always at the **top level** of `gsap.from()`, never inside `scrollTrigger: {}`.

| Animation | Trigger | Parameters |
|---|---|---|
| Hero title (SplitText words) | On load | y:32, opacity:0, stagger:0.1, duration:1.1 |
| Hero parallax | Scroll scrub | yPercent:20, ease:none, scrub:true |
| Stats counter | ScrollTrigger once | Numeric count-up, duration:2, power2.out |
| Section headings | top 85% | y:24, opacity:0, duration:1 |
| Collection cards | top 80% | y:40, opacity:0, stagger:0.12 |
| Process step entries | top 82% | x:-30/y:28, opacity:0, per-element |
| Philosophy pillars | top 80% | y:32, opacity:0, stagger:0.12 |
| Timeline items | top 80% | x:-30, opacity:0, stagger:0.1 |
| Gallery items | top 80% | y:32, opacity:0, stagger:0.1 |
| Two-col sections | top 80% | x:±40, opacity:0, duration:1.1 |

SplitText polyfill embedded inline in `index.html` — replaces Club GSAP premium plugin with word-split equivalent.

---

## How to Open in Browser

### Simple (no server)
Open any `.html` file directly in a browser:
```
open /path/to/20260226_pottery-studio/index.html
```
All resources (fonts, GSAP) load from CDN. No local server required.

### With local server (recommended for sub-page links)
```bash
cd /path/to/20260226_pottery-studio
python3 -m http.server 8080
# then open: http://localhost:8080
```

### Navigation order
`index.html` → `collection.html` → `process.html` → `about.html` → `contact.html`

---

## Files

```
20260226_pottery-studio/
├── index.html          — Homepage
├── about.html          — Our Story
├── collection.html     — The Collection
├── process.html        — The Craft (process)
├── contact.html        — Commission a Piece
├── meta.json           — Template metadata
├── readme.md           — This file
├── images/
│   └── thumbnail.webp  — 600px preview thumbnail
└── docs/
    ├── clone_plan.md        — Build checklist (all complete)
    ├── originality_report.md — Design originality assessment
    └── image_validation.md  — Unsplash URL audit
```
