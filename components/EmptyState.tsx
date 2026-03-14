import { Link2, Sparkles } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 text-center py-16 px-4 h-[500px]">
      {/* 아이콘 영역 - 그라데이션 배경과 애니메이션 효과 */}
      <div className="relative">
        <div className="w-40 h-40 rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 flex items-center justify-center shadow-lg backdrop-blur-sm border border-primary/20">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent animate-pulse" />
          <Link2
            className="w-16 h-16 text-primary relative z-10"
            strokeWidth={1.5}
          />
        </div>
        <div className="absolute -top-2 -right-2">
          <Sparkles className="w-6 h-6 text-primary animate-bounce" />
        </div>
      </div>

      {/* 텍스트 영역 */}
      <div className="space-y-3 max-w-md">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          송금 링크 생성하기
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          위의 폼에 은행과 계좌번호를 입력하시면
          <br />
          <span className="font-medium text-foreground">
            토스 앱으로 바로 송금할 수 있는 링크
          </span>
          가 생성됩니다.
        </p>
      </div>

      {/* 안내 정보 - 카드 스타일 */}
      <div className="flex flex-col gap-3 mt-6 w-full max-w-sm">
        <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 border border-border/50 hover:bg-muted/70 transition-colors">
          <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0 animate-pulse" />
          <span className="text-sm text-muted-foreground text-left">
            <span className="font-medium text-foreground">은행과 계좌번호</span>
            는 필수 입력 항목입니다
          </span>
        </div>
        <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 border border-border/50 hover:bg-muted/70 transition-colors">
          <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0 animate-pulse" />
          <span className="text-sm text-muted-foreground text-left">
            <span className="font-medium text-foreground">금액</span>은 선택
            사항입니다
          </span>
        </div>
      </div>
    </div>
  );
}
