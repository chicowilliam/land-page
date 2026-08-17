import type { SiteContent } from "@/domain";

type FooterProps = {
  maker: SiteContent["maker"];
};

export function Footer({ maker }: FooterProps) {
  return (
    <footer className="bg-ink text-paper">
      <div className="shell flex flex-col gap-2 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="tag-mono" translate="no">
          {maker.name} — Sites e sistemas
        </p>
        <p className="tag-mono text-paper/70">{maker.location}</p>
        <p className="tag-mono text-paper/70">© 2026</p>
      </div>
    </footer>
  );
}
