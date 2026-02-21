# 썸네일 배포 문제 해결 기록

## 문제

- **현상**: 로컬에서는 템플릿 섬네일이 정상 표시되지만, Vercel 배포 시 섬네일이 모두 null
- **발견일**: 2026-02-21

---

## 원인 분석

### 1단계 — 원래 구조

```
multi_clone_hompage/home/<slug>/images/fullpage.png  ← 원본 스크린샷
  ↓ (generate-manifest 빌드 시 복사)
public/templates/<slug>/images/fullpage.png
  ↓ (thumbnailUrl 참조)
/templates/<slug>/images/fullpage.png  ← 표시됨
```

### 2단계 — Vercel 배포 실패 원인

`public/templates/` (334MB) + `fullpage.png` 스크린샷들 (300MB+) 이 git에 포함되어
Vercel 배포 크기 초과 → `● Error` (빌드 시간 0ms)

### 3단계 — 임시 조치 (문제 발생)

```bash
# .gitignore에 추가 후 git에서 제거
/public/templates/
**/images/fullpage.png
```

→ Vercel 빌드는 성공했지만 `fullpage.png`가 없어서 **thumbnailUrl = null**

---

## 해결 방법

### `fullpage.png` → `thumbnail.jpg` 압축 변환

```bash
# sips로 92개 PNG → JPEG 변환 (macOS)
for dir in multi_clone_hompage/home/*/; do
  sips -s format jpeg -s formatOptions 75 -Z 600 \
    "$dir/images/fullpage.png" \
    --out "$dir/images/thumbnail.jpg"
done
```

| 항목 | 이전 | 이후 |
|------|------|------|
| 파일 형식 | PNG (fullpage.png) | JPEG (thumbnail.jpg) |
| 해상도 | 1200px+ | 600px (너비 기준) |
| 품질 | 원본 | 75% |
| 개당 크기 | 2~13MB | 12~32KB |
| 92개 총 크기 | 300MB+ | **1.4MB** |

### `generate-templates-manifest.js` 수정

```js
// thumbnail.jpg 우선, 없으면 fullpage.png, 없으면 기타 .png
const thumbnailPath = path.join(imagesDir, "thumbnail.jpg");
const fullpagePath  = path.join(imagesDir, "fullpage.png");

if (fs.existsSync(thumbnailPath)) {
  thumbnailUrl = `${sourcePrefix}/${folder}/images/thumbnail.jpg`;
} else if (fs.existsSync(fullpagePath)) {
  thumbnailUrl = `${sourcePrefix}/${folder}/images/fullpage.png`;
} else { ... }
```

---

## 최종 .gitignore 구조

```gitignore
# auto-generated at build time (generate-manifest가 빌드 시 재생성)
/public/templates/

# 원본 대용량 스크린샷 제외 (thumbnail.jpg로 대체)
**/images/fullpage.png
```

---

## 배포 흐름 (수정 후)

```
git (1.4MB thumbnail.jpg 포함)
  ↓ Vercel clone
multi_clone_hompage/home/<slug>/images/thumbnail.jpg  ✅
  ↓ npm run generate-manifest
public/templates/<slug>/images/thumbnail.jpg  (복사됨)
  ↓ thumbnailUrl
/templates/<slug>/images/thumbnail.jpg  → CDN 제공 ✅
```

---

## 새 템플릿 추가 시 체크리스트

```bash
# 1. 스크린샷 찍기
python3 scripts/capture-page.py <slug>
# → multi_clone_hompage/home/<slug>/images/fullpage.png 생성

# 2. thumbnail.jpg 생성 (필수!)
sips -s format jpeg -s formatOptions 75 -Z 600 \
  multi_clone_hompage/home/<slug>/images/fullpage.png \
  --out multi_clone_hompage/home/<slug>/images/thumbnail.jpg

# 3. thumbnail.jpg만 커밋 (fullpage.png는 gitignore)
git add multi_clone_hompage/home/<slug>/images/thumbnail.jpg
```

---

## 관련 파일

- `scripts/generate-templates-manifest.js` — thumbnailUrl 우선순위 로직
- `.gitignore` — fullpage.png, public/templates/ 제외
- `multi_clone_hompage/home/*/images/thumbnail.jpg` — 92개 압축 썸네일
