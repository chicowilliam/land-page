import type { SiteContent } from "@/domain";

type FooterProps = {
  maker: SiteContent["maker"];
};

export function Footer({ maker }: FooterProps) {
  return (
    <footer className="bg-background">
      <div className="shell flex flex-col gap-2 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="readout text-foreground" translate="no">
          {maker.name} — Sites e sistemas
        </p>
        <p className="readout">{maker.location}</p>
        <p className="readout">© 2026</p>
      </div>
    </footer>
  );
}
