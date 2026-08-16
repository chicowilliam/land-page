import { Section } from "@/components/landing/Section";
import { WhatsAppCta } from "@/components/landing/WhatsAppCta";
import type { Offer, WhatsAppChannel } from "@/domain";

type CloseBeatProps = {
  offer: Offer;
  channel: WhatsAppChannel;
};

export function CloseBeat({ offer, channel }: CloseBeatProps) {
  return (
    <Section labelledBy="fecho-heading" className="bg-muted/40">
      <p className="eyebrow">Fecho</p>
      <h2
        id="fecho-heading"
        className="max-w-[16ch] text-[clamp(1.85rem,4.5vw,2.85rem)] font-medium"
      >
        {offer.promise.result}
      </h2>
      <p className="max-w-[42ch] leading-relaxed text-foreground/90">
        {offer.promise.howOrForWhom}
      </p>
      <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-gilt" translate="no">
        {offer.maker.name}
      </p>
      <WhatsAppCta channel={channel} className="w-full sm:w-auto" />
    </Section>
  );
}
