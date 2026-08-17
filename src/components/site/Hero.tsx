import { ActionLink } from "@/components/site/ActionLink";
import { whatsappHref, type SiteContent } from "@/domain";

type HeroProps = {
  content: SiteContent;
};

export function Hero({ content }: HeroProps) {
  const { hero, whatsapp, projects } = content;

  return (
    <section id="topo" aria-labelledby="hero-heading" className="border-b border-border">
      <div className="shell flex flex-col gap-8 py-20 sm:py-28">
        <p className="readout">{hero.label}</p>

        <h1
          id="hero-heading"
          className="max-w-[18ch] text-[clamp(2.25rem,6vw,3.5rem)] tracking-[-0.03em]"
        >
          {hero.title}
        </h1>

        <p className="max-w-[48ch] text-[1.125rem] leading-relaxed text-muted-foreground">
          {hero.text}
        </p>

        <div className="flex w-full flex-col gap-4 pt-1 sm:w-auto sm:flex-row sm:items-center sm:gap-5">
          <ActionLink href={whatsappHref(whatsapp)} external>
            Conversar no WhatsApp
          </ActionLink>
          <ActionLink href="#projetos" variant="outline" arrow="↓">
            Ver projetos
          </ActionLink>
        </div>

        <p className="readout">{hero.aside}</p>

        {/* Índice de projetos: conteúdo real no lugar de imagem decorativa */}
        <nav aria-label="Índice de projetos" className="mt-6 border-t border-border pt-6">
          <p className="readout pb-2">índice / projetos</p>
          <ul>
            {projects.items.map((project, index) => (
              <li key={project.id}>
                <a
                  href="#projetos"
                  className="group flex min-h-12 items-baseline gap-4 border-b border-border py-3.5 no-underline last:border-b-0"
                >
                  <span className="readout" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[1.0625rem] font-medium transition-transform duration-[var(--hover-dur)] ease-[var(--enter-ease)] group-hover:translate-x-1">
                    {project.name}
                  </span>
                  <span
                    aria-hidden="true"
                    className="readout ml-auto transition-transform duration-[var(--hover-dur)] ease-[var(--enter-ease)] group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
