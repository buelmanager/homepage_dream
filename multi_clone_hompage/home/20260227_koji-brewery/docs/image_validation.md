# Image Validation — KOJI Fermentation Studio

**Template:** `20260227_koji-brewery`
**Date:** 2026-02-27

---

## Image Strategy

All images in this template use **local paths only** (`images/` directory). No external Unsplash or CDN image URLs are embedded in the HTML. This ensures:

1. No broken images from expired or changed URLs
2. Full control over image quality and content
3. Compliance with deployment requirements

---

## Required Image Files

| Filename | Used In | Recommended Content |
|---|---|---|
| `hero-1.webp` | index.html hero background | Overhead view of koji-covered rice, cedar textures, or fermentation vessels |
| `hero-2.webp` | about.html brewer profile, index heritage | Person working at koji tables (no face closeup), hands in grain |
| `hero-3.webp` | collection spotlight, index heritage | Close-up of miso, fermented products, or koji grain |
| `hero-4.webp` | process harvest, about page hero | Fermentation jars, cedar chamber interior, or white koji mycelium |
| `product-1.webp` | Shio Koji product card | White paste in ceramic bowl or jar |
| `product-2.webp` | Amazake product card | Milky white beverage, warm drink setting |
| `product-3.webp` | Mugi Miso product card | Dark brown miso paste in clay crock |
| `product-4.webp` | Sake Kasu product card | Ivory/cream-colored lees in wooden container |
| `ambient-1.webp` | Chamber section, Shiro Shoyu card | Fermentation room interior, dim atmospheric light |
| `ambient-2.webp` | Process steps imagery, Kome Koji card | Hands working with grain or fermentation equipment |
| `ambient-3.webp` | Process hero, muro detail | Cedar chamber detail, wooden textures |
| `thumbnail.webp` | Manifest thumbnail | 600px-wide representative composite of the site |

---

## Thumbnail Generation

```bash
# From a fullpage.png screenshot:
cwebp -q 80 -resize 600 0 \
  multi_clone_hompage/home/20260227_koji-brewery/images/thumbnail.jpg \
  -o multi_clone_hompage/home/20260227_koji-brewery/images/thumbnail.webp

# Verify thumbnail is not empty:
ls -lh multi_clone_hompage/home/20260227_koji-brewery/images/thumbnail.webp
# Should be > 5KB
```

---

## Image Sourcing Guidelines

When sourcing images for this template:

1. **Subject matter:** Fermentation vessels, rice grain, koji mycelium, cedar wood textures, Japanese ceramics, artisan food production
2. **Lighting:** Warm amber, soft diffused light, atmospheric low-key lighting
3. **Composition:** Detail shots, overhead flats, environmental/atmospheric shots — NO portrait faces
4. **Color compatibility:** Images should work within dark olive overlay context (filter: brightness(0.35–0.45) applied via CSS)
5. **Format:** WebP preferred, minimum 1200px wide for hero images, 800px for product cards

---

## Validated Unsplash IDs (General Reference Pool)

These IDs have been confirmed valid for general use (from project memory):

```
1529958030586-3aae4ca485ff
1512327536842-5aa37d1ba3e3
1558618666-fcd25c85cd64
1524504388940-b1c1722653e1
1515886657613-9f3515b0c78f
1490481651871-ab68de25d43d
1543076447-215ad9ba6923
1551488831-00ddcb6c6bd3
1503342394128-c104d54dba01
1469334031218-e382a71b716b
```

**Note:** For food/fermentation-specific content, search Unsplash for: koji, miso, fermentation, sake, japanese food production, ceramic bowl, cedar wood. Always validate URLs with `curl -I` before embedding.

---

## gitignore Notes

Per project rules:
- `thumbnail.webp` → **git tracked** (required for manifest)
- `thumbnail.jpg` → **gitignored** (do not commit)
- `fullpage.png` → **gitignored** (too large, ~300MB)
- All other `.webp` files in `images/` → included in git
