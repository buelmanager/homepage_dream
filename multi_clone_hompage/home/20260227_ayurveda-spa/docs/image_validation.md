# Image Validation — VAIDYA Ayurveda Spa

## Required Images

This template uses **11 local image files**. All must be placed in `images/` before deployment.

| Filename | Role | Recommended Subject |
|----------|------|---------------------|
| `images/hero-1.webp` | Hero parallax layer 1 (primary) | Ayurveda treatment room, warm oil, or spa interior |
| `images/hero-2.webp` | Hero parallax layer 2 (overlay) | Botanical herbs, leaves, or water texture |
| `images/hero-3.webp` | collection.html page hero background | Treatment preparation, hands with oils |
| `images/hero-4.webp` | contact.html page hero background | Kerala backwaters, nature, calm water |
| `images/product-1.webp` | Treatments section image; treatment cards | Herbal oils, copper vessels, massage setup |
| `images/product-2.webp` | about.html founder image; intro section | Hands preparing herbs, oil preparation |
| `images/product-3.webp` | Heritage / lineage section | Classical Ayurvedic herbs, dried botanicals |
| `images/product-4.webp` | Treatment cards | Medicinal plant, herb jar, or oil bottle |
| `images/ambient-1.webp` | Atelier top image; heritage background | Spa treatment room, candlelit interior |
| `images/ambient-2.webp` | Atelier bottom image; locations | Herb preparation workspace, mortar & pestle |
| `images/ambient-3.webp` | Heritage portrait image | Ayurveda practitioner, plant-filled space |
| `images/thumbnail.webp` | Template thumbnail (600px wide) | Best representative image of the template |

## Image Specifications

- **Format**: WebP preferred (smallest file size, modern browser support)
- **Hero images**: Minimum 1920 × 1080px (used as full-screen backgrounds)
- **Product/ambient images**: Minimum 800 × 600px
- **Thumbnail**: Exactly or approximately 600px wide

## Validation Rules (Per Project Memory)

Before deploying any image:
1. For Unsplash URLs: run `curl -I {url}` to verify HTTP 200
2. No face closeups or individual profile photos
3. No images with visible brand logos or text
4. All images must evoke an Ayurvedic / healing spa atmosphere

## Suggested Unsplash Search Terms

For sourcing compliant images:
- `ayurveda oil massage` — for hero and treatment images
- `kerala spa herbs` — for product images
- `ayurvedic herbs copper vessel` — for product/ambient
- `meditation spa interior candlelight` — for ambient images
- `botanical herbs mortar pestle` — for preparation shots

## Pre-Validated Unsplash IDs (From Project Memory)

The following IDs are confirmed 200 OK and may be used if local images are unavailable:

- `1529958030586-3aae4ca485ff` — botanical/natural
- `1512327536842-5aa37d1ba3e3` — spa/wellness
- `1558618666-fcd25c85cd64` — herbs/botanicals
- `1524504388940-b1c1722653e1` — spa interior
- `1515886657613-9f3515b0c78f` — wellness
- `1490481651871-ab68de25d43d` — fabric/textile
- `1503342394128-c104d54dba01` — warm tones/natural

## Thumbnail Generation Command

Once hero or representative images are available:

```bash
# Generate thumbnail.webp from any source image
cwebp -q 80 -resize 600 0 \
  multi_clone_hompage/home/20260227_ayurveda-spa/images/hero-1.webp \
  -o multi_clone_hompage/home/20260227_ayurveda-spa/images/thumbnail.webp

# If cwebp not installed:
brew install webp
```

## Critical Notes

- `thumbnail.webp` — git included (required for manifest)
- `thumbnail.jpg` — NEVER use (gitignored per project rules)
- `fullpage.png` — gitignored (too large for Vercel)
- All images in `images/` directory referenced with relative paths `images/filename.webp`
