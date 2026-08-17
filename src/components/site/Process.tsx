import { SectionHead } from "@/components/site/SectionHead";
import type { SiteContent } from "@/domain";

type ProcessProps = {
  content: SiteContent["process"];
};

export function Process({ content }: ProcessProps) {
  return (
    <section
      id="processo"
      aria-labelledby="processo-heading"
      className="beat scroll-mt-16 border-b border-border"
    >
      <div className="shell flex flex-col gap-10 py-16 sm:py-20">
        <SectionHead
          index="03"
          label="processo"
          title={content.title}
          headingId="processo-heading"
        />

        <ol className="flex flex-col">
          {content.steps.map((step) => (
            <li
              key={step.order}
              className="flex gap-5 border-b border-border py-5 last:border-b-0"
            >
              <span className="readout pt-1" aria-hidden="true">
                {String(step.order).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="text-[1.0625rem] font-medium">{step.name}</h3>
                <p className="max-w-[54ch] text-[0.9375rem] leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <p className="max-w-[58ch] border-l-2 border-primary pl-4 text-[0.9375rem] leading-relaxed text-muted-foreground">
          {content.note}
        </p>
      </div>
    </section>
  );
}
