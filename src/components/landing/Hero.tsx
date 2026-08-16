import { MakerPortrait } from "@/components/landing/MakerPortrait";
import { WhatsAppCta } from "@/components/landing/WhatsAppCta";
import { remainingSlots, type Offer, type WhatsAppChannel } from "@/domain";
import { formatCapacityMonth } from "@/lib/format";

type HeroProps = {
  offer: Offer;
  channel: WhatsAppChannel;
};

function PromiseHeading({ text }: { text: string }) {
  const parts = text.split(/(vendem mais)/i);
  return (
    <>
      {parts.map((part, index) =>
        /vendem mais/i.test(part) ? (
          <em key={index} className="font-normal italic">
            {part}
          </em>
        ) : (
          <span key={index}>{part}</span>
        ),
      )}
    </>
  );
}

export function Hero({ offer, channel }: HeroProps) {
  const remaining = remainingSlots(offer.capacity);
  const month = formatCapacityMonth(offer.capacity.yearMonth);

  return (
    <header className="relative flex min-h-[100svh] flex-col justify-center px-5 pb-16 pt-[max(1.25rem,env(safe-area-inset-top))] sm:px-8">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
        <div className="flex flex-col gap-7">
          <div className="flex items-end justify-between gap-4">
            <p className="eyebrow" translate="no">
              {offer.maker.name}
            </p>
            <p className="text-[0.7rem] tabular-nums tracking-wide text-muted-foreground">
              {remaining > 0
                ? `${remaining} ${remaining === 1 ? "vaga" : "vagas"} · ${month}`
                : `Fila · ${month}`}
            </p>
          </div>

          <h1 className="max-w-[14ch] font-[family-name:var(--font-display)] text-[clamp(2.35rem,7.2vw,4.35rem)] font-medium">
            <PromiseHeading text={offer.promise.result} />
          </h1>

          <p className="max-w-[36ch] text-[1.125rem] leading-relaxed text-foreground/90">
            {offer.promise.howOrForWhom}
          </p>

          <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center">
            <WhatsAppCta channel={channel} className="w-full sm:w-auto" />
            <a
              href="#pedido"
              className="inline-flex min-h-12 items-center text-sm tracking-wide text-muted-foreground underline decoration-gilt/60 underline-offset-8 hover:text-ink"
            >
              Prefere deixar nome e número
            </a>
          </div>
        </div>

        <MakerPortrait maker={offer.maker} />
      </div>
    </header>
  );
}
