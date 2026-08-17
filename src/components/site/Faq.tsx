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
      className="beat scroll-mt-16 border-b border-border"
    >
      <div className="shell flex flex-col gap-10 py-16 sm:py-20">
        <SectionHead
          index="05"
          label="perguntas frequentes"
          title="Antes de chamar, talvez você queira saber."
          headingId="perguntas-heading"
        />

        <div className="flex flex-col">
          {items.map((item) => (
            <details
              key={item.id}
              name="faq"
              className="group border-b border-border last:border-b-0"
            >
              <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-[1.0625rem] font-medium marker:content-none [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className="font-mono text-lg leading-none text-muted-foreground transition-transform duration-[var(--panel-dur)] ease-[var(--enter-ease)] group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="max-w-[56ch] pb-5 leading-relaxed text-muted-foreground">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
