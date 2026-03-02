# Clone Plan — 20260302_habitat-conservancy

## Concept

**Brand:** Sylvan Conservancy
**Tagline:** Preserving Nature's Inheritance
**Category:** Conservation / Nature Reserve / Rewilding Charity
**Inspiration archetype:** RSPB, Wildlife Trusts, Rewilding Britain — with elevated luxury editorial treatment

---

## Design Direction

### Visual Language
- Deep forest green palette evoking ancient woodland at dusk
- EB Garamond serif for editorial gravitas (natural history publication feel)
- Nunito for body: legible, warm, not sterile
- Minimal ornamentation; white space as breathing room

### Hero Choice: Type B (Parallax)
Rationale: Conservation organisations present landscape at the forefront. A Type B parallax hero creates the sensation of moving through layered woodland — depth and immersion without visual noise. The dual-layer mousemove effect is restrained but experiential.

### Colour Rationale
- `#0F1A10` background: deep forest floor — avg RGB = 14.7 (border-case dark, compensated by `--surface: #172016` avg = 21.0 for section backgrounds)
- `#4DAF6A` accent: sun filtering through canopy — warm, alive, not clinical

---

## Page Architecture

```
index.html         ← Full luxury landing (Type B hero, 13 sections)
about.html         ← Organisation story, values, history, leadership
collection.html    ← Reserve grid with filter tabs
process.html       ← Restoration methodology, 5-step timeline
contact.html       ← Enquiry form, location, socials
```

---

## Section Map (index.html)

1. Preloader — animated logo fade
2. Scroll Indicator — arrow + "Scroll to explore"
3. Navigation — fixed, glassmorphism blur
4. Hero — Type B parallax with particle canvas
5. Stats Strip — 290K ha, 14 Reserves, 6,200+ Species, Est. 1988
6. Philosophy — 3-col grid, conservation principles
7. Collection — 2×2 offset cards (flagship reserves)
8. Atelier Band — parallax image with heritage milestones
9. Process Preview — 3-step restoration overview
10. Heritage Timeline — 1988, 2000, 2012, 2024
11. Press — Swiper carousel, award mentions
12. Contact CTA — membership & support link
13. Footer — brand, nav links, charity number

---

## Differentiation from 20260302_wildlife-trust

| Element | wildlife-trust | habitat-conservancy |
|---|---|---|
| Brand name | Verdania Wildlife Trust | Sylvan Conservancy |
| Tagline | Where Wild Things Endure | Preserving Nature's Inheritance |
| Serif font | Fraunces | EB Garamond |
| Sans font | Inter | Nunito |
| Accent shade | #4DAF6A | #4DAF6A (same) |
| Background | #0F1A10 | #0F1A10 (same) |
| Stats | 8 reserves, 14 species | 14 reserves, 6,200 species |
| Hero images | same base IDs | same base IDs (deliberate — different brand) |
| Hero copy | wildlife focus | woodland/habitat focus |
| Collection cards | Species habitats | Reserve types (fen, bog, grassland) |
| Process timeline | Wildlife monitoring | Restoration methodology |
