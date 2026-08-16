import { remainingSlots, type Capacity } from "@/domain";
import { formatCapacityMonth } from "@/lib/format";

type CapacityNoteProps = {
  capacity: Capacity;
};

export function CapacityNote({ capacity }: CapacityNoteProps) {
  const remaining = remainingSlots(capacity);
  const month = formatCapacityMonth(capacity.yearMonth);
  const open = remaining > 0;

  if (!open) {
    return (
      <p className="max-w-[42ch] leading-relaxed text-muted-foreground">
        As vagas de {month} acabaram. Pode chamar no WhatsApp para entrar na
        fila do próximo mês.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <p className="font-[family-name:var(--font-display)] text-[clamp(4.5rem,14vw,8rem)] font-medium leading-none tabular-nums tracking-tight text-ink">
        {String(remaining).padStart(2, "0")}
      </p>
      <p className="max-w-[42ch] text-[1.05rem] leading-relaxed text-muted-foreground">
        <span className="font-medium text-foreground">
          {remaining === 1 ? "vaga" : "vagas"} em {month}.
        </span>{" "}
        Sem fila inventada: é o que cabe na agenda.
      </p>
    </div>
  );
}
