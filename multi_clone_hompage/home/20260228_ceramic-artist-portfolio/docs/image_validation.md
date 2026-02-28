# Image Validation Report — 20260228_ceramic-artist-portfolio

**Validation Date:** 2026-02-28
**Method:** `curl -sLo /dev/null -w "%{http_code}"` against each Unsplash URL
**Threshold:** HTTP 200 required before download

## Validated Image IDs (All 200 OK)

| File Name | Unsplash Photo ID | HTTP Status | Usage |
|-----------|-------------------|-------------|-------|
| hero-1.webp | 1565193566173-7a0ee3dbe261 | 200 | Hero parallax layer 1 |
| hero-2.webp | 1578749556568-bc2c40e68b61 | 200 | Hero parallax layer 2 |
| hero-3.webp | 1598300042247-d088f8ab3a91 | 200 | Hero alt + collection banner |
| product-1.webp | 1610701596061-2ecf227e85b2 | 200 | Collection piece 1 |
| product-2.webp | 1585314062340-f1a5a7c9328d | 200 | Collection piece 2 |
| product-3.webp | 1594736797933-d0501ba2fe65 | 200 | Collection piece 3 |
| product-4.webp | 1616628188550-808682f3926d | 200 | Collection piece 4 |
| product-5.webp | 1578301978693-85fa9c0320b9 | 200 | Collection piece 5 |
| product-6.webp | 1586105449897-20b5efeb3233 | 200 | Collection piece 6 |
| workspace-1.webp | 1554034483-04fda0d3507b | 200 | Philosophy section |
| workspace-2.webp | 1579783902614-a3fb3927b6a5 | 200 | Studio story / location |
| ambient-1.webp | 1528360983277-13d401cdc186 | 200 | About banner / contact banner |
| ambient-2.webp | 1600607687939-ce8a6c25118c | 200 | Contact CTA background |
| ambient-3.webp | 1509631179647-0177331693ae | 200 | Commission section background |
| ambient-4.webp | 1553361371-9b22f78e8b1d | 200 | Process page banner |
| detail-1.webp | 1584917865442-de89df76afd3 | 200 | About biography portrait |
| detail-2.webp | 1529958030586-3aae4ca485ff | 200 | Awards image / collection |
| detail-3.webp | 1551488831-00ddcb6c6bd3 | 200 | Collection banner |
| detail-4.webp | 1503342394128-c104d54dba01 | 200 | Process step 1 |
| extra-1.webp | 1558618666-fcd25c85cd64 | 200 | Collection piece 12 |
| extra-2.webp | 1524504388940-b1c1722653e1 | 200 | Collection piece 13 |
| extra-3.webp | 1515886657613-9f3515b0c78f | 200 | Collection piece 14 |
| extra-4.webp | 1469334031218-e382a71b716b | 200 | Process step 3 |
| extra-5.webp | 1485125639709-a60c3a500bf1 | 200 | Process step 4 |
| extra-6.webp | 1490481651871-ab68de25d43d | 200 | Process step 5 |

## Rejected IDs (404 or invalid)

The following IDs were tested and rejected due to non-200 responses:
- 1609345265499-2b8c4f87c3c0: 404
- 1526234360041-bc3f68c01c57: 404
- 1565183421061-4401cd35df8a: 404
- 1493894473891-0f6e2b56aed8: 404
- 1515847677374-3a7be694ac7f: 404
- 1498765431945-e8498e6e6b68: 404
- 1566193565549-a07f58cdf62e: 404
- 1564049489314-60d154501e63: 404

## Download Method

```bash
curl -sL "{URL}?w=1920&q=85" -o /tmp/img_dl.jpg
cwebp -q 82 -resize 1920 0 /tmp/img_dl.jpg -o "images/{name}.webp"
```

Hero images: 1920px wide at q=82
Product/detail images: 800px wide at q=82
Workspace/ambient images: 1200px wide at q=82

## License

All Unsplash images are licensed under the Unsplash License:
- Free to use for commercial and non-commercial purposes
- No attribution required (though appreciated)
- Cannot be sold as standalone stock photos
- See: https://unsplash.com/license
