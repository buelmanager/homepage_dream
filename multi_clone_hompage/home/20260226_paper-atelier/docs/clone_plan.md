# Clone Plan — FOLIO Paper Atelier

**Template:** 20260226_paper-atelier
**Created:** 2026-02-26
**Category:** Luxury Craft / Japanese Artisan

---

## Concept Overview

FOLIO is an entirely original luxury landing page concept for a fictional Japanese washi paper-making atelier. It draws design inspiration from the following reference points:

- **Narrative depth:** Maison luxury brand microsites (Hermès, Loro Piana) — editorial storytelling, generous whitespace, serif + sans-serif pairing
- **Japanese craft aesthetics:** Muted warm earth tones, negative space as design language, reverence for process
- **Paper industry conventions:** Weight / gsm / fiber type specifications typical of fine paper brands (G. Lalo, Clairefontaine Heritage, Zerkall)

No specific existing website was cloned or directly replicated.

---

## Brand Architecture

| Element         | Decision                                     |
|-----------------|----------------------------------------------|
| Name            | FOLIO (paper folio, also: leaf/page in Latin)|
| Location        | Echizen, Fukui Prefecture, Japan             |
| Founded         | Contemporary atelier, heritage rooted in 794 CE |
| Founders        | Kenji Murakami (papermaker) + Aiko Tanaka (designer) |
| Price point     | Ultra-luxury (¥18,000–¥95,000 workshops)    |
| Audience        | Wedding planners, collectors, arts & culture tourists |
| Tone            | Reverential, unhurried, deeply knowledgeable |

---

## Page Architecture

### index.html — Main Landing
**Hero type:** A — Cinematic Full-Screen
- Background: handmade paper fiber texture (Unsplash 1456735190827)
- Title: FOLIO in IM Fell English italic
- Supporting element: CSS water-drop animation (brand metaphor)
- Stats bar: 4 key brand facts

**Sections:**
1. Featured Papers (6-card grid, texture gallery)
2. Washi Heritage (2-col + timeline)
3. For Weddings (gallery + feature list)
4. Workshops Preview (3 cards)
5. Commission CTA (centered, overlapping bg text)

### about.html
Focus: credibility, heritage, people
Sections: Mission quote, Echizen town, Master makers, Process steps

### collection.html
Focus: product range, specification detail
Sections: Filter bar, 4-col grid (8 papers), Featured paper deep-dive, Applications

### workshops.html
Focus: booking conversion, experience detail
Sections: 3 full-width workshop cards (image + detail), Private events, Calendar

### contact.html
Focus: conversion (commission, wholesale, booking)
Sections: 2-col form layout, Inquiry types, Getting here, Newsletter

---

## Design Decisions

### Color Palette
All background values pass the DARK_THRESHOLD = 15 check:
- `--bg: #1E1A14` → avg(30+26+20)/3 = 25.3 ✓
- `--surface: #28221C` → avg(40+34+28)/3 = 34 ✓
- `--surface2: #322A22` → avg(50+42+34)/3 = 42 ✓

### Typography
- IM Fell English (italic) — 18th-century English typeface with natural irregularity, perfect for paper/craft
- Inter — clean, highly legible at small sizes for metadata and body

### GSAP Implementation
- All scroll animations use `immediateRender: false` at top level of `gsap.from()`
- No `opacity: 0` set via CSS on any content element
- Scroll indicator: visible via preloader onComplete callback AND setTimeout(4000)
- y values: 20–36px max
- Duration: 0.9–1.2s, ease: power2.out
- Stagger: 0.08–0.15

---

## Preloader Design
Paper fiber metaphor:
- 8 vertical fiber threads pulsing
- Brand name fade-in
- Linear progress bar (fiber loading)
- Town/date tagline
- Total display time: ~2 seconds
