import Image from "next/image";
import { SectionHead } from "@/components/site/SectionHead";
import type { SiteContent } from "@/domain";

type AboutProps = {
  content: SiteContent["about"];
  maker: SiteContent["maker"];
};

export function About({ content, maker }: AboutProps) {
  return (
    <section
      id="sobre"
      aria-labelledby="sobre-heading"
      className="beat scroll-mt-16 border-b border-border"
    >
      <div className="shell flex flex-col gap-10 py-16 sm:py-20">
        <SectionHead
          index="04"
          label="sobre"
          title={content.title}
          headingId="sobre-heading"
        />

        <figure className="flex items-center gap-4" translate="no">
          <Image
            src={maker.photo.src}
            alt={maker.photo.alt}
            width={56}
            height={56}
            className="size-14 rounded-full border border-border object-cover object-[center_30%]"
          />
          <figcaption className="flex flex-col">
            <span className="text-[0.9375rem] font-medium">{maker.name}</span>
            <span className="readout">{maker.location}</span>
          </figcaption>
        </figure>

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
    </section>
  );
}
