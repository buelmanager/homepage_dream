# VELLUM — Haute Parfumerie

**Industry:** Luxury Fragrance House
**Brand:** VELLUM
**Location:** Antibes, France (fictional)
**Tagline:** "Where Rare Ingredients Become Memory"

---

## Selected Industry & Concept

**Industry:** Luxury fragrance / haute parfumerie — absent from the existing 50+ template library.

**Concept:** VELLUM is a fictional independent fragrance atelier that positions itself around
raw-material honesty rather than heritage prestige or minimalist cool. The central idea:
"This is not perfumery as status. This is perfumery as consequence."

The site deliberately withholds the product from the hero, instead leading with the raw
botanical ingredients — a complete inversion of every major fragrance brand's approach.

---

## Research Summary

| Brand | URL | Key Insight Used |
|-------|-----|-----------------|
| Creed | creedperfume.com | Sensory note language (top/heart/base structure) |
| Byredo | byredo.com | Material transparency philosophy (but expressed oppositely) |
| Louis Vuitton | louisvuitton.com | Atelier provenance narrative, Grasse reference |
| Penhaligon's | penhaligons.com | Eccentric, detailed copy voice, story-first product pages |

Full originality analysis: `docs/originality_report.md`

---

## Style Direction

**Keywords:** amber-dark, botanical, raw, alchemical, editorial, sensory, slow, obsidian, fragrant, consequence

**Tone:** Poetic realism. Every sentence grounded in physical materials — no abstract luxury jargon.

---

## Color Palette

| Name           | Hex       | Usage                                 |
|----------------|-----------|---------------------------------------|
| Background     | `#0E0B07` | Deep amber-black main background      |
| Surface        | `#17130D` | Cards, ingredient section, atelier    |
| Surface 2      | `#201A10` | Hover states                          |
| Amber Accent   | `#C87941` | Primary accent — CTAs, labels, decor  |
| Amber Light    | `#E8A96A` | Hover states, gradient ends, em text  |
| Amber Dark     | `#8B5225` | Gradient start, border accents        |
| Amber Pale     | `rgba(200,121,65,0.12)` | Subtle backgrounds          |
| Sage           | `#8A9B8E` | Scent note tags, detail text          |
| Cream          | `#F5F0E8` | Primary text                          |
| Muted          | `#7A7268` | Secondary text, body copy             |
| Border         | `#2A2318` | Primary dividers                      |
| Border 2       | `#352B1C` | Card borders, step dividers           |

---

## Typography

| Font             | Role       | Weights / Style     | Source       |
|------------------|------------|---------------------|--------------|
| DM Serif Display | Headings   | Regular, Italic     | Google Fonts |
| DM Sans          | Body/UI    | 300, 400, 500       | Google Fonts |

**Rationale:** DM Serif Display has beautiful optical size behavior and a distinct italic that
feels editorial without referencing Vogue/Condé Nast serifs (Sabon, Bodoni) or heritage brands.
DM Sans is its designed companion — they share optical DNA while maintaining strong voice contrast.

---

## Key UX / UI Decisions

1. **Hero with no product** — All major brands show bottles in the hero. VELLUM shows only atmosphere.
   Forces the visitor into the brand's world before presenting commerce.

2. **Ingredient Codex (horizontal drag-scroll)** — Unique section. Educates before selling.
   Each ingredient card shows origin, material name, and accord role. Drag-to-scroll UX.

3. **Manifesto section with atmospheric bg** — Full-width editorial break between ingredients and collection.
   Uses a different image, lower brightness — forces a moment of pause before product.

4. **Collection: no "Buy Now"** — All CTAs lead to the consultation form. Reinforces by-appointment positioning.

5. **Atelier: alternating image+steps grid** — Shows the physical place (a real-feeling atelier image)
   alongside the 5-stage process. Makes craft tangible.

6. **Amber drop SVG preloader** — A liquid droplet draws in (stroke animation) then fills with amber.
   Metaphor: the raw ingredient becoming the fragrance.

7. **Scent note tags** — Each fragrance shows accord-level tags (Dark Rose, Oud, Benzoin) before top/heart/base.
   Borrowed insight from Creed's note structure; reimagined as badge-level visual.

---

## Performance & Accessibility Notes

- All images use `?w=` and `?q=` parameters for Unsplash CDN optimization
- `loading="lazy"` on all below-fold images
- `alt` text on every image
- Focus-visible CSS transitions (all interactive elements)
- Color contrast: amber `#C87941` on `#0E0B07` passes AA for large text
- Smooth scroll behavior via CSS + JS (80px offset for fixed nav)
- No framework dependency — vanilla JS only + GSAP + Swiper
- Custom scrollbar matches brand palette

---

## Run / Build Instructions

Static HTML — zero build required.

```bash
open index.html
# or
npx serve .
# or
python3 -m http.server 8080
```

**CDN dependencies (no install):**
- Swiper 11 (horizontal ingredient drag + press carousel)
- GSAP 3.12 (hero entrance animations)
- Google Fonts (DM Serif Display + DM Sans)

---

## Image Sources

All images Unsplash (free license). Full validation: `docs/image_validation.md`.

| Section | Subject |
|---------|---------|
| Hero | Dark moody botanical photography |
| Ingredient cards | Rose, Lavender, Oud, Frankincense, Jasmine, Cedar |
| Collection | Three perfume/luxury lifestyle images |
| Atelier | Artisan workshop atmosphere |
| Manifesto | Moody botanical overlay |
| Consultation | Atmospheric luxury lifestyle |
