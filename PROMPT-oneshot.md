# COLE ISTO NUM CHAT NOVO (1 mensagem, modelo premium)

Você é um agente de código no repo `land-page`. Uma conversão só: o Visitante abre o WhatsApp. pt-BR. Next.js 16 App Router + React 19 + Tailwind v4.

## Trabalho (um shot)

Deixar a landing **visualmente cara**, como revista de moda / atelier de São Paulo. Não SaaS, não template beige, não glassmorphism. Aplicar no código e parar. Não planejar em markdown. Não abrir PR. Não commitar.

## O que está feio agora (captura real, localhost:3000)

- Hero empilhado no desktop: texto em cima, foto embaixo. A classe `lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]` **não compilou** (vírgula no arbitrary do Tailwind). Use só `lg:grid-cols-2`.
- `object-[center_16%]` corta a foto no cabelo. A foto é selfie de busto, camisa branca e gravata preta, fundo claro. Enquadre o **rosto**. Use `object-[center_42%]` ou `object-center`.
- Fundo bege sujo, muito vazio, Fraunces parecendo Times. Parece Google Doc, não site que vende.
- Grain CSS com `z-index: 40` suja a página. Tire o overlay ou `z-index: 1` e opacidade ≤ 0.03.
- CTA oxblood ok; o resto não tem contraste.

## Direção visual (obrigatória, sem improvisar outra)

**Hero split, alto contraste.**

Desktop (≥1024px): `min-h-[100svh]` em 2 colunas iguais.
- Esquerda: fundo `ink` quase preto, texto branco, Promessa enorme (Fraunces, peso 600, `clamp(2.75rem, 5.5vw, 4.75rem)`), subtítulo Plex 18px, CTA oxblood, link secundário branco sublinhado. Nome + vagas no topo da coluna, tracking largo, 11px.
- Direita: retrato full-bleed da coluna (`h-full min-h-[100svh]`), `object-cover`, rosto no centro. Sem moldura gilt interna. Sem figcaption (o nome já está na esquerda).

Mobile: retrato no topo, altura `min(58svh, 28rem)`, rosto visível; abaixo, bloco ink com Promessa + CTA largura total.

Resto da página: fundo branco quente limpo (`oklch(99% 0.004 80)`), tinta preta, um acento oxblood. Seções `py-16 sm:py-20` (não 28). Prosa `max-w-[38rem]`. Sem card com sombra. Prova em grelha `sm:grid-cols-2` com filete 1px. Capacidade: número grande tabular. Garantia: filete oxblood à esquerda. CTA sempre `rounded-none` ou `rounded-sm`, `min-h-12`.

Tipo: manter Fraunces + IBM Plex Sans via `next/font`. No `layout.tsx`, coloque também `fraunces.className` / `plex.className` no `html` ou `body` (hoje só existe `variable`; se a variável falhar, cai em Times). Fraunces peso 600 nos h1/h2. Plex 400/500 no corpo. Sem fonte nova. Sem pacote novo.

Motion: só `transform`/`opacity`. Sem Framer, Three, GSAP, Lenis, shadcn extra, dark mode toggle.

## Pode editar

`src/app/globals.css`, `src/app/layout.tsx`, `src/components/landing/*.tsx` (Hero, MakerPortrait, Section, WhatsAppCta, beats, LeadForm). Tokens OKLCH no `@theme`.

## Não mexer

`src/content/offer.ts`, `src/domain/**`, copy, WhatsApp, labels de CTA, placeholders de Prova/Case (`+X`, “Nome do cliente”, “Substituir pelo Resultado”). Não inventar depoimento, métrica, urgência. Não adicionar menu, dependência, página extra, README.

Tailwind: **proibido** arbitrary `grid-cols-[...]` com vírgula. Use `grid-cols-2`, `grid-cols-3`, `grid-cols-4`.

## Ordem

1. Tokens + `layout.tsx` (fontes de verdade no elemento).
2. Hero + MakerPortrait (split + crop do rosto).
3. Section + CTA + beats (ritmo, contraste, sem cards).
4. Conferir: `lg:grid-cols-2` existe no Hero; foto não usa `center_16%`; grain não cobre a UI.

## Pronto quando

No desktop o retrato fica **ao lado** da Promessa, rosto visível, CTA óbvio em <3s, página não parece rascunho bege. No celular o rosto aparece acima da dobra e o botão WhatsApp também.

Uma passagem. Sem checklist longo no final. Sem perguntar. Aplique.
