# Image Validation — BRODERIE Embroidery Studio

## Summary

This template uses **local image paths only**. No external Unsplash or CDN image URLs are embedded in any HTML file. All image `src` attributes reference local `images/` directory paths.

---

## Image Inventory

| File | Used In | Description | Status |
|---|---|---|---|
| `images/hero-1.webp` | index.html (hero bg), contact.html (page-hero overlay) | Main hero background — embroidery studio / atmospheric | Placeholder |
| `images/hero-2.webp` | index.html (atelier accent), about.html (artisan 1), process.html (framing stage) | Artisan / close-up work image | Placeholder |
| `images/hero-3.webp` | about.html (artisan 2), process.html (framing section image) | Artisan portrait | Placeholder |
| `images/hero-4.webp` | about.html (artisan 3) | Artisan portrait | Placeholder |
| `images/product-1.webp` | index.html, collection.html (multiple) | Couture embroidery piece — goldwork / silk | Placeholder |
| `images/product-2.webp` | index.html, collection.html | Bridal embroidery — veil or dress detail | Placeholder |
| `images/product-3.webp` | index.html, collection.html | Wall art embroidery — framed piece | Placeholder |
| `images/product-4.webp` | collection.html | Sashiko or heirloom textile | Placeholder |
| `images/ambient-1.webp` | index.html (atelier main), about.html (founder portrait, page-hero overlay), process.html (stage 1) | Studio interior / ambient | Placeholder |
| `images/ambient-2.webp` | index.html (heritage), about.html (location), process.html (stage 2) | Studio exterior or thread arrangement | Placeholder |
| `images/ambient-3.webp` | index.html (process stage 3 bg), process.html (page-hero overlay, stage 3) | Close-up stitching or thread detail | Placeholder |
| `images/thumbnail.webp` | meta.json, manifest | 600px wide thumbnail for template browser | To be generated |

---

## Image Requirements by Category

### Hero Images (hero-1 to hero-4)
- **Recommended:** 1920×1080px minimum
- **Content:** Embroidery studio atmosphere, close-up thread work, needlework detail
- **Mood:** Warm, intimate, dimly lit — consistent with `--bg: #1A0A0E` dark background
- **Avoid:** Direct face portraits (constraint per project rules), bright white backgrounds

### Product Images (product-1 to product-4)
- **Recommended:** 800×1000px (portrait orientation preferred)
- **Content:** Finished embroidery pieces — silk shading, goldwork, bridal, Sashiko
- **Mood:** Clean, close-up detail, showing thread texture
- **Avoid:** Stock photo clichés, obvious AI generation artifacts

### Ambient Images (ambient-1 to ambient-3)
- **Recommended:** 1200×900px minimum
- **Content:** Studio environment, work in progress, thread organisation, framing
- **Mood:** Documentary, intimate, natural light

### Thumbnail (thumbnail.webp)
- **Required:** 600px wide, auto height
- **Generation command:**
  ```bash
  cwebp -q 80 -resize 600 0 \
    multi_clone_hompage/home/20260227_embroidery-studio/images/thumbnail.jpg \
    -o multi_clone_hompage/home/20260227_embroidery-studio/images/thumbnail.webp
  ```

---

## Validated Image Sources (Pre-Approved Unsplash IDs)

If sourcing from Unsplash, the following IDs have been validated as HTTP 200 (from project memory):

```
1529958030586-3aae4ca485ff  — textile/fabric
1512327536842-5aa37d1ba3e3  — craft/making
1558618666-fcd25c85cd64     — thread/colour
1524504388940-b1c1722653e1  — interior/atelier
1515886657613-9f3515b0c78f  — fashion/fabric
1543076447-215ad9ba6923     — botanical
1551488831-00ddcb6c6bd3     — studio/workspace
1503342394128-c104d54dba01  — needlework adjacent
```

**Unsplash base URL:** `https://images.unsplash.com/photo-{ID}?w=1200&q=80`

**Validation command before use:**
```bash
curl -I "https://images.unsplash.com/photo-{ID}?w=1200&q=80"
# Must return HTTP 200 OK
```

---

## No Broken Image Risk

All HTML files reference image paths as relative `images/filename.webp` strings. Since no external URL is hardcoded, there is zero risk of Unsplash 404 errors in the deployed template.

The `<img>` tags use `loading="lazy"` throughout. If an image file is absent, the browser displays a neutral broken-image placeholder rather than causing layout failure.

---

## Deployment Checklist

- [ ] Place all 12 image files in `images/` directory
- [ ] Verify each image at browser before final review
- [ ] Generate `thumbnail.webp` using cwebp
- [ ] Run `npm run generate-manifest` to update templates-manifest.json
- [ ] Capture fullpage.png if needed for reference (not committed to git)
