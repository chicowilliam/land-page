import { Section } from "@/components/landing/Section";
import type { Pain } from "@/domain";

type PainBeatProps = {
  pain: Pain;
};

export function PainBeat({ pain }: PainBeatProps) {
  return (
    <Section labelledBy="dor-heading">
      <p className="eyebrow">Dor</p>
      <h2
        id="dor-heading"
        className="text-[clamp(1.75rem,4vw,2.6rem)] font-medium"
      >
        {pain.problem}
      </h2>
      <p className="max-w-[58ch] leading-relaxed text-foreground/90">
        {pain.agitation}
      </p>
      <p className="max-w-[58ch] leading-relaxed text-foreground/90">
        {pain.solution}
      </p>
    </Section>
  );
}
