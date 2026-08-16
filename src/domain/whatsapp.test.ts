import assert from "node:assert/strict";
import { describe, it } from "node:test";
import type { WhatsAppChannel } from "./types.ts";
import { whatsappHref, whatsappHrefWithLeadName } from "./whatsapp.ts";

const channel: WhatsAppChannel = {
  type: "WHATSAPP",
  role: "PRIMARY",
  phoneE164: "+55 11 99999-8888",
  prefilledMessage: "Oi, vi o site.",
};

describe("Canal WhatsApp", () => {
  it("monta wa.me com DDI só em dígitos e a mensagem da Conversão", () => {
    assert.equal(
      whatsappHref(channel),
      `https://wa.me/5511999998888?text=${encodeURIComponent("Oi, vi o site.")}`,
    );
  });

  it("no formulário, inclui o nome do Lead na mensagem sem perder o texto da Oferta", () => {
    const href = whatsappHrefWithLeadName(channel, "Ana");
    assert.equal(href.startsWith("https://wa.me/5511999998888?text="), true);
    const text = decodeURIComponent(href.split("text=")[1] ?? "");
    assert.equal(text.includes("Oi, vi o site."), true);
    assert.equal(text.includes("Ana"), true);
  });
});
