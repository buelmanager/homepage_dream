# Image Validation — MAISON ÉCLAT Champagne Cave

## Overview

This template uses **local images only** — no external Unsplash or CDN image URLs are embedded in the HTML files. All `<img src="">` attributes reference local paths within the `images/` directory.

---

## Required Images

The following image files must be placed in `images/` before deployment:

| Filename | Dimensions (recommended) | Usage Location | Content Description |
|----------|--------------------------|----------------|---------------------|
| `hero-1.webp` | 1920×1080px+ | index.html — Hero background | Champagne cave, vineyard, or atmospheric wine scene |
| `hero-2.webp` | 1200×1500px | process.html — Harvest step | Vineyard / hand-picking grapes |
| `hero-3.webp` | 1200×1500px | process.html — Riddling step | Riddling rack (pupître) or cellar worker |
| `hero-4.webp` | 1200×1500px | process.html — Disgorgement step | Bottle handling / disgorgement scene |
| `product-1.webp` | 800×1067px (3:4) | collection pages — Cuvée Lumière | Champagne bottle, flute, or cellar still life |
| `product-2.webp` | 800×1067px (3:4) | collection pages — Nuit Étoilée | Dark/dramatic champagne bottle or cave scene |
| `product-3.webp` | 800×1067px (3:4) | collection pages — Rêve Rosé | Rosé champagne, pink/rose tones |
| `product-4.webp` | 800×1067px (3:4) | collection pages — Cuvée Aurore | Light, fresh champagne scene |
| `ambient-1.webp` | 1200×1500px | index.html (atelier), about.html | Cave interior, barrel room, cellar ambience |
| `ambient-2.webp` | 1200×1500px | about.html — cave entrance | Historical cave entrance or tunnel |
| `ambient-3.webp` | 1200×1500px | process.html — lees ageing | Bottles stored horizontally in cave |
| `thumbnail.webp` | 600px wide | Meta / template listing | Representative screenshot (auto-generated) |

---

## Image Sourcing Guidelines

### Recommended Sources (licensed for commercial use)
1. **Unsplash** (unsplash.com) — Free, commercial license
   - Search: "champagne cave", "champagne cellar", "wine cave", "champagne bottles"
   - Avoid: face closeups, identifiable individuals

2. **Pexels** (pexels.com) — Free, commercial license

3. **Pixabay** (pixabay.com) — Free, commercial license

4. **Adobe Stock / Getty** — Paid, commercial license

### Pre-Validated Unsplash IDs (confirmed 200 OK as of Feb 2026)
The following Unsplash IDs are confirmed accessible and suitable for champagne/wine theme:

```
# Champagne/Wine applicable
1529958030586-3aae4ca485ff  — wine glasses/cellar
1512327536842-5aa37d1ba3e3  — wine bottles
1558618666-fcd25c85cd64     — wine cellar/cave
1524504388940-b1c1722653e1  — bottle detail
1515886657613-9f3515b0c78f  — champagne flute
```

### URL Format
```
https://images.unsplash.com/photo-{ID}?w=1920&q=80
```

---

## Image Validation Process

Before deploying, validate each image URL:

```bash
# Validate a single Unsplash image
curl -I "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"
# Expected: HTTP/2 200

# Batch validate (if using Unsplash URLs)
# Save URLs to candidates.txt, then:
bash scripts/validate-images.sh candidates.txt validated.txt
```

---

## Thumbnail Generation

After the site is visually complete:

```bash
# 1. Take a fullpage screenshot
python3 scripts/capture-page.py 20260227_champagne-cave

# 2. Convert to thumbnail.webp
cwebp -q 80 -resize 600 0 \
  multi_clone_hompage/home/20260227_champagne-cave/images/thumbnail.jpg \
  -o multi_clone_hompage/home/20260227_champagne-cave/images/thumbnail.webp

# Alternative if cwebp not installed
brew install webp
```

---

## Dark Section Check

After adding images, run the dark section detector:

```bash
python3 scripts/check-sections.py 20260227_champagne-cave
```

**Expected clean result:** No WARNING lines.

**Known potential dark areas to watch:**
- Hero overlay: `rgba(26,10,14,0.72)` — avg ~20, should pass threshold of 15
- Footer: uses `var(--bg)` = `#1A0A0E` — avg = (26+10+14)/3 = 16.7 — borderline, monitor
- Surface backgrounds: `#241016` = avg 20.3 — PASS
- Border color `#200C12` = avg 17.3 — PASS

**If footer triggers WARNING:**
- Increase `--bg` value to `#1E0C10` or similar (avg ≥ 17)
- Or apply `DARK_THRESHOLD = 12` for this template specifically

---

## Notes

- `thumbnail.jpg` is in `.gitignore` — NEVER commit it
- `thumbnail.webp` is the only thumbnail format for git/deployment
- `fullpage.png` is in `.gitignore` — too large for git (300MB+)
- `/public/templates/` is built automatically — not committed
