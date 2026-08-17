import type { SiteContent } from "../domain";

/**
 * Conteúdo real do portfólio. Nenhuma métrica, depoimento ou resultado
 * pode entrar aqui sem ser verdadeiro e verificável.
 */
export const site: SiteContent = {
  maker: {
    name: "Vinicius William",
    role: "Desenvolvedor de sites e sistemas",
    location: "Belo Horizonte, MG",
    photo: {
      src: "/vinicius-william.png",
      alt: "Retrato de Vinicius William, de camisa branca e gravata preta",
    },
  },
  hero: {
    label: "Desenvolvedor de sites e sistemas · Belo Horizonte",
    title: "Sites com identidade forte e um caminho claro até o próximo passo.",
    text: "Sou Vinicius William. Desenvolvo sites e sistemas sob medida para empresas que querem apresentar melhor o negócio, organizar suas informações e facilitar o contato com seus clientes.",
    aside: "Projetos presenciais em Belo Horizonte e atendimento remoto.",
  },
  projects: {
    title: "Projetos selecionados",
    intro:
      "Uma seleção de trabalhos em que desenvolvimento, organização da informação e identidade visual precisam funcionar juntos.",
    items: [
      {
        id: "cafe-com-letras",
        name: "Café com Letras",
        tag: "Site institucional · Em desenvolvimento",
        status: "EM_DESENVOLVIMENTO",
        description:
          "Desenvolvimento de uma nova experiência digital para apresentar o espaço, sua programação e seus diferentes caminhos de contato com mais clareza.",
      },
      {
        id: "clube-de-jazz",
        name: "Clube de Jazz",
        tag: "Experiência digital · Em desenvolvimento",
        status: "EM_DESENVOLVIMENTO",
        description:
          "Projeto pensado para valorizar a programação do clube e tornar as informações importantes mais fáceis de encontrar.",
      },
      {
        id: "clube-ototoi",
        name: "Clube OTOTOI",
        tag: "Site institucional · Em desenvolvimento",
        status: "EM_DESENVOLVIMENTO",
        description:
          "Construção de uma presença digital própria para comunicar o espaço e aproximá-lo de seu público.",
      },
    ],
  },
  services: {
    title: "Do primeiro acesso até a publicação.",
    items: [
      {
        id: "sites",
        name: "Sites institucionais",
        description:
          "Para apresentar a empresa, seus serviços e seus diferenciais com clareza.",
      },
      {
        id: "landing-pages",
        name: "Landing pages",
        description:
          "Páginas focadas em uma oferta, campanha ou ação específica.",
      },
      {
        id: "sistemas",
        name: "Sistemas e painéis",
        description:
          "Interfaces para organizar informações, cadastros e rotinas do negócio.",
      },
      {
        id: "integracoes",
        name: "Integrações",
        description:
          "WhatsApp, formulários, reservas, APIs e outras ferramentas necessárias ao projeto.",
      },
    ],
  },
  process: {
    title: "Um processo claro, sem transformar o cliente em programador.",
    note: "Detalhes de escopo, prazo, revisões, hospedagem e manutenção são definidos na proposta de cada projeto.",
    steps: [
      {
        order: 1,
        name: "Entendimento",
        description:
          "Conversamos sobre o negócio, o público e o que o site precisa resolver.",
      },
      {
        order: 2,
        name: "Estrutura e direção visual",
        description:
          "Organizo as informações e construo a direção da interface antes do desenvolvimento final.",
      },
      {
        order: 3,
        name: "Desenvolvimento",
        description:
          "Transformo o projeto em uma experiência responsiva, funcional e bem construída.",
      },
      {
        order: 4,
        name: "Revisão e publicação",
        description:
          "Revisamos o que foi combinado, realizo os testes e preparo a publicação.",
      },
    ],
  },
  about: {
    title: "Programação com atenção à experiência de quem vai usar.",
    paragraphs: [
      "Sou Vinicius William, desenvolvedor de sites e sistemas e estudante de Engenharia de Software. Trabalho com tecnologias como React, TypeScript e Node.js para construir soluções web sob medida.",
      "Atualmente, participo do desenvolvimento de projetos digitais ligados ao ICC, incluindo Café com Letras, Clube de Jazz e Clube OTOTOI.",
      "Meu trabalho não começa escolhendo um template. Primeiro procuro entender o que a pessoa precisa encontrar, fazer ou decidir dentro do site. A tecnologia entra para tornar esse caminho possível.",
    ],
    technologies: ["React", "TypeScript", "Node.js", "Next.js", "Tailwind CSS"],
  },
  faq: [
    {
      id: "sob-medida",
      question: "Você trabalha com projetos sob medida?",
      answer:
        "Sim. A estrutura, o visual e as funcionalidades são definidos de acordo com o objetivo de cada projeto.",
    },
    {
      id: "publicacao",
      question: "Você também cuida da publicação?",
      answer:
        "Posso cuidar do desenvolvimento e da publicação. Domínio, hospedagem e manutenção são definidos conforme a necessidade do projeto.",
    },
    {
      id: "orcamento",
      question: "Como funciona o orçamento?",
      answer:
        "Depois de entender o objetivo, as páginas e as funcionalidades necessárias, apresento o escopo, o prazo e o investimento por escrito.",
    },
  ],
  contact: {
    title: "Tem um projeto em mente?",
    text: "Me conte brevemente o que você precisa. Eu respondo com algumas perguntas objetivas e explico quais seriam os próximos passos.",
    ctaLabel: "Conversar com o Vinicius",
  },
  whatsapp: {
    type: "WHATSAPP",
    role: "PRIMARY",
    phoneE164: "+5531994649759",
    prefilledMessage:
      "Olá, Vinicius! Vi seu portfólio e quero conversar sobre um projeto.",
  },
};
