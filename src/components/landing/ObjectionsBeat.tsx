import type { Objection } from "@/domain";

type ObjectionsBeatProps = {
  objections: Objection[];
};

export function ObjectionsBeat({ objections }: ObjectionsBeatProps) {
  return (
    <section
      className="beat border-t border-border px-4 py-14 sm:px-6"
      aria-labelledby="objecoes-heading"
    >
      <div className="mx-auto flex max-w-2xl flex-col gap-6">
        <h2
          id="objecoes-heading"
          className="font-[family-name:var(--font-display)] text-[clamp(1.5rem,4vw,2rem)] font-medium"
        >
          Objeções
        </h2>
        <div className="flex flex-col border-t border-border">
          {objections.map((objection) => (
            <details
              key={objection.id}
              className="group border-b border-border"
            >
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-base font-medium marker:content-none [&::-webkit-details-marker]:hidden">
                <span>{objection.hesitation}</span>
                <span
                  aria-hidden="true"
                  className="text-stamp transition-transform duration-[var(--panel-dur)] ease-[var(--enter-ease)] group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="max-w-[65ch] pb-4 leading-relaxed text-muted-foreground">
                {objection.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
