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
      className="scroll-mt-20 border-b-2 border-ink"
    >
      <div className="shell flex flex-col gap-12 py-16 sm:py-20">
        <SectionHead
          index="02"
          label="O que eu desenvolvo"
          title={content.title}
          headingId="servicos-heading"
        />

        {/* Matriz editorial: células com bordas compartilhadas, sem cards soltos */}
        <ul className="hard-shadow grid grid-cols-1 border-2 border-ink bg-paper sm:grid-cols-2">
          {content.items.map((service, index) => (
            <li
              key={service.id}
              className="group flex flex-col gap-3 border-ink p-6 transition-colors duration-[var(--hover-dur)] not-last:border-b hover:bg-sand sm:p-8 sm:not-last:border-b-0 sm:nth-[-n+2]:border-b sm:odd:border-r"
            >
              <span
                aria-hidden="true"
                className="font-display text-[2rem] font-bold leading-none text-cobalt [font-variation-settings:'wdth'_122]"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[1.2rem]">{service.name}</h3>
              <p className="max-w-[40ch] text-[0.98rem] text-ink-soft">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
