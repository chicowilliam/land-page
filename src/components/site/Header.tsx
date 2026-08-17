import { whatsappHref, type WhatsAppChannel } from "@/domain";

const NAV_ITEMS = [
  { href: "#projetos", label: "Projetos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Processo" },
  { href: "#sobre", label: "Sobre" },
];

type HeaderProps = {
  name: string;
  channel: WhatsAppChannel;
};

export function Header({ name, channel }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="shell flex min-h-14 items-center justify-between gap-4 py-2">
        <a
          href="#topo"
          translate="no"
          className="text-[0.9375rem] font-semibold tracking-tight no-underline"
        >
          {name}
        </a>

        <nav aria-label="Seções da página" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="readout inline-flex min-h-11 items-center no-underline transition-colors duration-[var(--hover-dur)] hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={whatsappHref(channel)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-10 items-center rounded-md bg-primary px-4 text-[0.875rem] font-medium text-primary-foreground no-underline transition-[filter] duration-[var(--hover-dur)] hover:brightness-[1.08]"
        >
          Conversar
        </a>
      </div>
    </header>
  );
}
