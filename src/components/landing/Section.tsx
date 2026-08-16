import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionProps = {
  children: ReactNode;
  labelledBy: string;
  wide?: boolean;
  className?: string;
  as?: "section" | "footer";
  id?: string;
};

export function Section({
  children,
  labelledBy,
  wide = false,
  className,
  as: Tag = "section",
  id,
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={cn(
        "beat relative px-5 py-20 sm:px-8 sm:py-28",
        className,
      )}
      aria-labelledby={labelledBy}
    >
      <div
        className="hairline pointer-events-none absolute inset-x-5 top-0 sm:inset-x-8"
        aria-hidden="true"
      />
      <div
        className={cn(
          "mx-auto flex flex-col gap-8",
          wide ? "max-w-6xl" : "max-w-[38rem]",
        )}
      >
        {children}
      </div>
    </Tag>
  );
}
