# Image Validation — DENTELLE Lace Studio

## Status

Images are referenced via **local paths** in all HTML files. No external image URLs (Unsplash, etc.) are used in this template. All image src attributes point to the local `images/` folder.

## Required Images

The following image files must be placed in:
`multi_clone_hompage/home/20260227_lace-studio/images/`

| Filename | Dimensions | Usage | Notes |
|---|---|---|---|
| hero-1.webp | 1920×1080+ | Hero background (index.html) | Wide landscape, lace or textile close-up or studio interior |
| hero-2.webp | 600×800+ | Master lacemaker portrait (about.html) | Studio portrait or hands-at-work |
| hero-3.webp | 600×800+ | Sophie Van Damme portrait (about.html) | Hands at work or profile |
| hero-4.webp | 600×800+ | Ines Claes portrait (about.html) | Lacemaking detail or portrait |
| product-1.webp | 800×1066 | Bruges collar (3:4 ratio) | White or ecru lace on dark background |
| product-2.webp | 800×1066 | Venetian Point cuffs (3:4 ratio) | Needle lace detail |
| product-3.webp | 800×1066 | Torchon panel (3:4 ratio) | Geometric lace pattern |
| product-4.webp | 800×1066 | Chantilly veil (3:4 ratio) | Black or white silk lace |
| ambient-1.webp | 1200×900 | Workshop interior / lineage | Pillow, bobbins, studio atmosphere |
| ambient-2.webp | 1200×900 | Thread and bobbins | Close-up detail of working equipment |
| ambient-3.webp | 1200×900 | Bruges canal / location | Architectural exterior or canal |
| thumbnail.webp | 600×400 | Template thumbnail | Hero section screenshot |

## Image Source Recommendations

For testing/placeholder purposes, suitable Unsplash search terms:
- "bobbin lace" — for product images
- "Bruges Belgium" — for ambient-3
- "textile studio craft" — for ambient images
- "handmade lace detail" — for hero background

## Validation Protocol

Before deploying with real images:
```bash
# Validate all local images exist and are non-zero
for img in hero-1 hero-2 hero-3 hero-4 product-1 product-2 product-3 product-4 ambient-1 ambient-2 ambient-3 thumbnail; do
  file="multi_clone_hompage/home/20260227_lace-studio/images/${img}.webp"
  if [ -f "$file" ]; then
    size=$(wc -c < "$file")
    echo "OK: ${img}.webp (${size} bytes)"
  else
    echo "MISSING: ${img}.webp"
  fi
done
```

## Thumbnail Generation

After capturing the page:
```bash
cwebp -q 80 -resize 600 0 \
  multi_clone_hompage/home/20260227_lace-studio/images/fullpage.png \
  -o multi_clone_hompage/home/20260227_lace-studio/images/thumbnail.webp
```

Or from thumbnail.jpg if available:
```bash
cwebp -q 80 -resize 600 0 \
  multi_clone_hompage/home/20260227_lace-studio/images/thumbnail.jpg \
  -o multi_clone_hompage/home/20260227_lace-studio/images/thumbnail.webp
```

## Notes

- `thumbnail.jpg` is in `.gitignore` — do not use it as the final thumbnail
- `fullpage.png` is in `.gitignore` — too large for deployment
- Only `thumbnail.webp` should be committed to git
- `/public/templates/` is auto-generated at build time — do not manually add files there
