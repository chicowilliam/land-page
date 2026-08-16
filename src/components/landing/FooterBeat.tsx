import { LeadForm } from "@/components/landing/LeadForm";
import { WhatsAppCta } from "@/components/landing/WhatsAppCta";
import { PRIMARY_CTA_LABEL, type Offer, type WhatsAppChannel } from "@/domain";

type FooterBeatProps = {
  offer: Offer;
  channel: WhatsAppChannel;
};

export function FooterBeat({ offer, channel }: FooterBeatProps) {
  return (
    <footer
      id="pedido"
      className="scroll-mt-6 border-t border-border px-4 py-14 sm:px-6"
    >
      <div className="mx-auto flex max-w-2xl flex-col gap-8">
        <div className="flex flex-col gap-3">
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.5rem,4vw,2rem)] font-medium">
            {PRIMARY_CTA_LABEL}
          </h2>
          <p className="max-w-[42ch] leading-relaxed text-muted-foreground">
            Caminho mais curto. O formulário é só se você preferir deixar nome e
            número primeiro.
          </p>
          <WhatsAppCta channel={channel} className="w-full sm:w-auto" />
        </div>

        <div className="h-px bg-border" role="separator" />

        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-medium">Enviar pedido de conversa</h3>
          <LeadForm offerId={offer.id} channel={channel} />
        </div>
      </div>
    </footer>
  );
}
