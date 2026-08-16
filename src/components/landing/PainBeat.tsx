import type { Pain } from "@/domain";

type PainBeatProps = {
  pain: Pain;
};

export function PainBeat({ pain }: PainBeatProps) {
  return (
    <section
      className="beat border-t border-border px-4 py-14 sm:px-6"
      aria-labelledby="dor-heading"
    >
      <div className="mx-auto flex max-w-2xl flex-col gap-6">
        <p className="text-sm font-semibold tracking-wide text-stamp">Dor</p>
        <h2
          id="dor-heading"
          className="font-[family-name:var(--font-display)] text-[clamp(1.5rem,4vw,2rem)] font-medium leading-snug"
        >
          {pain.problem}
        </h2>
        <p className="max-w-[65ch] leading-relaxed text-foreground">
          {pain.agitation}
        </p>
        <p className="max-w-[65ch] leading-relaxed text-foreground">
          {pain.solution}
        </p>
      </div>
    </section>
  );
}
