# Image Validation — FORMA ATELIER

## Validation Method

All Unsplash images validated with `curl -o /dev/null -s -w "%{http_code}"` before download. Only HTTP 200 responses accepted.

## Validated Images

| File | Unsplash ID | HTTP Status | Dimensions | Size |
|------|-------------|-------------|-----------|------|
| hero-1.webp | 1486325212027-8081e485255e | 200 | 1920px | 289KB |
| hero-2.webp | 1487958449943-2429e8be8625 | 200 | 1920px | 168KB |
| hero-3.webp | 1503387762-592deb58ef4e | 200 | 1920px | 92KB |
| hero-4.webp | 1524758631624-e2822e304c36 | 200 | 1920px | 136KB |
| hero-5.webp | 1531971589569-0d9370cbe1e5 | 200 | 1920px | 586KB |
| hero-6.webp | 1512917774080-9991f1c4c750 | 200 | 1920px | 201KB |
| hero-7.webp | 1517581177682-a085bb7ffb15 | 200 | 1920px | 237KB |
| hero-8.webp | 1558618666-fcd25c85cd64 | 200 | 1920px | 152KB |
| project-1.webp | 1600585154526-990dced4db0d | 200 | 1920px | 647KB |
| project-2.webp | 1600573472591-ee6b68d14c68 | 200 | 1920px | 192KB |
| project-3.webp | 1574691250077-03a929faece5 | 200 | 1920px | 617KB |
| project-4.webp | 1541123437800-1bb1317badc2 | 200 | 1920px | 188KB |
| project-5.webp | 1565182999561-18d7dc61c393 | 200 | 1920px | 203KB |
| project-6.webp | 1522708323590-d24dbb6b0267 | 200 | 1920px | 160KB |
| studio-1.webp | 1497366216548-37526070297c | 200 | 1920px | 95KB |
| studio-2.webp | 1479839672679-a46483c0e7c8 | 200 | 1920px | 251KB |
| studio-3.webp | 1493246507139-91e8fad9978e | 200 | 1920px | 193KB |
| interior-1.webp | 1600047509807-ba8f99d2cdde | 200 | 1920px | 442KB |
| interior-2.webp | 1512917774080-9991f1c4c750 | 200 | 1920px | 201KB |
| interior-3.webp | 1545324418-cc1a3fa10c00 | 200 | 1920px | 385KB |
| process-1.webp | 1513694203232-719a280e022f | 200 | 1920px | 103KB |
| process-2.webp | 1565183997392-2f6f122e5912 | 200 | 1920px | 252KB |

**Total images: 22**
**Total size: ~5.8MB**
**Format: WebP q82, 1920px width**

## Rejected Images (404)

| Unsplash ID | Reason |
|-------------|--------|
| 1555618254-4db61439ded0 | HTTP 404 — Not Found |
| 1559628233-100c798642d8 | HTTP 404 — Not Found |
| 1548699467-ce4cb1f93dfb | HTTP 404 — Not Found |

## Forbidden IDs Checked

Per design brief, the following IDs were excluded:
- photo-1010657, photo-1011302, photo-1029604, photo-1099680
- photo-1105666, photo-1123982, photo-1144687, photo-1148820
- photo-1152077, photo-1181216, photo-1181291, photo-1181354
- (and all others listed in brief)

None of the above appear in the validated image list above.

## License

All images from [Unsplash](https://unsplash.com) under the [Unsplash License](https://unsplash.com/license).
Free to use for commercial and non-commercial purposes. No attribution required.

Validation date: 2026-02-28
