# Image Validation — SCRIPTORIUM Manuscript Studio

**Template:** 20260227_manuscript-studio
**Date:** 2026-02-27

## Image Inventory

All images are referenced as local paths. No external URLs are embedded in the HTML files.

| Filename | Used In | Alt Text | Status |
|----------|---------|----------|--------|
| `images/hero-1.webp` | index.html hero bg, contact.html hero bg | (background) | Requires supply |
| `images/hero-2.webp` | about.html hero bg | (background) | Requires supply |
| `images/hero-3.webp` | about.html history section | "Scriptorium stone granary studio" | Requires supply |
| `images/hero-4.webp` | collection.html hero bg | (background) | Requires supply |
| `images/product-1.webp` | index.html collection, about.html masters, collection.html Book of Hours | "Book of Hours commission" | Requires supply |
| `images/product-2.webp` | index.html, about.html, collection.html | "Wedding manuscript commission" | Requires supply |
| `images/product-3.webp` | index.html, about.html, collection.html, process.html | "Heraldic family crest illumination" | Requires supply |
| `images/product-4.webp` | index.html, collection.html | "Illuminated poem book on vellum" | Requires supply |
| `images/ambient-1.webp` | index.html workshop, process.html hero bg, process.html step I | "Scriptorium workshop interior" | Requires supply |
| `images/ambient-2.webp` | index.html workshop, process.html step II | "Gold leaf application detail" | Requires supply |
| `images/ambient-3.webp` | index.html heritage, process.html step IV | "Medieval manuscript detail" | Requires supply |
| `images/thumbnail.webp` | meta.json, manifest | Thumbnail preview | Requires generation |

## Recommended Image Style

For visual coherence with the Onyx Stone palette, all images should:
- Have naturally dark or warm tones that complement `#181818` backgrounds
- Avoid bright white or pure-white backgrounds
- Show manuscript, parchment, writing instrument, or architectural textures
- Not include recognisable living individuals' faces

## Suggested Unsplash Search Terms

Use only pre-validated Unsplash image IDs from the project's validated list, or search for:
- "medieval manuscript", "illuminated manuscript"
- "calligraphy ink", "vellum parchment"
- "gold leaf gilding", "quill writing"
- "old library", "monastery scriptorium"
- "dark stone interior", "old book"

## Thumbnail Generation

After placing a `fullpage.png` screenshot:
```bash
cwebp -q 80 -resize 600 0 \
  multi_clone_hompage/home/20260227_manuscript-studio/images/thumbnail.jpg \
  -o multi_clone_hompage/home/20260227_manuscript-studio/images/thumbnail.webp
```

Only `thumbnail.webp` should be committed to git. `thumbnail.jpg` and `fullpage.png` are excluded by `.gitignore`.

## External URL Policy

No external image URLs are present in any HTML file in this template. This ensures:
- No broken image risk from Unsplash URL expiry
- No dependency on external CDN availability for images
- Full offline usability when images are locally supplied
