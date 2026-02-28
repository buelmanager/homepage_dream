# CALDWELL & PARTNERS — Elite M&A Law Firm

**Slug:** `20260228_law-firm`
**Created:** 2026-02-28
**Tier:** Free
**Category:** Multi-Page Site (5 pages)
**Hero Layout:** Type D — Portrait + Stats Grid
**Color Palette:** P8 — Onyx Stone
**Font Pair:** F4 — Cinzel + Crimson Pro
**Animation:** A4 Dramatic (y:40, duration:1.2, stagger:0.15, ease:power2.inOut)

---

## Brand

**Full Name:** Caldwell Whitmore & Partners LLP
**Brand Name:** CALDWELL & PARTNERS
**Tagline:** Counsel at the highest level. Results that matter.
**Founded:** 1891
**Industry:** Elite M&A, private equity, and capital markets law

---

## Key Stats

| Metric | Value |
|--------|-------|
| Founded | 1891 |
| Attorneys | 340 |
| Countries | 48 |
| Deals Closed | $2.4 Trillion |

---

## Pages

| File | Title | Description |
|------|-------|-------------|
| `index.html` | Home | Hero (Type D), Philosophy, Practice Areas, Track Record, Gallery Strip, Testimonials, CTA |
| `about.html` | The Firm | Page Hero, About Intro, Timeline, Partners, Awards |
| `collection.html` | Practice Areas | 5 practice area detail sections, representative matters table |
| `process.html` | Client Journey | Process intro, 6-step engagement process, Commitment, FAQ accordion |
| `contact.html` | Contact | Contact form, 6 global offices, urgent/duty line info |

---

## Design System

### Colors (P8 — Onyx Stone)

```css
--bg: #181818;
--surface: #222222;
--surface2: #2A2A2A;
--accent: #B0B0C0;
--accent-light: #D0D0DC;
--accent-dark: #909098;
--ivory: #F0EDE8;
--smoke: #C0B8B0;
--muted: #808078;
--border: #2E2E2E;
```

### Typography (F4 — Cinzel + Crimson Pro)

```css
--font-serif: 'Cinzel', serif;   /* headings */
--font-sans: 'Crimson Pro', serif; /* body/italic */
```

### Animations (A4 Dramatic)

```js
{ y: 40, duration: 1.2, stagger: 0.15, ease: 'power2.inOut' }
```

---

## Hero Layout — Type D: Portrait + Stats Grid

The home page hero uses a CSS grid split layout:
- **LEFT column:** Full-height dramatic portrait (`hero-1.webp`) with overlay text — firm name, tagline, CTA buttons
- **RIGHT column:** Dark surface background with firm intro text and 2×2 stats grid (1891 / 340 / 48 / $2.4T)

```css
#hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
```

---

## Images Used

All local `images/` paths, no external URLs.

| File | Used In |
|------|---------|
| `hero-1.webp` | Home hero portrait, Collection (M&A practice) |
| `hero-2.webp` | About page hero, Collection (Private Equity) |
| `hero-3.webp` | Collection page hero, Contact page hero |
| `hero-4.webp` | Process page hero |
| `product-1.webp` | About intro image, Partners grid |
| `product-2.webp` | Partners grid, Commitment section |
| `product-3.webp` | Partners grid, Urgent contact section |
| `product-4.webp` | Partners grid |
| `ambient-1.webp` | Gallery strip, Capital Markets practice |
| `ambient-2.webp` | Gallery strip, Complex Litigation practice |
| `ambient-3.webp` | Gallery strip, Restructuring practice |

---

## Technical Stack

- **GSAP 3.12.2** — Animations via cdnjs
- **ScrollTrigger** — Scroll-driven animations
- **Swiper 11** — Testimonials carousel (index.html)
- **SplitText Polyfill** — Inline, no Club GSAP dependency
- **Google Fonts** — Cinzel + Crimson Pro

---

## GSAP Compliance Checklist

- [x] `immediateRender: false` at top level of all `gsap.from()` calls
- [x] No `opacity: 0` in CSS on content elements
- [x] Scroll indicator shown in preloader `onComplete` AND `setTimeout(4000)`
- [x] Philosophy grid: `display: grid; grid-template-columns: repeat(3, 1fr)`
- [x] Collection grid: `overflow: visible`
- [x] Footer: `background: var(--bg)` only
- [x] SplitText polyfill inline before Swiper

---

## Global Offices Featured (contact.html)

1. London — Global Headquarters
2. New York — Americas Hub
3. Hong Kong — Asia-Pacific Hub
4. Dubai — MENA Hub
5. Frankfurt — Europe Hub
6. Singapore — SE Asia Hub
