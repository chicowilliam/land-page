import { BrowserFrame } from "@/components/site/BrowserFrame";
import {
  CafePreview,
  JazzPreview,
  OtotoiPreview,
} from "@/components/site/ProjectPreview";
import { SectionHead } from "@/components/site/SectionHead";
import type { Project, SiteContent } from "@/domain";

type ProjectsProps = {
  content: SiteContent["projects"];
};

function ProjectInfo({
  project,
  index,
}: {
  project: Project;
  index: string;
}) {
  return (
    <div className="flex flex-col items-start gap-4">
      <span className="index-num text-cobalt">{index}</span>
      <h3 className="text-h3">{project.name}</h3>
      <p className="tag-mono border-y border-ink py-2 text-ink-soft">
        {project.tag}
      </p>
      <p className="max-w-[46ch] text-ink-soft">{project.description}</p>
      <p className="tag-mono flex items-center gap-2 text-ink">
        <span aria-hidden="true" className="size-2 bg-signal" />
        Em desenvolvimento — sem link público por enquanto
      </p>
    </div>
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
      <div className="shell flex flex-col gap-14 py-16 sm:py-20">
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

        {/* P.01 — moldura à esquerda, texto à direita */}
        <article
          aria-label={cafe.name}
          className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12"
        >
          <BrowserFrame
            address="cafecomletras · projeto em desenvolvimento"
            alt="Prévia ilustrativa do site institucional do Café com Letras, em desenvolvimento"
            className="lg:col-span-7"
          >
            <CafePreview />
          </BrowserFrame>
          <div className="lg:col-span-4 lg:col-start-9">
            <ProjectInfo project={cafe} index="P.01" />
          </div>
        </article>

        {/* P.02 — texto à esquerda, moldura escura sobre painel de areia */}
        <article
          aria-label={jazz.name}
          className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12"
        >
          <div className="order-2 lg:order-1 lg:col-span-4">
            <ProjectInfo project={jazz} index="P.02" />
          </div>
          <div className="order-1 border-2 border-ink bg-sand p-4 sm:p-7 lg:order-2 lg:col-span-7 lg:col-start-6">
            <BrowserFrame
              address="clubedejazz · projeto em desenvolvimento"
              alt="Prévia ilustrativa da experiência digital do Clube de Jazz, em desenvolvimento"
              shadow="cobalt"
            >
              <JazzPreview />
            </BrowserFrame>
          </div>
        </article>

        {/* P.03 — faixa horizontal com moldura compacta */}
        <article
          aria-label={ototoi.name}
          className="grid grid-cols-1 items-center gap-8 border-2 border-ink bg-paper-soft p-5 sm:p-8 lg:grid-cols-12"
        >
          <div className="lg:col-span-5">
            <ProjectInfo project={ototoi} index="P.03" />
          </div>
          <BrowserFrame
            address="clubeototoi · projeto em desenvolvimento"
            alt="Prévia ilustrativa do site institucional do Clube OTOTOI, em desenvolvimento"
            className="lg:col-span-6 lg:col-start-7"
          >
            <OtotoiPreview />
          </BrowserFrame>
        </article>
      </div>
    </section>
  );
}
