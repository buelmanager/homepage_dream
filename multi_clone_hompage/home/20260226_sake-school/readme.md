# KURABITO — The Art of Japanese Sake

**Luxury multi-page landing page template**
Tier: PRO · Price: $49 · Industry: Beverage / Hospitality
Status: PUBLISHED · Created: 2026-02-26

---

## Brand Concept

KURABITO is a fifth-generation sake school and tasting house in Fushimi, Kyoto, founded in 1872. Run by Toji Takeshi Nakamura, it offers sake certification courses, private tastings, and seasonal brewery immersions. The brand communicates ancestral craft, Japanese aesthetic precision, and quiet luxury.

Tagline: "The Soul of the Rice, the Spirit of the Toji."

---

## Design System

| Token | Value | Description |
|---|---|---|
| `--bg` | `#1A1510` | Deep warm dark (avg=21 ✓) |
| `--surface` | `#231C14` | Slightly lighter warm surface |
| `--accent` | `#C87840` | Copper / sake brown |
| `--accent2` | `#E8D8B0` | Rice white / cream |
| `--text` | `#F0E8D8` | Warm off-white body text |
| `--text-muted` | `#907050` | Muted warm text |

**Fonts:**
- Heading: Cormorant Garamond (Google Fonts) — 300, 400, 500, 600, 700, italic
- Body: Inter (Google Fonts) — 300, 400, 500, 600

---

## File Structure

```
20260226_sake-school/
├── index.html           # Main landing page (preloader, hero, 5 sections, footer)
├── about.html           # Brewery history, toji lineage, philosophy, gallery
├── sake.html            # Sake varieties, grades, brewing process, seasonal releases, pairing
├── courses.html         # Three-tier certification programme with pricing and schedule
├── contact.html         # Booking forms (tabs), visit info, private events
├── meta.json            # Template metadata
├── readme.md            # This file
├── docs/
│   ├── clone_plan.md        # Project plan and build specification
│   ├── originality_report.md  # Originality and differentiation report
│   └── image_validation.md  # Unsplash image URL validation log
└── images/
    └── thumbnail.webp   # 600px wide WebP thumbnail
```

---

## Pages

### index.html — Main Landing Page
- **Preloader**: Animated sake cup filling with CSS clip-path animation
- **Scroll Indicator**: Fixed left-side indicator showing section number and name
- **Hero**: Cinematic full-screen brewery interior with mist/filter overlay, large KURABITO heading, floating rice grain decoration pattern
- **Section 1 — The Sake**: 4-card grade showcase (Junmai, Ginjo, Daiginjo, Nigori)
- **Section 2 — The Kura**: Split layout — brewery image + history text with stats
- **Section 3 — Tasting Experiences**: 3-card tasting experience showcase
- **Section 4 — Courses**: 3-card course tier overview with pricing
- **Section 5 — CTA**: Full-width call-to-action with background image
- **Footer**: Decorative pattern border, 4-column links, address

### about.html — Brewery & Toji
- Page hero with brewery interior image
- Five-generation lineage timeline
- Philosophy section (Water / Rice / Time)
- Toji profile with credentials
- Kura gallery grid

### sake.html — The Sake
- Page hero with tasting imagery
- Full sake collection table (4 grades with tasting notes, specs)
- 4-step brewing process cards
- 4 seasonal release cards
- Food pairing reference table

### courses.html — Education
- Page hero
- Three full course cards with curriculum lists and pricing
- 6-card "Why Kurabito" section
- 2026 schedule table with availability
- CTA section

### contact.html — Booking & Contact
- Page hero
- Tabbed booking form (Tasting / Course / Private Event / General)
- Visit & directions section with map placeholder
- Private event types (Corporate / Celebrations / Media)

---

## Technical Notes

- **GSAP**: All `gsap.from()` calls with `immediateRender: false` at top level (not inside scrollTrigger)
- **GSAP Version**: 3.12.5 via cdnjs CDN
- **ScrollTrigger**: Registered and used on all pages
- **No opacity:0 in CSS** on any content elements
- **Fonts**: Google Fonts — Cormorant Garamond + Inter
- **Images**: All Unsplash (validated 200 OK, see docs/image_validation.md)
- **No external dependencies** beyond GSAP CDN and Google Fonts

---

## Color Compliance

All background colors pass the `check-sections.py` threshold (avg RGB ≥ 15):
- `--bg: #1A1510` → avg = (26+21+16)/3 = 21.0 ✓
- `--surface: #231C14` → avg = (35+28+20)/3 = 27.7 ✓
- Footer uses `var(--bg)` only (no hardcoded dark hex) ✓

---

## Thumbnail

- Format: WebP (cwebp -q 80)
- Dimensions: 600px wide
- Source: Unsplash photo-1577803645773-f96470509666
- Location: `images/thumbnail.webp`
