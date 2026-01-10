"use client";

import { Button } from "@/components/ui/button";
import { Copy, Download, Smartphone, Check } from "lucide-react";
import { handleCopyToClipboard } from "./utils/clipboard";

interface ActionButtonsProps {
  link: string;
  bank: string;
  isCopied: boolean;
  onCopy: () => void;
  onDownloadQR: () => void;
  onTestLink: () => void;
}

export default function ActionButtons({
  link,
  bank,
  isCopied,
  onCopy,
  onDownloadQR,
  onTestLink,
}: ActionButtonsProps) {
  const handleCopy = async () => {
    await handleCopyToClipboard(link, onCopy);
  };

  return (
    <div className="w-full space-y-3">
      <Button onClick={onDownloadQR} variant="outline" className="w-full">
        <Download className="mr-2 h-4 w-4" />
        QR 이미지 저장
      </Button>

      <div className="grid grid-cols-2 gap-3">
        <Button
          onClick={handleCopy}
          variant="default"
          className={`transition-colors duration-300 ${
            isCopied ? "bg-green-600 hover:bg-green-700" : ""
          }`}
        >
          {isCopied ? (
            <>
              <Check className="mr-2 h-4 w-4" />
              복사됨
            </>
          ) : (
            <>
              <Copy className="mr-2 h-4 w-4" />
              링크 복사
            </>
          )}
        </Button>

        <Button onClick={onTestLink} variant="secondary">
          <Smartphone className="mr-2 h-4 w-4" />
          앱 열기
        </Button>
      </div>
    </div>
  );
}
