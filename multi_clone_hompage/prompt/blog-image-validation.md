# Blog Article Image Validation Rules

## 이미지 추가 전 필수 검증 프로세스

### 1️⃣ 이미지 URL 선택 기준
- Unsplash API 또는 검증된 ID 목록 사용
- 각 URL 선택 후 **HTTP HEAD 요청으로 200 OK 확인**
- 404, 403, 503 등의 에러 응답은 즉시 다른 이미지로 변경
- 유효성 확인 없이 URL 사용 금지

### 2️⃣ 검증 방법
```bash
curl -I {unsplash_url} --max-time 3
# HTTP 200이 아니면 대체 이미지 선택
```

### 3️⃣ 검증된 Unsplash ID 풀
다음 ID들은 모두 200 OK 확인됨:
- 1529958030586-3aae4ca485ff (workspace)
- 1512327536842-5aa37d1ba3e3 (laptop)
- 1558618666-fcd25c85cd64 (mobile)
- 1524504388940-b1c1722653e1 (analytics)
- 1515886657613-9f3515b0c78f (design)
- 1490481651871-ab68de25d43d (startup)
- 1543076447-215ad9ba6923 (team)
- 1551488831-00ddcb6c6bd3 (office)
- 1503342394128-c104d54dba01 (laptop)
- 1469334031218-e382a71b716b (planning)
- 1485125639709-a60c3a500bf1 (code)
- 1555529669-e69e7aa0ba9a (whiteboard)
- 1572635196237-14b3f281503f (desk)
- 1558769132-cb1aea458c5e (wireframe)
- 1582719508461-905c673771fd (design)
- 1528360983277-13d401cdc186 (mockup)
- 1600607687939-ce8a6c25118c (responsive)
- 1509631179647-0177331693ae (ux)
- 1553361371-9b22f78e8b1d (interface)
- 1584917865442-de89df76afd3 (sketch)

### 4️⃣ 이미지 삽입 순서
1. 이미지 URL 선택 및 검증 (curl 확인)
2. 유효성 확인 후만 Markdown에 추가
3. 404 응답 = 자동 대체 이미지 검색 및 재검증
4. 모든 이미지 검증 완료 후 글 완성

### 5️⃣ 제약 조건
- ❌ NO: 인물 얼굴 클로즈업
- ❌ NO: 개인 프로필 사진
- ✅ YES: 업무 장면, 협업 이미지 (얼굴 미노출)
- ✅ YES: 제품, 도구, 추상화

### 6️⃣ 대체 이미지 검색 규칙
만약 선택한 이미지가 404면:
1. 같은 주제의 다른 Unsplash 이미지 검색
2. 검증된 ID 풀에서 유사 이미지 사용
3. 검색 → 검증 → 삽입 순서 유지

---

## 최종 체크리스트 (글 완성 전)

- [ ] 모든 이미지 URL 200 OK 확인됨
- [ ] 인물 클로즈업 제약 준수
- [ ] 각 이미지에 사진가 크레딧 포함
- [ ] Markdown 형식: `![설명](url) — Photo by {name}`
- [ ] 404 이미지 없음 (재검증 완료)
