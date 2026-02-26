# Image Validation — CASK SOCIÉTÉ

All images validated with `curl -I` on 2026-02-26.

## Hero & Warehouse Images

| ID | URL | Status | Used In | Photographer |
|----|-----|--------|---------|-------------|
| 1527281400683-1aae777175f8 | https://images.unsplash.com/photo-1527281400683-1aae777175f8 | 200 ✓ | thumbnail, index hero | Unsplash |
| 1558769132-cb1aea458c5e | https://images.unsplash.com/photo-1558769132-cb1aea458c5e | 200 ✓ | about hero (fallback) | Unsplash |
| 1582719508461-905c673771fd | https://images.unsplash.com/photo-1582719508461-905c673771fd | 200 ✓ | casks page hero | Unsplash |
| 1553361371-9b22f78e8b1d | https://images.unsplash.com/photo-1553361371-9b22f78e8b1d | 200 ✓ | process page hero | Unsplash |
| 1600607687939-ce8a6c25118c | https://images.unsplash.com/photo-1600607687939-ce8a6c25118c | 200 ✓ | contact page hero | Unsplash |
| 1529958030586-3aae4ca485ff | https://images.unsplash.com/photo-1529958030586-3aae4ca485ff | 200 ✓ | about page distillery | Unsplash |
| 1509631179647-0177331693ae | https://images.unsplash.com/photo-1509631179647-0177331693ae | 200 ✓ | cask card image | Unsplash |

## Validation Commands Run
```bash
curl -s -o /dev/null -w "%{http_code}" "https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=600&q=80"
# → 200

curl -s -o /dev/null -w "%{http_code}" "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80"
# → 200

curl -s -o /dev/null -w "%{http_code}" "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80"
# → 200
```

## Color Check
- Background `#201508`: avg = (32+21+8)/3 = 20.3 ✓ PASSES (min 20)
- Surface `#2A1C0E`: avg = (42+28+14)/3 = 28.0 ✓ PASSES
- All section backgrounds inherit `var(--bg)` or `var(--surface)` — no hardcoded dark hex values

## Notes
- No face closeups used
- No individual portraits used
- All images show barrels, warehouses, distilleries, or abstract whisky/spirits
