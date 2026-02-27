# Image Validation — CHADO Matcha Ceremony Studio

## Image Strategy
All images are referenced as local `.webp` files in the `images/` directory. No external image URLs (Unsplash, etc.) are embedded in the HTML. This avoids broken image issues entirely and follows the project rule for thumbnail deployment.

## Required Image Files

| File | Used In | Alt Text Summary | Dimensions (recommended) |
|------|---------|-----------------|--------------------------|
| `hero-1.webp` | index.html hero background | Hero background — garden or ceremony scene | 1920×1080px min |
| `hero-2.webp` | index.html tearoom grid, contact.html visit | Ceremony room or garden path | 1200×900px |
| `hero-3.webp` | about.html founder portrait | Tea master portrait | 800×1067px (3:4) |
| `hero-4.webp` | about.html Urasenke section | Traditional tools on tatami | 1200×900px |
| `product-1.webp` | index.html experience, collection.html featured | Usucha bowl with matcha foam | 1200×900px |
| `product-2.webp` | collection.html koicha card | Iga ware chawan or koicha | 1200×675px (16:9) |
| `product-3.webp` | index.html heritage, collection.html seasonal | Seasonal confection/wagashi | 1200×675px (16:9) |
| `product-4.webp` | index.html heritage, process.html home | Stone mill or home practice bowl | 1200×675px (16:9) |
| `ambient-1.webp` | index.html experience, collection.html private | Ceremony preparation detail | 1200×1500px (4:5) |
| `ambient-2.webp` | index.html tearoom, collection.html corporate | Tearoom interior or group | 800×1067px (3:4) |
| `ambient-3.webp` | index.html tearoom roji | Garden path or roji garden | 800×1067px (3:4) |
| `thumbnail.webp` | meta.json, manifest | Site thumbnail | 600px wide |

## Thumbnail Generation

After creating or capturing the homepage:

```bash
# From fullpage screenshot:
cwebp -q 80 -resize 600 0 \
  multi_clone_hompage/home/20260227_matcha-ceremony/images/fullpage.png \
  -o multi_clone_hompage/home/20260227_matcha-ceremony/images/thumbnail.webp

# From JPEG thumbnail:
cwebp -q 80 -resize 600 0 \
  multi_clone_hompage/home/20260227_matcha-ceremony/images/thumbnail.jpg \
  -o multi_clone_hompage/home/20260227_matcha-ceremony/images/thumbnail.webp
```

## Git Deployment Rules

| File | Git Status |
|------|-----------|
| `thumbnail.webp` | INCLUDE in git |
| `thumbnail.jpg` | EXCLUDE (in .gitignore) |
| `fullpage.png` | EXCLUDE (in .gitignore, too large) |
| All other `.webp` | INCLUDE |

## Image Content Guidelines
- No face closeups or identifiable individual portrait photos
- Ceramic bowls, matcha preparation, garden scenes, tatami textures
- Neutral, muted, natural backgrounds that complement the Forest Night palette
- Images should have some dark or desaturated tones to work with the green-black color scheme

## Validation Status
- All images are local references — no external URL validation required
- Images must be placed in `images/` before the site can be fully previewed
- The site renders correctly without images (graceful degradation via background colors)
