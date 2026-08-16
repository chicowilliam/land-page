# Spec v2 — aperfeiçoamento da landing

Página única de Conversão. Visitante → Lead via WhatsApp. Esta versão coloca o **Maker** (Vinicius William) no hero, com foto real, e dá caráter de motion sem atrasar o LCP.

## Objetivo

Uma ação: **Chamar no WhatsApp**. Formulário (nome + WhatsApp) continua secundário.

## Identidade (fatos do Maker)

| Campo | Valor |
|---|---|
| Nome | Vinicius William |
| WhatsApp | +55 31 99464-9759 (`31994649759`) |
| Foto | Retrato fornecido, `public/vinicius-william.png` |
| Visual do hero | `PHOTO` (não mais mockup de celular) |

Métrica `+X`, depoimento genérico e Resultado do Café com Letras **continuam placeholder**. Não inventar prova.

## Decisões técnicas (não especificadas)

1. **Maker no domínio, não no JSX.** Nome e foto são dados da Oferta (`offer.maker`). Componentes recebem a Oferta. Trocar foto depois é editar conteúdo, não layout.
   Por quê: o contrato já existe; identidade é conteúdo.

2. **Hero = foto + Promessa, sem mockup.** A foto é o visual de impacto. O mockup de celular fica no código mas sai do above-the-fold.
   Por quê: você mandou a foto; um retrato converte melhor que um wireframe falso.

3. **Motion só CSS + um island `Reveal`.** Sem Framer Motion / Motion.
   Por quê: landing no celular; JS extra no first load mata Conversão. `transform` + `opacity` só. Hero e foto **não** animam no load (LCP). Beats abaixo da dobra revelam no scroll (o Visitante já rolou = gatilho). `prefers-reduced-motion` zera transform.

4. **Scrollbar nativa estilizada.** `scrollbar-width` + `::-webkit-scrollbar`, cor stamp sobre trilho muted. Sem lib de scrollbar.
   Por quê: 0 KB, funciona no Firefox e Chromium, não intercepta o scroll.

5. **`scroll-behavior: smooth` só para âncoras** (`#pedido`), desligado se reduced-motion.
   Por quê: o link “Prefere deixar nome e número” precisa de continuidade espacial.

6. **Stack inalterada.** Next App Router estático, Tailwind v4, sem CMS, sem modal.
   Por quê: ADR 0001–0003 continuam válidos.

7. **WhatsApp E.164 `+5531994649759`.** `whatsappHref` já tira não-dígitos.
   Por quê: `wa.me` exige DDI.

## Motion (o que anima e por quê)

| Superfície | Anima? | Propósito | Duração |
|---|---|---|---|
| Foto do hero no load | Não | LCP | — |
| CTA press / hover | Sim | Feedback | 140ms / 150ms |
| Accordion `+` | Sim | Orientação (aberto/fechado) | 220ms |
| Beats abaixo da dobra | Sim, uma vez | Orientação ao rolar | 420ms, 12px Y |
| Sucesso do form | Texto no botão | Feedback no controle | já existe |
| Marquee, orbs, Lottie | Não | Slop | — |

## Scrollbar

- Trilho: `--color-muted`
- Thumb: `--color-stamp`, pílula, 10px
- Firefox: `scrollbar-width: thin` + `scrollbar-color`

## Arquivos-alvo

- `src/domain/types.ts` — tipo `Maker`
- `src/content/offer.ts` — nome, foto, WhatsApp
- `public/vinicius-william.png` — asset
- `src/components/landing/Hero.tsx` — foto + nome
- `src/components/landing/MakerPortrait.tsx` — `next/image` priority
- `src/components/landing/Reveal.tsx` — island de scroll
- `src/app/globals.css` — scrollbar + `.reveal`
- `src/app/page.tsx` — envolve beats com Reveal
- `src/app/layout.tsx` — title com o nome

## Fora de escopo

Dark mode, CMS, métricas inventadas, Framer, segundo objetivo na página.
