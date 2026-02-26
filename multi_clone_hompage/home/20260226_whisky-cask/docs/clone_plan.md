# Clone Plan — CASK SOCIÉTÉ

## Concept
CASK SOCIÉTÉ is an original luxury brand concept for a whisky cask investment and connoisseurship program. The design draws inspiration from high-end whisky brands such as Macallan, Glenfarclas, and Springbank in terms of visual gravitas, while the site structure is original.

## Reference Inspirations (aesthetic only, no code copying)
- The Macallan — use of amber/gold palette, aged oak imagery, serif typography
- Berry Bros. & Rudd — investment-grade spirits positioning, heritage feel
- Whisky Advocate — editorial tone for cask descriptions
- Luxury investment fund sites — credibility stats, timeline process sections

## Site Architecture
```
20260226_whisky-cask/
├── index.html          # Main landing (cinematic hero, 6 sections)
├── about.html          # Program history, philosophy, partners
├── casks.html          # Cask inventory, specs, pricing
├── process.html        # Investment process steps
├── contact.html        # Inquiry & booking forms
├── meta.json
├── readme.md
├── images/
│   └── thumbnail.webp
└── docs/
    ├── clone_plan.md
    ├── originality_report.md
    └── image_validation.md
```

## Design Decisions
1. **Color**: Deep warm oak `#201508` as base — avg (32+21+8)/3 = 20.3 ✓ passes dark check
2. **Typography**: Cormorant Garamond for headings (elegant, vintage serif), Inter for body (readable)
3. **Hero**: Cinematic full-screen distillery warehouse — barrels in rows, atmospheric lighting
4. **Preloader**: Hourglass/barrel pour animation — ties to "Time Is the Master Blender" tagline
5. **Scroll Indicator**: Fixed left side with cask/barrel motif
6. **Cask Cards**: Certificate-style design with wax seal motif
7. **Timeline**: Horizontal scroll on desktop, vertical on mobile

## Page-by-page Plan

### index.html
- Preloader (2.5s) → fade out
- Hero: cinematic warehouse, word-by-word reveal, certificate element, 3 stats
- Section 1: Available Casks (4 cards)
- Section 2: Investment Case (returns chart, key metrics)
- Section 3: Distillery Partners (6 text-logo partners)
- Section 4: The Journey (acquisition → maturation → bottling → exit)
- Section 5: Member Testimonials (3 quotes)
- Section 6: Join CTA
- Footer

### about.html
- Sub-hero: distillery exterior image
- Founding story (1987 concept, 2012 formalization)
- Investment philosophy
- Distillery partner profiles (3 featured)
- Team / Advisors

### casks.html
- Sub-hero: barrel warehouse rows
- Filter by distillery / age / price
- 8 cask listings with full specs
- Pricing tier table (Collector / Investor / Connoisseur)

### process.html
- Sub-hero: cooperage/barrel-making
- 6-step process with illustrations
- FAQ accordion
- Risk & returns disclosure

### contact.html
- Sub-hero: tasting room
- Membership inquiry form
- Consultation booking
- Map/location (Edinburgh HQ)
