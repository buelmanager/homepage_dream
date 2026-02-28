# Clone Plan — KINETIC Motion Designer Portfolio

## Project Concept

A premium motion design portfolio template targeting freelance motion designers, animation studios, and creative technologists. The site uses a forest-green dark palette to evoke a sense of organic technology — nature-meets-digital — differentiating it from the typical all-black or neon-only motion design portfolios.

## Target Audience

- Senior motion designers and art directors
- Motion design studios (1–5 person boutiques)
- Animation freelancers seeking high-end client positioning
- Creative technologists bridging design and code

## Competitive Differentiation

Unlike generic portfolio templates, KINETIC:
1. Uses a distinctive forest-green palette (not black/neon) for memorability
2. Canvas-based animated hero that showcases technical capability immediately
3. Dedicated process and rates pages — pre-qualifies clients before contact
4. 5-page multi-page structure signals studio credibility
5. PRO tier pricing ($49) with full source files

## Page Architecture

```
index.html          — main hub with all service categories
├── about.html      — trust-building bio + credentials
├── collection.html — portfolio showcase + case study
├── process.html    — workflow + rates (lead qualification)
└── contact.html    — inquiry form + availability
```

## Section Inventory

### index.html (11 sections)
1. Preloader (animated progress bar)
2. Scroll indicator (2 trigger points)
3. Navbar (fixed, transparent to solid on scroll)
4. Hero Type E (canvas grid + 6-panel image grid)
5. Marquee ticker (service categories)
6. Selected Projects (6-card grid with play buttons)
7. Services (4 cards: Brand/Title/UI/VFX)
8. Client Logos (6-cell grid)
9. Process Teaser (split layout with workspace image)
10. Tools & Technology (8 software cards + 3 images)
11. Contact CTA + Footer

### about.html (7 sections)
1. Banner Hero
2. Bio (split: workspace image + text)
3. Career Highlights (6-card grid timeline)
4. Philosophy of Movement (4 pillars grid)
5. Awards & Honours (list table)
6. CTA
7. Footer

### collection.html (5 sections)
1. Banner Hero (with project count)
2. Filter Bar (All/Brand/Title/UI/VFX)
3. Projects Grid (12 items, asymmetric layout)
4. Featured Case Study (APEX Brand Identity)
5. Footer

### process.html (6 sections)
1. Banner Hero
2. 5-Phase Workflow (full-width phase cards)
3. Technical Approach (6-card grid)
4. Software Stack (split: image + 8-item grid)
5. Rates Overview (3 tiers)
6. CTA + Footer

### contact.html (5 sections)
1. Banner Hero
2. Contact Form + Info Sidebar (split layout)
3. Availability Calendar
4. Studio Location (map placeholder + details)
5. Footer

## Animation Strategy (A3 Precise)

- Duration: 0.7–0.8s
- X offset: -20px (horizontal slide)
- Stagger: 0.04s between elements
- Ease: power3.out
- ScrollTrigger start: 'top 85%'
- Hero canvas: continuous rAF loop
