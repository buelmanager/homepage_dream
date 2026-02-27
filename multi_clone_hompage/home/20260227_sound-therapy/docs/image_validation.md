# Image Validation — RESONANCE Sound Healing Studio

**Template:** `20260227_sound-therapy`
**Date:** 2026-02-27

---

## Image Strategy

This template uses **local image paths only** — all images are referenced as relative paths within the `images/` directory. No external Unsplash URLs are embedded directly in any HTML file.

All `<img>` tags follow this pattern:
```html
<img src="images/[name].webp" alt="[descriptive alt text]" loading="lazy">
```

---

## Required Images

| Filename | Usage | Dimensions | Alt Text |
|----------|-------|------------|----------|
| `hero-1.webp` | Hero background (index.html) | 1920×1080 min | (background only, no alt needed) |
| `product-1.webp` | Private Sound Bath card | 800×500 | Private Sound Bath session at RESONANCE |
| `product-2.webp` | Group Sound Ceremony card | 800×500 | Group Sound Ceremony at RESONANCE |
| `product-3.webp` | Chakra Alignment card | 800×500 | Chakra Alignment session at RESONANCE |
| `product-4.webp` | Sleep Journey card | 800×500 | Sleep Journey session at RESONANCE |
| `ambient-1.webp` | Chamber section, about page, expect section | 800×1000 | Sound healing chamber / Crystal singing bowls |
| `ambient-2.webp` | Heritage grid, team card | 600×750 | Crystal singing bowls / Sound healing practice |
| `ambient-3.webp` | Heritage grid, team card | 600×750 | Sound healing practice |
| `thumbnail.webp` | Template manifest thumbnail | 600×400 | — |

---

## Recommended Image Content

### hero-1.webp
- Purple-toned sound healing space or crystal bowls in dramatic lighting
- Dark, atmospheric — overlays well with `rgba(19,15,26,0.88)` gradient
- NO face close-ups

### product-1..4.webp
- Session-specific imagery: meditation mats, crystal bowls, candles, hands on bowls
- Warm purple/indigo lighting preferred to match palette
- Horizontal format (16:10 aspect ratio)
- NO identifiable individuals

### ambient-1..3.webp
- Interior studio shots, crystal bowl arrangements, sacred space details
- Vertical format (4:5 for ambient-1, portrait layout)
- Moody, contemplative, cosmic tone

---

## Thumbnail Generation

```bash
# Generate thumbnail.webp from first screenshot
python3 scripts/capture-page.py 20260227_sound-therapy

# Convert to thumbnail.webp (600px wide)
cwebp -q 80 -resize 600 0 \
  multi_clone_hompage/home/20260227_sound-therapy/images/thumbnail.jpg \
  -o multi_clone_hompage/home/20260227_sound-therapy/images/thumbnail.webp
```

Note: `thumbnail.jpg` is gitignored. Only `thumbnail.webp` should be committed.

---

## Image Accessibility

All foreground `<img>` elements include descriptive `alt` attributes.
Background images applied via CSS `background-image` do not require alt text (decorative use).
All images use `loading="lazy"` except above-the-fold content.

---

## Validation Status

| Image | Status | Notes |
|-------|--------|-------|
| hero-1.webp | Pending | Placeholder — add before deployment |
| product-1.webp | Pending | Placeholder — add before deployment |
| product-2.webp | Pending | Placeholder — add before deployment |
| product-3.webp | Pending | Placeholder — add before deployment |
| product-4.webp | Pending | Placeholder — add before deployment |
| ambient-1.webp | Pending | Placeholder — add before deployment |
| ambient-2.webp | Pending | Placeholder — add before deployment |
| ambient-3.webp | Pending | Placeholder — add before deployment |
| thumbnail.webp | Pending | Generate after capture-page.py run |
