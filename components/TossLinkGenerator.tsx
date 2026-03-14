"use client";

import { useState, useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import BankSelect from "@/components/BankSelect";
import AccountInput from "@/components/AccountInput";
import AmountInput from "@/components/AmountInput";
import GeneratedLink from "@/components/GeneratedLink";
import QRCodeDisplay from "@/components/QRCodeDisplay";
import ActionButtons from "@/components/ActionButtons";
import EmptyState from "@/components/EmptyState";

const STORAGE_KEY = "tossme_saved_input";

export default function TossLinkGenerator() {
  const [bank, setBank] = useState("토스뱅크");
  const [accountNo, setAccountNo] = useState("");
  const [amount, setAmount] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [isCustomBank, setIsCustomBank] = useState(false);
  const [saveEnabled, setSaveEnabled] = useState(false);

  // QR 코드 다운로드를 위한 Ref
  const qrRef = useRef<HTMLDivElement>(null);

  // 마운트 시 저장된 데이터 불러오기
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const {
        bank: savedBank,
        accountNo: savedAccountNo,
        amount: savedAmount,
        isCustomBank: savedIsCustomBank,
      } = JSON.parse(saved);
      setSaveEnabled(true);
      if (savedBank) setBank(savedBank);
      if (savedAccountNo) setAccountNo(savedAccountNo);
      if (savedAmount) setAmount(savedAmount);
      if (savedIsCustomBank !== undefined) setIsCustomBank(savedIsCustomBank);
    }
  }, []);

  // saveEnabled 토글 핸들러
  const handleSaveToggle = (checked: boolean) => {
    setSaveEnabled(checked);
    if (!checked) {
      localStorage.removeItem(STORAGE_KEY);
    } else {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ bank, accountNo, amount, isCustomBank }),
      );
    }
  };

  // 저장 활성화 상태에서 입력값 변경 시 로컬스토리지 업데이트
  useEffect(() => {
    if (saveEnabled) {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ bank, accountNo, amount, isCustomBank }),
      );
    }
  }, [bank, accountNo, amount, isCustomBank, saveEnabled]);

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
    <div className="max-w-3xl mx-auto p-4 w-full">
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
          {/* 입력 정보 저장 토글 */}
          <div className="flex items-center gap-2">
            <Switch
              id="save-toggle"
              checked={saveEnabled}
              onCheckedChange={handleSaveToggle}
            />
            <Label
              htmlFor="save-toggle"
              className="text-sm text-muted-foreground cursor-pointer"
            >
              입력 정보 저장
            </Label>
          </div>

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
                <div className="flex flex-col items-center space-y-4 h-[500px]">
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
