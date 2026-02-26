# INCLUSIONS — Baltic Amber & Fossil Jewelry Atelier

**Tagline:** Forty Million Years of Perfect Light

## Brand Concept

INCLUSIONS is a luxury amber jewelry atelier set in Gdańsk, Poland — the amber capital of the world. Specializing in rare Baltic amber with prehistoric inclusions (insects, plant matter, trapped air bubbles), each piece is 40–60 million years old and hand-set in 18k gold. The atelier also offers amber authentication and private fossil collection services.

## Design System

| Token | Value | Notes |
|---|---|---|
| `--bg` | `#201408` | R=32, G=20, B=8 → avg=20 ✓ |
| `--surface` | `#2C1E10` | Dark warm brown |
| `--accent` | `#F0A020` | Baltic amber gold |
| `--accent2` | `#F8D890` | Pale amber highlight |
| `--text` | `#F5EDD5` | Warm cream |
| `--text-muted` | `#906040` | Muted sienna |
| Heading | Cormorant Garamond | Google Fonts, weight 300/400/600 |
| Body | Inter | Google Fonts, weight 300/400/500 |

## File Structure

```
20260226_amber-atelier/
├── index.html          Main luxury landing page (cinematic hero)
├── about.html          Atelier history, specialists, Baltic heritage
├── collection.html     Jewelry gallery with filter bar, rare inclusions
├── process.html        Sourcing, authentication, goldsmithing, certification
├── contact.html        Commission, viewing, authentication inquiries
├── meta.json           Template metadata
├── readme.md           This file
├── images/
│   └── thumbnail.webp  600×400 preview (12KB)
└── docs/
    ├── clone_plan.md
    ├── originality_report.md
    └── image_validation.md
```

## Pages

### index.html
- CSS amber droplet preloader animation
- Fixed scroll indicator (left side, amber accent)
- Cinematic hero with Unsplash amber macro, radial glow overlay, particle effects, floating age badge, letter-reveal title
- Section 1: Featured Pieces — 5-card masonry grid (1 large card + 4 standard)
- Section 2: The Amber — geological provenance, split layout with feature icons
- Section 3: Rare Inclusions — editorial grid (2×2 + hero item)
- Section 4: The Gold Setting — 4-step process, split with gold badge visual
- Section 5: Commission CTA
- Footer with 4 columns

### about.html
- Atelier origin story (founded 1987, ul. Mariacka, Gdańsk)
- Heritage stats bar (4 KPIs)
- Team of 3 specialists: Zofia Kowalska (Director/Goldsmith), Dr. Marta Wiśniewska (Paleontologist), Piotr Adamczyk (Head Goldsmith)
- Baltic amber heritage section with 4-item history timeline
- Private viewing CTA

### collection.html
- Category filter bar (All / Pendants / Rings / Sculptures / Rare Inclusions / Commissions)
- 9-item gallery grid with mixed aspect ratios (tall and wide cards)
- Rare Inclusions showcase (2×2 editorial grid)
- Authentication & provenance section (split with feature list)
- Commission CTA

### process.html
- 6-step process with circular number indicators and duration labels
- Amber sourcing section (certifications, FTIR verification, chain of custody)
- Goldsmithing craft grid (4 stages, image-backed)
- Certification documents grid (4 documents)
- Commission CTA

### contact.html
- Inquiry form with tabbed categories (Commission / Private Viewing / Authentication / Press)
- Form fields: name, email, country, piece type, budget, message, referral
- Atelier contact details + opening hours table
- 6 services grid (Commission, Viewing, Authentication, Classification, Resetting, Collection Acquisition)
- Location section with address + map placeholder

## GSAP Animation Rules

All animations follow the project-wide critical rules:
- `immediateRender: false` at **top level** of `gsap.from()` vars (not inside scrollTrigger)
- No `opacity: 0` set via CSS on content elements
- Scroll indicator shown in preloader callback AND `setTimeout(4000ms)`
- Stagger: 0.08–0.12, y: 20–28px, duration: 0.8–1.2s, ease: `power2.out`
- start: `top 80%` or `top 85%`

## Images Used

All images from Unsplash (free to use under Unsplash License):
- `photo-1515562141207-7a88fb7ce338` — amber macro with inclusion (hero, thumbnail)
- `photo-1512327536842-5aa37d1ba3e3` — jewelry/amber spread
- `photo-1529958030586-3aae4ca485ff` — Baltic amber specimen
- `photo-1558618666-fcd25c85cd64` — jewelry detail
- `photo-1573408301185-9519f94bf13c` — luxury ring
- `photo-1611591437281-460bfbe1220a` — jewelry craftsmanship
- `photo-1599643477877-530eb83abc8e` — amber sculpture
- `photo-1531995811006-35cb42e1a022` — pendant/locket
- `photo-1509631179647-0177331693ae` — Baltic coastal landscape
- `photo-1503342394128-c104d54dba01` — raw amber collection
- `photo-1505740420928-5e560c06d30e` — gemstone specimen
- `photo-1612278675615-7b093b07772d` — amber ring gem
- `photo-1573496359142-b8d87734a5a2` — portrait (goldsmith)
- `photo-1607990281513-2c110a25bd8c` — portrait (scientist)
- `photo-1560250097-0b93528c311a` — portrait (craftsman)

## Color Verification

Background avg: (32+20+8)/3 = 20.0 ✓ (exactly at threshold)
Surface avg: (44+30+16)/3 = 30.0 ✓
All section backgrounds use `var(--bg)` or `var(--surface)` — no hardcoded dark hex.
