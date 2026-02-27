# Image Validation — KURETAKE Bamboo Ryokan & Onsen

## Status: Placeholder Images Required

This template uses local image paths only. All image references point to the `images/` directory within the template folder. No external image URLs are embedded.

## Required Images

| File | Dimensions (recommended) | Usage | Notes |
|---|---|---|---|
| `hero-1.webp` | 2400×1600px | Index hero bg + Contact hero | Bamboo grove or ryokan exterior at dusk; strong atmosphere |
| `hero-2.webp` | 2400×1600px | About page hero | Forest path, gate, or stone garden |
| `hero-3.webp` | 2400×1600px | Collection page hero | Tatami room interior or veranda view |
| `hero-4.webp` | 2400×1600px | Process/Rituals page hero | Dawn scene, onsen steam, or meditation garden |
| `product-1.webp` | 1600×1200px | Bamboo Grand Suite card | Spacious tatami suite with garden/forest view |
| `product-2.webp` | 1600×1200px | Garden View Room card | Tatami room facing moss garden |
| `product-3.webp` | 1600×1200px | Forest Bath Chamber card | Unique bamboo-wall room or forest-view bath |
| `product-4.webp` | 1600×1200px | Matsu Wing card | Traditional Meiji-era aesthetic room |
| `ambient-1.webp` | 1600×1200px | Onsen section main image | Private bath, steam, stone |
| `ambient-2.webp` | 800×800px | Onsen section accent image | Mineral water, moss, ceramic |
| `ambient-3.webp` | 1400×1800px | Heritage section + Access | Bamboo culms, forest texture, or garden detail |
| `thumbnail.webp` | 600px wide (auto height) | Manifest + gallery | Composite of brand identity + hero |

## Image Sourcing Guidelines

### Permitted Sources
- Unsplash (free, no attribution required for commercial use)
- Pexels (free commercial license)
- Pixabay (free commercial license)
- Licensed stock (Adobe Stock, Shutterstock, Getty) if license permits

### Content Constraints
- No face closeups of identifiable individuals
- No individual profile photos
- No images already used in other templates in this library
- Preference: Japanese aesthetic, bamboo, onsen, tatami, garden, stone, ceramics

### Validation Protocol
Before embedding any Unsplash or external URL:
```bash
curl -I {image_url}
# Must return HTTP 200 OK
```

For final production, convert all images to WebP format:
```bash
cwebp -q 82 input.jpg -o output.webp
# Hero images: max 400KB
# Product images: max 200KB
# Ambient images: max 150KB
# Thumbnail: max 80KB, 600px wide
```

## Pre-Validated Unsplash IDs (for Japanese/Nature content)

The following IDs have been confirmed accessible (HTTP 200) and are suitable for ryokan/bamboo themes:

| ID | Approximate Subject |
|---|---|
| `1529958030586-3aae4ca485ff` | Natural texture / earth tones |
| `1512327536842-5aa37d1ba3e3` | Interior / architectural |
| `1558618666-fcd25c85cd64` | Stone / garden |
| `1524504388940-b1c1722653e1` | Forest / nature |

Full URL format: `https://images.unsplash.com/photo-{ID}?w=2400&q=85&auto=format&fit=crop`

## Thumbnail Generation

Once `hero-1.webp` (or a composite screenshot) is available:

```bash
# Option 1: From existing webp
cwebp -q 80 -resize 600 0 \
  multi_clone_hompage/home/20260227_bamboo-ryokan/images/hero-1.webp \
  -o multi_clone_hompage/home/20260227_bamboo-ryokan/images/thumbnail.webp

# Option 2: From screenshot
python3 scripts/capture-page.py 20260227_bamboo-ryokan
# Then convert fullpage.png → thumbnail.webp using cwebp
```

## Git Tracking Rules

Per project convention:
- `thumbnail.webp` — tracked in git (small, required for manifest)
- `thumbnail.jpg` — NOT tracked (gitignored via `**/images/thumbnail.jpg`)
- `fullpage.png` — NOT tracked (gitignored, 300MB+)
- All `*.webp` images in `images/` — NOT tracked unless explicitly added

The `generate-manifest.js` script searches for thumbnails in this priority order:
1. `thumbnail.webp`
2. `thumbnail.jpg`
3. `fullpage.png`
