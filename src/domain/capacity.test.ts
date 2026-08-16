import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { isOfferOpen, remainingSlots } from "./capacity.ts";
import type { Capacity } from "./types.ts";

const agosto: Capacity = {
  yearMonth: "2026-08",
  slotsTotal: 3,
  slotsTaken: 1,
};

describe("Capacidade da Oferta", () => {
  it("conta as vagas que ainda cabem no mês", () => {
    assert.equal(remainingSlots(agosto), 2);
  });

  it("a Oferta está aberta enquanto houver vaga", () => {
    assert.equal(isOfferOpen(agosto), true);
  });

  it("zero vaga fecha a Oferta, sem número negativo", () => {
    const cheia: Capacity = {
      yearMonth: "2026-08",
      slotsTotal: 3,
      slotsTaken: 3,
    };
    assert.equal(remainingSlots(cheia), 0);
    assert.equal(isOfferOpen(cheia), false);
  });

  it("vagas tomadas além do total não viram número negativo", () => {
    const overflow: Capacity = {
      yearMonth: "2026-08",
      slotsTotal: 2,
      slotsTaken: 5,
    };
    assert.equal(remainingSlots(overflow), 0);
    assert.equal(isOfferOpen(overflow), false);
  });
});
