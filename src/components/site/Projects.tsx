import { SectionHead } from "@/components/site/SectionHead";
import type { Project, SiteContent } from "@/domain";
import { cn } from "@/lib/cn";

type ProjectsProps = {
  content: SiteContent["projects"];
};

/** Entrada editorial: tipografia como protagonista, sem imagem placeholder. */
function ProjectEntry({
  project,
  index,
  tone = "paper",
  reversed = false,
}: {
  project: Project;
  index: string;
  tone?: "paper" | "ink";
  reversed?: boolean;
}) {
  const onInk = tone === "ink";

  return (
    <article
      aria-label={project.name}
      className="group grid grid-cols-1 gap-6 py-12 sm:py-16 lg:grid-cols-12 lg:items-end lg:gap-10"
    >
      <div
        className={cn(
          "flex flex-col items-start gap-4 lg:col-span-7",
          reversed && "lg:order-2 lg:col-start-6",
        )}
      >
        <span
          aria-hidden="true"
          className="font-display text-[1.4rem] font-bold leading-none text-cobalt [font-variation-settings:'wdth'_122]"
        >
          {index}
        </span>
        <h3
          className={cn(
            "text-name transition-transform duration-[var(--hover-dur)] ease-[var(--ease-out)] group-hover:translate-x-2",
            onInk && "text-paper",
          )}
        >
          {project.name}
          <span
            aria-hidden="true"
            className="ml-4 inline-block text-cobalt opacity-0 transition-opacity duration-[var(--hover-dur)] group-hover:opacity-100"
          >
            →
          </span>
        </h3>
        <p
          className={cn(
            "tag-mono border-y py-2",
            onInk ? "border-paper/40 text-paper/70" : "border-ink text-ink-soft",
          )}
        >
          {project.tag}
        </p>
      </div>

      <div
        className={cn(
          "flex flex-col items-start gap-5 lg:col-span-4 lg:col-start-9",
          reversed && "lg:order-1 lg:col-start-1",
        )}
      >
        <p
          className={cn(
            "max-w-[44ch] text-[0.98rem] leading-relaxed",
            onInk ? "text-paper/80" : "text-ink-soft",
          )}
        >
          {project.description}
        </p>
        <p
          className={cn(
            "tag-mono flex items-center gap-2",
            onInk ? "text-paper" : "text-ink",
          )}
        >
          <span aria-hidden="true" className="size-2 bg-signal" />
          Em desenvolvimento — sem link público por enquanto
        </p>
      </div>
    </article>
  );
}

export function Projects({ content }: ProjectsProps) {
  const [cafe, jazz, ototoi] = content.items;

  return (
    <section
      id="projetos"
      aria-labelledby="projetos-heading"
      className="scroll-mt-20 border-b-2 border-ink"
    >
      <div className="shell flex flex-col gap-4 pt-20 sm:pt-28">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <SectionHead
            index="01"
            label="Projetos selecionados"
            title={content.title}
            headingId="projetos-heading"
            className="lg:col-span-8"
          />
          <p className="max-w-[46ch] self-end text-ink-soft lg:col-span-4">
            {content.intro}
          </p>
        </div>

        <ProjectEntry project={cafe} index="01" />
      </div>

      {/* Faixa escura: ritmo entre os projetos */}
      <div className="border-y-2 border-ink bg-ink">
        <div className="shell">
          <ProjectEntry project={jazz} index="02" tone="ink" reversed />
        </div>
      </div>

      <div className="shell pb-20 sm:pb-28">
        <ProjectEntry project={ototoi} index="03" />
      </div>
    </section>
  );
}
