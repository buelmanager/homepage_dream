# Image Validation Report — ELARA LENS

## Template: `20260228_fashion-photographer`
## Validated: 2026-02-28
## Method: `curl -sLo /dev/null -w "%{http_code}" "https://images.unsplash.com/photo-{ID}?w=400&q=50"`

## Validated Images (all HTTP 200 OK)

| File Name | Unsplash ID | HTTP Status | Keywords |
|-----------|-------------|-------------|---------|
| hero-1.webp | 1529958030586-3aae4ca485ff | 200 | fashion editorial dark |
| hero-2.webp | 1558618666-fcd25c85cd64 | 200 | model fashion shoot studio |
| portrait-1.webp | 1515886657613-9f3515b0c78f | 200 | fashion photography backstage |
| portrait-2.webp | 1490481651871-ab68de25d43d | 200 | fashion editorial photography dark |
| portrait-3.webp | 1543076447-215ad9ba6923 | 200 | haute couture dress detail |
| portrait-4.webp | 1551488831-00ddcb6c6bd3 | 200 | editorial fashion magazine |
| product-1.webp | 1469334031218-e382a71b716b | 200 | fashion photography backstage |
| product-2.webp | 1485125639709-a60c3a500bf1 | 200 | luxury fashion accessory |
| product-3.webp | 1572635196237-14b3f281503f | 200 | runway fashion show |
| product-4.webp | 1558769132-cb1aea458c5e | 200 | editorial fashion magazine |
| product-5.webp | 1509631179647-0177331693ae | 200 | fashion photography |
| product-6.webp | 1528360983277-13d401cdc186 | 200 | fashion editorial |
| workspace-1.webp | 1600607687939-ce8a6c25118c | 200 | photography studio |
| ambient-1.webp | 1512327536842-5aa37d1ba3e3 | 200 | fashion editorial dark |
| ambient-2.webp | 1503342394128-c104d54dba01 | 200 | model fashion shoot |
| ambient-3.webp | 1555529669-e69e7aa0ba9a | 200 | haute couture |
| ambient-4.webp | 1582719508461-905c673771fd | 200 | editorial fashion |
| ambient-5.webp | 1553361371-9b22f78e8b1d | 200 | runway fashion |
| ambient-6.webp | 1584917865442-de89df76afd3 | 200 | luxury fashion |
| ambient-7.webp | 1524504388940-b1c1722653e1 | 200 | fashion photography |

## Download Specifications

- **Width:** 1920px (via `?w=1920&q=85`)
- **Format:** WebP (converted via `cwebp -q 82 -resize 1920 0`)
- **Total images:** 20
- **All validated:** Yes — zero broken images

## Image Usage Map

| Page | Images Used |
|------|-------------|
| index.html | portrait-1, hero-1, hero-2, portrait-2, product-1, product-2, product-3, product-4, ambient-1, ambient-2, product-5, ambient-3, workspace-1 |
| about.html | ambient-4, portrait-2, ambient-2, ambient-3, workspace-1 |
| collection.html | hero-1, product-1, ambient-1, portrait-2, hero-2, portrait-3, product-2, product-3, ambient-2, product-4, ambient-5, product-5, portrait-4 |
| process.html | workspace-1, ambient-6 |
| contact.html | ambient-7, ambient-2, ambient-3, ambient-4 |

## License

All images used under the [Unsplash License](https://unsplash.com/license). Free for commercial and non-commercial use. No attribution required (though appreciated).
