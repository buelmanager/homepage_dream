# Image Validation — TABLE PRIVÉE

**Date:** 2026-02-26

All images sourced from Unsplash at `https://images.unsplash.com/photo-{ID}?w=...&q=80&auto=format&fit=crop`

## Validated Image IDs

| ID | Description | Pages Used | Status |
|----|-------------|------------|--------|
| `1414235077428-338989a2e8c0` | Fine dining elegant table setting | index.html (hero), contact.html (subhero), menu.html (subhero, menu-intro) | Validated |
| `1556909114-f6e7ad7d3136` | Chef cooking in kitchen | index.html (chef teaser), about.html (subhero, lead chef), menu.html (sample menu) | Validated |
| `1551218808-94e220e084d2` | Plated dish luxury close-up | menus.html, about.html (team), menu.html (signature dishes) | Validated |
| `1504674900247-0877df9cc836` | Fresh food ingredients | about.html (team card), menus.html, menu.html (tasting card), process.html (planning) | Validated |
| `1567620905732-2d1ec7ab7445` | Kitchen preparation | index.html (service card 2), about.html (kitchen philosophy), process.html (sourcing, CTA) | Validated |
| `1540189549336-e6e99d803c68` | Elegantly set dining table | index.html (service card 3, CTA), services.html (subhero), process.html (subhero), menu.html (intro) | Validated |
| `1565958011703-44f9829ba187` | Dessert plating artisan | about.html (team), menus.html, menu.html (signature dishes, Hokkaido), process.html (after-care) | Validated |
| `1484980972926-edee96e0960d` | Chocolate dessert plating | menu.html (signature dish — Valrhona) | Validated |
| `1529543544282-ea669407fca3` | Risotto / pasta dish | menu.html (signature dish — truffle risotto) | Validated |
| `1510812431401-41d2bd2722f3` | Wine glasses / cellar | menu.html (wine pairing), process.html (sourcing) | Validated |

## Notes

- All IDs are from the pre-validated project list or have been confirmed available on Unsplash CDN
- No face closeups or individual profile photos included anywhere
- Images serve as editorial/conceptual imagery only
- All images load via CDN with `auto=format&fit=crop` parameters for optimal delivery
- Images used at `w=600–1800` depending on context (hero: 1800, cards: 600–900)

## Thumbnail

- Source: `1555244162-803834f70033` or `1582719508461-905c673771fd` (fallback) via curl validation
- Final: `images/thumbnail.webp` — 600px wide, 80% quality WebP, 31KB
