import { Section } from "@/components/landing/Section";
import type { Guarantee } from "@/domain";

type GuaranteeBeatProps = {
  guarantee: Guarantee;
};

export function GuaranteeBeat({ guarantee }: GuaranteeBeatProps) {
  return (
    <Section labelledBy="garantia-heading">
      <p className="eyebrow">Garantia</p>
      <div className="border-l-2 border-gilt pl-6 sm:pl-8">
        <h2
          id="garantia-heading"
          className="max-w-[20ch] text-[clamp(1.75rem,4vw,2.6rem)] font-medium"
        >
          {guarantee.commitment}
        </h2>
        <p className="mt-6 max-w-[58ch] leading-relaxed text-foreground/90">
          {guarantee.covers}
        </p>
      </div>
    </Section>
  );
}
