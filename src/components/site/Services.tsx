import { SectionHead } from "@/components/site/SectionHead";
import type { SiteContent } from "@/domain";

type ServicesProps = {
  content: SiteContent["services"];
};

export function Services({ content }: ServicesProps) {
  return (
    <section
      id="servicos"
      aria-labelledby="servicos-heading"
      className="beat scroll-mt-16 border-b border-border"
    >
      <div className="shell section-y flex flex-col gap-10 lg:gap-16">
        <SectionHead
          index="02"
          label="o que eu desenvolvo"
          title={content.title}
          headingId="servicos-heading"
        />

        <ul className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:gap-x-16 lg:gap-y-14">
          {content.items.map((service, index) => (
            <li key={service.id} className="flex flex-col gap-2">
              <span className="readout" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[1.125rem] font-medium lg:text-[1.25rem]">
                {service.name}
              </h3>
              <p className="max-w-[40ch] text-[0.9375rem] leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
