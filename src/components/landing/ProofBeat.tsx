import type { Proof } from "@/domain";

type ProofBeatProps = {
  proofs: Proof[];
};

export function ProofBeat({ proofs }: ProofBeatProps) {
  if (proofs.length === 0) {
    return null;
  }

  return (
    <section
      className="beat border-t border-border px-4 py-14 sm:px-6"
      aria-labelledby="prova-heading"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <h2
          id="prova-heading"
          className="font-[family-name:var(--font-display)] text-[clamp(1.5rem,4vw,2rem)] font-medium"
        >
          Prova
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          {proofs.map((proof) => (
            <li
              key={proof.id}
              className="rounded-lg border border-border bg-card p-5"
            >
              {proof.type === "METRIC" ? (
                <p>
                  <span className="block font-[family-name:var(--font-display)] text-4xl tabular-nums leading-none text-ink">
                    {proof.value}
                  </span>
                  <span className="mt-2 block text-sm text-muted-foreground">
                    {proof.label}
                  </span>
                </p>
              ) : null}
              {proof.type === "TESTIMONIAL" ? (
                <blockquote className="flex flex-col gap-3">
                  <p className="leading-relaxed text-foreground">
                    “{proof.quote}”
                  </p>
                  <footer className="text-sm text-muted-foreground">
                    <cite className="not-italic font-medium text-foreground">
                      {proof.author}
                    </cite>
                    {proof.role ? ` · ${proof.role}` : null}
                    {proof.result ? (
                      <span className="mt-1 block">{proof.result}</span>
                    ) : null}
                  </footer>
                </blockquote>
              ) : null}
              {proof.type === "LOGO" ? (
                <p className="text-sm font-medium">{proof.name}</p>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
