# INK HOUSE — Luxury Calligraphy Atelier

**Template slug:** `20260226_calligraphy-atelier`
**Tier:** PRO
**Price:** $49
**Style:** Luxury / Dark / Copper
**Industry:** Art & Craft / Wedding / Stationery

---

## Brand Concept

INK HOUSE is a premier calligraphy studio and school in London offering bespoke envelope addressing, wedding stationery, live calligraphy at events, and intimate workshops in classical scripts (Copperplate, Spencerian, Italic, Modern).

**Tagline:** "Every Stroke Tells the Truth."

---

## Design System

| Token | Value | Notes |
|-------|-------|-------|
| `--bg` | `#141414` | avg 20 — passes dark threshold |
| `--surface` | `#1E1E1E` | Card and section backgrounds |
| `--accent` | `#C87840` | Copper / ink gold |
| `--accent2` | `#E8D8C0` | Parchment cream |
| `--text` | `#F5F0E8` | Primary text |
| `--text-muted` | `#808080` | Secondary text |
| Heading font | Cormorant Garamond | Google Fonts |
| Body font | Inter | Google Fonts |

---

## File Structure

```
20260226_calligraphy-atelier/
├── index.html          Main landing page (cinematic hero, 5 sections)
├── about.html          Studio story, artisans, timeline
├── services.html       Four service blocks, process, FAQ
├── workshops.html      Script tabs, schedule, what to expect
├── contact.html        Commission + workshop + event forms, visit info
├── meta.json           Template metadata
├── readme.md           This file
├── images/
│   └── thumbnail.webp  600px wide thumbnail (< 20KB)
└── docs/
    ├── clone_plan.md
    ├── originality_report.md
    └── image_validation.md
```

---

## Pages

### index.html
- Preloader: Ink droplet SVG animation (ring expanding + droplet fill + splatter)
- Scroll indicator: Fixed left, copper accent, auto-hides on scroll
- Hero: Cinematic full-screen, SVG path-draw animation for "INK HOUSE" text
- Stats: 15 years / 2,000+ weddings / 8 scripts taught
- Section 1: Services — 4 cards in a grid (wedding / events / bespoke / corporate)
- Section 2: Portfolio Gallery — 12-column CSS grid, 6 items with hover captions
- Section 3: Workshop Preview — 4 script cards with images
- Section 4: The Artisans — 2 calligrapher profiles + decorative quote
- Section 5: Commission CTA with full-width background texture
- Footer: 4-column, pen-nib SVG decoration

### about.html
- Origin story with image + text grid
- Philosophy (3 pillars)
- Full team profiles (2 master calligraphers)
- Studio timeline (6 milestones, 2009–2024)

### services.html
- 4 alternating image/text service blocks (wedding, events, bespoke, corporate)
- Commission process (5 steps)
- FAQ accordion (5 questions)

### workshops.html
- Script tab switcher (Copperplate / Spencerian / Italic / Modern)
- Each tab: image, description, 4 detail stats, curriculum list, CTA
- "What to Expect" section
- 2025 dates schedule table with availability badges
- "What to Bring" 3-column grid

### contact.html
- 3-tab form system (Commission / Workshop Booking / Event Calligraphy)
- Atelier info (address, hours, phone, email)
- Location section with directions

---

## Technical Notes

- GSAP 3.12.5 loaded from cdnjs (ScrollTrigger registered)
- `immediateRender: false` at TOP LEVEL of all gsap.from() calls with scrollTrigger
- No CSS `opacity: 0` on content elements
- All `href` attributes point to real HTML files — no `href="#"`
- Google Fonts: Cormorant Garamond + Inter
- All images: Unsplash CDN with validated URLs
- Responsive breakpoints: 1024px (tablet), 768px (mobile)

---

## Image Sources

All images sourced from Unsplash (free to use under Unsplash License):
- `photo-1455390582262-044cdead277a` — Calligraphy tools/pen
- `photo-1529958030586-3aae4ca485ff` — Pen and ink still life
- `photo-1512327536842-5aa37d1ba3e3` — Writing/paper
- `photo-1558618666-fcd25c85cd64` — Wax seal / luxury paper
- `photo-1503342394128-c104d54dba01` — Handwritten text
- `photo-1553361371-9b22f78e8b1d` — Workshop environment
- `photo-1524504388940-b1c1722653e1` — Portrait (person 1)
- `photo-1515886657613-9f3515b0c78f` — Portrait (person 2)

---

## Changelog

| Date | Change |
|------|--------|
| 2026-02-26 | Initial build — all 5 pages created |
