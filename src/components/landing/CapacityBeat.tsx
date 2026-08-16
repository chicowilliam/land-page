import { CapacityNote } from "@/components/landing/CapacityNote";
import type { Capacity } from "@/domain";

type CapacityBeatProps = {
  capacity: Capacity;
};

export function CapacityBeat({ capacity }: CapacityBeatProps) {
  return (
    <section
      className="beat border-t border-border px-4 py-14 sm:px-6"
      aria-labelledby="capacidade-heading"
    >
      <div className="mx-auto flex max-w-2xl flex-col gap-4">
        <h2
          id="capacidade-heading"
          className="font-[family-name:var(--font-display)] text-[clamp(1.5rem,4vw,2rem)] font-medium"
        >
          Capacidade
        </h2>
        <CapacityNote capacity={capacity} />
      </div>
    </section>
  );
}
