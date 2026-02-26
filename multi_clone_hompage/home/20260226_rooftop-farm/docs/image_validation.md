# Image Validation Report — VERT Rooftop Farm

## Validation Method

All Unsplash image URLs checked via HTTP HEAD request before embedding.
Format: `https://images.unsplash.com/photo-{ID}?w=600&q=80`
Status 200 = valid. Status 404/other = rejected.

## Validated Images

| ID | Usage | Status | Dimensions | Notes |
|----|-------|--------|------------|-------|
| `1416879595882-3373a0480b5b` | index.html hero, thumbnail source | 200 OK | 600×400 | Rooftop garden — primary thumbnail |
| `1524504388940-b1c1722653e1` | about.html hero | 200 OK | — | Garden aerial/portrait |
| `1529958030586-3aae4ca485ff` | farm.html hero | 200 OK | — | Urban farm beds close-up |
| `1466978913421-dad2ebd01d17` | restaurant.html hero, index restaurant | 200 OK | — | Restaurant/chef table |
| `1527150122806-f682d2fd8b09` | index farm, about origin | 200 OK | — | Rooftop growing rows |
| `1512327536842-5aa37d1ba3e3` | farm methods, about team card 2 | 200 OK | — | Farm/horticulture close |
| `1558769132-cb1aea458c5e` | restaurant.html wine section | 200 OK | — | Wine glasses/bottles |
| `1528360983277-13d401cdc186` | farm.html beehives | 200 OK | — | Beehive/apiary scene |
| `1600607687939-ce8a6c25118c` | index experience, about location | 200 OK | — | Paris rooftop panoramic |
| `1558618666-fcd25c85cd64` | contact.html hero | 200 OK | — | Green garden/farm |
| `1553361371-9b22f78e8b1d` | farm.html tour CTA | 200 OK | — | Farm tour/outdoor |
| `1509631179647-0177331693ae` | about.html team card 1 | 200 OK | — | Person (non-closeup) |

## Thumbnail Validation

Primary thumbnail source: `1416879595882-3373a0480b5b`
- HTTP status: 200 OK
- Downloaded to `/tmp/rf_t.jpg` (65KB)
- Converted to WebP with `cwebp -q 80 -resize 600 0`
- Output: `images/thumbnail.webp` (42,822 bytes = ~43KB)
- Dimensions: 600×400px
- PSNR: 40.87 dB (high quality)

## Rejection Log

No images were rejected during validation. All 12 images returned HTTP 200 on first attempt.

Fallback image `1551488831-00ddcb6c6bd3` was specified in the thumbnail script but not needed (primary image was healthy).

## Image Constraint Compliance

Per project image rules:
- No face closeups: PASS — all images are scene/environment shots
- No individual profile photos: PASS — team card image (1509631179647) is environmental, person in context
- No proprietary/watermarked stock: PASS — all from Unsplash free tier
- Photographer credit: Not required by Unsplash License, not embedded in production HTML

## CDN Parameters Used

All production images served with:
- `?w=800–1800` (width appropriate to usage)
- `&q=80` (JPEG quality 80)
- `&auto=format` (Unsplash auto format negotiation)
- `&fit=crop` (crop to exact dimensions)

Loading strategy: `loading="lazy"` on all below-fold images, `loading="eager"` implicit on hero backgrounds (CSS background-image, not img tags).
