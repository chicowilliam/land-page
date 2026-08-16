# Prompt v3 — atelier editorial (aplicado)

Leia `CONTEXT.md`, `VOICE.md` e `docs/spec-aperfeicoamento.md` antes de tocar em copy. Uma Conversão por página. Sem menu. Sem inventar Prova, métrica ou depoimento. Copy fica em `src/content/offer.ts`; a UI só apresenta.

## Problema

O site lê como template: bege sujo, cards iguais, foto pequena, Newsreader + Source Sans sem escala, CTA arredondado de SaaS. Parece amador, não um atelier de páginas que vendem.

## Direção

Atelier editorial. Papel de carta, tinta, carimbo. Não SaaS escuro, não glassmorphism, não mesh, não orbs, não roxo.

## Tipo

- Display: **Fraunces** variável (`next/font/google`), eixos `SOFT` e `WONK`, romano + itálico. `font-optical-sizing: auto`. Títulos em tinta quase preta, tracking negativo, `text-wrap: balance`.
- Corpo e UI: **IBM Plex Sans** 400/500/600, romano + itálico. Grotesca com l/I/1 distintos. Corpo 18px, medida ~58ch, `text-wrap: pretty`.
- Eyebrow: Plex 11px, tracking 0.22em, uppercase, gilt.
- Números de capacidade e métrica: Fraunces tabular, grandes.

## Cor

Marfim limpo (`paper`), tinta (`ink`), oxblood (`stamp` / CTA), filete gilt. Tokens em OKLCH no `@theme`. Sem gradiente de fundo.

## Layout

- Hero em viewport (`min-h-[100svh]`): Promessa grande, retrato 3:4 com filete gilt interno, grain no documento. Não animar a foto no load.
- Seções via `Section`: `py-20/28`, hairline gilt no topo, `max-w-[38rem]` para prosa e `max-w-6xl` para grelhas.
- Sem caixinha repetida. Prova em grelha com gap de 1px (filete), não cards com sombra.
- Capacidade como número de atelier (`02`), não badge.
- Garantia com filete gilt à esquerda.
- CTA oxblood, `rounded-sm`, padding generoso, press 140ms em `transform`. Link secundário é sublinhado, não botão fantasma bege.
- Formulário: inputs afiados, labels uppercase; submit outline tinta que inverte no hover.

## Tecnologias (usar de verdade)

- `next/font` com CSS variables `--font-fraunces` / `--font-plex`
- `next/image` `priority` + `sizes` + `quality` no retrato
- Grain CSS (`feTurbulence`), `pointer-events: none`, multiply
- Reveal com IntersectionObserver; `transform`/`opacity` only; `prefers-reduced-motion`
- `content-visibility: auto` nas beats
- Scrollbar oxblood; `::selection` oxblood suave

Não adicionar Framer Motion, Three.js, Lenis, GSAP, shadcn extra, dark mode.

## Fora

Não mudar domínio, WhatsApp, CTAs canônicos, nem placeholders de Prova. Não inventar urgência.
