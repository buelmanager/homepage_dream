# Bushido Martial Arts School

**Tagline:** Discipline is the Only True Strength

**Industry:** Martial Arts School — kendo, judo, taekwondo and combat philosophy

**Tier:** Free · $0

## Design System

- **Palette:** Onyx Stone — deep neutral grays with silver accent
- **Primary:** `#B0B0C0` (silver accent)
- **Background:** `#181818`
- **Surface:** `#222222`
- **Typography:** Bebas Neue (headings) + DM Sans (body)

## Hero Type

**Type C — Diagonal Split**
The hero is split diagonally: the left side shows the brand content over dark background with `clip-path: polygon(0 0, 100% 0, 88% 100%, 0 100%)`. The right side features a full-bleed martial arts image with brightness filter.

## Pages

| File | Description |
|------|-------------|
| `index.html` | Full luxury landing page (~625 lines) |
| `about.html` | School history, faculty, and values |
| `collection.html` | All disciplines with detailed listings |
| `process.html` | Five-stage training methodology |
| `contact.html` | Enrollment form and dojo details |

## Images Used

All images sourced from Unsplash (validated 200 OK):

- Hero: `1549060279` (martial arts training)
- Programs: `1571019614242`, `1574680178050`, `1521537634581`, `1540573133985`
- Dojo: `1554284126`
- About: `1549060279`
- Collection: `1571019614242`, `1574680178050`, `1521537634581`, `1540573133985`

## Sections (index.html)

1. Preloader
2. Scroll Indicator (fixed left)
3. Navbar (fixed top)
4. Hero — Type C Diagonal Split
5. Stats Strip (5 stats)
6. Philosophy Grid (3-col, display:grid)
7. Programs Grid (2x2, overflow:visible)
8. Dojo Section (2-col)
9. Process Timeline (5 steps)
10. Heritage (4 milestones)
11. Press Swiper (3 quotes)
12. Enrollment Form
13. Footer (background:var(--bg) only)

## Animation

**A3 Precise:** y=0, x=-20px, duration=0.75, ease=power3.out, stagger=0.04. All `gsap.from()` calls use `immediateRender: false` at top level.
