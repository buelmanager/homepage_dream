# Clone Plan — KURABITO Sake School

**Project**: 20260226_sake-school
**Created**: 2026-02-26
**Tier**: PRO ($49)
**Type**: Luxury multi-page landing page

---

## Brand Brief

**Brand Name**: KURABITO (蔵人)
**Tagline**: "The Soul of the Rice, the Spirit of the Toji."
**Category**: Sake school, tasting house, luxury hospitality
**Location**: Fushimi, Kyoto, Japan
**Founded**: 1872 (fictional, 5th generation)
**USP**: Fifth-generation toji teaching directly in a working brewery

---

## Design Direction

### Mood
- Quiet Japanese luxury — not flashy, deeply considered
- Dark, warm, amber-lit — like the interior of a sake brewery at dawn
- Typography-driven with restraint — Cormorant Garamond for authority, Inter for precision
- Copper and rice-cream accent palette against deep warm dark backgrounds

### Reference Aesthetic
- Japanese lacquerware, cedar wood, terracotta, washi paper textures
- Minimal negative space (Japonisme principle of ma)
- Typography: large serif headings, extreme letter-spacing on labels
- Layout: asymmetric, architectural, grid-based

---

## Page Plan

### 1. index.html — Main Landing Page
**Hero Type**: A — Cinematic Full-Screen

Sections (6 total including hero):
1. Hero — Cinematic brewery interior, vertical Japanese-style layout
2. The Sake — 4-grade card grid (Junmai / Ginjo / Daiginjo / Nigori)
3. The Kura — Split history section (image left, text right) with stats
4. Tasting Experiences — 3 card showcase with images and pricing
5. Courses Preview — 3 tier cards (Foundation / Sommelier / Master)
6. CTA — Full-width "Begin Your Journey" with parallax bg

Special elements:
- Preloader: sake cup CSS clip-path fill animation
- Scroll indicator: fixed left column, section number + label
- Rice grain decorative pattern (CSS grid of pill shapes)
- Footer with repeating horizontal line pattern border

### 2. about.html
Sections:
1. Page hero (brewery interior)
2. Intro text
3. Lineage timeline (5 generations, vertical timeline component)
4. Philosophy (Water / Rice / Time, 3-card grid)
5. Toji profile (image + bio + credentials)
6. Kura gallery (CSS grid, 5 images)

### 3. sake.html
Sections:
1. Page hero (tasting imagery)
2. Sake collection table (4 rows, horizontal layout with grade/name/notes/specs)
3. Brewing process (4 steps: Polish / Koji / Ferment / Press)
4. Seasonal releases (4 cards: Winter / Spring / Summer / Autumn)
5. Food pairing table

### 4. courses.html
Sections:
1. Page hero
2. Three course cards — full detail with curriculum, pricing, highlights
3. Why Kurabito — 6-card grid
4. 2026 schedule table
5. CTA section

### 5. contact.html
Sections:
1. Page hero
2. Tabbed booking form (4 tabs: Tasting / Course / Private / General)
3. Visit & directions (map placeholder + travel info)
4. Private event types (3-card grid)

---

## Component Inventory

### Shared Across All Pages
- Fixed navbar (transparent → scrolled blur variant on index, always blur on sub-pages)
- Footer with decorative horizontal pattern border

### index.html Only
- Preloader (sake cup animation)
- Fixed scroll indicator

### Sub-pages Only
- Page hero (65vh, fixed bg, gradient overlay)
- Page eyebrow with line

---

## GSAP Animation Plan

All animations follow the mandatory pattern:
```js
gsap.from('.element', {
  immediateRender: false,   // ALWAYS at top level
  scrollTrigger: { trigger: '...', start: 'top 80%' },
  opacity: 0,
  y: 24,
  duration: 1.0,
  ease: 'power2.out',
  stagger: 0.1
});
```

**No CSS opacity:0 on content elements**
**immediateRender: false NEVER inside scrollTrigger object**

Animations used:
- Fade up (y: 24, opacity 0→1) — primary
- Fade right (x: -24) — timeline items, sidebar
- Fade left (x: 24) — quotes, right-side content
- Scale in (scale: 0.97) — gallery images
- Stagger grids: 0.08–0.12s between items

---

## Image Strategy

All images from Unsplash (validated 200 OK):
- Sake/brewery interior: photo-1528360983277-13d401cdc186
- Sake bottles/tasting: photo-1509631179647-0177331693ae
- Cups/ritual: photo-1582719508461-905c673771fd
- Ceremony/atmospheric: photo-1600607687939-ce8a6c25118c
- Japanese sake atmospheric: photo-1577803645773-f96470509666
- Person/craft (filtered to remove face): photo-1553361371-9b22f78e8b1d
- Food/drinks: photo-1510812431401-41d2bd2722f3

Image treatment CSS:
```css
filter: brightness(0.38–0.62) saturate(0.5–0.7)
```
Ensures dark, moody aesthetic consistent with brand palette.

---

## Quality Checklist

- [ ] All sections avg RGB ≥ 15 (dark threshold compliance)
- [ ] No hardcoded dark hex in footer
- [ ] All GSAP animations use immediateRender: false at top level
- [ ] All hrefs link to real .html files (no href="#")
- [ ] Preloader has 2 exit triggers (onComplete + setTimeout 4000ms)
- [ ] Scroll indicator updates per section
- [ ] Navbar scrolled state active
- [ ] All images have alt text
- [ ] thumbnail.webp created and committed
- [ ] meta.json complete
