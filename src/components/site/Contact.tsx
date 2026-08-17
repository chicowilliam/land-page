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
      className="scroll-mt-20 border-b-2 border-ink bg-cobalt"
    >
      <div className="shell flex flex-col gap-8 py-20 sm:py-24">
        <div className="flex items-baseline gap-4 border-b-2 border-paper/70 pb-3">
          <span className="index-num text-paper">06</span>
          <span className="tag-mono text-paper/85">Contato</span>
          <span aria-hidden="true" className="index-num ml-auto text-paper/60">
            ↳ WhatsApp
          </span>
        </div>

        <h2
          id="contato-heading"
          className="max-w-[16ch] text-[clamp(2.2rem,1.2rem+4.6vw,4.4rem)] text-paper"
        >
          {content.title}
        </h2>

        <p className="max-w-[52ch] text-[1.05rem] leading-relaxed text-paper/85">
          {content.text}
        </p>

        <div>
          <a
            href={whatsappHref(channel)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-press tag-mono hard-shadow inline-flex min-h-12 items-center justify-center gap-3 border-2 border-ink bg-paper px-8 py-4 text-[0.82rem] text-ink no-underline"
          >
            {content.ctaLabel}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
