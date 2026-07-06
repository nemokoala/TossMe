# 🚀 TossMe

토스 앱으로 바로 송금할 수 있는 딥링크 생성기입니다. 은행과 계좌번호를 입력하면 토스 앱에서 바로 송금할 수 있는 링크와 QR 코드를 생성합니다.

![TossMe](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)

## ✨ 주요 기능

- 🏦 **다양한 은행 지원**: 주요 은행 선택 및 커스텀 은행명 입력
- 💰 **금액 설정**: 송금할 금액을 선택적으로 입력 가능
- 🔗 **딥링크 생성**: 토스 앱에서 바로 열 수 있는 딥링크 자동 생성
- 📱 **QR 코드 생성**: 생성된 링크를 QR 코드로 표시
- 📋 **링크 복사**: 원클릭으로 링크 복사
- 💾 **QR 이미지 저장**: QR 코드를 PNG 이미지로 저장
- 💽 **입력 정보 저장 (로컬)**: 「입력 정보 저장」스위치를 켜면 은행·계좌·금액·커스텀 은행 여부를 브라우저 `localStorage`에 저장하고, 다음 방문 시 자동으로 불러옵니다. 끄면 저장 데이터는 삭제됩니다. (키: `tossme_saved_input`)
- 🎨 **모던한 UI**: 부드러운 애니메이션과 반응형 디자인, Pretendard 로컬 폰트

## 🛠️ 기술 스택

- **Next.js 16** - React 프레임워크 (App Router)
- **React 19** - UI 라이브러리
- **TypeScript** - 타입 안정성
- **Tailwind CSS** - 유틸리티 우선 CSS 프레임워크
- **Radix UI** - 접근성 높은 UI 컴포넌트 (Select, Switch, Label 등)
- **Lucide React** - 아이콘 라이브러리
- **qrcode.react** - QR 코드 생성 라이브러리
- **@next/third-parties** - Google Analytics 연동 (선택)

## 📦 설치 및 실행

### 필수 요구사항

- Node.js 20.0 이상
- npm 또는 yarn

### 설치

```bash
# 저장소 클론
git clone https://github.com/nemokoala/TossMe.git

# 프로젝트 디렉토리로 이동
cd TossMe

# 의존성 설치
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 프로덕션 빌드

```bash
# 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

### 환경 변수 (선택)

| 변수                | 설명                                                              |
| ------------------- | ----------------------------------------------------------------- |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 측정 ID. 없으면 GA 스크립트는 주입되지 않습니다. |

## 📁 프로젝트 구조

```
tossme/
├── app/
│   ├── layout.tsx          # 루트 레이아웃, 메타데이터, Pretendard, GA
│   ├── page.tsx            # 홈 (TossLinkGenerator)
│   ├── globals.css         # 전역 스타일
│   └── sitemap.ts          # 사이트맵
├── components/
│   ├── TossLinkGenerator.tsx  # 메인 생성기 (딥링크·로컬스토리지)
│   ├── BankSelect.tsx
│   ├── AccountInput.tsx
│   ├── AmountInput.tsx
│   ├── GeneratedLink.tsx
│   ├── QRCodeDisplay.tsx
│   ├── ActionButtons.tsx
│   ├── EmptyState.tsx
│   ├── constants.ts        # 은행 목록
│   ├── utils/
│   │   └── clipboard.ts
│   └── ui/                 # shadcn 스타일 공통 컴포넌트
├── lib/
│   └── utils.ts
├── public/
│   ├── fonts/              # Pretendard.woff2
│   ├── icon.png
│   └── robots.txt
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## 🎯 사용 방법

1. **(선택) 입력 정보 저장**: 「입력 정보 저장」을 켜면 이 기기 브라우저에 입력값이 유지됩니다. 끄면 저장이 지워집니다.
2. **은행 선택**: 드롭다운에서 은행을 선택하거나 직접 입력
3. **계좌번호 입력**: 송금받을 계좌번호를 입력 (하이픈 자동 제거)
4. **금액 입력** (선택사항): 송금할 금액을 입력 (천 단위 구분자 자동 추가)
5. **링크 생성**: 입력이 완료되면 자동으로 딥링크가 생성됩니다
6. **QR 코드 확인**: 생성된 링크의 QR 코드가 자동으로 표시됩니다
7. **QR 이미지 저장 / 링크 복사**: 버튼으로 QR 이미지를 저장하거나 링크를 복사해 상대에게 전달하세요

## 🔗 딥링크 형식

생성되는 딥링크는 다음과 같은 형식입니다:

```
supertoss://send?bank=토스뱅크&accountNo=1234567890&amount=10000
```

- `bank`: 은행명 (필수)
- `accountNo`: 계좌번호 (필수, 하이픈 제거)
- `amount`: 금액 (선택사항, 콤마 제거)
