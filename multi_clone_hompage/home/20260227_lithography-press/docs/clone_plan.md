# Clone Plan — 20260227_lithography-press

## Project Brief

**Brand:** OFFSET — Fine Art Lithography Press
**Target:** Luxury multi-page website for a traditional stone lithography press studio
**Created:** 2026-02-27

## Design Directives

### Color Palette P8 — Onyx Stone
A dark industrial palette that references the black stone slabs at the heart of the lithographic process. Near-black backgrounds with silver-grey accents evoke the surface of etched limestone and the metallic sheen of rolled ink.

```
--bg: #181818          Primary background (near-black)
--surface: #222222     Card and section backgrounds
--surface2: #2A2A2A    Secondary surfaces
--accent: #B0B0C0      Primary accent (slate silver)
--accent-light: #D0D0E0 Lighter accent for hover states
--accent-dark: #808090  Muted accent for badges
--ivory: #EEEEF2        Primary text (warm white)
--smoke: #909090        Secondary text
--muted: #606060        Tertiary text, placeholders
--border: #1E1E1E       Borders (barely visible on dark bg)
```

All section backgrounds tested at avg(R+G+B)/3 ≥ 20 threshold:
- #181818 → avg = 24 ✓
- #222222 → avg = 34 ✓
- #2A2A2A → avg = 42 ✓

### Typography F3 — Bebas Neue + DM Sans
- **Display:** Bebas Neue — condensed, all-caps, industrial. Used for brand logo, hero words, section titles, numbers. Conveys Bauhaus precision and print heritage.
- **Body:** DM Sans (300/400/500) — geometric, clean, legible at small sizes. Used for all body copy, labels, navigation, UI elements.

### Animation A3 — Precise
```js
gsap.from(el, {
  immediateRender: false,
  x: -20,
  duration: 0.75,
  ease: 'power3.out',
  stagger: 0.04,
  scrollTrigger: { trigger: el, start: 'top 85%', once: true }
})
```
Horizontal slide-in from left. Short duration (0.75s), aggressive ease, tight stagger. Creates a typographic, newspaper-like reveal appropriate to the print heritage brand.

### Hero Layout TYPE G — Scroll-Driven Text Transform
```
- Giant display word pair: "OFF" / "SET" in Bebas Neue at clamp(7rem, 22vw, 24rem)
- Words enter from left (word-1) and right (word-2) on page load
- On scroll: hero-text-wrap translates Y +120px and scales down slightly
- hero-bg image counter-scrolls at reduced rate for parallax
- Result: text appears to "scroll off" the stone surface as user descends
```

## Page Architecture

### index.html — Primary Landing Page
**Goal:** Establish brand identity, create desire for the editions, drive to collection and commission.
**Flow:** Visual impact (Hero) → Credibility (Stats) → Philosophy → Product (Collection) → Craft (Press Room) → Process overview → Heritage narrative → Social proof (Testimonials) → Conversion (Commission Form)

### about.html — Press Story
**Goal:** Build trust through founder biography, historical depth, and team expertise.
**Sections:** Page hero → Founder (Marcus Veil) → Timeline (1970–2024) → Team (3 printers) → Artist roster

### collection.html — Editions Catalogue
**Goal:** Present the product range, create desire, facilitate purchase enquiry.
**Features:** Filter by series (landscape/portrait/abstract/collaboration), featured edition hero, edition grid with status badges (available/sold/reserved), direct enquiry CTAs.

### process.html — Technical Authority
**Goal:** Educate collectors and prospective artist collaborators on the rigor and expertise behind each edition. Creates perceived value.
**Sections:** 5-step process (detailed, with bullet specifics) → Chemistry explainer (3 substances) → Materials list

### contact.html — Conversion
**Goal:** Route different visitor types to the correct conversion path.
**Features:** Tabbed form (Commission / Edition Enquiry / Studio Visit) → Location + access details → FAQ accordion (6 questions)

## Structural Decisions

### No Images in HTML src Attributes (Placeholder Strategy)
All image references use local paths (`images/xxx.webp`). The site degrades gracefully when images are absent — sections remain visible with dark backgrounds. No broken layout due to missing images.

### Edition Integrity as Brand Pillar
"No reprints, no derivatives" — repeated as a refrain across multiple pages. This is positioned not as a limitation but as an ethical commitment and value proposition for collectors. Scarcity is presented as integrity, not marketing.

### Typography Scale
Hero words at 24rem maximum push Bebas Neue to its expressive limit, referencing Bauhaus poster typography and the oversized text common in print workshop signage. The contrast between these display characters and the 0.65rem tracking labels creates a deliberate tension between industrial scale and precision detail.

## Quality Standards Met

- Mobile responsive at 1024px and 768px breakpoints
- Custom scrollbar (6px, var(--accent-dark))
- English only (no placeholder lorem ipsum)
- All section backgrounds above dark threshold
- No hardcoded dark hex in footers (uses var(--bg))
- GSAP immediateRender: false at top level throughout
- No opacity:0 in CSS on content elements
- Scroll indicator in both preloader callback and setTimeout(4000)
- Philosophy grid: display:grid (not flex)
- Collection grid: overflow:visible
