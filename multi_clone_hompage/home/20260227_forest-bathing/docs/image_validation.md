# Image Validation — SHINRIN Forest Bathing Retreat

**Template:** `20260227_forest-bathing`
**Date:** 2026-02-27

---

## Image Requirements

All images in this template use **local paths** (`images/filename.webp`). No external Unsplash URLs are embedded in the HTML. Images must be placed in the `images/` directory by the user or generation pipeline.

---

## Required Images

| Filename | Dimensions | Usage | Content |
|----------|-----------|-------|---------|
| `hero-1.webp` | 1920×1080+ | Hero layer 1 (Ken Burns) | Ancient forest canopy, old-growth trees, misty morning |
| `hero-2.webp` | 1920×1080+ | Hero layer 2 (Ken Burns overlay) | Forest floor, filtered light, soft bokeh |
| `hero-3.webp` | 1920×1080+ | About page hero, collection hero | Forest trail, ancient trees |
| `hero-4.webp` | 1920×1080+ | Contact/CTA section backgrounds | Forest at dusk or dawn, atmospheric mist |
| `product-1.webp` | 1200×900+ | Half-Day Forest Bath card | Guest or guide in forest, peaceful atmosphere |
| `product-2.webp` | 1200×900+ | Full Immersion Day card | Deep forest, sunrise light, immersive scene |
| `product-3.webp` | 1200×900+ | Moonlit Forest Walk card | Night forest, moonlight through trees |
| `product-4.webp` | 1200×900+ | Corporate Restoration card | Group setting in nature, contemplative |
| `ambient-1.webp` | 1920×1080+ | Forest Studio section, About page | Dramatic canopy view, looking up |
| `ambient-2.webp` | 1920×1080+ | Process hero, sticky image | Forest path, mossy ground, quiet |
| `ambient-3.webp` | 1920×1080+ | Heritage section, guide image | Forest guide or solitary figure in forest |
| `thumbnail.webp` | 600×400 | Template thumbnail | Composite of hero or best section |

---

## Image Sourcing Guidelines

### Content Rules
- NO face closeups of identifiable individuals
- NO stock-photo poses (pointing at phone in forest, etc.)
- Forest content only — no studio or indoor shots
- Natural light preferred — no heavy flash or artificial lighting
- Seasonal: temperate rainforest / Pacific Northwest aesthetic

### Recommended Unsplash Search Terms
- "old growth forest"
- "shinrin yoku"
- "forest bathing"
- "temperate rainforest"
- "hemlock cedar forest oregon"
- "mossy forest floor"
- "forest canopy light"
- "misty forest"
- "forest trail morning"

### Validated Unsplash IDs (from project memory, confirmed 200 OK)
```
1529958030586-3aae4ca485ff
1512327536842-5aa37d1ba3e3
1558618666-fcd25c85cd64
1524504388940-b1c1722653e1
1543076447-215ad9ba6923
1553361371-9b22f78e8b1d
```

### Validation Protocol
Before embedding any Unsplash URL:
```bash
curl -I "https://images.unsplash.com/photo-{ID}?w=1200" 2>/dev/null | head -1
# Must return: HTTP/2 200
```

---

## Thumbnail Generation

After placing images, generate `thumbnail.webp`:

```bash
# Capture full-page screenshot
python3 scripts/capture-page.py 20260227_forest-bathing

# Convert to webp thumbnail (600px wide)
cwebp -q 80 -resize 600 0 \
  multi_clone_hompage/home/20260227_forest-bathing/images/thumbnail.jpg \
  -o multi_clone_hompage/home/20260227_forest-bathing/images/thumbnail.webp
```

**Critical:** Only `thumbnail.webp` is committed to git.
- `thumbnail.jpg` → gitignored
- `fullpage.png` → gitignored (too large for Vercel)

---

## Dark Section Check

Run after images are in place:
```bash
python3 scripts/check-sections.py 20260227_forest-bathing
```

**Expected:** No WARNING rows (all section averages should be ≥ 15).

All section backgrounds in this template use CSS custom properties set to values averaging ≥ 20:
- `--bg: #141810` → avg 20.0 ✓
- `--surface: #1C2018` → avg 28.0 ✓
- `--surface2: #222A1E` → avg 35.3 ✓

If hero image `brightness(0.6)` creates a dark area exceeding the threshold: increase brightness filter to `brightness(0.65)` or adjust hero overlay opacity.
