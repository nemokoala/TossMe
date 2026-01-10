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
- 💾 **QR 코드 다운로드**: QR 코드를 PNG 이미지로 다운로드
- 🎨 **모던한 UI**: 부드러운 애니메이션과 반응형 디자인

## 🛠️ 기술 스택

- **Next.js 16** - React 프레임워크 (App Router)
- **React 19** - UI 라이브러리
- **TypeScript** - 타입 안정성
- **Tailwind CSS** - 유틸리티 우선 CSS 프레임워크
- **Radix UI** - 접근성 높은 UI 컴포넌트
- **Lucide React** - 아이콘 라이브러리
- **qrcode.react** - QR 코드 생성 라이브러리

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

## 📁 프로젝트 구조

```
tossme/
├── app/
│   ├── components/          # 컴포넌트 디렉토리
│   │   ├── TossLinkGenerator.tsx  # 메인 생성기 컴포넌트
│   │   ├── BankSelect.tsx         # 은행 선택 컴포넌트
│   │   ├── AccountInput.tsx       # 계좌번호 입력 컴포넌트
│   │   ├── AmountInput.tsx        # 금액 입력 컴포넌트
│   │   ├── GeneratedLink.tsx      # 생성된 링크 표시
│   │   ├── QRCodeDisplay.tsx     # QR 코드 표시
│   │   ├── ActionButtons.tsx      # 액션 버튼들
│   │   ├── EmptyState.tsx         # 빈 상태 UI
│   │   └── utils/                 # 유틸리티 함수
│   ├── layout.tsx          # 루트 레이아웃
│   ├── page.tsx            # 홈 페이지
│   └── globals.css         # 전역 스타일
├── components/
│   └── ui/                  # 공통 UI 컴포넌트
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── select.tsx
├── lib/
│   └── utils.ts            # 유틸리티 함수
├── public/                  # 정적 파일
├── package.json            # 프로젝트 의존성
├── tsconfig.json           # TypeScript 설정
├── tailwind.config.ts      # Tailwind CSS 설정
└── next.config.ts          # Next.js 설정
```

## 🎯 사용 방법

1. **은행 선택**: 드롭다운에서 은행을 선택하거나 직접 입력
2. **계좌번호 입력**: 송금받을 계좌번호를 입력 (하이픈 자동 제거)
3. **금액 입력** (선택사항): 송금할 금액을 입력 (천 단위 구분자 자동 추가)
4. **링크 생성**: 입력이 완료되면 자동으로 딥링크가 생성됩니다
5. **QR 코드 확인**: 생성된 링크의 QR 코드가 자동으로 표시됩니다
6. **링크 복사 또는 QR 코드 다운로드**: 버튼을 클릭하여 링크를 복사하거나 QR 코드를 다운로드할 수 있습니다

## 🔗 딥링크 형식

생성되는 딥링크는 다음과 같은 형식입니다:

```
supertoss://send?bank=토스뱅크&accountNo=1234567890&amount=10000
```

- `bank`: 은행명 (필수)
- `accountNo`: 계좌번호 (필수, 하이픈 제거)
- `amount`: 금액 (선택사항, 콤마 제거)
