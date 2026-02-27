# Image Validation — ZERO Float Therapy Studio

**Slug:** 20260227_floatation-tank
**Date:** 2026-02-27

## Image Strategy

All images are referenced as **local paths** in the `images/` directory. No external Unsplash URLs are embedded in the HTML files. Images must be placed in the directory before the template can be fully previewed.

## Required Images

| Filename | Used In | Dimensions | Description |
|---|---|---|---|
| `hero-1.webp` | index.html hero bg (fixed) | 1920×1080 min | Serene float pod or water surface |
| `hero-2.webp` | process.html hero bg | 1920×1080 min | Float studio corridor or pod room |
| `hero-3.webp` | process.html stage III image | 800×600 min | Float pod interior or abstract water |
| `hero-4.webp` | Reserved / future use | 1920×1080 min | Studio exterior or teal water |
| `product-1.webp` | index.html pod section | 800×1000 min | Float pod exterior, side view |
| `product-2.webp` | about.html intro, collection.html | 800×1000 min | Float pod or suite interior |
| `product-3.webp` | about.html founder section | 600×800 min | Float pod detail or studio element |
| `product-4.webp` | collection.html private suite | 800×600 min | Private suite or two-pod room |
| `ambient-1.webp` | about.html hero bg, process.html stage I | 1600×900 min | Studio reception or lounge area |
| `ambient-2.webp` | index.html booking, process.html stage IV | 800×600 min | Post-float lounge or relaxation space |
| `ambient-3.webp` | about.html research, process.html stage V | 800×800 min | Integration space or tea/herbal detail |
| `thumbnail.webp` | Manifest preview | 600×400 | Template preview — index.html screenshot |

## Image Content Guidelines

### Float Tank / Pod Images
- Show pods with closed or partially open lids
- Avoid showing faces or people inside pods (privacy)
- Prefer dramatic lighting: single light source, deep shadows, teal/cool tones
- Water surface reflections are ideal

### Studio / Ambient Images
- Clean, minimal interiors with deep teal or dark neutral walls
- Sparse, intentional objects (a cup of tea, a towel, a plant)
- Soft, low-level lighting — not clinical, not overly warm
- No clutter, no branding visible in photographs

### Restrictions (per project rules)
- NO face closeups
- NO individual profile photos
- NO stock photography that appears generic or over-lit

## Suggested Unsplash Search Terms

For sourcing appropriate images from Unsplash (validate all URLs before embedding):

- "float tank sensory deprivation" — pod shots
- "spa pool dark water" — water texture
- "luxury wellness studio minimal" — ambient shots
- "teal dark interior calm" — color-matched environments
- "meditation pod spa" — modern wellness environments

## Pre-validated Unsplash IDs (from project memory)

These IDs have been confirmed HTTP 200 and can be used if needed:

```
1529958030586-3aae4ca485ff
1524504388940-b1c1722653e1
1558618666-fcd25c85cd64
1512327536842-5aa37d1ba3e3
1558769132-cb1aea458c5e
1582719508461-905c673771fd
1528360983277-13d401cdc186
1600607687939-ce8a6c25118c
```

## Thumbnail Generation

When images are in place, generate thumbnail.webp using:

```bash
# Capture full page screenshot first
python3 scripts/capture-page.py 20260227_floatation-tank

# Convert to webp thumbnail
cwebp -q 80 -resize 600 0 \
  multi_clone_hompage/home/20260227_floatation-tank/images/thumbnail.jpg \
  -o multi_clone_hompage/home/20260227_floatation-tank/images/thumbnail.webp
```

Note: `thumbnail.jpg` and `fullpage.png` are gitignored. Only `thumbnail.webp` should be committed.

## Validation Status

| Image | Status | Notes |
|---|---|---|
| hero-1.webp | Pending | Awaiting image placement |
| hero-2.webp | Pending | Awaiting image placement |
| hero-3.webp | Pending | Awaiting image placement |
| hero-4.webp | Pending | Awaiting image placement |
| product-1.webp | Pending | Awaiting image placement |
| product-2.webp | Pending | Awaiting image placement |
| product-3.webp | Pending | Awaiting image placement |
| product-4.webp | Pending | Awaiting image placement |
| ambient-1.webp | Pending | Awaiting image placement |
| ambient-2.webp | Pending | Awaiting image placement |
| ambient-3.webp | Pending | Awaiting image placement |
| thumbnail.webp | Pending | Generate after images placed |
