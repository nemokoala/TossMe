"use client";

import { Input } from "@/components/ui/input";

interface AmountInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function AmountInput({ value, onChange }: AmountInputProps) {
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/,/g, "");
    if (!isNaN(Number(inputValue))) {
      onChange(Number(inputValue).toLocaleString());
    }
  };

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        받을 금액 (원)
      </label>
      <Input
        type="text"
        value={value}
        onChange={handleAmountChange}
        placeholder="0"
        inputMode="numeric"
        className="text-right font-mono text-lg font-semibold"
      />
    </div>
  );
}
