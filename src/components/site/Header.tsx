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
    <header className="sticky top-0 z-40 border-b-2 border-ink bg-paper">
      <div className="shell flex min-h-14 items-center justify-between gap-4 py-2">
        <a
          href="#topo"
          translate="no"
          className="font-display text-[0.95rem] font-bold uppercase leading-none tracking-tight text-ink no-underline [font-variation-settings:'wdth'_122]"
        >
          {name}
        </a>

        <nav aria-label="Seções da página" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {NAV_ITEMS.map((item, index) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="link-underline tag-mono inline-flex min-h-11 items-center gap-1.5 text-ink no-underline"
                >
                  <span aria-hidden="true" className="text-cobalt">
                    {String(index + 1).padStart(2, "0")}
                  </span>
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
          className="tag-mono inline-flex min-h-11 items-center bg-ink px-5 text-paper no-underline transition-colors duration-[var(--hover-dur)] ease-[var(--ease-out)] hover:bg-cobalt"
        >
          Conversar
        </a>
      </div>
    </header>
  );
}
