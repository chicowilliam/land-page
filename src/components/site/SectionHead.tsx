import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionHeadProps = {
  index: string;
  label: string;
  title: string;
  headingId: string;
  aside?: ReactNode;
  className?: string;
};

/** Cabeçalho: índice mono + título; no desktop o aside ocupa a coluna direita. */
export function SectionHead({
  index,
  label,
  title,
  headingId,
  aside,
  className,
}: SectionHeadProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        aside ? "lg:grid lg:grid-cols-12 lg:items-end lg:gap-16" : undefined,
        className,
      )}
    >
      <div className={cn("flex flex-col gap-5", aside ? "lg:col-span-7" : undefined)}>
        <p className="readout">
          {index} — {label}
        </p>
        <h2
          id={headingId}
          className="max-w-[28ch] text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem]"
        >
          {title}
        </h2>
      </div>
      {aside ? (
        <div className="leading-relaxed text-muted-foreground lg:col-span-5 lg:max-w-none">
          {aside}
        </div>
      ) : null}
    </div>
  );
}
