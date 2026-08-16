import type { HeroVisual } from "@/domain";

type PhoneMockupProps = {
  visual: HeroVisual;
  caseName?: string;
};

export function PhoneMockup({ visual, caseName }: PhoneMockupProps) {
  const caption =
    visual.type === "VIDEO" ? visual.alt : visual.alt;

  return (
    <figure className="mx-auto w-full max-w-[10.5rem] sm:max-w-[17.5rem]">
      <div
        className="relative aspect-[9/14] overflow-hidden rounded-[1.5rem] border-[5px] border-ink bg-ink shadow-[0_24px_50px_-24px_oklch(22%_0.03_48_/_0.55)] sm:aspect-[9/17] sm:rounded-[1.75rem] sm:border-[6px]"
        aria-hidden="true"
      >
        <div className="absolute inset-x-[18%] top-2 z-10 h-5 rounded-full bg-ink" />
        <div className="flex h-full flex-col bg-[oklch(97%_0.01_85)] pt-9">
          <p className="px-4 font-[family-name:var(--font-display)] text-[0.95rem] leading-tight text-ink">
            {caseName ?? "O site, no celular"}
          </p>
          <p className="mt-1 px-4 text-[0.7rem] leading-snug text-muted-foreground">
            Pedido claro. WhatsApp à vista.
          </p>
          <div className="mx-4 mt-4 h-24 rounded-md bg-[oklch(92%_0.02_82)]" />
          <div className="mx-4 mt-3 h-3 w-3/4 rounded-sm bg-[oklch(90%_0.02_82)]" />
          <div className="mx-4 mt-2 h-3 w-1/2 rounded-sm bg-[oklch(90%_0.02_82)]" />
          <div className="mt-auto m-4 rounded-md bg-primary px-3 py-2.5 text-center text-[0.7rem] font-semibold text-primary-foreground">
            Chamar no WhatsApp
          </div>
        </div>
      </div>
      <figcaption className="sr-only">{caption}</figcaption>
    </figure>
  );
}
