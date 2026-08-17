import { PortraitCard } from "@/components/site/PortraitCard";
import { SectionHead } from "@/components/site/SectionHead";
import type { SiteContent } from "@/domain";

type AboutProps = {
  content: SiteContent["about"];
  maker: SiteContent["maker"];
  channel: SiteContent["whatsapp"];
};

export function About({ content, maker, channel }: AboutProps) {
  return (
    <section
      id="sobre"
      aria-labelledby="sobre-heading"
      className="beat scroll-mt-16 border-b border-border"
    >
      <div className="shell section-y flex flex-col gap-10 lg:gap-16">
        <SectionHead
          index="04"
          label="sobre"
          title={content.title}
          headingId="sobre-heading"
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start lg:gap-16">
          <div className="lg:col-span-4">
            <PortraitCard maker={maker} channel={channel} size="about" />
          </div>

          <div className="flex flex-col gap-8 lg:col-span-7 lg:col-start-6">
            <div className="flex max-w-[62ch] flex-col gap-5">
              {content.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className="leading-relaxed text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="flex flex-col gap-3 border-t border-border pt-6">
              <span className="readout">stack principal</span>
              <ul className="flex flex-wrap gap-x-5 gap-y-1.5">
                {content.technologies.map((tech) => (
                  <li key={tech} className="readout text-foreground">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
