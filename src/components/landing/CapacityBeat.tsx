import { CapacityNote } from "@/components/landing/CapacityNote";
import { Section } from "@/components/landing/Section";
import type { Capacity } from "@/domain";

type CapacityBeatProps = {
  capacity: Capacity;
};

export function CapacityBeat({ capacity }: CapacityBeatProps) {
  return (
    <Section labelledBy="capacidade-heading">
      <p className="eyebrow">Capacidade</p>
      <h2
        id="capacidade-heading"
        className="text-[clamp(1.75rem,4vw,2.6rem)] font-medium"
      >
        Capacidade
      </h2>
      <CapacityNote capacity={capacity} />
    </Section>
  );
}
