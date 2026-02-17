# HomeDream 공개 템플릿 수익화 + 접근제어 실행 계획

작성일: 2026-02-17
버전: v2 (개선본)

## 1. 한 줄 결론

- 브라우저에 렌더링된 코드는 숨길 수 없다.
- 대신 **유료 자산(원본 ZIP, Pro 파일) 접근을 서버 권한으로 통제**하고, 제품형 상품 구조로 수익화한다.

## 2. 범위와 목표

- 범위: 템플릿 데모 공개 + 유료 원본 다운로드 통제
- 제외: 커스터마이징, 설치 대행, 유지보수 서비스
- 목표: 서비스 없이도 단품/번들/멤버십으로 반복 매출 확보

## 3. 핵심 원칙

- "코드 비공개"가 아니라 "다운로드 권한 통제"가 본질이다.
- 공개 경로(`public`)에는 데모 파일만 둔다.
- 원본 판매 자산은 private storage에서 signed URL로만 배포한다.
- 권한 검증은 100% 서버에서 수행한다.

## 4. 수익 모델(서비스 없이)

### 4.1 상품 라인업

- Free: 데모/기본 템플릿
- Pro Single: 템플릿 단품 라이선스
- Bundle: 카테고리 묶음 라이선스
- Membership: 월/연 정기 구독(월 한도 내 다운로드)

### 4.2 라이선스 라인업

- Personal: 개인 프로젝트 1개
- Commercial: 상업 프로젝트 1~3개
- Agency: 다중 클라이언트 프로젝트

핵심: 파일이 같아도 라이선스 범위로 가격을 분리한다.

## 5. 현재 코드 상태 요약 (2026-02-17 기준)

### 5.1 이미 있는 것

- 구독 생성/조회 API: `src/app/api/subscription/route.ts`
- Lemon Squeezy 웹훅: `src/app/api/lemonsqueezy/webhook/route.ts`
- 템플릿 관리 API: `src/app/api/templates/route.ts`, `src/app/api/templates/[slug]/route.ts`
- 구매 UI 호출 지점: `src/components/template/purchase-card.tsx`

### 5.2 즉시 보강이 필요한 것

- `purchase-card`에서 호출하는 API 미구현/미연결
- `/api/purchase`
- `/api/purchase/status`
- `/api/templates/[slug]/download`
- `/api/templates/[slug]/source`

### 5.3 정책/코드 불일치

- 요금제 문구는 "월 다운로드 횟수" 중심 (`src/app/(main)/pricing/page.tsx`)
- 실제 웹훅 로직은 "월 크레딧 지급" 중심 (`src/app/api/lemonsqueezy/webhook/route.ts`)

결론: 다운로드 과금 모델을 아래 둘 중 하나로 명확히 고정해야 한다.
- 모델 A: 1 다운로드 = 1 크레딧
- 모델 B: 별도 다운로드 카운터(권장)

## 6. 이번 구현에서 먼저 확정할 결정사항

- [D1] 과금 단위: 크레딧 기반 vs 다운로드 카운터 기반
- [D2] `View Source` 기능 유지 여부 (`/api/templates/[slug]/source`)
- [D3] 다운로드 링크 정책: 만료 시간(예: 60초), 1회성 여부
- [D4] 멤버십과 단품 구매의 권한 우선순위

권장안:
- D1: 다운로드 카운터 기반
- D2: 제거 또는 구매자 제한 + 일부 파일만 허용
- D3: 60초 만료 signed URL + 발급 rate limit
- D4: 단품 영구 권한 + 멤버십 월 한도 권한 병행

## 7. 데이터 모델 제안

### 7.1 최소 변경

- `Purchase` 확장
- `kind`: `SINGLE` | `BUNDLE` | `SUBSCRIPTION_DOWNLOAD`
- `licenseType`: `PERSONAL` | `COMMERCIAL` | `AGENCY`
- `source`: `CREDIT` | `LEMON` | `ADMIN`

