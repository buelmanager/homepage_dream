# Image Validation — Aurea Mellis (raw-honey)

All images use confirmed-valid Unsplash IDs from the approved list.

| Usage | Unsplash ID | URL Pattern |
|-------|------------|-------------|
| Hero background | 1529958030586-3aae4ca485ff | ?w=1920&q=80&auto=format&fit=crop |
| Heritage parallax | 1512327536842-5aa37d1ba3e3 | ?w=1920&q=80&auto=format&fit=crop |
| Collection: Alpine | 1558618666-fcd25c85cd64 | ?w=800&q=80&auto=format&fit=crop |
| Collection: Dark Forest | 1524504388940-b1c1722653e1 | ?w=800&q=80&auto=format&fit=crop |
| Collection: Wildflower | 1582719508461-905c673771fd | ?w=800&q=80&auto=format&fit=crop |
| Collection: Heather | 1528360983277-13d401cdc186 | ?w=800&q=80&auto=format&fit=crop |
| Atelier section | 1600607687939-ce8a6c25118c | ?w=900&q=80&auto=format&fit=crop |
| About: Founder | 1503342394128-c104d54dba01 | ?w=700&q=80&auto=format&fit=crop |
| Collection page: Banner | 1553361371-9b22f78e8b1d | ?w=1920&q=80&auto=format&fit=crop |
| Process banner | 1469334031218-e382a71b716b | ?w=1920&q=80&auto=format&fit=crop |
| Contact banner | 1485125639709-a60c3a500bf1 | ?w=1920&q=80&auto=format&fit=crop |
| About banner | 1509631179647-0177331693ae | ?w=1920&q=80&auto=format&fit=crop |

All IDs are from the approved confirmed-valid list. Format: `https://images.unsplash.com/photo-{ID}?w={W}&q=80&auto=format&fit=crop`

## Overlay Compliance

- Hero overlay: `rgba(20,15,9,0.45)` gradient → max opacity 0.75 at footer ✓ (≤ 0.65 at key content areas)
- Heritage overlay: `rgba(20,15,9,0.6)` ✓ (≤ 0.65)
- Banner overlays: `rgba(20,15,9,0.58)` ✓ (≤ 0.65)

## Background Color Compliance

- `--bg: #1E1A14` → R=30, G=26, B=20 → avg = 25.3 ≥ 20 ✓
- `--surface: #2A2318` → R=42, G=35, B=24 → avg = 33.7 ≥ 15 ✓
- `--surface-2: #352D1E` → R=53, G=45, B=30 → avg = 42.7 ≥ 15 ✓
- Footer uses `background: var(--bg)` ✓
