# Clone Plan — IGNIS Volcanic Thermal Spa

**Project:** 20260226_volcanic-spa
**Created:** 2026-02-26
**Tier:** PRO | **Price:** $49 | **Category:** Multi-page Luxury Landing

---

## Concept Brief

IGNIS is a luxury volcanic thermal spa built directly above an active geothermal vent in Iceland's southern highlands. The brand identity fuses Iceland's raw volcanic geology with European luxury spa aesthetics.

**Tagline:** "Born from the Earth's Core"

**Core Brand Pillars:**
1. Volcanic geology as luxury — not danger, but depth and rarity
2. Total sensory immersion — fire, water, earth, sky
3. Radical exclusivity — maximum 24 guests at any time
4. Environmental covenant — geothermal energy, closed water loop, highland stewardship

---

## Design Strategy

### Color Philosophy
Deep crimson (`#231212`) evokes volcanic rock, obsidian, dried lava flows — not blood or danger. Lava orange (`#FF6030`) is the accent: the molten moment where earth reveals its inner heat. Warm glow gold (`#F0C080`) represents the aurora, candlelight in a stone lodge, the last light over a highland pool at midnight.

### Typography
- **Fraunces** (Google Fonts, variable optical sizing): Chosen for its unusual combination of Old Style serif tradition and contemporary warmth. The optical size axis makes it feel monumental at large sizes (hero) and intimate at body sizes. The italic weight adds geological strata — layered, ancient, undulating.
- **Inter**: Clean, neutral body text that does not compete with Fraunces. High legibility at small sizes for stat labels and form fields.

### Layout Principles
- Full-width cinematic hero with parallax background
- 2px gaps between grid cells (not gutters) — creates grid map / lava channel visual
- Section alternation: `--bg` / `--surface` for rhythm without contrast shock
- Generous whitespace — the spa operates at slow pace, the layout should breathe
- Fixed left scroll indicator — grounds the experience spatially

---

## Page Architecture

### index.html — Main Landing
**Sections:**
1. Preloader (lava CSS animation, 2.8s)
2. Hero: Cinematic full-screen — steaming geothermal pool at dusk, IGNIS title reveal, floating stats
3. Thermal Experiences — 4 card grid with temperature badges
4. The Geology — Earth diagram + 3 fact cards
5. The Pods — Aurora pod showcase + 3 feature tiles
6. Retreat Packages — 3 package cards (2N / 4N / 7N)
7. Reserve CTA — Landscape image section
8. Footer

**GSAP Animations:**
- Hero title/subtitle/stats/CTA sequential reveal on preloader exit
- Experience cards: staggered y+28 entrance on scroll
- Geology: x-axis entrance from both sides
- Pods showcase: scale from 0.97
- Package cards: staggered y+28
- Reserve CTA: y+32

### about.html — Origin Story
**Sections:**
1. Page Hero: Iceland landscape at dusk
2. Origin Story: 2-col image/text, quote block
3. Geothermal Science: 3-card grid with scientific facts
4. Sustainability: 4-card 2x2 grid
5. Team: 3-person card row
6. CTA

### experiences.html — Experience Detail
**Sections:**
1. Page Hero: Steaming hot spring
2. Four Experience Blocks: Alternating left/right full-bleed image + content
   - Geothermal Mineral Pools (38–42°C)
   - Volcanic Ash Ritual (55°C)
   - Obsidian Steam Chambers (70°C)
   - Aurora Glass Pods (−5°C exterior)
3. Temperature Map: Gradient bar + 6 pool temperature tiles
4. CTA

### retreat.html — Retreat Packages
**Sections:**
1. Page Hero: Highland panorama
2. Three Package Blocks: Sidebar (nights/price) + content (includes list)
   - The Ember (2N, €1,200pp)
   - The Lava Flow (4N, €3,400pp) — featured
   - The Magma (7N, €8,900pp)
3. Seasonal Calendar: 12-month grid with aurora/peak/mild/midnight-sun states
4. What's Always Included: 6-card grid
5. Private Hire CTA: Full-width image section

### contact.html — Booking
**Sections:**
1. Page Hero: Aurora night sky
2. Booking Inquiry: 2-col (info + form) — full booking form with validation
3. Arrival Logistics: 4-step numbered process
4. Gift Vouchers: voucher option selector + visual voucher card
5. FAQ: Accordion (6 questions)
6. Footer

---

## Component Patterns Used

| Component | Usage |
|-----------|-------|
| Temperature badge | `<span class="exp-temp">` — colored border label |
| Package sidebar | Full-color sidebar for featured, surface for standard |
| Geology diagram | Pure CSS concentric rings + rotating outer ring |
| Seasonal dot | 8px circle with 4 color states |
| Arrival steps | Numbered steps with horizontal connector line |
| Gift voucher card | CSS gradient card mimicking physical voucher |
| FAQ accordion | CSS max-height transition, JS class toggle |
| Lava preloader | CSS gradient animation with brand reveal |

---

## Competitive Analysis

**Reference spas studied (for positioning, not design copying):**
- Blue Lagoon Iceland — segment leader, more accessible, lost exclusivity
- Deplar Farm Iceland — model for ultra-exclusivity pricing (€10k+/night)
- Six Senses Ibiza — wellness depth, sensory design language
- Tierra Patagonia — architecture-integrated natural landscape model

**IGNIS positioning:** Between Six Senses depth and Deplar Farm exclusivity, with volcanic geology as unique IP that neither can replicate.

**Design differentiation:**
- No minimalist white spa aesthetic (common in competitor set)
- Deep volcanic darkness as luxury (counter to "clean white" wellness trope)
- Scientific authority (geological facts, mineral concentrations) alongside luxury
- Architecture emerges from rock, not imposed on landscape
