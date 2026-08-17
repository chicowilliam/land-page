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
      <div className="shell flex flex-col gap-7 py-20 sm:py-28">
        <p className="readout">06 — contato</p>

        <h2
          id="contato-heading"
          className="max-w-[18ch] text-[clamp(2rem,5vw,3rem)] tracking-[-0.03em]"
        >
          {content.title}
        </h2>

        <p className="max-w-[50ch] text-[1.0625rem] leading-relaxed text-muted-foreground">
          {content.text}
        </p>

        <div>
          <ActionLink href={whatsappHref(channel)} external>
            {content.ctaLabel}
          </ActionLink>
        </div>
      </div>
    </section>
  );
}
