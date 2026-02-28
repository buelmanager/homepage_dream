# Clone Plan — CALDWELL & PARTNERS (20260228_law-firm)

**Date:** 2026-02-28
**Builder:** Claude Code Agent
**Template Type:** Multi-page luxury site (5 HTML pages)

---

## 1. Site Architecture

### Purpose
A complete luxury website for **Caldwell Whitmore & Partners LLP**, an elite M&A, private equity, and capital markets law firm established in 1891. The site targets ultra-high-net-worth individuals, institutional clients, and corporate principals seeking premier legal counsel for major transactions.

### Pages & Objectives

| Page | File | Primary Goal |
|------|------|--------------|
| Home | `index.html` | First impression, hero impact, key stats, practice overview |
| Firm | `about.html` | Trust-building, heritage, partner credibility |
| Practice Areas | `collection.html` | Service detail, transaction record |
| Client Journey | `process.html` | Process transparency, conversion confidence |
| Contact | `contact.html` | Lead capture, office directory, urgent contact |

---

## 2. Design Decisions

### Hero Layout — Type D (Portrait + Stats Grid)

**Selection rationale:** Type D provides maximum authoritative presence for a law firm — the dramatic left-side portrait of a senior partner communicates gravitas and human trust, while the right-side stats grid ($2.4T / 340 / 48 / 1891) delivers immediate credibility through numbers.

**CSS Implementation:**
```css
#hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
}
.hero-stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
```

### Color Palette — P8 Onyx Stone
Chosen for its association with stone, permanence, and institutional authority. The silver-grey accent (`#B0B0C0`) reads as refined silver rather than gold — appropriate for a firm that projects understated power rather than ostentation.

### Typography — F4 Cinzel + Crimson Pro
- **Cinzel:** Roman-derived letterforms with a carved-stone quality — perfect for a firm with 130 years of legal precedent
- **Crimson Pro:** An elegant serif with refined italic forms — ideal for descriptive body text, legal language, and testimonial quotes

### Animation — A4 Dramatic
The y:40/duration:1.2/stagger:0.15 parameters create deliberate, authoritative reveals — each section enters with measured pace that communicates confidence, not urgency.

---

## 3. Section-by-Section Plan

### index.html — Home

1. **Preloader** — SVG circle animation, brand name, loading bar. Delays 2.0s before exit.
2. **Scroll Indicator** — Fixed left rail, animated line + dot. Shown in preloader `onComplete` AND `setTimeout(4000)`.
3. **Navbar** — Fixed transparent → solid-dark on scroll. Logo + nav links + CTA button.
4. **Hero (Type D)** — Left: dramatic portrait with caption overlay. Right: firm intro + 2×2 stats grid.
5. **Philosophy** — 3-column CSS grid (NOT flex). Three core principles with hover reveal bar.
6. **Practice Areas** — Sidebar (sticky) + 2×2 card grid on right. `overflow: visible`.
7. **Track Record** — 3-column deals grid. Six representative transactions with values.
8. **Gallery Strip** — 3-column image strip (2fr 1fr 1fr). Three ambient images.
9. **Testimonials** — Swiper carousel. Three client testimonials with attribution.
10. **Contact CTA** — Centered CTA section before footer.
11. **Footer** — 4-column layout. `background: var(--bg)` only.

### about.html — The Firm
1. Page Hero with `hero-2.webp`
2. About intro — 2-column: image left, text right
3. Timeline — Alternating left/right, 6 historical milestones (1891–2024)
4. Partners grid — 4-column, image + bio cards
5. Awards grid — 3×2 grid of firm recognitions
6. Footer

### collection.html — Practice Areas
1. Page Hero with `hero-3.webp`
2. Overview section — centred intro
3. Expertise stats band — 5 statistics across full width
4. 5 Practice Full Cards — alternating image/text layout for each practice
5. Representative Matters table — 7 landmark transactions
6. Footer

### process.html — Client Journey
1. Page Hero with `hero-4.webp`
2. Process intro — 2-column with managing partner quote
3. 6-Step Process — numbered vertical timeline with detail sub-cards
4. Commitment section — 2-column: image + blockquote
5. FAQ accordion — 5 questions with expand/collapse
6. Footer

### contact.html — Contact
1. Page Hero with `hero-3.webp`
2. Contact main — 2-column: info left, form right
3. Contact form — 7 fields: name×2, email, phone, institution, practice, office, message
4. Global Offices — 3×2 grid of 6 offices
5. Senior Partner Direct Contact — with duty line
6. Footer

---

## 4. GSAP Compliance Protocol

All GSAP animations must follow:
```js
gsap.from('.element', {
  immediateRender: false,    // ALWAYS at top level
  scrollTrigger: {
    trigger: '.element',
    start: 'top 80%'
    // NEVER immediateRender here
  },
  opacity: 0,
  y: 40,                     // A4 Dramatic: y:40
  duration: 1.2,             // A4 Dramatic: 1.1-1.3s
  stagger: 0.15,             // A4 Dramatic: 0.15
  ease: 'power2.inOut'       // A4 Dramatic
});
```

---

## 5. Image Usage Map

| Image | Description (assumed) | Usage |
|-------|----------------------|-------|
| `hero-1.webp` | Dramatic law firm interior / portrait | Home hero (dominant left panel) |
| `hero-2.webp` | Corporate office / partner | About page hero |
| `hero-3.webp` | Legal library / courtroom | Collection + Contact hero |
| `hero-4.webp` | Conference room / meeting | Process hero |
| `product-1.webp` | Office detail / document | About intro image |
| `product-2.webp` | Partner portrait | About partners card 2, Commitment |
| `product-3.webp` | Partner / counsel | About partners card 3, Urgent contact |
| `product-4.webp` | Partner portrait | About partners card 4 |
| `ambient-1.webp` | Office interior | Gallery strip #1, Capital Markets |
| `ambient-2.webp` | Legal library | Gallery strip #2, Litigation |
| `ambient-3.webp` | Meeting room | Gallery strip #3, Restructuring |

---

## 6. Responsive Breakpoints

| Breakpoint | Change |
|-----------|--------|
| max-width: 1024px | Hero grid → single column, partners 4→2 col, footer 4→2 col |
| max-width: 768px | Hero stats 2×2→1 col, philosophy 3→1 col, nav links hidden, footer 1 col |

---

## 7. Completion Checklist

- [x] index.html — 1400+ lines, all sections complete
- [x] about.html — 500+ lines, timeline + partners
- [x] collection.html — 500+ lines, 5 practices + matters table
- [x] process.html — 400+ lines, 6-step process + FAQ
- [x] contact.html — 500+ lines, form + 6 offices
- [x] meta.json — complete with all required fields
- [x] readme.md — complete documentation
- [x] docs/clone_plan.md — this file
- [x] docs/originality_report.md
- [x] docs/image_validation.md
