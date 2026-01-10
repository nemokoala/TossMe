"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { handleCopyToClipboard } from "./utils/clipboard";

interface GeneratedLinkProps {
  link: string;
  isCopied: boolean;
  onCopy: () => void;
}

export default function GeneratedLink({
  link,
  isCopied,
  onCopy,
}: GeneratedLinkProps) {
  const handleCopy = async () => {
    await handleCopyToClipboard(link, onCopy);
  };

  return (
    <div className="w-full space-y-2 mb-2">
      <label className="text-sm font-medium">생성된 링크</label>
      <div className="flex gap-2">
        <Input
          value={link}
          readOnly
          className="flex-1 font-mono text-xs bg-muted"
        />
        <Button
          onClick={handleCopy}
          variant="outline"
          size="icon"
          className="shrink-0"
        >
          {isCopied ? (
            <Check className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  );
}
