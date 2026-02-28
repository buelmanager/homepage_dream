# MERIDIAN SEARCH — Executive Search & Board Advisory

**Template:** `20260228_executive-search`
**Tier:** Free
**Pages:** 5 (index, about, collection, process, contact)

---

## Brand

**MERIDIAN SEARCH** (Meridian Executive Search & Advisory)
*"Finding the extraordinary leaders who define tomorrow."*

C-suite executive search and board advisory firm. Since 1987. 2,400 placements. 94% retention rate. 18 industries. Offices in New York, London, and Singapore.

---

## Design System

| Property | Value |
|---|---|
| Color Palette | P6 — Midnight Purple |
| `--bg` | `#130F1A` |
| `--surface` | `#1C1626` |
| `--accent` | `#9B6EDB` |
| `--ivory` | `#EEE8F8` |
| Font Heading | Bodoni Moda (serif) |
| Font Body | Work Sans (sans-serif) |
| Hero Layout | Type F — Interactive Search Widget |
| Animation | A3 Precise (x:-20, 0.75s, stagger 0.04) |

---

## Pages

### `index.html` — Homepage
- Preloader with brand logo and progress bar
- Fixed navigation with scroll state
- **Hero Type F**: Full-bleed hero (brightness 0.35), floating headline "FINDING THE EXTRAORDINARY", interactive role-search widget (CEO / CFO / CTO / COO / Board / CHRO) with animated category buttons and count badges. Glassmorphism backdrop-blur card.
- Stats strip: 2,400 Placements / 94% Retention / 18 Industries / Since 1987
- Philosophy section with 3-column grid
- Services/Practice Areas grid (4-up)
- 5-phase process preview with connected steps
- 5-image gallery grid
- Testimonials Swiper carousel (4 quotes)
- 12-industry coverage grid
- CTA section with radial glow
- Full footer

### `about.html` — About Meridian
- Founding story and history
- Chronological timeline (1987–2024)
- 6 core values grid
- Leadership team grid (4 partners)
- Awards & recognition list
- CTA section

### `collection.html` — Practice Areas
- Filter tabs (All / C-Suite / Board / Finance / Technology / Operations / People)
- 6 practice area cards with stats (active searches, retention, avg shortlist)
- Featured CEO & Board deep-dive
- Full 18-industry sector grid
- CTA section

### `process.html` — Search Process
- 5-phase methodology detail (Discovery / Intelligence / Assessment / Presentation / Integration)
- Each phase: timeline, description, deliverables list, metric callout
- 24-month guarantee section with stats
- Competitor comparison table
- FAQ accordion
- CTA section

### `contact.html` — Contact
- Centered hero with headline
- Contact info (email, phone, LinkedIn, schedule)
- Office addresses (New York, London, Singapore)
- Full contact form (name, email, org, title, inquiry type, role, message)
- Form success state
- 4 assurance cards (confidentiality, 24hr response, partner attention, no obligation)

---

## Technical

- **GSAP 3.12.2** via cdnjs + ScrollTrigger
- **Swiper 11** via jsdelivr (testimonials carousel)
- **Google Fonts**: Bodoni Moda + Work Sans
- **SplitText polyfill** inline (Club GSAP substitute)
- All `gsap.from()` calls use `immediateRender: false` at top level
- No `opacity: 0` on content elements in CSS
- Scroll indicator: preloader onComplete + setTimeout(4000ms)
- Philosophy grid: `display: grid; grid-template-columns: repeat(3, 1fr)`
- Footer: `background: var(--bg)` only
- Fully responsive (mobile menu, stacked layouts on tablet/mobile)

---

## Images Required

```
images/
├── hero-1.webp    (main hero background)
├── hero-2.webp    (collection card, gallery)
├── hero-3.webp    (collection card, gallery)
├── hero-4.webp    (collection card — CHRO)
├── product-1.webp (team/CFO card)
├── product-2.webp (team card)
├── product-3.webp (team card)
├── product-4.webp (team card)
├── ambient-1.webp (philosophy section)
├── ambient-2.webp (gallery, process hero)
├── ambient-3.webp (about hero)
└── thumbnail.webp (600px wide, for manifest)
```

---

*Generated: 2026-02-28 | Meridian Executive Search & Advisory*
