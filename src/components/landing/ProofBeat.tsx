import { Section } from "@/components/landing/Section";
import type { Proof } from "@/domain";

type ProofBeatProps = {
  proofs: Proof[];
};

export function ProofBeat({ proofs }: ProofBeatProps) {
  if (proofs.length === 0) {
    return null;
  }

  return (
    <Section labelledBy="prova-heading" wide>
      <p className="eyebrow">Prova</p>
      <h2
        id="prova-heading"
        className="max-w-[18ch] text-[clamp(1.75rem,4vw,2.6rem)] font-medium"
      >
        Prova
      </h2>
      <ul className="grid gap-px bg-border sm:grid-cols-2">
        {proofs.map((proof) => (
          <li key={proof.id} className="bg-background p-8 sm:p-10">
            {proof.type === "METRIC" ? (
              <p>
                <span className="block font-[family-name:var(--font-display)] text-5xl tabular-nums leading-none text-ink">
                  {proof.value}
                </span>
                <span className="mt-3 block text-sm tracking-wide text-muted-foreground">
                  {proof.label}
                </span>
              </p>
            ) : null}
            {proof.type === "TESTIMONIAL" ? (
              <blockquote className="flex flex-col gap-5">
                <p className="font-[family-name:var(--font-display)] text-xl leading-snug text-ink">
                  “{proof.quote}”
                </p>
                <footer className="text-sm tracking-wide text-muted-foreground">
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
    </Section>
  );
}
