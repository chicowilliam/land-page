import { LeadForm } from "@/components/landing/LeadForm";
import { Section } from "@/components/landing/Section";
import { WhatsAppCta } from "@/components/landing/WhatsAppCta";
import { PRIMARY_CTA_LABEL, type Offer, type WhatsAppChannel } from "@/domain";

type FooterBeatProps = {
  offer: Offer;
  channel: WhatsAppChannel;
};

export function FooterBeat({ offer, channel }: FooterBeatProps) {
  return (
    <Section
      as="footer"
      id="pedido"
      labelledBy="pedido-heading"
      className="scroll-mt-8"
    >
      <p className="eyebrow">Conversa</p>
      <h2
        id="pedido-heading"
        className="max-w-[14ch] text-[clamp(1.75rem,4vw,2.6rem)] font-medium"
      >
        {PRIMARY_CTA_LABEL}
      </h2>
      <p className="max-w-[42ch] leading-relaxed text-muted-foreground">
        Caminho mais curto até o {offer.maker.name}. O formulário é só se você
        preferir deixar nome e número primeiro.
      </p>
      <WhatsAppCta channel={channel} className="w-full sm:w-auto" />

      <div className="hairline my-4" role="separator" />

      <div className="flex flex-col gap-5">
        <h3 className="text-xl font-medium">Enviar pedido de conversa</h3>
        <LeadForm offerId={offer.id} channel={channel} />
      </div>
    </Section>
  );
}
