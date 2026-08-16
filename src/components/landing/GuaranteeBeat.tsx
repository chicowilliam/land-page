import type { Guarantee } from "@/domain";

type GuaranteeBeatProps = {
  guarantee: Guarantee;
};

export function GuaranteeBeat({ guarantee }: GuaranteeBeatProps) {
  return (
    <section
      className="beat border-t border-border px-4 py-14 sm:px-6"
      aria-labelledby="garantia-heading"
    >
      <div className="mx-auto flex max-w-2xl flex-col gap-4">
        <p className="text-sm font-semibold tracking-wide text-stamp">Garantia</p>
        <h2
          id="garantia-heading"
          className="font-[family-name:var(--font-display)] text-[clamp(1.5rem,4vw,2rem)] font-medium leading-snug"
        >
          {guarantee.commitment}
        </h2>
        <p className="max-w-[65ch] leading-relaxed text-foreground">
          {guarantee.covers}
        </p>
      </div>
    </section>
  );
}
