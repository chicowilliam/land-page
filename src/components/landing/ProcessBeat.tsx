import { Section } from "@/components/landing/Section";
import type { ProcessStep } from "@/domain";

type ProcessBeatProps = {
  steps: ProcessStep[];
};

export function ProcessBeat({ steps }: ProcessBeatProps) {
  const ordered = [...steps].sort((a, b) => a.order - b.order);

  return (
    <Section labelledBy="passos-heading" wide>
      <p className="eyebrow">Passos</p>
      <h2
        id="passos-heading"
        className="max-w-[12ch] text-[clamp(1.75rem,4vw,2.6rem)] font-medium"
      >
        Passos
      </h2>
      <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {ordered.map((step) => (
          <li key={step.order} className="flex flex-col gap-3">
            <span className="font-[family-name:var(--font-display)] text-5xl tabular-nums leading-none text-gilt">
              {String(step.order).padStart(2, "0")}
            </span>
            <h3 className="text-lg font-medium tracking-wide">{step.name}</h3>
            <p className="text-[0.95rem] leading-relaxed text-muted-foreground">
              {step.visitorGets}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