- `DownloadLog` 신설
- `userId`, `templateId`, `subscriptionId?`, `downloadedAt`, `ipHash`, `userAgent`

### 7.2 권한 함수 표준화

- `src/lib/entitlement.ts` 신설
- `hasTemplateAccess(userId, templateSlug)`
- `canDownloadNow(userId, templateSlug)`
- `consumeDownloadQuota(...)`

## 8. API 계약 (초안)

### 8.1 `POST /api/purchase`

- 입력: `{ slug, type }`
- 처리: 인증 -> 상품 조회 -> 결제/크레딧 차감 -> `Purchase` 생성
- 출력: `{ success, remainingCredits, entitlement }`

### 8.2 `GET /api/purchase/status`

- 입력: `slug`, `type`
- 처리: 인증 -> 구매/구독 권한 확인
- 출력: `{ purchased: boolean, source: "single" | "subscription" | null }`

### 8.3 `GET /api/templates/[slug]/download`

- 처리:
- 인증
- entitlement 확인
- 월 한도 확인
- signed URL 발급
- `DownloadLog` 기록
- 출력: JSON redirect URL 또는 302 redirect

### 8.4 `GET /api/templates/[slug]/source`

- 권장: 제거
- 유지 시: 구매자만 접근 + 파일 allowlist(`index.html` 등) + rate limit

## 9. 저장소/배포 구조

- 공개 데모: `public/templates/{slug}/index.html` (미리보기용)
- 판매 원본: private object storage (S3/Supabase Storage private bucket)
- DB에는 원본 파일 경로 대신 `storageKey` 저장
- 실제 다운로드는 서버에서 signed URL 발급

## 10. 1주 실행 계획

### Day 1

- 결정사항 D1~D4 확정
- 요금제 문구와 과금 모델 통일

### Day 2

- Prisma 스키마 변경
- 마이그레이션 적용
- `entitlement.ts` 유틸 도입

### Day 3

- `/api/purchase`, `/api/purchase/status` 구현
- `purchase-card` 연동 테스트

### Day 4

- private storage 업로드 경로 구성
- `/api/templates/[slug]/download` signed URL 적용

### Day 5

- `/api/templates/[slug]/source` 제거 또는 제한 적용
- 프로필 페이지에 월 다운로드 사용량/잔여량 노출

## 11. 운영/보안 체크리스트

- `next.config.ts`에서 production source map 비활성화 확인
- `.env`/secret은 서버 전용 변수로만 사용
- API에 rate limit 적용(다운로드 발급, source 조회)
- 웹훅 서명 검증 실패 로그 + 알림
- 비정상 대량 다운로드 탐지 기준 수립

## 12. 완료 기준 (Definition of Done)

- 비구매자는 원본 ZIP에 직접 URL로도 접근 불가
- 구매자/구독자는 권한 내에서 정상 다운로드 가능
- 월 한도 초과 시 명확한 에러 코드/메시지 반환
- `src/components/template/purchase-card.tsx`의 API 호출이 모두 정상 동작
- 결제 후 권한 반영이 웹훅 기준으로 일관되게 처리
- 가격 페이지 문구와 실제 과금 로직이 일치

## 13. 리스크와 대응

- 리스크: 정책 미확정 상태에서 구현 선행 -> 재작업
- 대응: D1~D4 먼저 확정 후 구현 착수

- 리스크: public 경로에 원본이 남아 우회 다운로드 발생
- 대응: 배포 전 스캔 스크립트로 판매 원본 포함 여부 검사

- 리스크: 웹훅 지연으로 권한 반영 지연
- 대응: 결제 완료 직후 polling + 웹훅 확정 시 최종 반영

## 14. 실행 우선순위 (압축)

1. 정책 확정(D1~D4)
2. 결제/권한 API 3종 구현
3. private storage + signed URL 전환
4. UI/정책 문구 동기화

핵심 문장: "소스 숨김"이 아니라 "유료 자산 권한 통제"가 매출과 보안을 동시에 만든다.
