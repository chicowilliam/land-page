import { SectionHead } from "@/components/site/SectionHead";
import type { Project, SiteContent } from "@/domain";

type ProjectsProps = {
  content: SiteContent["projects"];
};

/** Entrada tipográfica: sem imagem placeholder, o estado real é o detalhe. */
function ProjectEntry({ project, index }: { project: Project; index: string }) {
  return (
    <article
      aria-label={project.name}
      className="grid grid-cols-1 gap-4 border-t border-border py-10 lg:grid-cols-12 lg:items-start lg:gap-16 lg:py-14"
    >
      <div className="flex flex-col gap-3 lg:col-span-5">
        <span className="readout" aria-hidden="true">
          {index}
        </span>
        <h3 className="text-[1.375rem] font-semibold tracking-tight lg:text-[1.6rem]">
          {project.name}
        </h3>
        <p className="readout">{project.tag}</p>
      </div>
      <div className="flex flex-col gap-4 lg:col-span-6 lg:col-start-7">
        <p className="max-w-[54ch] leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <p className="readout flex items-center gap-2.5">
          <span className="status-dot shrink-0" aria-hidden="true" />
          em desenvolvimento — sem link público por enquanto
        </p>
      </div>
    </article>
  );
}

export function Projects({ content }: ProjectsProps) {
  return (
    <section
      id="projetos"
      aria-labelledby="projetos-heading"
      className="beat scroll-mt-16 border-b border-border"
    >
      <div className="shell section-y flex flex-col gap-10 lg:gap-14">
        <SectionHead
          index="01"
          label="projetos selecionados"
          title={content.title}
          headingId="projetos-heading"
          aside={content.intro}
        />

        <div className="flex flex-col">
          {content.items.map((project, index) => (
            <ProjectEntry
              key={project.id}
              project={project}
              index={String(index + 1).padStart(2, "0")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
