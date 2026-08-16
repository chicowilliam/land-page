import {
  asBenefitId,
  asCaseId,
  asObjectionId,
  asOfferId,
  asProofId,
  type Offer,
} from "../domain";

/**
 * Instância da Oferta. Trocar placeholders (WhatsApp, foto, métricas, Resultado do Café com Letras)
 * antes de publicar. Copy em pt-BR, PAS + benefício-não-feature.
 */
export const offer: Offer = {
  id: asOfferId("sites-que-vendem"),
  maker: {
    name: "Vinicius William",
    photo: {
      src: "/vinicius-william.png",
      alt: "Vinicius William, camisa branca e gravata preta",
    },
  },
  promise: {
    result: "Sites que vendem mais, não só bonitos.",
    howOrForWhom:
      "Para negócios que já vendem no Instagram e ainda perdem pedido num site lento, confuso ou sem um WhatsApp óbvio.",
  },
  audience: {
    who: "Dono de negócio local ou profissional que fecha pelo WhatsApp",
    feltPain: "O site existe, mas ninguém chama. O Instagram trabalha; a página não.",
  },
  visual: {
    type: "PHOTO",
    src: "/vinicius-william.png",
    alt: "Vinicius William, camisa branca e gravata preta",
  },
  pain: {
    problem:
      "Você já tem Instagram. O site, quando existe, é um cartão de visitas que ninguém usa.",
    agitation:
      "No celular, a página demora, o menu leva a lugar nenhum e o botão de WhatsApp está no rodapé. O cliente cansa e chama o concorrente que responde agora.",
    solution:
      "Eu faço o site com um objetivo só: gerar conversa. Rápido no 4G, claro no celular, com o WhatsApp à vista nos primeiros segundos.",
  },
  proofs: [
    {
      id: asProofId("metric-sites"),
      type: "METRIC",
      value: "+X",
      label: "sites entregues",
    },
    {
      id: asProofId("testimonial-placeholder"),
      type: "TESTIMONIAL",
      quote:
        "Antes o site era enfeite. Depois da troca, o WhatsApp passou a receber conversa de gente que entrou pela página.",
      author: "Nome do cliente",
      role: "Café com Letras",
      result: "Substituir pelo Resultado real",
    },
  ],
  cases: [
    {
      id: asCaseId("cafe-com-letras"),
      name: "Café com Letras",
      client: "Café com Letras",
      before:
        "Presença online que não deixava claro o que pedir nem como chamar. Visitante via e saía.",
      after:
        "Página no celular com o pedido óbvio e WhatsApp no primeiro olhar.",
      result: "Substituir pelo Resultado real (ex.: mais conversas por semana).",
      visual: {
        src: "/cases/cafe-com-letras.webp",
        alt: "Tela do site Café com Letras no celular",
      },
    },
  ],
  benefits: [
    {
      id: asBenefitId("fast"),
      outcome: "Site rápido que não perde cliente na espera do 4G.",
      mechanism: "Página estática, imagens no tamanho certo, JS só onde precisa.",
    },
    {
      id: asBenefitId("whatsapp-first"),
      outcome: "O visitante acha o WhatsApp sem rolar a página.",
      mechanism: "Um CTA, acima da dobra, repetido no fechamento.",
    },
    {
      id: asBenefitId("mobile"),
      outcome: "Funciona na mão, de onde vem o tráfego do Instagram.",
      mechanism: "Mobile-first, toque grande, texto legível sem pinça.",
    },
  ],
  steps: [
    {
      order: 1,
      name: "Briefing",
      visitorGets: "Você me conta o negócio, o cliente e o que a página precisa fazer.",
    },
    {
      order: 2,
      name: "Protótipo",
      visitorGets: "Você vê a estrutura e o texto antes do visual final. Ajusta sem surpresa.",
    },
    {
      order: 3,
      name: "Entrega",
      visitorGets: "Site no ar, rápido no celular, com o WhatsApp medido.",
    },
    {
      order: 4,
      name: "Suporte",
      visitorGets: "Ajustes combinados depois do ar. Você não fica sozinho no dia seguinte.",
    },
  ],
  objections: [
    {
      id: asObjectionId("price"),
      hesitation: "Quanto custa?",
      answer:
        "Depende do que a página precisa vender. No briefing eu fecho um valor único, por escrito, antes de desenhar. Sem hora escondida.",
    },
    {
      id: asObjectionId("time"),
      hesitation: "Quanto tempo demora?",
      answer:
        "A maior parte das landings sai em 2 a 4 semanas depois do briefing fechado. O prazo entra na Garantia.",
    },
    {
      id: asObjectionId("like"),
      hesitation: "E se eu não gostar?",
      answer:
        "O protótipo existe para isso. Você revisa estrutura e texto antes da entrega. Se o rumo estiver errado, a gente corrige ali, não depois do site no ar.",
    },
  ],
  guarantee: {
    commitment: "Uma rodada de revisão no protótipo, grátis, e prazo combinado por escrito.",
    covers:
      "Se o prazo acordado escorregar por minha culpa, o ajuste combinado no briefing entra sem custo extra.",
  },
  capacity: {
    yearMonth: "2026-08",
    slotsTotal: 3,
    slotsTaken: 1,
  },
  contact: {
    channels: [
      {
        type: "WHATSAPP",
        role: "PRIMARY",
        phoneE164: "+5531994649759",
        prefilledMessage:
          "Oi, Vinicius. Vi o site. Quero conversar sobre uma página que gere WhatsApp para o meu negócio.",
      },
      {
        type: "FORM",
        role: "SECONDARY",
        fields: ["name", "whatsapp"],
      },
    ],
  },
};
