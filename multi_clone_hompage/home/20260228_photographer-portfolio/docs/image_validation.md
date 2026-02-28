# Image Validation Log — 20260228_photographer-portfolio

All images validated via `curl -I` before download. Only HTTP 200 responses included.

## Validated Unsplash IDs

| Local Filename        | Unsplash ID                                    | HTTP Status |
|-----------------------|------------------------------------------------|-------------|
| hero-1.webp           | 1492691527719-9d1e07e534b4                     | 200 OK      |
| hero-2.webp           | 1518998053901-5348d3961a04                     | 200 OK      |
| hero-3.webp           | 1526374965328-7f61d4dc18c5                     | 200 OK      |
| hero-4.webp           | 1502920514313-52581002a659                     | 200 OK      |
| hero-5.webp           | 1464207687429-7505649dae38                     | 200 OK      |
| collection-1.webp     | 1471922694854-ff1b63b20054                     | 200 OK      |
| collection-2.webp     | 1449495169669-7b118f960251                     | 200 OK      |
| collection-3.webp     | 1519125323398-675f0ddb6308                     | 200 OK      |
| collection-4.webp     | 1554048612-b6a482bc67e5                        | 200 OK      |
| collection-5.webp     | 1493863641943-9b68992a8d07                     | 200 OK      |
| collection-6.webp     | 1470252649378-9c29740c9fa8                     | 200 OK      |
| collection-7.webp     | 1506806732259-39c2d0268443                     | 200 OK      |
| collection-8.webp     | 1583864697784-a0efc8379f70                     | 200 OK      |
| workspace-1.webp      | 1504639725590-34d0984388bd                     | 200 OK      |
| workspace-2.webp      | 1476357471311-43c0db9fb2b4                     | 200 OK      |
| workspace-3.webp      | 1502581827181-9cf3c3ee0106                     | 200 OK      |
| workspace-4.webp      | 1553532434-5ab5b6b84993                        | 200 OK      |
| ambient-1.webp        | 1556742049-0cfed4f6a45d                        | 200 OK      |
| ambient-2.webp        | 1476900164809-ff19b8ae5968                     | 200 OK      |
| ambient-3.webp        | 1491553895911-0055eca6402d                     | 200 OK      |
| ambient-4.webp        | 1567016432779-094069958ea5                     | 200 OK      |
| portrait-1.webp       | 1578662996442-48f60103fc96                     | 200 OK      |
| portrait-2.webp       | 1532187863486-abf9dbad1b69                     | 200 OK      |
| detail-1.webp         | 1598300042247-d088f8ab3a91                     | 200 OK      |
| detail-2.webp         | 1495147466023-ac5c588e2e94                     | 200 OK      |

## Conversion Settings
- Tool: cwebp (brew install webp)
- Quality: -q 82
- Hero images: -resize 1920 0 (1920px wide, proportional height)
- All other images: -resize 1200 0 (1200px wide, proportional height)

## Constraints Observed
- No face closeups
- No identifiable individuals in portrait images
- Photographer silhouette/workspace images only for portrait category
- No forbidden IDs used
