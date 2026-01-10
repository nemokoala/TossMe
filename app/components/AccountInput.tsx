"use client";

import { Input } from "@/components/ui/input";

interface AccountInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function AccountInput({ value, onChange }: AccountInputProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        계좌번호
      </label>
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="- 없이 숫자만 입력"
        inputMode="numeric"
      />
    </div>
  );
}
