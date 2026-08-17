import { cn } from "@/lib/cn";

type SectionHeadProps = {
  index: string;
  label: string;
  title: string;
  headingId: string;
  className?: string;
};

/** Cabeçalho padrão: índice mono do sistema + título. */
export function SectionHead({
  index,
  label,
  title,
  headingId,
  className,
}: SectionHeadProps) {
  return (
    <div className={cn("flex flex-col gap-5", className)}>
      <p className="readout">
        {index} — {label}
      </p>
      <h2 id={headingId} className="max-w-[24ch] text-[1.75rem] sm:text-[2rem]">
        {title}
      </h2>
    </div>
  );
}
