# Clone Plan — FROST & CO Ice Sculpting Atelier

**Date:** 2026-02-26
**Slug:** 20260226_ice-atelier
**Category:** Luxury Services / Art & Craft
**Tier:** PRO

---

## Concept Brief

**Brand:** FROST & CO — Ice Sculpting Atelier
**Industry:** Luxury Art / Events / Hospitality
**Target Market:** Ultra-high-net-worth individuals, luxury event planners, five-star hotels, premium brand marketing teams
**Tone:** Silent luxury. Understated authority. The confidence of mastery.

---

## Design Direction

### Visual Language
- **Primary palette:** Deep glacial navy (#0F1C24) + ice blue (#80D4F0) + frost white (#C8E8FF)
- **Typography:** Montserrat weight 100–300 for headlines (extreme lightness = luxury), Inter for body
- **Aesthetic references:** Scandinavian minimalism × haute couture × museum installation
- **Motion:** Slow, deliberate, cinematic — no fast transitions, no bounce easing

### Mood Board Inspirations
- Norwegian design ethos: clean lines, natural materials, negative space
- Luxury fashion houses (Bottega Veneta, The Row): restraint over decoration
- Glacier photography: extreme clarity, cold palette, monumental scale
- Ice hotel design: the art of controlled coldness

---

## Page Architecture

### 1. index.html — Main Entry
**Hero Type:** A — Cinematic Full-Screen (justified given unique brand)
**Differentiators:**
- Snowflake/crystal SVG preloader (not standard spinner)
- Letter-by-letter title reveal with staggered GSAP animation
- Floating crystalline CSS shapes (parallax mouse tracking)
- Three-stat bar anchored at hero bottom
- Hero background parallax (gsap ScrollTrigger scrub)

**Sections:**
1. Featured Works — masonry grid (12-col CSS grid, two-row spanning)
2. The Ice — split layout with material specs
3. For Your Event — 4-card event type showcase
4. Workshops — 3-tier pricing cards
5. Commission CTA — full-width with gradient background

### 2. about.html — Brand Story
**Hero:** Moody ice atelier workshop photograph
**Key Differentiators:**
- Timeline element (vertical line with diamond markers)
- Master carver profiles with award badges
- Ice source section with stat grid
- Philosophy grid (3 principles matching tagline)

### 3. gallery.html — Portfolio
**Hero:** Ice carving action/process photograph
**Key Differentiators:**
- 12-item CSS grid gallery with variable spans
- Filter tabs (client-side visual only)
- 4 category deep-dives (Weddings, Hotels, Brands, Art)
- Quote block in Fine Art section

### 4. workshops.html — Product / Pricing
**Hero:** Workshop studio photograph
**Key Differentiators:**
- 3-tier cards with full feature lists
- Step-by-step "What to Expect" process
- Live calendar grid with spot availability
- FAQ accordion
- Inquiry form leads to contact.html

### 5. contact.html — Conversion
**Hero:** Abstract ice detail photograph
**Key Differentiators:**
- 3 inquiry type selector cards
- Full commission inquiry form (8 fields)
- 3 studio location cards with images
- 5-step process timeline

---

## Navigation Strategy

All pages share identical navbar:
```
FROST & CO | Gallery | Workshops | About | Contact | [Commission] (btn)
```
- Fixed position, backdrop-filter blur on scroll
- Active page highlighted with accent color
- Commission button is persistent CTA — always visible

---

## Technical Decisions

### GSAP Strategy
- All pages use GSAP 3.12.5 + ScrollTrigger from cdnjs CDN
- `immediateRender: false` on every `gsap.from()` with ScrollTrigger
- Hero animations fire in sequence (no ScrollTrigger — fires on preloader completion)
- Sub-pages fire hero animations with 0.3s delay on page load
- Standard parameters: y: 20–32, duration: 0.9–1.1, stagger: 0.08–0.15, ease: power2.out

### No SplitText Usage
- SplitText is Club GSAP premium (not available on cdnjs)
- Letter animation achieved manually with individual `<span class="hero-letter">` elements
- This is the polyfill approach documented in project MEMORY

### Image Strategy
- All images: Unsplash CDN with width/quality parameters
- lazy loading on all below-fold images
- Hero images eager-loaded (no lazy attr)
- thumbnail.webp: 600px wide, 80% quality

---

## Originality Strategy

**Concept originality:** High — ice sculpting is an extremely niche luxury category with almost no luxury web templates in this space.

**Design originality:** High — the combination of deep glacial navy + ice blue creates a visually distinctive palette not common in luxury landing page templates.

**Content originality:** 100% original copy written for this concept — not adapted from any reference site.

**Layout originality:** High — uses standard luxury patterns (cinematic hero, masonry gallery, pricing tiers) but assembled in an original configuration specific to this brand.
