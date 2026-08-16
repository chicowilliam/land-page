import { Section } from "@/components/landing/Section";
import type { Objection } from "@/domain";

type ObjectionsBeatProps = {
  objections: Objection[];
};

export function ObjectionsBeat({ objections }: ObjectionsBeatProps) {
  return (
    <Section labelledBy="objecoes-heading">
      <p className="eyebrow">Objeções</p>
      <h2
        id="objecoes-heading"
        className="text-[clamp(1.75rem,4vw,2.6rem)] font-medium"
      >
        Objeções
      </h2>
      <div className="flex flex-col">
        {objections.map((objection) => (
          <details
            key={objection.id}
            className="group border-b border-gilt/25 first:border-t"
          >
            <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-[1.05rem] font-medium marker:content-none [&::-webkit-details-marker]:hidden">
              <span>{objection.hesitation}</span>
              <span
                aria-hidden="true"
                className="font-[family-name:var(--font-display)] text-2xl leading-none text-gilt transition-transform duration-[var(--panel-dur)] ease-[var(--enter-ease)] group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="max-w-[58ch] pb-5 leading-relaxed text-muted-foreground">
              {objection.answer}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}
