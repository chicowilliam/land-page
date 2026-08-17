import { ActionLink } from "@/components/site/ActionLink";
import { whatsappHref, type SiteContent } from "@/domain";

type ContactProps = {
  content: SiteContent["contact"];
  channel: SiteContent["whatsapp"];
};

export function Contact({ content, channel }: ContactProps) {
  return (
    <section
      id="contato"
      aria-labelledby="contato-heading"
      className="beat scroll-mt-16 border-b border-border"
    >
      <div className="shell section-y grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end lg:gap-16">
        <div className="flex flex-col gap-6 lg:col-span-7">
          <p className="readout">06 — contato</p>

          <h2
            id="contato-heading"
            className="max-w-[22ch] text-[clamp(2rem,4.4vw,3.6rem)] tracking-[-0.03em]"
          >
            {content.title}
          </h2>

          <p className="max-w-[50ch] text-[1.0625rem] leading-relaxed text-muted-foreground">
            {content.text}
          </p>
        </div>

        <div className="lg:col-span-4 lg:col-start-9">
          <ActionLink href={whatsappHref(channel)} external>
            {content.ctaLabel}
          </ActionLink>
        </div>
      </div>
    </section>
  );
}
