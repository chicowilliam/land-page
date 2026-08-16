import { PhoneMockup } from "@/components/landing/PhoneMockup";
import { WhatsAppCta } from "@/components/landing/WhatsAppCta";
import { remainingSlots, type Offer, type WhatsAppChannel } from "@/domain";
import { formatCapacityMonth } from "@/lib/format";

type HeroProps = {
  offer: Offer;
  channel: WhatsAppChannel;
};

export function Hero({ offer, channel }: HeroProps) {
  const remaining = remainingSlots(offer.capacity);
  const month = formatCapacityMonth(offer.capacity.yearMonth);
  const caseName = offer.cases[0]?.name;

  return (
    <header className="px-4 pb-10 pt-[max(1rem,env(safe-area-inset-top))] sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 lg:grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-12">
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between gap-3">
            <p
              className="text-sm font-semibold tracking-wide text-ink"
              translate="no"
            >
              Sites que vendem
            </p>
            <p className="text-xs tabular-nums text-muted-foreground">
              {remaining > 0
                ? `${remaining} ${remaining === 1 ? "vaga" : "vagas"} · ${month}`
                : `Fila · ${month}`}
            </p>
          </div>

          <h1 className="max-w-[18ch] font-[family-name:var(--font-display)] text-[clamp(2rem,8.4vw,3.75rem)] font-medium leading-[1.12] tracking-[-0.02em] text-ink">
            {offer.promise.result}
          </h1>

          <p className="max-w-[42ch] text-[1.0625rem] leading-relaxed text-foreground">
            {offer.promise.howOrForWhom}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <WhatsAppCta channel={channel} className="w-full sm:w-auto" />
            <a
              href="#pedido"
              className="inline-flex min-h-11 items-center justify-center px-1 text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            >
              Prefere deixar nome e número
            </a>
          </div>
        </div>

        <PhoneMockup visual={offer.visual} caseName={caseName} />
      </div>
    </header>
  );
}
