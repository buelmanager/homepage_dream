# Clone Plan — KOJI Miso & Fermentation Atelier

**Created:** 2026-02-26
**Slug:** `20260226_miso-atelier`
**Type:** Multi-page luxury landing page (5 HTML pages)

---

## Creative Brief

### Brand Identity
- **Name:** KOJI
- **Tagline:** "Patience Transforms Everything"
- **Business Type:** Traditional Japanese miso and koji fermentation atelier
- **Location:** Shiojiri, Nagano Prefecture, Japan
- **Founded:** 1769 (sixth generation family operation)
- **USP:** 12 aged miso varieties (3 months–3 years), 250-year living koji culture, fermentation retreats, professional certification

### Tone & Feel
- Reverent, patient, deeply Japanese without being touristy
- Luxury through restraint — no maximalism, no flashy elements
- Scientific precision meets artisanal tradition
- Dark, warm, amber-lit aesthetic evoking cedar cellars and miso paste

---

## Design Reference Analysis

### Color Psychology
- Deep brown-black background: evokes aged cedar, dark miso paste, cave cellar
- Umami orange accent (#D47840): direct reference to aged miso color; warm, appetizing
- Rice cream accent (#E8C890): the color of steamed rice and light miso; clean contrast
- Warm neutrals throughout: no harsh whites or cold blues — the entire palette feels fermented

### Typography
- Cormorant Garamond: luxury serif with long ascenders and delicate contrast — works like premium food editorial
- Inter: clean, readable, scientific — appropriate for specifications and technical content
- Combination creates "scientific luxury" — precision with beauty

### Layout Strategy
- Index: cinematic hero with character-by-character title reveal + particle preloader
- All pages: consistent navbar, cedar footer motif, amber section labels
- Tradition split layout mirrors the tension between old (left/image) and new (right/content)
- Horizontal miso detail cards on miso.html to show rich specification data without feeling clinical

---

## Page Architecture

### Index — 7 Sections
1. Preloader (koji spore animation)
2. Hero (cinematic, timer widget, steam wisps, character reveal)
3. Miso Range (6-card grid with flavor profiles)
4. The Tradition (split image/text, generation counter)
5. Koji Science (4-step fermentation infographic)
6. Retreats & Courses (3 program cards)
7. Reserve Your Barrel (CTA section with 3 barrel options)
8. Footer (cedar motif)

### About — 5 Sections
1. Sub-page hero (mountain imagery)
2. Philosophy (2-column, quote block)
3. Stats row (4 numbers)
4. Generations Timeline (6-item vertical timeline)
5. Nagano Terroir (3-card)
6. Portrait/Quote section
7. CTA

### Miso — 5 Sections
1. Sub-page hero
2. Intro (2-column brand narrative)
3. Detail cards (4 flagship varieties — full horizontal spec cards)
4. Koji Culture starter section
5. Seasonal Preserves (4 seasonal products)
6. Order CTA

### Courses — 7 Sections
1. Sub-page hero
2. Intro (2-column)
3. Philosophy bar (accent background, 4 numbers)
4. Featured: Miso Press Day (full image + detail)
5. Courses grid: Fermentation Week + Koji Mastery
6. Mastery Curriculum (6-item grid)
7. Seasonal Calendar (4 months)
8. Testimonials (3 cards)
9. Booking CTA

### Contact — 5 Sections
1. Sub-page hero
2. Contact form with tab selector (6 inquiry types)
3. Visit/Directions (2-column with image)
4. Wholesale (3-card)
5. Barrel Commission CTA

---

## Component Inventory

| Component | Used On | Description |
|---|---|---|
| Preloader | index | Spore particle animation + logo fade |
| Scroll Indicator | index | Left-fixed amber line with "Scroll" text |
| Navbar | All | Logo + 5 links + CTA button |
| Fermentation Timer | index hero | Inline timer box with days/months/years |
| Steam Wisps | index hero | CSS animated blur elements |
| Miso Card | index, miso | Flavor profile bars, aging badge |
| Miso Detail Card | miso | Horizontal 3-column spec card |
| Generation Timeline | about | Alternating left-right with connector dots |
| Terroir Card | about | Left-border hover reveal |
| Step Card | index | Numbered process steps with connectors |
| Course Card | index, courses | Vertical card with meta boxes and price |
| Calendar Grid | courses | Month-based availability grid |
| Testimonial Card | courses | Quote with attribution |
| Contact Form | contact | Dynamic field display by inquiry type |
| Cedar Footer Motif | All | Japanese characters with dashed cedar lines |

---

## Animation Plan

| Element | Animation | Trigger |
|---|---|---|
| Preloader exit | gsap.to opacity:0 | window.load + 2200ms |
| Hero title chars | gsap.from y:80, stagger:0.12 | preloader exit callback |
| Hero eyebrow/subtitle | gsap.from y:20, delay:0.3/0.6 | preloader exit callback |
| All section content | gsap.from y:24, stagger:0.10–0.15 | scrollTrigger start:'top 80%' |
| Hero BG parallax | gsap.to yPercent:20, scrub:true | hero scrollTrigger |
| GSAP Rule | immediateRender:false at TOP LEVEL of all gsap.from() | — |

---

## Responsive Strategy

- Desktop: 1200px max-width containers, full multi-column grids
- Tablet (≤1024px): Single-column layouts, reduced padding
- Mobile (≤640px): Navigation hidden (hamburger not needed for template), single columns throughout
- Footer: 4-col → 2-col → 1-col

---

## Build Notes

- No JavaScript frameworks used — vanilla GSAP + vanilla CSS
- GSAP and ScrollTrigger loaded from cdnjs CDN
- No SplitText (Club GSAP) — character animation done with individual `.char` divs
- All images via Unsplash direct CDN with validated IDs
- No face closeups per project rules (all images are food/landscape/architecture)
- Thumbnail created as WebP at 600px wide via cwebp
