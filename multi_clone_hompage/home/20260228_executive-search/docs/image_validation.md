# Image Validation — 20260228_executive-search

## Status: Local Images Only

All images for this template are served locally from the `images/` directory. No external Unsplash or CDN image URLs are embedded in any HTML file.

---

## Required Images

| Filename | Usage | Alt Text | Dimensions (suggested) |
|---|---|---|---|
| `hero-1.webp` | Hero background (index.html) | Full-bleed background at brightness 0.35 | 1920×1080+ |
| `hero-2.webp` | Collection card (CEO), gallery item | "Executive boardroom" | 800×600 |
| `hero-3.webp` | Collection card (CTO), gallery item | "Corporate culture" | 800×600 |
| `hero-4.webp` | Collection card (CHRO) | "Leadership meeting" | 800×600 |
| `product-1.webp` | Team card (Eleanor Bain), CFO collection card | "Managing Partner" | 600×800 |
| `product-2.webp` | Team card (James Whitmore) | "Senior Partner" | 600×800 |
| `product-3.webp` | Team card (Dr. Sarah Chen) | "Partner Financial Services" | 600×800 |
| `product-4.webp` | Team card (Ravi Krishnan) | "Partner Asia-Pacific" | 600×800 |
| `ambient-1.webp` | Philosophy section, COO collection card | "Executive leadership advisory" | 800×1000 |
| `ambient-2.webp` | Gallery main item, process.html hero | "Executive boardroom" | 1200×900 |
| `ambient-3.webp` | About.html hero | "Meridian Search founding partners" | 1000×750 |
| `thumbnail.webp` | Template manifest thumbnail | — | 600×auto |

---

## Image Guidelines

### Content Requirements
- No close-up face photography (per project constraints)
- No individual profile photos or portrait headshots
- Preferred: boardroom interiors, corporate office environments, handshake/meeting scenes, architectural executive spaces, abstract corporate imagery

### Style Treatment
- All images are treated with CSS `filter: brightness(0.7–0.85)` and `grayscale(10–20%)` by default
- Hero image uses `filter: brightness(0.35)` for high-contrast text legibility
- Images gain saturation on hover (`.gallery-item:hover img { filter: brightness(0.95) grayscale(0%) }`)

### Format
- All images in `.webp` format for optimal performance
- Avoid JPEG/PNG — use `cwebp` to convert if needed:
  ```bash
  cwebp -q 82 -resize 1920 0 source.jpg -o hero-1.webp
  cwebp -q 80 -resize 600 0 hero-1.webp -o thumbnail.webp
  ```

---

## Thumbnail Generation

```bash
# Generate thumbnail from hero-1.webp
cwebp -q 80 -resize 600 0 \
  multi_clone_hompage/home/20260228_executive-search/images/hero-1.webp \
  -o multi_clone_hompage/home/20260228_executive-search/images/thumbnail.webp
```

**CRITICAL:** Only `thumbnail.webp` is included in git. `thumbnail.jpg` and `fullpage.png` are gitignored.

---

## Validated Unsplash IDs (Pre-approved, if needed)

If generating images via Unsplash, the following IDs are pre-validated as HTTP 200:

| ID | Description | Suitable For |
|---|---|---|
| `1529958030586-3aae4ca485ff` | Corporate architecture | hero background |
| `1512327536842-5aa37d1ba3e3` | Office interior | ambient |
| `1572635196237-14b3f281503f` | Business meeting (abstract) | gallery |
| `1600607687939-ce8a6c25118c` | Modern office | hero, ambient |
| `1509631179647-0177331693ae` | Corporate environment | services |
| `1553361371-9b22f78e8b1d` | Executive space | philosophy |

**DO NOT USE (forbidden IDs):**
- `photo-1558618666-fcd25c85cd64`
- `photo-1524504388940-b1c1722653e1`
- `photo-1551488831-00ddcb6c6bd3`
- `photo-1543076447-215ad9ba6923`
- `photo-1503342394128-c104d54dba01`

---

## Validation Protocol

Before deploying, confirm each image:
1. File exists at correct path
2. File size > 5KB (thumbnail.webp > 10KB preferred)
3. Correct aspect ratio for intended usage
4. Does not violate face/individual constraints
5. WebP format confirmed

```bash
ls -lh multi_clone_hompage/home/20260228_executive-search/images/
```
