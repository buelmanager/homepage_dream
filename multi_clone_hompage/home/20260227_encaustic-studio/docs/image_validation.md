# Image Validation — CEREUS Encaustic Art Studio

**Template Slug:** `20260227_encaustic-studio`
**Date:** 2026-02-27

---

## Image Strategy

All images in this template use **local file paths** in the `images/` directory. No external image URLs (Unsplash, CDN, etc.) are embedded in the HTML files. This eliminates the risk of broken image URLs at deployment.

---

## Required Image Files

The following files must be placed in `multi_clone_hompage/home/20260227_encaustic-studio/images/`:

| Filename | Format | Recommended Size | Usage |
|---|---|---|---|
| `hero-1.webp` | WebP | 1920×1080px | Index.html hero background |
| `hero-2.webp` | WebP | 1920×1080px | Process.html hero background |
| `hero-3.webp` | WebP | 800×1000px | Collection abstract card |
| `hero-4.webp` | WebP | 600×900px | Collection portrait card |
| `product-1.webp` | WebP | 800×1000px | Heritage section + abstract card |
| `product-2.webp` | WebP | 600×900px | Portrait work card |
| `product-3.webp` | WebP | 1000×750px | Landscape work card |
| `product-4.webp` | WebP | 800×1000px | Commission card + archival section |
| `ambient-1.webp` | WebP | 800×1000px | Studio section main + artist portrait |
| `ambient-2.webp` | WebP | 800×800px | Studio section accent |
| `ambient-3.webp` | WebP | 800×1000px | Abstract work card |
| `thumbnail.webp` | WebP | 600px wide | Manifest thumbnail (REQUIRED for deployment) |

---

## Thumbnail Generation

The `thumbnail.webp` is required for the template manifest. Generate it from any captured screenshot:

```bash
# If you have a fullpage.png:
cwebp -q 80 -resize 600 0 \
  multi_clone_hompage/home/20260227_encaustic-studio/images/fullpage.png \
  -o multi_clone_hompage/home/20260227_encaustic-studio/images/thumbnail.webp

# Or from a JPEG:
cwebp -q 80 -resize 600 0 \
  multi_clone_hompage/home/20260227_encaustic-studio/images/thumbnail.jpg \
  -o multi_clone_hompage/home/20260227_encaustic-studio/images/thumbnail.webp
```

If `cwebp` is not installed: `brew install webp`

---

## Recommended Photography Content

For authentic encaustic studio imagery, the following subjects are recommended:

### Hero Images (hero-1..4)
- Close-up molten wax surface — rich amber, ochre tones
- Panel mid-process: layered wax with visible brush strokes and fused edges
- Dark studio atmosphere with warm heating tools in frame
- Fayum-inspired portrait panel with gold ground

### Product Images (product-1..4)
- Finished encaustic abstracts with strong surface texture
- Burnished encaustic portrait panel (Fayum-style)
- Landscape-format panel: earth tones, horizon line
- Commission inquiry panel: neutral, contemplative

### Ambient Images (ambient-1..3)
- Studio interior: workbench, pigment pots, heating tools
- Artist's hands applying wax (not face)
- Close-up of pigment pots: ochre, cobalt, sienna dust

### Photography Constraints
- No stock faces or individual close-up portraits
- Warm, low-key studio lighting preferred
- Colour palette should harmonise with Midnight Purple theme
- Avoid cool-blue or clinical lighting

---

## Git Rules

Per project MEMORY.md:
- `thumbnail.webp` — git INCLUDED (required for manifest)
- `thumbnail.jpg` — git EXCLUDED (`.gitignore` rule)
- `fullpage.png` — git EXCLUDED (size limit)
- `/public/templates/` — git EXCLUDED (build-time generated)

---

## Validation Status

| File | Status |
|---|---|
| All local image paths | No HTTP request at build time — validation not applicable |
| `thumbnail.webp` | Must be generated before deployment |
| External CDN (GSAP, Swiper, Fonts) | Validated at time of authoring — all confirmed live |
