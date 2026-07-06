"use client";

import { Button } from "@/components/ui/button";
import { Copy, Download, Check } from "lucide-react";
import { handleCopyToClipboard } from "@/components/utils/clipboard";

interface ActionButtonsProps {
  link: string;
  bank: string;
  isCopied: boolean;
  onCopy: () => void;
  onDownloadQR: () => void;
}

export default function ActionButtons({
  link,
  bank,
  isCopied,
  onCopy,
  onDownloadQR,
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

      <Button
        onClick={handleCopy}
        variant="default"
        className={`w-full transition-colors duration-300 ${
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
    </div>
  );
}
