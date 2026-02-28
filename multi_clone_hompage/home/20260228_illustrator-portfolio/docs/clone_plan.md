# Clone Plan — 20260228_illustrator-portfolio

## Target Reference

**Concept**: Luxury illustration artist portfolio — dark purple aesthetic, editorial clients, fine art sensibility
**Industry**: Illustration / Fine Art
**Brand**: VELVET INK (fictional artist: Elara Voss)
**Created**: 2026-02-28

---

## Design Decisions

### Hero Layout: Type D (Portraits + Stats Grid)

Selected because:
- Type D is one of the least-used hero layouts (only 10 existing pages)
- Illustration portfolios benefit from showing the work prominently in the hero
- The grid of portrait cards creates an immediate visual impact without a single full-bleed photo
- Stats (Years / Commissions / Countries) establish credibility at first glance

### Palette: P6 Midnight Purple

Selected because:
- Purple has strong creative/artistic associations
- The deep `#130F1A` background (avg RGB 20.3) provides elegance without being pure black
- The accent `#9B6EDB` reads as refined rather than garish against the dark background
- Validates avg(RGB) ≥ 20 — satisfies dark section threshold rule

### Font: F9 Spectral + Mulish

Selected because:
- Spectral is a literary serif with excellent italic weights — ideal for editorial/artistic contexts
- Mulish provides clean, modern body text that contrasts beautifully with Spectral's character
- The combination reads as both intellectual and accessible

### Animation: A4 Dramatic

Selected because:
- Illustration portfolios benefit from a sense of reveal — work emerging into view
- Dramatic y: 40px entries feel painterly and intentional
- Stagger of 0.15 creates sequential reading rhythm

---

## Page Architecture

```
index.html          — Main landing page, 10+ sections
about.html          — Artist Statement, Philosophy, Exhibitions, Publications
collection.html     — Portfolio gallery by category (Editorial / Book Covers / Personal)
process.html        — 6-step process timeline, Materials, FAQ
contact.html        — Commission form, sidebar info, Usage Rights
```

---

## Content Strategy

**Fictional artist**: Elara Voss — London-based, 12+ years experience, 300+ commissions, 48 countries

**Tone**: Dreamy, literary, fine-art sensibility. Prose-forward content. Avoids marketing clichés.

**Editorial clients**: The New Yorker, Vogue Italia, Harper's Magazine, Granta, The Paris Review, Penguin, Faber & Faber, Frieze

**Commission tiers**:
- Sketch (£380) — Personal use, 2–3 weeks
- Colour (£950) — Commercial use, 4–6 weeks
- Premium Editorial (£2,400+) — Extended rights, 6–8 weeks

---

## Technical Constraints Observed

1. `immediateRender: false` at top-level of `gsap.from()` — NOT inside `scrollTrigger: {}`
2. SplitText: inline polyfill (Club GSAP not available on cdnjs CDN)
3. Footer: `background: var(--bg)` only
4. No CSS `opacity: 0` on content elements
5. Scroll indicator shown in two places: preloader callback + setTimeout(4000)
6. All images: WebP format only (no thumbnail.jpg — gitignored)
