# Image Validation — LEPIDOPTERA Butterfly Conservatory

## Image Strategy

This template uses **local image references only** — no external Unsplash or CDN image URLs are embedded in any HTML file. All image slots reference the local `images/` directory.

This approach:
1. Eliminates broken image URL risk entirely
2. Keeps the template self-contained for distribution
3. Allows end-users to substitute their own photography

---

## Required Image Files

Place the following files in the `images/` directory to fully activate the template:

### Hero Images (index.html)
| File | Usage | Recommended Content |
|------|-------|---------------------|
| `hero-1.webp` | Layer 1 background (brightness 0.65) | Wide-angle butterfly in flight or tropical canopy |
| `hero-2.webp` | Layer 2 overlay (mix-blend-mode: overlay) | Soft bokeh tropical foliage or wing texture |

### Product/Collection Images (index.html, collection.html)
| File | Usage | Recommended Content |
|------|-------|---------------------|
| `product-1.webp` | Collection item 1 — Blue Morpho slot | Morpho butterfly close-up or flight shot |
| `product-2.webp` | Collection item 2 — Monarch slot | Monarch butterfly on flower |
| `product-3.webp` | Collection item 3 — Atlas Moth slot | Atlas moth wings spread |
| `product-4.webp` | Collection item 4 — Ulysses slot | Ulysses swallowtail in flight |

### Ambient Images
| File | Usage | Recommended Content |
|------|-------|---------------------|
| `ambient-1.webp` | Greenhouse section background | Dense tropical greenhouse interior |
| `ambient-2.webp` | About page hero background overlay | Botanical garden or chrysalis detail |
| `ambient-3.webp` | Unused (reserved for future use) | Any tropical/botanical subject |

### Thumbnail (Required for manifest)
| File | Usage | Notes |
|------|-------|-------|
| `thumbnail.webp` | Template manifest, preview card | 600px wide, 80% quality via cwebp |

---

## Fallback Behavior

When image files are absent, the following fallbacks are active:

- **Hero layers:** CSS background-color (`var(--surface)`) with no visible error
- **Collection items:** Inline SVG butterfly illustrations (already in the HTML)
- **Greenhouse section:** CSS background gradient fallback
- **Heritage section:** CSS gradient + oversized SVG butterfly illustration

No JavaScript errors occur if images are missing — all image references are CSS background-image properties or standard `<img>` elements without `onerror` requirements.

---

## Thumbnail Creation Command

```bash
# If images/thumbnail.jpg exists:
cwebp -q 80 -resize 600 0 \
  multi_clone_hompage/home/20260227_butterfly-conservatory/images/thumbnail.jpg \
  -o multi_clone_hompage/home/20260227_butterfly-conservatory/images/thumbnail.webp

# If cwebp is not installed:
brew install webp
```

---

## Unsplash Search Queries (for sourcing matching images)

If sourcing from Unsplash, these search queries match the template's visual intent:

| Slot | Unsplash Query |
|------|----------------|
| hero-1 | `butterfly tropical flight nature green` |
| hero-2 | `tropical greenhouse foliage bokeh` |
| product-1 | `blue morpho butterfly wings` |
| product-2 | `monarch butterfly orange` |
| product-3 | `atlas moth wings spread` |
| product-4 | `ulysses swallowtail blue butterfly` |
| ambient-1 | `tropical greenhouse interior humid plants` |
| ambient-2 | `chrysalis metamorphosis green` |

**Validation rule:** Before embedding any Unsplash URL directly, verify with:
```bash
curl -I "https://images.unsplash.com/photo-{ID}?w=1200"
```
Only proceed if HTTP 200 is returned.

---

## Status

- External image URLs: **None embedded** — all images are local references
- Broken image risk: **Zero** (no external URL dependencies)
- Thumbnail: Required — generate from captured fullpage.png
- Date validated: 2026-02-27
