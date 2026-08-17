import { ActionLink } from "@/components/site/ActionLink";
import { whatsappHref, type SiteContent } from "@/domain";

type HeroProps = {
  content: SiteContent;
};

export function Hero({ content }: HeroProps) {
  const { hero, whatsapp, projects } = content;

  return (
    <section
      id="topo"
      aria-labelledby="hero-heading"
      className="border-b-2 border-ink"
    >
      <div className="shell grid grid-cols-1 gap-14 py-16 sm:py-20 lg:grid-cols-12 lg:items-end lg:gap-10 lg:py-28">
        <div className="flex flex-col items-start gap-8 lg:col-span-8">
          <p className="tag-mono text-ink-soft">{hero.label}</p>

          <h1 id="hero-heading" className="max-w-[17ch] text-hero">
            {hero.title}
          </h1>

          <p className="max-w-[46ch] text-[1.05rem] leading-relaxed text-ink-soft">
            {hero.text}
          </p>

          <div className="flex w-full flex-col gap-4 pt-2 sm:w-auto sm:flex-row sm:items-center sm:gap-5">
            <ActionLink href="#projetos" arrow="↓">
              Ver projetos
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

        {/* Índice de projetos: conteúdo real no lugar de imagem decorativa */}
        <nav aria-label="Índice de projetos" className="lg:col-span-4">
          <p className="tag-mono flex items-baseline justify-between border-b-2 border-ink pb-3 text-ink-soft">
            <span>Índice / Projetos</span>
            <span aria-hidden="true" className="text-cobalt">
              03
            </span>
          </p>
          <ul>
            {projects.items.map((project, index) => (
              <li key={project.id}>
                <a
                  href="#projetos"
                  className="group flex min-h-12 items-baseline gap-4 border-b border-ink/25 py-4 no-underline"
                >
                  <span className="index-num text-cobalt">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-[1.05rem] font-bold tracking-tight text-ink transition-transform duration-[var(--hover-dur)] ease-[var(--ease-out)] group-hover:translate-x-1">
                    {project.name}
                  </span>
                  <span
                    aria-hidden="true"
                    className="index-num ml-auto text-ink-soft/60 transition-transform duration-[var(--hover-dur)] ease-[var(--ease-out)] group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p className="tag-mono pt-4 text-[0.6rem] text-ink-soft">
            Todos em desenvolvimento
          </p>
        </nav>
      </div>

      {/* Régua gráfica: detalhe de construção entre o hero e os projetos */}
      <div
        aria-hidden="true"
        className="h-4 border-t-2 border-ink [background:repeating-linear-gradient(90deg,var(--color-ink)_0,var(--color-ink)_1px,transparent_1px,transparent_12px)] opacity-90"
      />
    </section>
  );
}
