// components/TossLinkGenerator.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import BankSelect from "./BankSelect";
import AccountInput from "./AccountInput";
import AmountInput from "./AmountInput";
import GeneratedLink from "./GeneratedLink";
import QRCodeDisplay from "./QRCodeDisplay";
import ActionButtons from "./ActionButtons";
import EmptyState from "./EmptyState";

export default function TossLinkGenerator() {
  const [bank, setBank] = useState("토스뱅크");
  const [accountNo, setAccountNo] = useState("");
  const [amount, setAmount] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [isCustomBank, setIsCustomBank] = useState(false);

  // QR 코드 다운로드를 위한 Ref
  const qrRef = useRef<HTMLDivElement>(null);

  // 입력값이 변경될 때마다 딥링크 갱신
  useEffect(() => {
    const baseUrl = "supertoss://send";
    const params = new URLSearchParams();

    if (bank) params.append("bank", bank);
    if (accountNo) params.append("accountNo", accountNo.replace(/-/g, ""));
    if (amount) params.append("amount", amount.replace(/,/g, ""));

    setGeneratedLink(`${baseUrl}?${params.toString()}`);
    setIsCopied(false);
  }, [bank, accountNo, amount]);

  // 모든 필수 입력이 완료되었는지 확인
  const isFormComplete = bank.trim() !== "" && accountNo.trim() !== "";

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  // 모바일 앱 열기 테스트
  const handleTestLink = () => {
    window.location.href = generatedLink;
  };

  // QR 코드 이미지 다운로드 핸들러
  const handleDownloadQR = () => {
    const canvas = qrRef.current?.querySelector("canvas");
    if (canvas) {
      const url = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = url;
      link.download = `토스송금_${bank}_QR.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 px-4 w-full">
      <Card className="shadow-lg w-full">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <span className="text-primary font-extrabold">TossMe</span> 송금
            링크 생성기
          </CardTitle>
          <CardDescription>
            토스 앱으로 바로 송금할 수 있는 링크를 생성하세요
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* 입력 폼 영역 */}
          <div className="space-y-4">
            <BankSelect
              value={bank}
              onChange={setBank}
              isCustomBank={isCustomBank}
              onCustomBankChange={setIsCustomBank}
            />
            <AccountInput value={accountNo} onChange={setAccountNo} />
            <AmountInput value={amount} onChange={setAmount} />
          </div>

          {/* 결과 영역 - 항상 표시하여 레이아웃 고정 */}
          <div className="flex flex-col items-center space-y-4 pt-4 border-t min-h-[500px] relative">
            <div
              key={isFormComplete ? "result" : "empty"}
              className={`w-full transition-all duration-500 ease-in-out ${
                isFormComplete
                  ? "animate-in fade-in slide-in-from-bottom-4"
                  : "animate-in fade-in slide-in-from-top-4"
              }`}
            >
              {isFormComplete && generatedLink ? (
                <div className="flex flex-col items-center space-y-4">
                  <GeneratedLink
                    link={generatedLink}
                    isCopied={isCopied}
                    onCopy={handleCopy}
                  />
                  <QRCodeDisplay ref={qrRef} value={generatedLink} />
                  <ActionButtons
                    link={generatedLink}
                    bank={bank}
                    isCopied={isCopied}
                    onCopy={handleCopy}
                    onDownloadQR={handleDownloadQR}
                    onTestLink={handleTestLink}
                  />
                </div>
              ) : (
                <EmptyState />
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
