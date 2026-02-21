# IGNIS LAMA — Luxury Knife Forge Landing Page

## Brand Concept
- **Brand Name**: IGNIS LAMA (Latin: "Blade of Fire")
- **Tagline**: "Forged in fire. Finished in silence."
- **Positioning**: Ultra-luxury, commission-only hand-forged knives. Maximum 12 blades per year.
- **Target Audience**: Professional chefs, knife collectors, culinary enthusiasts seeking heirloom-quality blades.

## Research Summary
Competitor analysis of William Henry, Jonas Blade, Flett Forge, and Canton Cutler informed our differentiation strategy:
- Extreme scarcity messaging (12 blades/year)
- Commission form as application (not order form)
- Material Codex as interactive element
- No pricing displayed — reinforces exclusivity

## Visual Direction
- **Color Palette**:
  - Background: `#1C1A18` (dark charcoal-black)
  - Surface: `#252220`
  - Accent: `#D4541A` (forge orange/ember amber)
  - Steel: `#A8B0B8` (cold steel silver)
  - Text: `#E8E0D8` (off-white parchment)
- **Typography**:
  - Display: Cormorant Garamond (editorial serif)
  - Body: DM Sans (precision counterpoint)
  - Labels: Space Mono (forge stamp aesthetic)

## UX Decisions
- **Hero Type E**: Animated hex grid pattern — industrial-organic honeycomb reference
- **Preloader**: SVG brand mark draw animation
- **Scroll Indicator**: Fixed left-side dot + progress line
- **Navigation**: Fixed navbar with blur on scroll
- **Sections**: Hero → Stats → Philosophy → Collection → Atelier → Process → Heritage → Press → Commission → Footer

## Animations
- GSAP ScrollTrigger for all section reveals
- Stagger animations on grids (philosophy cards, collection items, timeline)
- Parallax effect on hero background
- Counter animation on stats numbers

## File Structure
```
20260221_knife-forge/
├── index.html          # Main landing page
├── about.html          # Brand story, founder, values
├── collection.html    # Product grid with filters
├── process.html       # 5-stage timeline, materials
├── contact.html        # Commission form, info panel
├── meta.json           # Project metadata
├── readme.md           # This file
├── docs/
│   ├── clone_plan.md
│   ├── originality_report.md
│   └── image_validation.md
└── images/
    ├── hero-*.webp (4)
    ├── product-*.webp (6)
    ├── workspace-*.webp (3)
    ├── portrait-*.webp (2)
    ├── ambient-*.webp (3)
    └── detail-*.webp (22)
```

## Usage
Open `index.html` in a browser to view the landing page. All images are local WebP files - no external dependencies for images.
