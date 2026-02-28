# Image Validation Report — KINETIC Motion Designer Portfolio

**Validated**: 2026-02-28
**Method**: `curl -sLo /dev/null -w "%{http_code}" "https://images.unsplash.com/photo-{ID}?w=400&q=50"`

## Validated Images (200 OK)

| File | Unsplash ID | Status | Usage |
|------|-------------|--------|-------|
| hero-1.webp | 1611532736597-de2d4265fba3 | 200 | Hero panel 1 |
| hero-2.webp | 1620641788421-7a1c342ea42e | 200 | Hero panel 2 |
| hero-3.webp | 1542831371-29b0f74f9713 | 200 | Hero panel 3 |
| hero-4.webp | 1550745165-9bc0b252726f | 200 | Hero panel 4 |
| hero-5.webp | 1451187580459-43490279c0fa | 200 | Hero panel 5 |
| hero-6.webp | 1506905925346-21bda4d32df4 | 200 | Hero panel 6 |
| product-1.webp | 1504639725590-34d0984388bd | 200 | Project card 1 |
| product-2.webp | 1519681393784-d120267933ba | 200 | Project card 2 |
| product-3.webp | 1477244075012-5cc28286e465 | 200 | Project card 3 |
| product-4.webp | 1490730141103-6cac27aaab94 | 200 | Project card 4 |
| product-5.webp | 1534447677768-be436bb09401 | 200 | Project card 5 |
| product-6.webp | 1581299894007-aaa50297cf16 | 200 | Project card 6 |
| product-7.webp | 1555066931-4365d14bab8c | 200 | Collection card 7 |
| product-8.webp | 1485827404703-89b55fcc595e | 200 | Collection card 8 |
| product-9.webp | 1496065187959-7f07b8353c55 | 200 | Collection card 9 |
| product-10.webp | 1501159599894-155982264a55 | 200 | Collection card 10 |
| product-11.webp | 1560179707-f14e90ef3623 | 200 | Collection card 11 |
| product-12.webp | 1563986768494-4dee2763ff3f | 200 | Collection card 12 |
| workspace-1.webp | 1547954575-855750c57bd3 | 200 | About bio image |
| workspace-2.webp | 1557804506-669a67965ba0 | 200 | Process teaser / availability |
| workspace-3.webp | 1573804633927-bfcbcd909acd | 200 | Software stack image |
| ambient-1.webp | 1611162617213-7d7a39e9b1d7 | 200 | Case study detail |
| ambient-2.webp | 1635070041078-e363dbe005cb | 200 | Secondary ambient |
| ambient-3.webp | 1642427749670-f20e2e76ed8c | 200 | Tertiary ambient |
| about-hero.webp | 1518770660439-4636190af475 | 200 | About page banner |
| process-hero.webp | 1526374965328-7f61d4dc18c5 | 200 | Process page banner |
| contact-hero.webp | 1558494949-ef010cbdcc31 | 200 | Contact page banner |
| collection-hero.webp | 1545987796-200677ee1011 | 200 | Collection page banner |
| tools-1.webp | 1579546929518-9e396f3cc809 | 200 | Tools row image 1 |
| tools-2.webp | 1517960413843-0aee8e2b3285 | 200 | Tools row image 2 |
| tools-3.webp | 1617777938240-9a1d8e51a47d | 200 | Tools row image 3 |

## Rejected IDs (404)

The following IDs returned 404 during validation and were NOT used:
- 1536924940914-b1ae0d3985e6
- 1563089145-a1d2e8c5c2c5
- 1534670007418-5a942b38db4e
- 1551808525-5c98984eb7fb
- 1519211975489-13fbff9fbaed

## Image Constraints Applied

- No portrait/face closeup images
- No identifiable individuals
- Abstract, architectural, and workspace imagery only
- All downloaded as WebP (cwebp -q 82)
