import { cn } from "@/lib/cn";

/**
 * Prévias ilustrativas construídas em CSS, uma composição distinta por projeto.
 * São wireframes decorativos (aria-hidden na moldura), sem conteúdo inventado:
 * apenas o nome do projeto e rótulos estruturais genéricos.
 */

function Bar({ className }: { className?: string }) {
  return <span className={cn("block h-1.5 bg-ink/20", className)} />;
}

export function CafePreview({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 bg-paper-soft p-3",
        compact ? "aspect-[4/3]" : "aspect-[16/11]",
      )}
    >
      <div className="flex items-center justify-between border-b border-ink pb-1.5">
        <span className="tag-mono text-[0.55rem]">Café com Letras</span>
        <span className="flex gap-1.5">
          <span className="h-1 w-4 bg-ink/50" />
          <span className="h-1 w-4 bg-ink/50" />
          <span className="h-1 w-4 bg-ink/50" />
        </span>
      </div>
      <div className="grid flex-1 grid-cols-5 gap-2.5">
        <div className="col-span-3 flex flex-col justify-center gap-2">
          <span className="font-display text-[clamp(0.95rem,2.6vw,1.7rem)] font-bold leading-[1.05] tracking-tight">
            Café com
            <br />
            Letras
          </span>
          <Bar className="w-11/12" />
          <Bar className="w-3/5" />
          <span className="mt-1 h-4 w-16 bg-cobalt" />
        </div>
        <div className="col-span-2 border border-ink bg-sand" />
      </div>
      <div className="grid h-8 grid-cols-3 gap-2">
        <span className="border border-ink/40 bg-paper" />
        <span className="border border-ink/40 bg-paper" />
        <span className="border border-ink/40 bg-sand" />
      </div>
    </div>
  );
}

export function JazzPreview({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={cn(
        "flex flex-col bg-ink p-3",
        compact ? "aspect-[4/3]" : "aspect-[16/11]",
      )}
    >
      <div className="flex items-center justify-between border-b border-paper/30 pb-1.5">
        <span className="tag-mono text-[0.55rem] text-paper/80">
          Clube de Jazz
        </span>
        <span className="size-1.5 bg-cobalt" />
      </div>
      <div className="flex flex-1 items-center gap-3">
        <span className="font-display text-[clamp(1.6rem,4.5vw,2.6rem)] font-bold leading-none tracking-tight text-paper">
          JAZZ
        </span>
        <span className="h-8 w-8 shrink-0 bg-cobalt" />
        <span className="flex min-w-0 flex-1 flex-col gap-1.5">
          <span className="block h-1 w-full bg-paper/30" />
          <span className="block h-1 w-4/5 bg-paper/30" />
          <span className="block h-1 w-3/5 bg-paper/30" />
        </span>
      </div>
      <div className="flex flex-col">
        {["Programação", "Agenda", "Contato"].map((row) => (
          <span
            key={row}
            className="flex items-center justify-between border-t border-paper/25 py-1"
          >
            <span className="tag-mono text-[0.5rem] text-paper/70">{row}</span>
            <span className="tag-mono text-[0.5rem] text-paper/40">→</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function OtotoiPreview({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 bg-paper-soft p-3",
        compact ? "aspect-[4/3]" : "aspect-[16/11]",
      )}
    >
      <div className="flex items-center justify-between border-b border-ink pb-1.5">
        <span className="tag-mono text-[0.55rem]">Clube OTOTOI</span>
        <span className="flex gap-1.5">
          <span className="h-1 w-4 bg-ink/50" />
          <span className="h-1 w-4 bg-ink/50" />
        </span>
      </div>
      <div className="grid flex-1 grid-cols-3 grid-rows-2 border border-ink">
        <span className="flex items-center justify-center border-b border-r border-ink">
          <span className="font-display text-[clamp(0.85rem,2vw,1.2rem)] font-bold tracking-tight">
            OTO
          </span>
        </span>
        <span className="border-b border-r border-ink bg-cobalt" />
        <span className="flex flex-col justify-center gap-1 border-b border-ink px-2">
          <Bar className="w-full" />
          <Bar className="w-2/3" />
        </span>
        <span className="flex flex-col justify-center gap-1 border-r border-ink px-2">
          <Bar className="w-full" />
          <Bar className="w-1/2" />
        </span>
        <span className="flex items-center justify-center border-r border-ink">
          <span className="font-display text-[clamp(0.85rem,2vw,1.2rem)] font-bold tracking-tight">
            TOI
          </span>
        </span>
        <span className="border-ink bg-sand" />
      </div>
    </div>
  );
}
