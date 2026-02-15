# Step 1: 프로젝트 초기화 + DB 설정

> 완료일: 2026-02-15

## 완료 항목

### 프로젝트 초기화
- Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 설정
- shadcn/ui 초기화 + 12개 컴포넌트 설치 (button, card, input, badge, dialog, dropdown-menu, tabs, avatar, separator, tooltip, scroll-area, sheet)
- Radix UI 프리미티브 설치
- framer-motion, lucide-react, zod, react-hook-form 설치
- Prisma 7 + @prisma/adapter-pg 설치
- NextAuth v5 (beta) + bcryptjs 설치

### 환경 설정
- .env: Supabase URL, Anon Key, DB URLs, NextAuth 설정
- prisma.config.ts: Prisma 7 형식으로 datasource 설정
- tsconfig.json: @/* 경로 별칭

### 데이터베이스
- Prisma 스키마: User, Account, Session, VerificationToken, Template, Section, Purchase, Favorite, Bookmark, CreditTransaction
- Supabase PostgreSQL에 스키마 푸시 (prisma db push)
- Prisma Client 생성

### 시드 데이터
- 30개 실제 HTML 템플릿 public/templates/로 복사
- 시드 스크립트로 30개 템플릿 + 180개 섹션 + 2명 사용자 생성
- 각 템플릿: 랜덤 viewCount, likeCount, saveCount

### 핵심 인프라 파일
- src/lib/prisma.ts: Prisma 7 + pg adapter 싱글톤
- src/lib/supabase.ts: Supabase 클라이언트
- src/types/index.ts: 타입 정의 + 상수 (CATEGORIES, STYLES, LAYOUTS)

## 기술 결정 사항
- Prisma 7은 adapter 기반 연결 필수 → @prisma/adapter-pg 사용
- Supabase pooler URL(6543)은 타임아웃 → Direct URL(5432) 사용
- `as any` 캐스트는 Prisma 7 adapter 패턴에서만 허용
