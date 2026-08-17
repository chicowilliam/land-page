import type { WhatsAppChannel } from "./types";

export function whatsappHref(channel: WhatsAppChannel): string {
  const phone = channel.phoneE164.replace(/\D/g, "");
  const text = encodeURIComponent(channel.prefilledMessage);
  return `https://wa.me/${phone}?text=${text}`;
}
