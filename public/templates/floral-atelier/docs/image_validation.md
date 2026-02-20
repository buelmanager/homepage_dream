# Image Validation — PÉTALE Floral Atelier

Validated via `curl -o /dev/null -s -w "%{http_code}" --head "URL"`

## Results

| Status | URL | Used For |
|--------|-----|----------|
| ✅ 200 | https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?w=1800&q=80 | Hero background (dark moody florals) |
| ❌ 404 | https://images.unsplash.com/photo-1490750967868-88df5691cc6e?w=1800&q=80 | Not used |
| ✅ 200 | https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?w=1200&q=80 | Collection: Spring ALBA |
| ✅ 200 | https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=1200&q=80 | Collection: Summer SOLEIL |
| ✅ 200 | https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1200&q=80 | Collection: Autumn CRAMOISI |
| ✅ 200 | https://images.unsplash.com/photo-1462530260150-162092dbf011?w=1200&q=80 | Collection: Winter NOCTURNE |
| ❌ 404 | https://images.unsplash.com/photo-1464062901833-b5bd18784e6c?w=1200&q=80 | Not used |
| ❌ 404 | https://images.unsplash.com/photo-1487530811015-780de22614c6?w=1200&q=80 | Not used |
| ✅ 200 | https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1200&q=80 | Atelier workspace image |
| ✅ 200 | https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=900&q=80 | Commission form background |
| ✅ 200 | https://images.unsplash.com/photo-1596438459194-f275f413d6ff?w=900&q=80 | Supporting botanical |
| ✅ 200 | https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=900&q=80 | Supporting botanical |
| ✅ 200 | https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80 | Supporting botanical |
| ✅ 200 | https://images.unsplash.com/photo-1471086569966-db3eebc25a59?w=900&q=80 | Supporting botanical |
| ❌ 404 | https://images.unsplash.com/photo-1589483233024-2ec0a0e2285f?w=900&q=80 | Not used |
| ✅ 200 | https://images.unsplash.com/photo-1502977249166-824b3a8a4d6d?w=900&q=80 | Supporting botanical |

## Summary
- Total tested: 16
- Passed (200): 12
- Failed (404): 4
- All images used in index.html are from the validated 200 list only
