import type { Contact, WhatsAppChannel } from "./types";

export function primaryWhatsApp(contact: Contact): WhatsAppChannel {
  return contact.channels[0];
}

export function whatsappHref(channel: WhatsAppChannel): string {
  const phone = channel.phoneE164.replace(/\D/g, "");
  const text = encodeURIComponent(channel.prefilledMessage);
  return `https://wa.me/${phone}?text=${text}`;
}

export function whatsappHrefWithLeadName(
  channel: WhatsAppChannel,
  name: string,
): string {
  return whatsappHref({
    ...channel,
    prefilledMessage: `${channel.prefilledMessage} Meu nome é ${name.trim()}.`,
  });
}
