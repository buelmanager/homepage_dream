# Image Validation — Salinae Atelier (sea-salt-atelier)

All images use confirmed-valid Unsplash IDs from the approved list.

| Usage | Unsplash ID | Notes |
|-------|------------|-------|
| Hero portrait (right panel) | 1515886657613-9f3515b0c78f | Lifestyle/coastal |
| Heritage parallax | 1490481651871-ab68de25d43d | Landscape/ocean |
| Collection: Atlantic Fleur | 1543076447-215ad9ba6923 | Crystal/mineral |
| Collection: Mediterranean Rose | 1551488831-00ddcb6c6bd3 | Texture |
| Collection: Pacific Deep Water | 1558769132-cb1aea458c5e | Blue water |
| Collection: Black Lava | 1584917865442-de89df76afd3 | Dark/dramatic |
| Atelier visual | 1529958030586-3aae4ca485ff | Environment |
| About banner | 1558769132-cb1aea458c5e | Ocean |
| Collection banner | 1543076447-215ad9ba6923 | Crystal |
| Process banner | 1551488831-00ddcb6c6bd3 | Texture |
| Contact banner | 1490481651871-ab68de25d43d | Coastal |
| About founder | 1509631179647-0177331693ae | Person |
| Quality section | 1490481651871-ab68de25d43d | Ocean |
| Map background | 1515886657613-9f3515b0c78f | Coastal |

## Overlay Compliance

- Hero portrait overlay: gradient left side max `rgba(21,28,34,1)` (bg color, not counted) ✓
- Heritage overlay: `rgba(13,19,24,0.62)` ✓ (≤ 0.65)
- Banner overlays: `rgba(13,19,24,0.58)` ✓ (≤ 0.65)

## Background Color Compliance

- `--bg: #151C22` → R=21, G=28, B=34 → avg = 27.7 ≥ 20 ✓
- `--surface: #1D2830` → R=29, G=40, B=48 → avg = 39.0 ≥ 15 ✓
- `--surface-2: #253340` → R=37, G=51, B=64 → avg = 50.7 ≥ 15 ✓
- Footer uses `background: var(--bg)` ✓
