import { cn } from "@/lib/cn";

type SectionHeadProps = {
  index: string;
  label: string;
  title: string;
  headingId: string;
  tone?: "paper" | "cobalt";
  className?: string;
};

/** Cabeçalho editorial padrão: número da seção, etiqueta e título display. */
export function SectionHead({
  index,
  label,
  title,
  headingId,
  tone = "paper",
  className,
}: SectionHeadProps) {
  const onCobalt = tone === "cobalt";

  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <div
        className={cn(
          "flex items-baseline gap-4 border-b-2 pb-3",
          onCobalt ? "border-paper/80" : "border-ink",
        )}
      >
        <span
          className={cn(
            "index-num",
            onCobalt ? "text-paper" : "text-cobalt",
          )}
        >
          {index}
        </span>
        <span
          className={cn("tag-mono", onCobalt ? "text-paper/85" : "text-ink-soft")}
        >
          {label}
        </span>
        <span
          aria-hidden="true"
          className={cn(
            "index-num ml-auto",
            onCobalt ? "text-paper/60" : "text-ink-soft/70",
          )}
        >
          ↓
        </span>
      </div>
      <h2
        id={headingId}
        className={cn(
          "max-w-[24ch] text-h2",
          onCobalt && "text-paper",
        )}
      >
        {title}
      </h2>
    </div>
  );
}
