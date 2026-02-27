# Image Validation Report — MERIDIAN Lighthouse Inn

## Image Strategy

This template uses **local image paths only** — all images are referenced as `images/<filename>.webp` relative paths. No external Unsplash URLs or CDN image links are embedded in the HTML.

This approach ensures:
1. No dependency on third-party image availability
2. No broken images from Unsplash URL expiry or photo removal
3. Full control over image quality and format
4. Compliance with project thumbnail deployment rules

## Required Images

The following images must be placed in `images/` before the template is deployed:

### Hero Images

| Filename | Usage | Recommended Subject |
|----------|-------|---------------------|
| `hero-1.webp` | Hero layer 1 (Ken Burns base) | Lighthouse exterior with Atlantic ocean, dramatic sky |
| `hero-2.webp` | Hero layer 2 (overlay, mix-blend-mode: overlay) | Atmospheric texture, wave/fog close-up |
| `hero-3.webp` | About page hero, Process arrival step | Lighthouse from coastal road or cliff approach |
| `hero-4.webp` | Process dining section | Restaurant interior, candles, ocean view |

### Product (Room) Images

| Filename | Usage | Recommended Subject |
|----------|-------|---------------------|
| `product-1.webp` | Keeper's Suite — collection grid, about page | Tower suite interior, panoramic window, luxury bedding |
| `product-2.webp` | Lantern Room — collection grid | Tower room with glass walls, Fresnel lens view |
| `product-3.webp` | Fog Horn Loft — collection grid | Loft interior with iron beams, porthole windows |
| `product-4.webp` | Tide Room — collection grid | Arched window, sea view, stone embrasure |

### Ambient Images

| Filename | Usage | Recommended Subject |
|----------|-------|---------------------|
| `ambient-1.webp` | Captain's Quarters feature, Collection page | Private deck, Atlantic panorama, brass fittings |
| `ambient-2.webp` | Heritage section (main), Values section, Dining section | Lighthouse exterior detail, historic architecture |
| `ambient-3.webp` | Heritage section (accent), Process farewell | Tide pools, coastal rocks, Atlantic horizon |

### Thumbnail

| Filename | Usage | Notes |
|----------|-------|-------|
| `thumbnail.webp` | Template manifest, gallery preview | 600px wide, generated from hero-1.webp or fullpage screenshot |

## Image Format Notes

- All images: `.webp` format required
- `thumbnail.webp` only — never `thumbnail.jpg` (gitignored per project rules)
- Recommended quality: `-q 80` for cwebp conversion
- Recommended resize: `600px` width for thumbnail

## Image Composition Guidelines

### Hero (hero-1.webp)
- Avoid face closeups or individual people prominently featured
- Lighthouse must be clearly visible
- Ocean horizon in frame
- Evening or golden hour lighting preferred for Arctic Slate palette compatibility

### Room Images (product-1..4.webp)
- Interior shots showing the Atlantic ocean through windows
- Maritime design elements (brass, driftwood, stone)
- Warm artificial lighting against cool exterior ocean views

### Color Compatibility Check
- All images should work with the `--accent: #A0C4D8` (arctic blue) overlay tones
- Dark atmospheric images work best (dark corners, vignetting)
- Avoid pure white backgrounds or very high-key lighting

## Validation Status

| Image | Status | Notes |
|-------|--------|-------|
| hero-1.webp | Pending — local file required | No external URL |
| hero-2.webp | Pending — local file required | No external URL |
| hero-3.webp | Pending — local file required | No external URL |
| hero-4.webp | Pending — local file required | No external URL |
| product-1.webp | Pending — local file required | No external URL |
| product-2.webp | Pending — local file required | No external URL |
| product-3.webp | Pending — local file required | No external URL |
| product-4.webp | Pending — local file required | No external URL |
| ambient-1.webp | Pending — local file required | No external URL |
| ambient-2.webp | Pending — local file required | No external URL |
| ambient-3.webp | Pending — local file required | No external URL |
| thumbnail.webp | Pending — generate after screenshot | Use cwebp -q 80 -resize 600 0 |

## Thumbnail Generation Command

After capturing a fullpage screenshot:

```bash
cwebp -q 80 -resize 600 0 \
  multi_clone_hompage/home/20260227_lighthouse-inn/images/thumbnail.jpg \
  -o multi_clone_hompage/home/20260227_lighthouse-inn/images/thumbnail.webp
```

Or from a fullpage.png:

```bash
cwebp -q 80 -resize 600 0 \
  multi_clone_hompage/home/20260227_lighthouse-inn/images/fullpage.png \
  -o multi_clone_hompage/home/20260227_lighthouse-inn/images/thumbnail.webp
```
