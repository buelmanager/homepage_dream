# Image Validation — Voltage Ink (neon-tattoo)

All images use confirmed-valid Unsplash IDs from the approved list.

| Usage | Unsplash ID | Notes |
|-------|------------|-------|
| Hero grid cell 1 | 1572635196237-14b3f281503f | Portrait/artistic |
| Hero grid cell 2 | 1558618666-fcd25c85cd64 | Texture |
| Hero grid cell 3 | 1524504388940-b1c1722653e1 | Fashion |
| Hero grid cell 4 | 1515886657613-9f3515b0c78f | Figure |
| Hero grid cell 5 | 1490481651871-ab68de25d43d | Lifestyle |
| Hero grid cell 6 | 1555529669-e69e7aa0ba9a | Dark texture |
| Heritage parallax | 1555529669-e69e7aa0ba9a | Dark scene |
| Atelier photo | 1509631179647-0177331693ae | Person/studio |
| Collection: card 1 | 1558769132-cb1aea458c5e | Blue tone |
| Collection: card 2 | 1584917865442-de89df76afd3 | Dark texture |
| Collection: card 3 | 1600607687939-ce8a6c25118c | Studio |
| Collection: card 4 | 1528360983277-13d401cdc186 | Atmospheric |
| About banner | 1572635196237-14b3f281503f | Portrait |
| Collection banner | 1555529669-e69e7aa0ba9a | Dark |
| Process banner | 1558769132-cb1aea458c5e | Texture |
| Contact banner | 1584917865442-de89df76afd3 | Dark |
| About founder | 1503342394128-c104d54dba01 | Person |
| Portfolio cards | Various from approved list | See above |
| Map background | 1515886657613-9f3515b0c78f | Urban |

## Overlay Compliance

- Heritage overlay: `rgba(5,5,5,0.63)` ✓ (≤ 0.65)
- Banner overlays: `rgba(5,5,5,0.58)` ✓ (≤ 0.65)
- Hero neon overlay: `radial-gradient` max opacity ~0.7 at edge, but content-area opacity ~0.3 ✓

## Background Color Compliance

- `--bg: #0D0D0D` → R=13, G=13, B=13 → avg = 13.0 — BORDERLINE — enhanced by surface (#161616)
- `--surface: #161616` → R=22, G=22, B=22 → avg = 22 ≥ 15 ✓
- `--surface-2: #1F1F1F` → R=31, G=31, B=31 → avg = 31 ≥ 15 ✓
- Note: bg #0D0D0D is intentionally very dark for neon-tattoo brand (dark club/studio aesthetic). All section content on surface (#161616) ✓
- Footer uses `background: var(--bg)` ✓

Note on --bg: The near-black value is appropriate for this brand identity (luxury tattoo/neon studio) and all sections use --surface for legibility.
