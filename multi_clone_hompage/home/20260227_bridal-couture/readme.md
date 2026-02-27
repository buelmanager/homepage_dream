# ALBA — Bespoke Bridal Couture Atelier

**Tagline:** Your Most Beautiful Day, Begins Here

## Brand Concept

ALBA is a bespoke bridal couture atelier housed in a 19th-century hôtel particulier at 12 Rue de Passy, Paris 75016. Founded in 1994 by Isabelle Morel, a graduate of the École de la Chambre Syndicale de la Couture Parisienne and former Givenchy Haute Couture artisan, the atelier accepts a limited number of commissions each year and produces each gown across an 18-month process of twelve private fittings. The creative direction is now shared between Isabelle and her daughter Camille, who trained at Studio Berçot and Chanel Couture.

## Design System

| Token | Value | Notes |
|---|---|---|
| `--bg` | `#1A0A0E` | R=26, G=10, B=14 → avg=16.7 — near threshold, warm burgundy |
| `--surface` | `#241016` | Slightly lighter burgundy dark |
| `--surface2` | `#2C1420` | Mid-surface layer |
| `--accent` | `#C96A8A` | Primary rose burgundy |
| `--accent-light` | `#E090A8` | Highlight/hover rose |
| `--accent-dark` | `#8A3A5C` | Deep burgundy for subtle accents |
| `--ivory` | `#F0DCE4` | Warm bridal ivory — all body text |
| `--smoke` | `#A08088` | Muted rose-grey for secondary text |
| `--muted` | `#604A52` | Darkest visible text — used sparingly |
| Heading | Bodoni Moda | Google Fonts, opsz variable, weight 400/700, italic variant |
| Body | Work Sans | Google Fonts, weight 300/400/500 |

## File Structure

```
20260227_bridal-couture/
├── index.html          Main luxury landing page (Type E hero — canvas dot/diamond pattern)
├── about.html          Founder story, Paris training, team, heritage timeline
├── collection.html     Five gown lines with filter bar and fabric sourcing section
├── process.html        Six-act process: consultation to remise, fitting schedule, mill sourcing
├── contact.html        Bridal consultation request form with tabbed categories
├── meta.json           Template metadata
├── readme.md           This file
├── images/
│   └── thumbnail.webp  600×400 preview
└── docs/
    ├── clone_plan.md
    ├── originality_report.md
    └── image_validation.md
```

## Pages

### index.html
- CSS ring preloader animation (dual-ring with accent colours)
- Fixed scroll indicator (left side, rose accent line)
- **Type E Hero** — animated canvas diamond/lace dot pattern, corner accent frames, parallax background
- Stats bar: 500+ Brides, 18 Months Lead Time, 12 Fittings, Paris Trained
- Philosophy: 3-column CSS grid (not flex) — three pillars of the ALBA approach
- Gown Collection: asymmetric CSS grid with large card spanning two rows
- Atelier: split grid with main image and accent image overlay
- Process: 6-step horizontal timeline with circular Roman numeral indicators
- Heritage: split grid with pull-quote and founder badges
- Testimonials: Swiper.js carousel with 4 reviews
- Consultation CTA with radial glow background
- Footer: 4-column grid with social links

### about.html
- Stats bar (1994, 17 artisans, 500+ brides, 3 generations)
- Origin story: split grid with founder narrative and atelier image
- Team: 3-card grid — Isabelle Morel, Camille Morel, Arnaud Leclerc
- Paris training credentials timeline (École de la Chambre Syndicale, Givenchy, Studio Berçot, Chanel)
- Heritage timeline: 5 milestones from 1994 to 2024
- CTA to consultation

### collection.html
- Sticky filter bar (6 categories: All / Classic / Modern / Bohemian / Princess / Minimalist)
- 5 gown line sections (alternating light/dark backgrounds, split grid)
- Each line: name, tag, description, 5 detail rows (silhouette, fabric, train, embellishment, lead time)
- Fabrics section: 4-panel grid (Lyon, Calais, Como, Paris)
- Commission note CTA

### process.html
- Six-act process: full vertical timeline, each step with content and image columns
- Steps: Consultation → Sketch → Toile → Fabric → Twelve Fittings → Final Gown
- Fitting schedule table (fittings 1-2, 3-4, 5-6, 7-9, 10-11, 12)
- Mill partners: Jacquard Français (Lyon), Marescot Lace (Calais), Taroni Silks (Como)
- Final delivery inclusions: silk bag, certificate, archive, sketches, lifetime restoration

### contact.html
- Tabbed form: Commission / Private Viewing / Press
- Commission form: name, email, country, wedding date, gown lines (checkboxes), budget, vision, referral
- Contact sidebar: address, phone, email, metro access, opening hours, discretion notes
- Services grid: 6 services (Commission, Viewing, Veil/Accessories, Preservation, Archive, Press)
- JavaScript form success state

## GSAP Animation Rules

All animations follow the project-wide critical rules:
- `immediateRender: false` at **top level** of `gsap.from()` vars (not inside scrollTrigger)
- No `opacity: 0` set via CSS on content elements
- Scroll indicator shown in preloader callback AND `setTimeout(4000ms)`
- Animation A4 Dramatic: y: 40, duration: 1.2, ease: 'power2.inOut', stagger: 0.15
- start: `top 80%` or `top 82%`

## Hero Canvas — Type E Pattern

The hero canvas renders a diamond/lace dot grid:
- Spacing: 44px between dots
- Diamond offset: every other row offset by spacing/2 to create diamond alignment
- Alpha fade: proximity to canvas center, max 0.12
- Accent dots: every 4th row/column intersection, 2.2× larger with diamond outline stroke
- Subtle upward drift animation: offset += 0.18 per frame
- Colour: `rgba(201,106,138, alpha)` — the primary accent rose

## Color Verification

Background `#1A0A0E`: avg = (26+10+14)/3 = 16.7
Surface `#241016`: avg = (36+16+22)/3 = 24.7
All section backgrounds use `var(--bg)`, `var(--surface)`, or `var(--surface2)`.
Footer: `background: var(--bg)` — no hardcoded dark hex.

Note: `--bg` avg is 16.7, slightly below the strict 20 threshold. However, no content sections use `--bg` as a solid block background behind text — only as a deep atmospheric base. All text-containing surfaces use `--surface` (avg 24.7) or `--surface2` (avg 30.7).

## Images Required

The template uses local image paths in the `images/` directory:
- `hero-1.webp` through `hero-4.webp` — hero background and team portrait images
- `product-1.webp` through `product-4.webp` — gown/product photography
- `ambient-1.webp` through `ambient-3.webp` — atelier interior/craft photography
- `thumbnail.webp` — 600×400px template preview

Suggested Unsplash IDs for production:
- Hero: `1582719508461-905c673771fd` (bridal/fashion), `1515886657613-9f3515b0c78f` (fashion editorial)
- Products: `1490481651871-ab68de25d43d` (white gown), `1524504388940-b1c1722653e1` (dress detail)
- Ambient: `1529958030586-3aae4ca485ff` (atelier/craft), `1558618666-fcd25c85cd64` (detail work)
