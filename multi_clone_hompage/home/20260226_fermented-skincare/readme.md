# FLORA — Fermented Bioactive Skincare Lab

**Template:** `20260226_fermented-skincare`
**Tier:** PRO ($49)
**Industry:** Beauty / Luxury Skincare
**Created:** 2026-02-26

---

## Brand Concept

FLORA is an ultra-luxury skincare brand whose entire formulation process is centered on fermentation science. Ancient Korean and Japanese fermentation wisdom meets Swiss biotech. Every serum and cream is fermented for 90 days in hand-thrown ceramic vessels.

**Tagline:** "Cultivated by Time. Transformed by Nature."

---

## Design System

| Variable | Value | Notes |
|----------|-------|-------|
| `--bg` | `#141B14` | avg(R,G,B) = 22.3 — passes dark check |
| `--surface` | `#1A231A` | avg = 25.7 — passes dark check |
| `--accent` | `#A8CC60` | Botanical green/lime |
| `--accent2` | `#D8C8A0` | Cream/parchment |
| `--text` | `#F0EEE8` | Near-white warm |
| `--text-muted` | `#708060` | Muted sage |
| Heading font | Fraunces (Google Fonts) | Serif with optical sizing |
| Body font | Inter (Google Fonts) | Light 300 weight |

---

## File Structure

```
20260226_fermented-skincare/
├── index.html          — Main landing page (cinematic hero + 5 sections)
├── about.html          — Lab story, founder, fermentation philosophy, advisory board
├── products.html       — Full product collection with ingredients
├── ritual.html         — 5-step ritual guide + layering technique
├── contact.html        — Consultation booking, wholesale, store locator, press
├── meta.json           — Template metadata
├── readme.md           — This file
├── images/
│   └── thumbnail.webp  — 600px wide, 80% quality WebP
└── docs/
    ├── clone_plan.md
    ├── originality_report.md
    └── image_validation.md
```

---

## Page Structure

### index.html (Main Landing Page)
- **Preloader:** Organic blob/cellular CSS animation with GSAP
- **Scroll Indicator:** Left-fixed, animated line
- **Hero:** Cinematic full-screen with fermentation bubble photography
  - "FLORA" logotype (Fraunces, 12rem)
  - Botanical SVG line art overlay
  - Floating certification badges (90-Day Ferment / Vegan / Zero Synthetics / Swiss Biotech / Korean Wisdom)
- **Section 1 — The Science:** Split layout with ceramic vessel image + 4-step fermentation process
- **Section 2 — Products:** 4-card product grid (essence, serum, cream, mask)
- **Section 3 — 90-Day Timeline:** 5-node horizontal timeline with clinical milestones
- **Section 4 — The Ritual:** 5-step application guide with right-side imagery
- **Section 5 — Lab Story:** Founder portrait + quote section
- **Certifications strip** + Footer

### about.html
- Founder biography (Dr. Seo Yeon Park, Seoul / ETH Zürich)
- Three core fermentation philosophy cards
- Company history timeline (2017–2026)
- Scientific advisory board (3 advisors)

### products.html
- Statistics banner (90 days / 0 synthetics / 100% plant / 12 SKUs)
- Featured cornerstone four (large cards with ingredients)
- Full collection grid (6 additional products)
- Star ingredients section (rice, mugwort, ginseng, edelweiss)

### ritual.html
- Ritual philosophy + introduction
- 5-step ritual cards with AM/PM toggle
- Layering technique guide with penetration depth diagram
- 6 expert tips
- CTA banner

### contact.html
- Complimentary consultation booking form (skin type selector, time zone preference)
- Wholesale tiers + enquiry form
- Store locator (6 cities: Seoul, Jeonju, Zürich, London, New York, Tokyo)
- Press & media section

---

## GSAP Implementation

All animations follow the mandatory rules:
- `immediateRender: false` at TOP LEVEL of every `gsap.from()` call
- No `opacity: 0` in CSS on content elements
- ScrollTrigger with `start: 'top 80-85%'`
- Stagger: 0.08–0.12s
- Duration: 0.9–1.2s
- Ease: `power2.out`
- y values: 20–28px max

---

## Image Sources (Unsplash)

All images validated at 200 OK:

| Usage | Unsplash ID |
|-------|-------------|
| Thumbnail / Hero | `1556228578-8c89e6adf883` |
| Science / Lab | `1600607687939-ce8a6c25118c` |
| Products hero | `1509631179647-0177331693ae` |
| Ritual hero | `1503342394128-c104d54dba01` |
| Wholesale / Cream | `1528360983277-13d401cdc186` |
| Mask | `1582719508461-905c673771fd` |
| Toner | `1503342394128-c104d54dba01` |
| Eye Concentrate | `1558618666-fcd25c85cd64` |
| Exfoliant | `1524504388940-b1c1722653e1` |
| Body Serum | `1515886657613-9f3515b0c78f` |
| Lip | `1512327536842-5aa37d1ba3e3` |
| Set | `1529958030586-3aae4ca485ff` |
| Advisor 1 | `1572635196237-14b3f281503f` |
| Advisor 2 | `1558618666-fcd25c85cd64` |
| Advisor 3 | `1524504388940-b1c1722653e1` |

---

## Color Compliance

All backgrounds pass the `check-sections.py` threshold (avg > 15):

- `--bg: #141B14` → R=20, G=27, B=20 → avg = **22.3** ✓
- `--surface: #1A231A` → R=26, G=35, B=26 → avg = **29.0** ✓
- Footer uses `var(--bg)` only — no hardcoded dark hex ✓
- No hardcoded dark section backgrounds ✓
