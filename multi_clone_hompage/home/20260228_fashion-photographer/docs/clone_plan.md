# Clone Plan — ELARA LENS Fashion Photographer

## Project Brief Summary

- **Template Name:** ELARA LENS — Fashion & Editorial Photography
- **Slug:** `20260228_fashion-photographer`
- **Date Created:** 2026-02-28
- **Tier:** PRO ($49)

## Design Decisions

### Hero Layout: Type D (Portrait + Stats Grid)
Selected for maximum visual impact for a personal brand/portfolio. The large portrait on the left creates instant emotional connection, while the 2x2 stats grid on the right communicates credibility and scale at a glance.

### Color Palette: P4 Deep Burgundy
- Burgundy/wine tones convey luxury, feminine power, and editorial sophistication
- Dark base (`#1A0A0E`) provides dramatic contrast for imagery
- Accent rose (`#C96A8A`) adds warmth without being soft — it reads as bold
- Ivory text (`#F0DCE4`) is warm, not clinical

### Typography: F2 (Playfair Display + Lato)
- Playfair Display for headlines: editorial, feminine, authoritative
- Lato for body: clean, modern, highly legible at small sizes
- The contrast between serif and sans creates the editorial tension

### Animation: A4 Dramatic
- Longer duration (1.1–1.3s) + larger y-offset (40px) creates high-end feel
- Stagger 0.15s between elements gives rhythm without feeling sluggish
- `power2.inOut` easing reads as controlled, intentional, powerful

## Page Architecture

```
20260228_fashion-photographer/
├── index.html          ← Main portfolio (Hero D + masonry editorial)
├── about.html          ← Biography, timeline, awards, clients
├── collection.html     ← Filterable portfolio gallery + publication history
├── process.html        ← 5-step process + equipment + philosophy
├── contact.html        ← Booking form + locations + rate card
├── meta.json
├── readme.md
├── docs/
│   ├── clone_plan.md        ← this file
│   ├── originality_report.md
│   └── image_validation.md
└── images/
    ├── hero-1.webp ... hero-2.webp
    ├── portrait-1.webp ... portrait-4.webp
    ├── product-1.webp ... product-6.webp
    ├── workspace-1.webp
    ├── ambient-1.webp ... ambient-7.webp
    └── thumbnail.webp
```

## Unique Differentiators vs. Other Portfolio Templates

1. Hero Type D: Portrait + Stats grid — rare, highly impactful for personal brands
2. Filterable portfolio (Editorial/Campaign/Runway/Beauty) on collection page
3. Detailed 5-step process with expandable detail panels
4. Full equipment/tech spec section (builds trust with professional clients)
5. Rate card transparency section (rare and appreciated by high-end clients)
6. Multi-studio locations with image + feature list
7. Publication history table with cover credits
8. Career timeline with dot-line design
