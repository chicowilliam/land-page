import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono, Instrument_Sans } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-archivo",
  axes: ["wdth"],
});

const instrument = Instrument_Sans({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-text",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  title: "Vinicius William — Desenvolvedor de sites e sistemas",
  description:
    "Portfólio de Vinicius William, desenvolvedor de sites e sistemas em Belo Horizonte. Projetos sob medida com React, TypeScript e Node.js — de sites institucionais a sistemas e integrações.",
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${archivo.variable} ${instrument.variable} ${plexMono.variable}`}
    >
      <body>
        <a
          href="#conteudo"
          className="tag-mono sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:border-2 focus:border-ink focus:bg-cobalt focus:px-4 focus:py-3 focus:text-paper"
        >
          Ir para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
