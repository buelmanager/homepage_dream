# Clone Plan — FLORA Fermented Skincare

**Template ID:** `20260226_fermented-skincare`
**Date:** 2026-02-26
**Status:** COMPLETE

---

## Concept Brief

**Brand:** FLORA — Fermented Bioactive Skincare Lab
**Industry:** Luxury Beauty / Skincare
**Positioning:** Ultra-premium. Science-led. Heritage-rooted. Only for those who understand that great skin, like great sake, cannot be rushed.

**Target Audience:** Women and men 30–55, annual household income $150k+, interested in beauty science, Korean skincare, wellness rituals, and ingredient transparency.

**Unique Value:** 90-day fermentation in hand-thrown ceramic vessels, Korean fermentation heritage combined with Swiss biotech precision, zero synthetic ingredients.

---

## Design Direction

### Color Palette Rationale
- Deep forest green (`#141B14`) — evokes fermentation vessels, Korean forests, natural depth. NOT pure black — the warmth reads "organic."
- Botanical lime (`#A8CC60`) — the colour of new growth, active cultures, botanical vitality. Distinctive against the dark ground.
- Cream/parchment (`#D8C8A0`) — references Korean hanji paper, ceramic glaze, the aesthetic of handcraft and age.
- The palette avoids "clinical white" and "synthetic blue" — the two dominant colours in conventional skincare packaging. FLORA exists in a different register entirely.

### Typography Direction
- **Fraunces** — a variable serif with optical sizing. At large display sizes it reads editorial and slightly aged. At small sizes it reads clean and modern. Perfect for a brand that bridges old craft and new science.
- **Inter Light (300)** — not a fashion choice. Ultra-legible at small sizes, globally neutral, scientific without being cold.

### Photography Direction
All images selected to represent:
1. Macro texture — bubbles, ceramic vessels, botanical close-ups (fermentation process)
2. Material warmth — glass serums, amber liquids, organic forms
3. Lab elegance — clean hands on formulas, laboratory without sterility

Hero image: fermentation bubbles/liquid with warm macro quality (Unsplash ID: 1556228578-8c89e6adf883)

---

## Page Architecture

### index.html — Priority 1
**Role:** Convert visitors with brand story and product highlights.
**Sections:**
1. Preloader (organic blob animation, brand intro)
2. Hero (cinematic full-screen, botanical SVG, badges)
3. The Science (fermentation process, 4-step infographic)
4. Featured Products (4 cornerstone products)
5. 90-Day Transformation Timeline (5-node, clinical proof)
6. The Ritual (5-step application, image right)
7. Lab Story / Founder (quote, credibility)
8. Certifications strip
9. Footer

### about.html — Priority 2
**Role:** Build trust, credibility, and emotional connection.
**Sections:**
1. Founder biography + credentials
2. Three philosophy pillars
3. Company history timeline (2017–2026)
4. Scientific advisory board (3 members)

### products.html — Priority 3
**Role:** Drive purchase intent and product selection.
**Sections:**
1. Stats banner (hero numbers)
2. Filter bar (All / Essences / Serums / Creams / Masks / Treatments / Sets)
3. Featured Cornerstone Four (large format with ingredients)
4. Extended collection (6 additional SKUs)
5. Ingredient philosophy (4 star ingredients)

### ritual.html — Priority 4
**Role:** Educate, justify premium price, create ritual loyalty.
**Sections:**
1. Ritual philosophy + introduction
2. 5-step cards with AM/PM toggle
3. Layering technique + penetration depth diagram
4. Expert tips (6)
5. CTA banner

### contact.html — Priority 5
**Role:** Convert hesitant buyers, enable trade/press, localise experience.
**Sections:**
1. Consultation booking form (skin type selector, time zones)
2. Wholesale tiers + inquiry form
3. Store locator (6 cities)
4. Press & media section

---

## Animation Strategy

### Preloader
- SVG blob with CSS animation morphing between organic shapes
- GSAP TL for blob pulsing
- Line load progress bar
- 2.4s total preloader duration before exit

### Hero Entry (after preloader exits)
- Pre-text fades up (delay 0)
- FLORA title fades up (delay 0.2s)
- Tagline fades up (delay 0.5s)
- Badges stagger in (delay 0.7s, stagger 0.08s)
- CTA fades up (delay 1.1s)
- Botanical SVG paths draw/fade in (delay 0.8s, stagger 0.08s)

### Scroll Animations (all pages)
- All using ScrollTrigger `start: 'top 80-85%'`
- `immediateRender: false` on every gsap.from()
- Standard easing: `power2.out`
- Standard y offset: 20-28px
- Standard duration: 0.9-1.2s

### Scroll Indicator
- Show after preloader exits (addClass 'visible')
- Fallback: show after 4000ms regardless

---

## Technical Decisions

### No Build System
Pure HTML/CSS/JS. No bundler, no framework, no compile step.
Load time optimised via:
- Google Fonts with display:swap
- Lazy loading on all images
- CDN for GSAP (cdnjs)

### GSAP Version
3.12.5 — latest stable at time of build.
ScrollTrigger loaded from same CDN.

### No SplitText
GSAP SplitText is Club GSAP (premium). Not available on cdnjs CDN.
Title animations use simple gsap.from() opacity+y — consistent with project guidelines.

### Image Strategy
All images loaded from Unsplash CDN with:
- `w=` width parameter matched to display size
- `q=80-85` quality
- `auto=format&fit=crop` for consistency
- `loading="lazy"` on all below-fold images
- Validated at 200 OK before use (see image_validation.md)

---

## Section Color Compliance

| Section | Background | CSS Value | avg(R,G,B) | Status |
|---------|-----------|-----------|------------|--------|
| Hero | --bg | #141B14 | 22.3 | PASS |
| Science | --surface | #1A231A | 29.0 | PASS |
| Products | --bg | #141B14 | 22.3 | PASS |
| Timeline | --surface | #1A231A | 29.0 | PASS |
| Ritual | --bg | #141B14 | 22.3 | PASS |
| Founder | --surface | #1A231A | 29.0 | PASS |
| Certs | --bg | #141B14 | 22.3 | PASS |
| Footer | --bg | #141B14 | 22.3 | PASS |

All sections above threshold of 15. No hardcoded dark hex values in any section or footer.
