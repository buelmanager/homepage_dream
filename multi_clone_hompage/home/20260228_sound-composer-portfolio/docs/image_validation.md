# Image Validation Report — 20260228_sound-composer-portfolio

## Validation Date
2026-02-28

## Method
All images validated with:
```bash
curl -sLo /dev/null -w "%{http_code}" "https://images.unsplash.com/photo-{ID}?w=400&q=50"
```
Only 200 OK responses were used.

## Validated Images

| File | Unsplash ID | Status | Subject |
|---|---|---|---|
| hero-1.webp | 1519892300165-cb5542fb47c7 | 200 OK | Music studio |
| hero-2.webp | 1470225620780-dba8ba36b745 | 200 OK | Headphones |
| product-1.webp | 1493225457124-a3eb161ffa5f | 200 OK | Concert/performance |
| product-2.webp | 1510915361894-db8b60106cb1 | 200 OK | Music abstract |
| product-3.webp | 1487180144351-b8472da7d491 | 200 OK | Sound waves |
| product-4.webp | 1511379938547-c1f69419868d | 200 OK | Music studio |
| product-5.webp | 1520523839897-bd0b52f945a0 | 200 OK | Instruments |
| product-6.webp | 1507838153414-b4b713384a76 | 200 OK | Music/audio |
| workspace-1.webp | 1571330735066-03aaa9429d89 | 200 OK | Audio equipment |
| workspace-2.webp | 1557672172-298e090bd0f1 | 200 OK | Synthesizer |
| workspace-3.webp | 1619983081563-430f63602796 | 200 OK | Music studio |
| ambient-1.webp | 1535732820275-9ffd998cac22 | 200 OK | Audio abstract |
| ambient-2.webp | 1514525253161-7a46d19cd819 | 200 OK | Music abstract |
| ambient-3.webp | 1415201364774-f6f0bb35f28f | 200 OK | Vinyl record |
| ambient-4.webp | 1516450360452-9312f5e86fc7 | 200 OK | Mixing console |

## Rejected IDs (404)

The following IDs were tested and rejected due to 404 responses:
- 1514320291 (404)
- 1598488035104 (404)
- 1558089687 (404)
- 1444731961122 (404)
- 1468164016375 (404)
- 1629276301820 (404)
- 1598295892739 (404)
- 1460661419176 (404)
- Multiple others (see validation log)

## Download Format
All images downloaded as WebP at quality 82 using:
```bash
curl -sL "{URL}?w=1920&q=85" -o /tmp/img_dl.jpg && cwebp -q 82 -resize 1920 0 /tmp/img_dl.jpg -o "images/{name}.webp"
```

## Content Guidelines Compliance
- No face closeups
- No individual profile photos
- All images are abstract, equipment, or environmental
- No images showing identifiable individuals
