# GLYPH — Typography, Lettering & Type Design

**Slug:** 20260228_typographer-portfolio
**Tier:** PRO — £49
**Hero Layout:** G — Text-Driven Typography Hero
**Palette:** P8 — Onyx Stone
**Font Pair:** F4 — Cinzel + Crimson Pro
**Created:** 2026-02-28

---

## Overview

A premium 5-page luxury portfolio template for professional type designers, typographers, and lettering artists. Built around the concept that type itself is the hero — the landing page uses an enormous typographic display (clamp 10rem–28rem) as the primary visual statement.

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Main portfolio — Type G hero, specimens grid, lettering portfolio, services, clients, philosophy |
| `about.html` | Studio biography, design philosophy pillars, education & training, awards |
| `collection.html` | Full type specimen library with filter (Serif/Sans/Display/Script/Slab/Custom) + featured deep-dive |
| `process.html` | 5-phase type design process, tools, letterpress workflow, project timeline |
| `contact.html` | Commission enquiry form, studio locations (London/Berlin), licensing overview |

## Colour Palette — P8 Onyx Stone

```css
--bg: #181818        /* avg(24,24,24)/3 = 24 — safe above threshold */
--surface: #222222   /* avg = 34.3 */
--surface2: #2A2A2A  /* avg = 42 */
--accent: #B0B0C0    /* slate-silver */
--accent-light: #D0D0E0
--accent-dark: #808090
--ivory: #EEEEF2
--smoke: #909090
--muted: #606060
--border: #1E1E1E    /* subtle separator */
```

## Typography — F4 Cinzel + Crimson Pro

- **Cinzel** — display serif with classical Roman proportions (headings, nav, CTAs)
- **Crimson Pro** — text-weight old-style serif with optical italics (body, labels)

## Hero — Type G

The hero title "GLYPH" renders at `clamp(10rem, 22vw, 28rem)` — it IS the visual. Supporting elements include floating alphabet letters drifting in the background and a text-stroke ghost behind the main letterform.

## Images

23 WebP images downloaded and validated (all HTTP 200):
- `hero-1.webp` through `hero-3.webp` — hero backgrounds
- `product-1.webp` through `product-6.webp` — specimen/portfolio images
- `workspace-1.webp` through `workspace-3.webp` — studio/press environments
- `detail-1.webp` through `detail-4.webp` — letterpress/ink close-ups
- `ambient-1.webp` through `ambient-3.webp` — atmospheric shots
- `about-hero.webp`, `collection-hero.webp`, `process-hero.webp`, `contact-hero.webp` — page banners
- `thumbnail.webp` — 600px wide thumbnail for manifest

## GSAP Animation — A1 Standard

- Duration: 1.0–1.2s
- Y offset: 24px
- Stagger: 0.10
- Ease: power2.out
- `immediateRender: false` at TOP LEVEL of all gsap.from() calls
- SplitText inline polyfill embedded (Club GSAP premium — not on CDN)

## File Structure

```
20260228_typographer-portfolio/
├── index.html
├── about.html
├── collection.html
├── process.html
├── contact.html
├── meta.json
├── readme.md
├── images/
│   ├── thumbnail.webp
│   ├── hero-1.webp … hero-3.webp
│   ├── product-1.webp … product-6.webp
│   ├── workspace-1.webp … workspace-3.webp
│   ├── detail-1.webp … detail-4.webp
│   ├── ambient-1.webp … ambient-3.webp
│   └── about-hero.webp, collection-hero.webp, process-hero.webp, contact-hero.webp
└── docs/
    ├── clone_plan.md
    ├── originality_report.md
    └── image_validation.md
```
