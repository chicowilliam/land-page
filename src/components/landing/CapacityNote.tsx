import { remainingSlots, type Capacity } from "@/domain";
import { formatCapacityMonth } from "@/lib/format";

type CapacityNoteProps = {
  capacity: Capacity;
};

export function CapacityNote({ capacity }: CapacityNoteProps) {
  const remaining = remainingSlots(capacity);
  const month = formatCapacityMonth(capacity.yearMonth);
  const open = remaining > 0;

  return (
    <p className="text-sm text-muted-foreground">
      {open ? (
        <>
          <span className="font-semibold tabular-nums text-foreground">
            {remaining} {remaining === 1 ? "vaga" : "vagas"}
          </span>{" "}
          em {month}. Sem fila inventada: é o que cabe na agenda.
        </>
      ) : (
        <>
          As vagas de {month} acabaram. Pode chamar no WhatsApp para entrar na
          fila do próximo mês.
        </>
      )}
    </p>
  );
}
