# Image Validation — INTONACO Fresco Studio

## Image Strategy

This template uses local image files only. No external Unsplash URLs or CDN image links are embedded directly in the HTML. All `<img>` tags and CSS `background-image` declarations reference local paths within the `images/` directory.

## Required Images

The following images must be provided before deployment:

| Filename | Usage | Recommended Subject |
|----------|-------|-------------------|
| `images/hero-1.webp` | Index hero background | Grand fresco or mural — ceiling or wall |
| `images/hero-2.webp` | Portfolio card 1 (full width) | Palazzo interior with fresco |
| `images/hero-3.webp` | Portfolio card 5 | Salon ceiling fresco |
| `images/hero-4.webp` | Heritage section / collection cards | Fresco technique or detail |
| `images/product-1.webp` | Portfolio card 2, collection grid | Close detail of fresco painting |
| `images/product-2.webp` | Portfolio card 4, collection grid | Mural or painted wall |
| `images/product-3.webp` | Process step / giornata | Painter at work |
| `images/product-4.webp` | Collection grid | Fresco or painting detail |
| `images/ambient-1.webp` | Portfolio card 3, about page bg, category | Studio or atelier atmosphere |
| `images/ambient-2.webp` | Atelier section, founding story | Studio workspace, tools |
| `images/ambient-3.webp` | Heritage accent, collection grid | Pigment preparation or close detail |
| `images/thumbnail.webp` | Manifest thumbnail | 600px wide site preview |

## Image Specifications

- **Format:** WebP (preferred for performance), JPEG acceptable
- **Hero/full-bleed images:** Minimum 1920×1080px, recommended 2400×1600px
- **Portrait/square images:** Minimum 800×800px
- **Thumbnail:** Exactly 600px wide, auto height, WebP format

## Thumbnail Generation

After capturing a full-page screenshot:

```bash
# From project root
python3 scripts/capture-page.py 20260227_fresco-studio

# Generate thumbnail.webp from captured screenshot
cwebp -q 80 -resize 600 0 \
  multi_clone_hompage/home/20260227_fresco-studio/images/thumbnail.jpg \
  -o multi_clone_hompage/home/20260227_fresco-studio/images/thumbnail.webp
```

Note: `thumbnail.jpg` and `fullpage.png` are in `.gitignore`. Only `thumbnail.webp` should be committed to the repository.

## Image Content Guidelines

For fresco/mural studio images, prioritize:
- Wide architectural shots showing murals in context
- Close details of painted surfaces and brush technique
- Preparation materials: pigments, plaster, brushes
- Scaffolding and in-progress work
- Historic chapel or palazzo interiors

Avoid:
- Individual face closeups or identifiable persons
- Modern photographic styles that clash with the Renaissance brand
- Saturated colour images (the template palette is desaturated purple; warm, slightly desaturated images complement it best)

## Color Compatibility Notes

The Midnight Purple palette (`--bg: #130F1A`) pairs best with:
- Warm golden ochre and sienna tones in photographs
- Deep blue ultramarine passages
- Aged plaster textures in warm white/cream
- Natural stone and fresco surfaces

Avoid pure white backgrounds, neon-saturated images, or cool clinical photography.

## No External Image Dependencies

All images in this template are local. The template does not call any external image services at load time. The only external network requests are:
- Google Fonts (typography)
- cdnjs (GSAP 3.12.2)
- cdn.jsdelivr.net (Swiper 11)
