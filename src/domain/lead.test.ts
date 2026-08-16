import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { asOfferId } from "./ids.ts";
import { validateLeadCapture } from "./lead.ts";

const offerId = asOfferId("sites-que-vendem");

describe("Captura de Lead", () => {
  it("aceita nome e WhatsApp com DDD", () => {
    const fields = validateLeadCapture({
      offerId,
      name: "Ana Souza",
      whatsapp: "(11) 99999-8888",
    });
    assert.deepEqual(fields, {});
  });

  it("pede o nome quando o Visitante deixa em branco", () => {
    const fields = validateLeadCapture({
      offerId,
      name: " ",
      whatsapp: "11999998888",
    });
    assert.match(fields.name ?? "", /nome/i);
    assert.equal(fields.whatsapp, undefined);
  });

  it("pede WhatsApp com DDD quando o número não dá para chamar", () => {
    const fields = validateLeadCapture({
      offerId,
      name: "Ana",
      whatsapp: "123",
    });
    assert.match(fields.whatsapp ?? "", /DDD/);
    assert.equal(fields.name, undefined);
  });
});
