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
      className="scroll-mt-20 border-b-2 border-ink"
    >
      <div className="shell flex flex-col gap-12 py-16 sm:py-20">
        <SectionHead
          index="04"
          label="Sobre"
          title={content.title}
          headingId="sobre-heading"
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="flex flex-col gap-5 lg:col-span-7 lg:col-start-6 lg:row-start-1">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="max-w-[62ch] text-ink-soft">
                {paragraph}
              </p>
            ))}

            <div className="mt-2 flex flex-col gap-2 border-t-2 border-ink pt-4">
              <span className="tag-mono text-ink-soft">Stack principal</span>
              <ul className="flex flex-wrap gap-x-4 gap-y-1">
                {content.technologies.map((tech) => (
                  <li key={tech} className="index-num text-ink">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <figure className="max-w-[19rem] lg:col-span-4 lg:col-start-1 lg:row-start-1">
            <div className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-2 -top-2 size-full border-2 border-cobalt"
              />
              <div className="grain relative aspect-[3/4] overflow-hidden border-2 border-ink bg-sand">
                <Image
                  src={maker.photo.src}
                  alt={maker.photo.alt}
                  fill
                  quality={88}
                  sizes="(max-width: 1024px) 19rem, 24rem"
                  className="object-cover object-[center_14%] contrast-[1.05] saturate-[0.88]"
                />
              </div>
            </div>
            <figcaption
              className="tag-mono mt-3 flex items-center justify-between text-ink"
              translate="no"
            >
              <span>{maker.name}</span>
              <span aria-hidden="true" className="text-ink-soft">
                BH · MG
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
