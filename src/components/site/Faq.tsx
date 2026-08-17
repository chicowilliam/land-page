import { SectionHead } from "@/components/site/SectionHead";
import type { SiteContent } from "@/domain";

type FaqProps = {
  items: SiteContent["faq"];
};

export function Faq({ items }: FaqProps) {
  return (
    <section
      id="perguntas"
      aria-labelledby="perguntas-heading"
      className="scroll-mt-20 border-b-2 border-ink"
    >
      <div className="shell grid grid-cols-1 gap-10 py-16 sm:py-20 lg:grid-cols-12">
        <SectionHead
          index="05"
          label="Perguntas frequentes"
          title="Antes de chamar, talvez você queira saber."
          headingId="perguntas-heading"
          className="lg:col-span-5"
        />

        <div className="flex flex-col self-start lg:col-span-6 lg:col-start-7">
          {items.map((item) => (
            <details
              key={item.id}
              name="faq"
              className="group border-b-2 border-ink first:border-t-2"
            >
              <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-[1.05rem] font-medium marker:content-none [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className="font-display text-2xl leading-none text-cobalt transition-transform duration-[var(--hover-dur)] ease-[var(--ease-out)] group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="max-w-[56ch] pb-5 text-[0.98rem] leading-relaxed text-ink-soft">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
