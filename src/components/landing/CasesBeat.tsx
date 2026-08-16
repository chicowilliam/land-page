import { Section } from "@/components/landing/Section";
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
    <Section labelledBy="cases-heading" wide>
      <p className="eyebrow">Cases</p>
      <h2
        id="cases-heading"
        className="max-w-[16ch] text-[clamp(1.75rem,4vw,2.6rem)] font-medium"
      >
        Antes, depois, Resultado
      </h2>
      <ul className="flex flex-col gap-14">
        {cases.map((item) => (
          <li key={item.id} className="flex flex-col gap-8">
            <h3
              className="font-[family-name:var(--font-display)] text-2xl font-medium"
              translate="no"
            >
              {item.name}
            </h3>
            <dl className="grid gap-8 sm:grid-cols-3">
              <div className="flex flex-col gap-3">
                <dt className="eyebrow">Antes</dt>
                <dd className="text-[1.05rem] leading-relaxed">{item.before}</dd>
              </div>
              <div className="flex flex-col gap-3">
                <dt className="eyebrow">Depois</dt>
                <dd className="text-[1.05rem] leading-relaxed">{item.after}</dd>
              </div>
              <div className="flex flex-col gap-3">
                <dt className="eyebrow">Resultado</dt>
                <dd className="text-[1.05rem] leading-relaxed">{item.result}</dd>
              </div>
            </dl>
          </li>
        ))}
      </ul>
      <WhatsAppCta channel={channel} className="w-full sm:w-auto" />
    </Section>
  );
}
