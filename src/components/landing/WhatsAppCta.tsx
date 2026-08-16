import { cn } from "@/lib/cn";
import {
  PRIMARY_CTA_LABEL,
  whatsappHref,
  type WhatsAppChannel,
} from "@/domain";

type WhatsAppCtaProps = {
  channel: WhatsAppChannel;
  className?: string;
};

export function WhatsAppCta({ channel, className }: WhatsAppCtaProps) {
  return (
    <a
      href={whatsappHref(channel)}
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-5 py-3 text-center text-base font-semibold text-primary-foreground no-underline",
        "transition-transform duration-[var(--press-dur)] ease-[var(--enter-ease)]",
        "hover:brightness-110 active:scale-[0.98]",
        "focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-ring",
        className,
      )}
    >
      {PRIMARY_CTA_LABEL}
    </a>
  );
}
