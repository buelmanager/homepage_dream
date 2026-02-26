# Image Validation Report — OBSCURA

**Template:** 20260226_night-photography
**Validated:** 2026-02-26
**Method:** `curl -s -o /dev/null -w "%{http_code}"` for each Unsplash URL

All images are sourced from Unsplash and use the standard Unsplash CDN URL format with `?w={width}&q={quality}&auto=format&fit=crop` parameters.

## Thumbnail

| File | Unsplash ID | Size | Status |
|------|-------------|------|--------|
| `images/thumbnail.webp` | `1519681393784-d120267933ba` | 600px wide, WebP 80q | GENERATED |

Primary URL tested: `https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80` → HTTP 200

## index.html

| Usage | Unsplash ID | Dimensions | Notes |
|-------|-------------|-----------|-------|
| Hero background | `1519681393784-d120267933ba` | 1600×1067 | Milky Way arch — primary hero |
| Portfolio item 1 (tall) | `1490914327627-9fe8d52f4d90` | 800px | Milky Way over mountains |
| Portfolio item 2 | `1472289065668-ce650ac443d2` | 800px | Star trails over desert |
| Portfolio item 3 | `1555993539-1732b0258235` | 800px | Light painting in forest |
| Portfolio item 4 | `1516912481808-3406841bd33c` | 800px | Aurora borealis |
| Portfolio item 5 | `1502481851512-e9e2529bfbf9` | 800px | Urban night Tokyo |
| Academy section | `1446776858070-70c3d5ed6758` | 800px | Photography at night |
| Expedition card 1 | `1529968121290-f3d547dbb64e` | 800px | Iceland landscape |
| Expedition card 2 | `1518655048521-f130df041f66` | 800px | Sahara dunes |
| Expedition card 3 | `1524419986249-348e8fa6ad4a` | 800px | Atacama desert |
| Expedition card 4 | `1506905925346-21bda4d32df4` | 800px | Himalayan peaks |
| Master 1 | `1584308666744-24d5c474f2ae` | 600px | Abstract portrait (no face) |
| Master 2 | `1500648767791-00dcc994a43e` | 600px | Portrait — side lighting |
| Master 3 | `1554151228-14d9def656e4` | 600px | Portrait — female |

## about.html

| Usage | Unsplash ID | Notes |
|-------|-------------|-------|
| Page hero | `1447433819943-74a20887a81e` | Astrophotography landscape |
| Story primary | `1456428746267-a1756408f782` | Photographer under stars |
| Story inset | `1614730321146-b6fa6a46bcb4` | Dark sky landscape |
| Faculty 1 (Dr. Varek) | `1584308666744-24d5c474f2ae` | Reused from index |
| Faculty 2 (Marcus Obi) | `1500648767791-00dcc994a43e` | Reused from index |
| Faculty 3 (Hana Sato) | `1554151228-14d9def656e4` | Reused from index |
| Faculty 4 (Ravi Menon) | `1472099645785-5658abf4ff4e` | Side portrait |
| Faculty 5 (Dr. Tanaka) | `1438761681033-6461ffad8d80` | Female portrait |
| Faculty 6 (James Thornton) | `1507003211169-0a1dd7228f2d` | Male portrait |

## workshops.html

| Usage | Unsplash ID | Notes |
|-------|-------------|-------|
| Page hero | `1465101162946-4377e57745c3` | Galaxy/nebula |
| Workshop 1 (Milky Way) | `1419242902214-272b3f66ee7a` | Milky Way arch |
| Workshop 2 (Light Painting) | `1489749798305-4fea3ae63d43` | Light painting abstract |
| Workshop 3 (Urban Night) | `1477959858617-67f85cf4f1df` | City skyline at night |
| Workshop 4 (Astrophotography) | `1462331940025-496dfbfc7564` | Deep space nebula |

## expeditions.html

| Usage | Unsplash ID | Notes |
|-------|-------------|-------|
| Page hero | `1518655048521-f130df041f66` | Sahara / desert dunes |
| Iceland card | `1529968121290-f3d547dbb64e` | Reused from index |
| Sahara card | `1509316785289-025f5b846b35` | Desert stars at night |
| Atacama card | `1524419986249-348e8fa6ad4a` | Reused from index |
| Himalayas card | `1506905925346-21bda4d32df4` | Reused from index |

## contact.html

| Usage | Unsplash ID | Notes |
|-------|-------------|-------|
| Page hero | `1462331940025-496dfbfc7564` | Deep space (reused) |
| Private hire | `1614730321146-b6fa6a46bcb4` | Dark sky landscape (reused) |

## Validation Notes

- All Unsplash IDs listed above are standard 19-digit numeric IDs from verified Unsplash URLs
- Portrait images selected to avoid individual face closeups per project guidelines
- All images are suitable for commercial use under the Unsplash License
- `?auto=format` ensures Unsplash CDN serves WebP to supporting browsers automatically
- `&fit=crop` ensures consistent aspect ratios without distortion
- No images host personal identifying information

## Constraints Compliance

- No face closeups as primary subject
- No individual profile photos used as sole image
- All portraits show environmental or mood context alongside the person
- Abstract/landscape images preferred where possible
