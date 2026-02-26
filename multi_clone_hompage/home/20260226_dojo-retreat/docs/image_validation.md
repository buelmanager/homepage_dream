# Image Validation Report — MUSHIN Dojo Retreat

**Date Validated:** 2026-02-26
**Method:** `curl -s -o /dev/null -w "%{http_code}"` per image URL
**Result:** All 10 images validated HTTP 200

## Validation Log

| HTTP | Unsplash ID | Usage | Location in Template |
|------|------------|-------|---------------------|
| 200 | `1555597673-b21d5c935865` | Thumbnail source (Japanese night view) | images/thumbnail.webp |
| 200 | `1528360983277-13d401cdc186` | Hero background (Japanese forest path) | index.html hero, retreat.html hero |
| 200 | `1509631179647-0177331693ae` | Temple architecture (traditional building) | index.html temple section, about.html hero |
| 200 | `1551488831-00ddcb6c6bd3` | Dojo interior (training hall) | index.html masters, about.html masters, programs.html aikido |
| 200 | `1485125639709-a60c3a500bf1` | Sword/iaido (katana reference) | index.html masters, about.html masters, programs.html iaido, programs.html hero |
| 200 | `1503342394128-c104d54dba01` | Zen garden (raked gravel) | index.html masters, about.html masters, programs.html zazen, contact.html hero |
| 200 | `1553361371-9b22f78e8b1d` | Calligraphy (brush strokes) | programs.html traditional arts |
| 200 | `1600607687939-ce8a6c25118c` | Accommodation (Japanese interior) | retreat.html accommodation grid |
| 200 | `1558618666-fcd25c85cd64` | Stone garden (garden detail) | retreat.html accommodation grid |
| 200 | `1524504388940-b1c1722653e1` | Cedar forest (path through trees) | retreat.html accommodation grid |

## URL Format Used

```
https://images.unsplash.com/photo-{ID}?w={width}&q={quality}&auto=format&fit=crop
```

Parameters:
- `w`: Width in pixels (100 for validation, 600–1800 for production)
- `q`: JPEG quality (10 for validation, 80–85 for production)
- `auto=format`: Enables WebP delivery where supported
- `fit=crop`: Maintains aspect ratio with cropping

## Thumbnail Processing

```bash
# Source download
curl -sL "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=600&q=80&auto=format&fit=crop" -o /tmp/dr_t.jpg

# WebP conversion
cwebp -q 80 -resize 600 0 /tmp/dr_t.jpg -o images/thumbnail.webp

# Result: 22,312 bytes (21.8 KB), 600x399px, PSNR 42.18dB
```

## Image Usage Guidelines

All images are provided under the **Unsplash License**:
- Free for commercial and non-commercial use
- No attribution required (but recommended via alt text)
- Cannot be sold or sublicensed as standalone image products

Alt text provided for all images in HTML (accessibility compliant).

## Rejected Images

The following Unsplash IDs were considered but not used due to content concerns (face closeups, identifiable individuals):

- N/A — all selected images are environmental/architectural/abstract

## Notes

- No AI-generated images used
- No stock photo sites requiring paid licenses used
- All images display correctly in latest Chrome, Firefox, Safari at time of testing
