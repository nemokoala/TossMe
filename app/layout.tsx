import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const pretendard = localFont({
  src: "../public/fonts/Pretendard.woff2",
  variable: "--font-pretendard",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "토스 송금 1초 컷 - TossMe",
  description:
    "계좌번호 복사 붙여넣기 그만! 클릭 한 번으로 송금 화면을 열어보세요.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "토스 송금 1초 컷 - TossMe",
    description: "계좌번호, 금액 입력하고 링크만 공유하세요.",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body className="bg-gray-100 min-h-dvh w-full flex items-center justify-center font-sans">
        {children}
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
    </html>
  );
}
