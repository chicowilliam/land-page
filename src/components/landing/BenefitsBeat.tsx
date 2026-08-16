import { Section } from "@/components/landing/Section";
import type { Benefit } from "@/domain";

type BenefitsBeatProps = {
  benefits: Benefit[];
};

export function BenefitsBeat({ benefits }: BenefitsBeatProps) {
  return (
    <Section labelledBy="beneficios-heading" wide>
      <p className="eyebrow">Benefícios</p>
      <h2
        id="beneficios-heading"
        className="max-w-[16ch] text-[clamp(1.75rem,4vw,2.6rem)] font-medium"
      >
        Benefícios
      </h2>
      <ul className="grid gap-10 sm:grid-cols-3">
        {benefits.map((benefit) => (
          <li key={benefit.id} className="flex flex-col gap-3">
            <p className="font-[family-name:var(--font-display)] text-xl leading-snug text-ink">
              {benefit.outcome}
            </p>
            {benefit.mechanism ? (
              <p className="text-[0.95rem] leading-relaxed text-muted-foreground">
                {benefit.mechanism}
              </p>
            ) : null}
          </li>
        ))}
      </ul>
    </Section>
  );
}
