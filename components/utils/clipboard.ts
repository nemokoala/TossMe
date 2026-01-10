// 클립보드 복사 (iOS Safari 호환)
export const copyToClipboard = (text: string): boolean => {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.left = "-999999px";
  textArea.style.top = "-999999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    return document.execCommand("copy");
  } finally {
    document.body.removeChild(textArea);
  }
};

export const handleCopyToClipboard = async (
  text: string,
  onSuccess: () => void
): Promise<void> => {
  try {
    // 최신 브라우저 API 시도
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      onSuccess();
      return;
    }
  } catch {
    // 실패 시 fallback으로 진행
  }

  // iOS Safari를 위한 fallback 방법
  if (copyToClipboard(text)) {
    onSuccess();
  } else {
    // 최후의 수단: 사용자에게 직접 복사하도록 안내
    prompt("링크를 복사하세요:", text);
  }
};
