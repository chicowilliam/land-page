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
      className="scroll-mt-20 border-b-2 border-ink bg-sand"
    >
      <div className="shell flex flex-col gap-12 py-16 sm:py-20">
        <SectionHead
          index="03"
          label="Processo"
          title={content.title}
          headingId="processo-heading"
        />

        <ol className="flex flex-col">
          {content.steps.map((step) => (
            <li
              key={step.order}
              className="grid grid-cols-1 gap-2 border-t-2 border-ink py-6 last:border-b-2 sm:grid-cols-12 sm:items-baseline sm:gap-6"
            >
              <span
                aria-hidden="true"
                className="font-display text-[1.6rem] font-bold leading-none text-cobalt [font-variation-settings:'wdth'_122] sm:col-span-2"
              >
                {String(step.order).padStart(2, "0")}
              </span>
              <h3 className="text-[1.2rem] sm:col-span-4">{step.name}</h3>
              <p className="max-w-[52ch] text-[0.98rem] text-ink-soft sm:col-span-6">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        <p className="tag-mono max-w-[62ch] border-l-4 border-cobalt bg-paper px-4 py-3 normal-case tracking-normal text-[0.85rem] leading-relaxed text-ink-soft">
          {content.note}
        </p>
      </div>
    </section>
  );
}
