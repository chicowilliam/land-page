import type { Benefit } from "@/domain";

type BenefitsBeatProps = {
  benefits: Benefit[];
};

export function BenefitsBeat({ benefits }: BenefitsBeatProps) {
  return (
    <section
      className="beat border-t border-border px-4 py-14 sm:px-6"
      aria-labelledby="beneficios-heading"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <h2
          id="beneficios-heading"
          className="font-[family-name:var(--font-display)] text-[clamp(1.5rem,4vw,2rem)] font-medium"
        >
          Benefícios
        </h2>
        <ul className="grid gap-4 sm:grid-cols-3">
          {benefits.map((benefit) => (
            <li
              key={benefit.id}
              className="flex flex-col gap-2 border-t border-stamp pt-4"
            >
              <p className="font-medium leading-snug text-ink">{benefit.outcome}</p>
              {benefit.mechanism ? (
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {benefit.mechanism}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
