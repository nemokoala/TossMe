# TossMe

Next.js 16 프로젝트 with Tailwind CSS

## 시작하기

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 빌드

```bash
npm run build
```

### 프로덕션 실행

```bash
npm start
```

## 기술 스택

- **Next.js 16** - React 프레임워크
- **React 19** - UI 라이브러리
- **TypeScript** - 타입 안정성
- **Tailwind CSS** - 유틸리티 우선 CSS 프레임워크

## 프로젝트 구조

```
tossme/
├── app/              # App Router 디렉토리
│   ├── layout.tsx    # 루트 레이아웃
│   ├── page.tsx      # 홈 페이지
│   └── globals.css   # 전역 스타일 (Tailwind 포함)
├── public/           # 정적 파일
├── package.json      # 프로젝트 의존성
├── tsconfig.json     # TypeScript 설정
├── tailwind.config.ts # Tailwind CSS 설정
└── next.config.ts    # Next.js 설정
```
