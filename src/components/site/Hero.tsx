import { ActionLink } from "@/components/site/ActionLink";
import { BrowserFrame } from "@/components/site/BrowserFrame";
import {
  CafePreview,
  JazzPreview,
} from "@/components/site/ProjectPreview";
import { whatsappHref, type SiteContent } from "@/domain";

type HeroProps = {
  content: SiteContent;
};

export function Hero({ content }: HeroProps) {
  const { hero, whatsapp } = content;

  return (
    <section
      id="topo"
      aria-labelledby="hero-heading"
      className="border-b-2 border-ink"
    >
      <div className="shell grid grid-cols-1 gap-12 py-14 sm:py-16 lg:grid-cols-12 lg:items-center lg:gap-8 lg:py-20">
        <div className="flex max-w-[38rem] flex-col items-start gap-7 lg:col-span-7">
          <p className="tag-mono border border-ink bg-sand px-3 py-2 text-ink">
            {hero.label}
          </p>

          <h1 id="hero-heading" className="text-hero">
            {hero.title}
          </h1>

          <p className="max-w-[52ch] text-ink-soft">{hero.text}</p>

          <div className="flex w-full flex-col gap-4 pt-1 sm:w-auto sm:flex-row sm:items-center">
            <ActionLink href="#projetos" variant="cobalt">
              Ver projetos
              <span aria-hidden="true">↓</span>
            </ActionLink>
            <ActionLink
              href={whatsappHref(whatsapp)}
              variant="outline"
              external
            >
              Conversar no WhatsApp
            </ActionLink>
          </div>

          <p className="index-num text-ink-soft">{hero.aside}</p>
        </div>

        <div className="relative lg:col-span-5">
          <span
            aria-hidden="true"
            className="index-num absolute -top-6 right-0 hidden text-ink-soft/70 lg:block"
          >
            + preview / 03 projetos
          </span>
          <div className="relative pb-12 sm:pb-16">
            <BrowserFrame
              address="cafecomletras · projeto em desenvolvimento"
              alt="Prévia ilustrativa do site do Café com Letras, projeto em desenvolvimento"
              className="w-full sm:w-[86%]"
            >
              <CafePreview />
            </BrowserFrame>
            <BrowserFrame
              address="clubedejazz · projeto em desenvolvimento"
              alt="Prévia ilustrativa da experiência digital do Clube de Jazz, projeto em desenvolvimento"
              shadow="cobalt"
              className="absolute -bottom-2 right-0 hidden w-[54%] sm:block"
            >
              <JazzPreview compact />
            </BrowserFrame>
          </div>
          <p className="tag-mono mt-4 text-ink-soft">
            Café com Letras · Clube de Jazz · Clube OTOTOI
          </p>
        </div>
      </div>

      {/* Régua gráfica: detalhe de construção entre o hero e os projetos */}
      <div
        aria-hidden="true"
        className="h-4 border-t-2 border-ink [background:repeating-linear-gradient(90deg,var(--color-ink)_0,var(--color-ink)_1px,transparent_1px,transparent_12px)] opacity-90"
      />
    </section>
  );
}
