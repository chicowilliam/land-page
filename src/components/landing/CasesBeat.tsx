import { WhatsAppCta } from "@/components/landing/WhatsAppCta";
import type { Case, WhatsAppChannel } from "@/domain";

type CasesBeatProps = {
  cases: Case[];
  channel: WhatsAppChannel;
};

export function CasesBeat({ cases, channel }: CasesBeatProps) {
  if (cases.length === 0) {
    return null;
  }

  return (
    <section
      className="beat border-t border-border px-4 py-14 sm:px-6"
      aria-labelledby="cases-heading"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-10">
        <h2
          id="cases-heading"
          className="font-[family-name:var(--font-display)] text-[clamp(1.5rem,4vw,2rem)] font-medium"
        >
          Antes, depois, Resultado
        </h2>
        <ul className="flex flex-col gap-10">
          {cases.map((item) => (
            <li key={item.id} className="flex flex-col gap-6">
              <h3 className="text-xl font-medium" translate="no">
                {item.name}
              </h3>
              <dl className="grid gap-4 sm:grid-cols-3">
                <div className="flex flex-col gap-2 rounded-lg border border-border bg-card p-4">
                  <dt className="text-sm font-semibold text-stamp">Antes</dt>
                  <dd className="text-[0.95rem] leading-relaxed">{item.before}</dd>
                </div>
                <div className="flex flex-col gap-2 rounded-lg border border-border bg-card p-4">
                  <dt className="text-sm font-semibold text-stamp">Depois</dt>
                  <dd className="text-[0.95rem] leading-relaxed">{item.after}</dd>
                </div>
                <div className="flex flex-col gap-2 rounded-lg border border-stamp/30 bg-card p-4">
                  <dt className="text-sm font-semibold text-stamp">Resultado</dt>
                  <dd className="text-[0.95rem] leading-relaxed">{item.result}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
        <WhatsAppCta channel={channel} className="w-full sm:w-auto" />
      </div>
    </section>
  );
}
