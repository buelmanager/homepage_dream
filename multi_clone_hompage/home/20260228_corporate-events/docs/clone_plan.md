# Clone Plan — 20260228_corporate-events

## Project Summary
- **Brand:** LUMINARY EVENTS (Luminary Corporate Events & Experiences)
- **Industry:** Ultra-luxury corporate event production
- **Slug:** `20260228_corporate-events`
- **Type:** Multi-page (5 HTML pages)
- **Date:** 2026-02-28

---

## Design Decisions

### Hero Layout — Type F (Interactive Depth-Layer)
**Rationale:** Type F is underrepresented in the portfolio (5 existing pages out of 80+). Corporate event companies require dynamic, interactive hero sections that communicate breadth of offering. The 4-card event-type widget directly serves this need — visitors self-segment by event type immediately on landing.

**Implementation approach:**
- Full-viewport hero image with `brightness(0.4)` and subtle parallax scroll
- Glassmorphism-style event cards with `backdrop-filter: blur(8px)` and `rgba(15,32,32,0.7)` background
- Radial glow on card hover/active via `::before` pseudo-element
- GSAP hover interaction: sibling cards scale to 0.98 and opacity 0.7 for depth effect
- Scroll indicator animated via GSAP in preloader `onComplete` callback, fallback via `setTimeout(4000)`

### Color Palette — P7 Deep Teal
**Rationale:** Deep teal conveys luxury, trust, and sophistication appropriate for C-suite corporate event buyers. The `#4DCFB0` accent on a near-black `#0A1818` background creates strong contrast while feeling prestigious rather than cold.

**Tone compliance:** Corporate, premium, authoritative — teal avoids the cliché warm-gold luxury palette while still reading as high-end to a corporate audience.

### Typography — Fraunces + Inter
**Rationale:** Fraunces is a variable optical-size serif with elegant italic forms ideal for premium branding. Its `opsz` axis allows display sizes to feel editorial. Inter as body font ensures maximum readability in the form-heavy contact page and spec-dense collection page.

---

## Page Architecture

### index.html — Home (Primary Conversion Page)
**Objective:** Convert brand-aware visitors to enquiry form completion.

Sections:
1. Preloader (branded, with loading bar)
2. Navigation (fixed, blur-on-scroll)
3. Hero — Type F with Interactive Event Widget
4. Marquee — event type rotation (ambient brand reinforcement)
5. Stats Band — 2,400 Events / 180 Countries / 12 Awards / Since 2001
6. Philosophy Grid — 3-column grid (Obsessive Precision / Narrative Architecture / Sovereign Execution)
7. Services Grid — 2×2 image+text grid for 4 event types
8. Process Preview — 5-step horizontal timeline
9. Gallery — asymmetric 5-image grid (2fr/1fr/1fr layout)
10. Testimonials — Swiper slider, 3 cards
11. CTA Band — full-width centred conversion block
12. Footer — 4-column with social links

### about.html — Brand Story & Credibility
**Objective:** Build trust with C-suite buyers through heritage narrative, team credentials, and award validation.

Key differentiators:
- Founding story (Alastair Pemberton-Hale, West End director, 2001)
- 6-card values grid (Creative Sovereignty, Temporal Precision, Human-Centred Design, Global Perspective, Uncompromised Quality, Accountable Delivery)
- 4-member leadership team with role-specific credentials
- 6 industry award citations with year, title, and awarding body

### collection.html — Event Experiences Portfolio
**Objective:** Enable self-qualification by event type and scale, reduce friction toward enquiry.

Key features:
- Filter tabs (decorative, no JS filtering needed for static site)
- Featured Experience hero card (The Grand Annual Gala Experience)
- 9 collection cards across all 4 event types
- 3-tier service package comparison (Signature / Prestige / Legacy)

### process.html — Production Journey
**Objective:** Reduce procurement anxiety by demonstrating structured, accountable methodology.

Key features:
- 5-stage alternating full-width image+content blocks
- Each stage includes: phase label, title, description, deliverables tags, progress bar
- Non-Negotiable Principles grid (4 items)
- Visual timeline with expanding fill bars (GSAP ScrollTrigger)
- FAQ accordion (5 questions with smooth height animation)

### contact.html — Conversion
**Objective:** Maximum form completion with minimum friction.

Key features:
- Split layout (brand story + form) on one viewport
- Event type pill selector (visual multi-select)
- Guest count and budget select fields (qualification without pressure)
- Vision textarea (open-ended brief)
- Success state with GSAP transition
- 4 global office cards
- Promise strip: 4h response / NDA / No obligation

---

## Technical Architecture

### GSAP Implementation
```
- SplitText polyfill: Inline before Swiper, used for hero and page hero headlines
- immediateRender: false: All gsap.from() calls — confirmed in ALL scroll animations
- Scroll indicator: preloader onComplete + setTimeout(4000) — both present in index.html
- Hero parallax: gsap.to on .hero-bg img using scrub:1.5 ScrollTrigger
- Counter animation: gsap.fromTo on stat-num elements via ScrollTrigger once:true
```

### CSS Architecture
```
- All CSS inline in <style> tag (single-file pages, no external CSS dependencies)
- CSS custom properties on :root for full token system
- No opacity:0 on content elements
- Philosophy grid: display:grid; grid-template-columns: repeat(3, 1fr) — confirmed
- Collection grid: overflow: visible — confirmed
- Footer: background: var(--bg) — confirmed on all 5 pages
```

### Responsive Breakpoints
```
- 1100px: Tablet layout (column collapses, padding reduction)
- 768px: Mobile (nav links hidden, single-column grids)
```
