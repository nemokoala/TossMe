"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BANKS } from "@/components/constants";

interface BankSelectProps {
  value: string;
  onChange: (value: string) => void;
  isCustomBank: boolean;
  onCustomBankChange: (isCustom: boolean) => void;
}

export default function BankSelect({
  value,
  onChange,
  isCustomBank,
  onCustomBankChange,
}: BankSelectProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        은행 선택
      </label>
      {isCustomBank ? (
        <div className="flex gap-2">
          <Input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="은행명을 직접 입력하세요"
            className="flex-1"
          />
          <Button
            variant="outline"
            onClick={() => {
              onCustomBankChange(false);
              onChange("토스뱅크");
            }}
          >
            취소
          </Button>
        </div>
      ) : (
        <Select
          value={value}
          onValueChange={(selectedValue) => {
            if (selectedValue === "custom") {
              onCustomBankChange(true);
              onChange("");
            } else {
              onChange(selectedValue);
            }
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder="은행을 선택하세요" />
          </SelectTrigger>
          <SelectContent>
            {BANKS.map((bank) => (
              <SelectItem key={bank} value={bank}>
                {bank}
              </SelectItem>
            ))}
            <SelectItem value="custom">직접 입력</SelectItem>
          </SelectContent>
        </Select>
      )}
    </div>
  );
}
