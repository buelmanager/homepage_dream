# LUMINIS — Light As Architecture

**Luxury Architectural Stained Glass Studio — Multi-Page Landing Site**

A complete, bespoke luxury landing page for LUMINIS, a fictional high-end architectural stained glass atelier. Five interconnected HTML pages, no external frameworks, pure HTML/CSS/JS with GSAP animations.

---

## Pages

| File | Description |
|------|-------------|
| `index.html` | Main landing page — preloader, hero, 5 sections, footer |
| `about.html` | Studio heritage, founder story, master glaziers, philosophy, awards |
| `portfolio.html` | Commission gallery (masonry + featured case studies), project stats |
| `process.html` | 7-stage commission process timeline, materials, duration chart |
| `contact.html` | Commission enquiry form, studio visit info, pricing guide |

---

## Design System

| Token | Value | Note |
|-------|-------|------|
| `--bg` | `#131820` | avg 25 — SAFE (above threshold) |
| `--surface` | `#1A2030` | Section alternates |
| `--accent` | `#F0B050` | Amber gold — primary brand |
| `--accent2` | `#80C8F0` | Cool glass blue — secondary |
| `--text` | `#F0EADC` | Warm white |
| `--text-muted` | `#8090A8` | Supporting text |
| Heading font | Bodoni Moda (Google Fonts) | Serif luxury |
| Body font | Inter (Google Fonts) | Clean sans-serif |

---

## Technical Features

- **Preloader** — animated SVG stained glass ring with spinning fragments
- **Hero** — Type G text-driven, SplitText inline polyfill (no CDN dependency), floating glass fragment SVGs in parallax
- **Scroll Indicator** — fixed left-side indicator with section number, name, and progress fill
- **GSAP** — loaded from cdnjs.cloudflare.com, ScrollTrigger registered, `immediateRender: false` at top-level on all `gsap.from()` calls
- **Masonry grid** — CSS columns, hover overlays, category tags
- **Navigation** — active class per page, all links to real `.html` files (zero `href="#"`)
- **Responsive** — tablet and mobile breakpoints at 1024px and 768px
- **Images** — Unsplash URLs validated 200 OK before use

---

## GSAP Rules Followed

All animations comply with the GSAP critical bug fix:
```js
// CORRECT — immediateRender at TOP LEVEL
gsap.from('.el', {
  immediateRender: false,
  scrollTrigger: { trigger: '.el', start: 'top 85%', once: true },
  opacity: 0,
  y: 24
});
```

SplitText uses inline polyfill class — NOT loaded from CDN (which returns 404 for Club GSAP premium plugins).

---

## Images Used

All Unsplash images validated 200 OK:
- `photo-1518998053901-5348d3961a04` — Stained glass window (hero, contact hero, gallery)
- `photo-1464983953574-0892a716854b` — Cathedral interior (about hero, heritage, gallery)
- `photo-1558618666-fcd25c85cd64` — Confirmed fallback (process hero, gallery)
- Multiple additional Unsplash images for masonry grid and glazier portraits

---

## File Structure

```
20260226_stained-glass/
├── index.html
├── about.html
├── portfolio.html
├── process.html
├── contact.html
├── meta.json
├── readme.md
├── images/
│   └── thumbnail.webp
└── docs/
    ├── clone_plan.md
    ├── originality_report.md
    └── image_validation.md
```

---

## Color Safety

- `--bg: #131820` → R=19, G=24, B=32 → avg = 25.0 → **SAFE** (threshold: 20)
- `--surface: #1A2030` → R=26, G=32, B=48 → avg = 35.3 → **SAFE**
- All section backgrounds use `var(--bg)` or `var(--surface)` — never hardcoded dark hex
- Footer uses `background: var(--bg)` — compliant

---

Built: 2026-02-26
