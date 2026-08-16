import { WhatsAppCta } from "@/components/landing/WhatsAppCta";
import type { Offer, WhatsAppChannel } from "@/domain";

type CloseBeatProps = {
  offer: Offer;
  channel: WhatsAppChannel;
};

export function CloseBeat({ offer, channel }: CloseBeatProps) {
  return (
    <section
      className="beat border-t border-border px-4 py-16 sm:px-6"
      aria-labelledby="fecho-heading"
    >
      <div className="mx-auto flex max-w-2xl flex-col gap-6">
        <h2
          id="fecho-heading"
          className="font-[family-name:var(--font-display)] text-[clamp(1.75rem,5vw,2.5rem)] font-medium leading-snug"
        >
          {offer.promise.result}
        </h2>
        <p className="max-w-[42ch] leading-relaxed">{offer.promise.howOrForWhom}</p>
        <WhatsAppCta channel={channel} className="w-full sm:w-auto" />
      </div>
    </section>
  );
}
