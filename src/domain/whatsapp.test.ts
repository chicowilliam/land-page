import assert from "node:assert/strict";
import { describe, it } from "node:test";
import type { WhatsAppChannel } from "./types.ts";
import { whatsappHref } from "./whatsapp.ts";

const channel: WhatsAppChannel = {
  type: "WHATSAPP",
  role: "PRIMARY",
  phoneE164: "+55 11 99999-8888",
  prefilledMessage: "Oi, vi o site.",
};

describe("Canal WhatsApp", () => {
  it("monta wa.me com DDI só em dígitos e a mensagem pré-preenchida", () => {
    assert.equal(
      whatsappHref(channel),
      `https://wa.me/5511999998888?text=${encodeURIComponent("Oi, vi o site.")}`,
    );
  });
});
