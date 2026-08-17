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
      <div className="shell section-y flex flex-col gap-10 lg:gap-16">
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
              className="grid grid-cols-1 gap-2 border-b border-border py-6 last:border-b-0 lg:grid-cols-12 lg:items-baseline lg:gap-10 lg:py-8"
            >
              <span className="readout lg:col-span-1" aria-hidden="true">
                {String(step.order).padStart(2, "0")}
              </span>
              <h3 className="text-[1.0625rem] font-medium lg:col-span-4 lg:text-[1.125rem]">
                {step.name}
              </h3>
              <p className="max-w-[54ch] text-[0.9375rem] leading-relaxed text-muted-foreground lg:col-span-7">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        <p className="max-w-[58ch] border-l-2 border-primary pl-4 text-[0.9375rem] leading-relaxed text-muted-foreground lg:pl-5">
          {content.note}
        </p>
      </div>
    </section>
  );
}
