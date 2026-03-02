# Image Validation — 20260302_habitat-conservancy

## Validation Method

Images use Unsplash CDN with IDs pre-validated in project memory. All IDs confirmed 200 OK.

---

## Images Used

| ID | URL | Used In | Description |
|---|---|---|---|
| 1441974231531-c6227db76b6e | https://images.unsplash.com/photo-1441974231531-c6227db76b6e | index hero layer 1, about mission | Forest dawn — shafts of light through ancient trees |
| 1470770221589-5ccc730bddf0 | https://images.unsplash.com/photo-1470770221589-5ccc730bddf0 | index hero layer 2, collection banner | Aerial forest canopy view |
| 1426604966848-d7adac402bfd | https://images.unsplash.com/photo-1426604966848-d7adac402bfd | about banner, process banner, reserve cards | Woodland interior — dappled light |
| 1419242902214-272b3f66ee7a | https://images.unsplash.com/photo-1419242902214-272b3f66ee7a | index atelier band, contact banner | Misty forest at golden hour |

---

## CDN Format

All images use the standard Unsplash CDN format:
```
https://images.unsplash.com/photo-{ID}?w={width}&q=80&auto=format&fit=crop
```

Parameters used:
- `w=1920` for full-bleed backgrounds
- `w=800` for section images and cards
- `w=400` for portrait thumbnails
- `q=80` quality
- `auto=format` (WebP when supported)
- `fit=crop` for consistent aspect ratios

---

## Licence

All Unsplash images are published under the [Unsplash License](https://unsplash.com/license):
- Free for commercial and non-commercial use
- No attribution required (though appreciated)
- Cannot be sold as standalone stock photos
