"use client";

import { forwardRef } from "react";
import { QRCodeCanvas } from "qrcode.react";

interface QRCodeDisplayProps {
  value: string;
}

const QRCodeDisplay = forwardRef<HTMLDivElement, QRCodeDisplayProps>(
  ({ value }, ref) => {
    return (
      <>
        <div
          ref={ref}
          className="p-4 bg-white border-2 rounded-lg shadow-sm"
        >
          <QRCodeCanvas
            value={value}
            size={200}
            bgColor={"#ffffff"}
            fgColor={"#000000"}
            level={"H"}
            includeMargin={true}
          />
        </div>
        <p className="text-sm text-muted-foreground text-center">
          카메라로 스캔하면 바로 송금됩니다 📷
        </p>
      </>
    );
  }
);

QRCodeDisplay.displayName = "QRCodeDisplay";

export default QRCodeDisplay;
