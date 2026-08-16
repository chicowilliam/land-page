import type { Capacity } from "./types";

export function remainingSlots(capacity: Capacity): number {
  return Math.max(0, capacity.slotsTotal - capacity.slotsTaken);
}

export function isOfferOpen(capacity: Capacity): boolean {
  return remainingSlots(capacity) > 0;
}
