import type { ProcessStep } from "@/domain";

type ProcessBeatProps = {
  steps: ProcessStep[];
};

export function ProcessBeat({ steps }: ProcessBeatProps) {
  const ordered = [...steps].sort((a, b) => a.order - b.order);

  return (
    <section
      className="beat border-t border-border px-4 py-14 sm:px-6"
      aria-labelledby="passos-heading"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <h2
          id="passos-heading"
          className="font-[family-name:var(--font-display)] text-[clamp(1.5rem,4vw,2rem)] font-medium"
        >
          Passos
        </h2>
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ordered.map((step) => (
            <li key={step.order} className="flex flex-col gap-2">
              <span className="font-[family-name:var(--font-display)] text-3xl tabular-nums text-stamp">
                {step.order}
              </span>
              <h3 className="text-lg font-medium">{step.name}</h3>
              <p className="text-[0.95rem] leading-relaxed text-muted-foreground">
                {step.visitorGets}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
