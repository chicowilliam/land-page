/**
 * Contrato do conteúdo do portfólio. Sem React, sem copy solta, sem detalhes de UI.
 * Componentes consomem estes tipos; não os reinventam.
 */

export type WhatsAppChannel = {
  type: "WHATSAPP";
  role: "PRIMARY";
  phoneE164: string;
  prefilledMessage: string;
};

export type Maker = {
  name: string;
  role: string;
  location: string;
  photo: { src: string; alt: string };
};

/** Projeto real. Nada aqui pode insinuar resultado não comprovado. */
export type Project = {
  id: string;
  name: string;
  tag: string;
  status: "EM_DESENVOLVIMENTO";
  description: string;
};

export type Service = {
  id: string;
  name: string;
  description: string;
};

export type ProcessStep = {
  order: 1 | 2 | 3 | 4;
  name: string;
  description: string;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type SiteContent = {
  maker: Maker;
  hero: {
    label: string;
    title: string;
    text: string;
    aside: string;
  };
  projects: {
    title: string;
    intro: string;
    items: Project[];
  };
  services: {
    title: string;
    items: Service[];
  };
  process: {
    title: string;
    note: string;
    steps: ProcessStep[];
  };
  about: {
    title: string;
    paragraphs: string[];
    technologies: string[];
  };
  faq: FaqItem[];
  contact: {
    title: string;
    text: string;
    ctaLabel: string;
  };
  whatsapp: WhatsAppChannel;
};
