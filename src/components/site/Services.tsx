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
      <div className="shell flex flex-col gap-10 py-16 sm:py-20">
        <SectionHead
          index="02"
          label="o que eu desenvolvo"
          title={content.title}
          headingId="servicos-heading"
        />

        <ul className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
          {content.items.map((service, index) => (
            <li key={service.id} className="flex flex-col gap-2">
              <span className="readout" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[1.125rem] font-medium">{service.name}</h3>
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
