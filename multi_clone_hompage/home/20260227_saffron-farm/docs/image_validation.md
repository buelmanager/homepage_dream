# Image Validation — ZAFARAN Saffron Estate

**Date:** 2026-02-27
**Status:** Placeholder images — validation required before deployment

## Image Inventory

All images are local `.webp` files placed in the `images/` directory. They must be sourced and validated before this template is deployed to production.

## Required Images

| Filename | Used In | Description Needed |
|---|---|---|
| hero-1.webp | index.html hero background | Saffron field, purple crocus flowers, wide landscape |
| hero-2.webp | about.html hero, index estate accent | Estate fields or harvest workers in field |
| hero-3.webp | process.html step image, index estate overlay | Dawn harvest, workers picking flowers |
| hero-4.webp | contact.html hero, collection page | Dried saffron threads, close-up product |
| product-1.webp | Super Negin product card | Close-up crimson saffron threads |
| product-2.webp | Negin grade product card | Saffron threads in glass jar or on surface |
| product-3.webp | Persian Tea Blend product | Tea tin or saffron in cup with golden color |
| product-4.webp | Estate Gift Set, collection featured | Luxury packaging or gift box |
| ambient-1.webp | Estate section main, gallery, process | Khorasan landscape or saffron fields |
| ambient-2.webp | Heritage section, harvest intro, gallery | Harvest workers or saffron processing |
| ambient-3.webp | Family section, gallery | Saffron separation or estate interior |
| thumbnail.webp | Manifest, og:image | 600px wide composite of site hero |

## Validation Protocol

Before embedding any Unsplash URL in production:

```bash
curl -I "https://images.unsplash.com/photo-{ID}?w=1600&q=80"
```

Confirm HTTP 200 response. If 404 or redirect, do not use.

## Suggested Unsplash IDs (Pre-validated pool)

From project memory validated pool — cross-check before use:

```
1529958030586-3aae4ca485ff  (food/product close-up)
1512327536842-5aa37d1ba3e3  (nature/landscape)
1558618666-fcd25c85cd64     (product)
1524504388940-b1c1722653e1  (natural texture)
1515886657613-9f3515b0c78f  (person/hands)
```

## Notes

- No face closeups or individual profile photos per project rules
- Photographer credit format: `alt="description — Photo by {photographer}"`
- Use cwebp to convert sourced images to .webp:
  ```bash
  cwebp -q 80 -resize 1600 0 input.jpg -o images/hero-1.webp
  ```
- Thumbnail generation:
  ```bash
  cwebp -q 80 -resize 600 0 images/hero-1.webp -o images/thumbnail.webp
  ```

## Thumbnail Deployment Rule

- `thumbnail.webp` is the ONLY thumbnail format committed to git
- `thumbnail.jpg` and `fullpage.png` are gitignored
- Verify thumbnail.webp exists before running `npm run generate-manifest`
