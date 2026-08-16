# Prompt de implementação — landing de conversão (React + TypeScript)

Cole este prompt num agente Cursor **neste repositório**. O domínio já está modelado. Não redesenhe entidades. Não invente um segundo objetivo para a página.

---

Você vai implementar a landing page deste repo. É a minha página pessoal, usada como exemplo, em **React + TypeScript**.

Antes de escrever UI, leia nesta ordem e obedeça:

1. `CONTEXT.md` — linguagem ubíqua. Use esses termos no código, nos testes e na copy. Não sinônimos.
2. `docs/product-brief.md` — decisões de produto com rule IDs.
3. `docs/adr/` — uma Conversão por página; conteúdo tipado; Next.js App Router estático.
4. `src/domain/` — contrato. Componentes recebem `Offer`. Copy não vive no JSX.
5. `src/content/offer.ts` — instância. Placeholders (`+X`, foto, WhatsApp `+5500000000000`, Resultado do Café com Letras) ficam visíveis até eu trocar. Não invente métrica, depoimento ou case que eu não confirmei.

## Skills obrigatórias (já instaladas no Cursor, não neste repo)

Leia cada skill **por completo** (SKILL.md + os references que a skill mandar carregar) e aplique. Se uma regra da skill conflitar com `CONTEXT.md` / ADR / product-brief, o repo vence.

| Skill | Caminho | O que extrair desta landing |
|---|---|---|
| product-design | `C:\Users\User1\.agents\skills\product-design\SKILL.md` | Já decidido no brief. Não reabra o objetivo. Cubra estados: Oferta aberta/cheia, form idle/validação/enviando/sucesso/erro, FAQ accordion. Cite rule IDs se mudar interação. |
| copywriting | `C:\Users\User1\.agents\skills\copywriting\SKILL.md` | Modo A. Frameworks: PAS no corpo, Why/How/What no hero, Benefit not Feature, CTA Clarity, Show don't tell. Página tipo **Landing page** em `references/page-types.md`. pt-BR. Sem palavras banidas (delve, leverage, robust, seamless, holistic, paradigm, game-changing, cutting-edge, innovative, synergy, revolutionary, effortless, world-class, powerful, showcase, unlock, e "simple" como claim). Sem em dash. CTA primário: **Chamar no WhatsApp**. Secundário: **Enviar pedido de conversa**. Nunca "Saiba mais", "Get started", "Fale comigo", "Submit". Hero: 2–3 opções internas, recomende uma, implemente a recomendada (a Promessa em `offer.ts` é a opção A). Escreva `VOICE.md` curto (direto, concreto, brasileiro, sem calor corporativo). |
| anti-ui-slop | `C:\Users\User1\.agents\skills\anti-ui-slop\SKILL.md` | UI específica desta Oferta, não template SaaS roxo com orbs e grid infinito. Um ou dois gestos de caráter (tipo + cor + imagery). Sem decoration para parecer "premium". UIZZE só se uma decisão visual estiver travada. |
| web-design-guidelines | `C:\Users\User1\.agents\skills\web-design-guidelines\SKILL.md` | Fetch `https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md` e cumpra na implementação (a11y, foco, hit targets, reduced motion, formulários). |
| vercel-react-best-practices | `C:\Users\User1\.agents\skills\vercel-react-best-practices\SKILL.md` | Leia `AGENTS.md` da skill. Crítico aqui: sem waterfall, bundle pequeno, sem barrel files, `next/dynamic` só para o que for pesado abaixo da dobra, analytics depois do hydrate, serializar só o `Offer` necessário, imagens via `next/image`, fontes hoistadas. Landing lenta no mobile mata Conversão. |
| vercel-composition-patterns | `C:\Users\User1\.agents\skills\vercel-composition-patterns\SKILL.md` | Sem boolean soup (`showCta`, `isHero`, `variantPrimary`). Beats compostos. Formulário com estado no provider se irmãos precisarem; senão, módulo fundo com interface pequena. React 19: sem `forwardRef`. |
| tailwind-design-system | `C:\Users\User1\.agents\skills\tailwind-design-system\SKILL.md` | Tailwind **v4**, tokens em `@theme` (OKLCH), sem `tailwind.config.ts` de v3. Tokens semânticos. Mobile-first. Leia `references/details.md` quando for além do SKILL. |
| shadcn | `C:\Users\User1\.agents\skills\shadcn\SKILL.md` | Init no projeto (Next template, preset que combine com o caráter — não deixe o default genérico passar sem escolha). Use CLI (`npx shadcn@latest`). Button, Accordion (Objeções), Field/FieldGroup (formulário), Badge (Métrica), Avatar (Depoimento), Separator. `className` só para layout. `gap-*`, não `space-y-*`. Cores semânticas. Rode `docs` do componente antes de usar. |
| typography-audit | `C:\Users\User1\.agents\skills\typography-audit\SKILL.md` | Escolha 1 display + 1 corpo (ou uma família com dois eixos). `@font-face` correto, `size-adjust`, sem faux bold. Medida ~45–75ch no corpo. `line-height` unitless. Aspas tipográficas no pt-BR. Hierarchy real no hero (Promessa enorme, subheadline menor, CTA óbvio). Depois de implementar, rode o audit nos arquivos de tipo e corrija CRITICAL/HIGH. |
| ui-animation | `C:\Users\User1\.agents\skills\ui-animation\SKILL.md` | Motion só com propósito: feedback do CTA, accordion, entrada do hero **depois** de LCP (não bloquear). CSS transitions > JS. `transform`/`opacity` only. Sem `transition: all`. `prefers-reduced-motion`. Hover só com `@media (hover: hover)`. Accordion: receita de panel reveal. Sucesso do form: confirmação no próprio botão, não toast no canto. Leia `references/decision-framework.md` e `transition-recipes.md`. |
| api-and-interface-design | `C:\Users\User1\.agents\skills\api-and-interface-design\SKILL.md` | Não altere o contrato de `src/domain` sem atualizar `CONTEXT.md`. Props de componente = fatias da `Offer`, não `string` soltos. Se criar `POST` de Lead: input/output separados, erro `{ error: { code, message } }`, validação só na borda (`validateLeadCapture`). |
| codebase-design | `C:\Users\User1\.agents\skills\codebase-design\SKILL.md` | Módulos fundos. Seam: `Offer` → seções. UI não monta URL de WhatsApp; chama `whatsappHref`. UI não calcula vagas; chama `remainingSlots` / `isOfferOpen`. Um adapter de conteúdo (`src/content/offer.ts`). Não crie seam de CMS. |
| webapp-testing | `C:\Users\User1\.agents\skills\webapp-testing\SKILL.md` | Depois do `dev` subir, script Playwright (Chromium headless): viewport mobile 390×844, LCP-ish screenshot above the fold, CTA visível sem scroll, clique Chamar no WhatsApp aponta para `wa.me`, form recusa vazio e preserva input, accordion de Objeção abre resposta. Use `scripts/with_server.py --help` se aplicável; senão Playwright direto no `next dev`. |
| tdd | `C:\Users\User1\.agents\skills\tdd\SKILL.md` | Seams já acordados: `remainingSlots` / `isOfferOpen`, `whatsappHref`, `validateLeadCapture`. Red-green nesses três **antes** da UI. Testes no vocabulário do `CONTEXT.md`. Sem testar internals de componente. |

Skills de produto/copy/domínio já usadas para chegar aqui: não rode de novo o discovery. Implemente.

## Stack (ADR 0003)

- Next.js App Router, React 19, TypeScript strict
- Página estática (`/` SSG). Sem fetch de conteúdo no cliente
- Tailwind v4 + shadcn
- `next/image` + `next/font`
- Idioma `pt-BR`, `lang="pt-BR"`
- Um route group, uma page. Sem blog, sem `/sobre`

## Objetivo único

Visitante → Lead via **Chamar no WhatsApp**. Formulário (nome + WhatsApp) é canal secundário, visualmente 3:1 mais fraco. Sem menu com 10 links. Âncoras internas ok. Rodapé: WhatsApp direto, não labirinto.

## Above the fold (obrigatório visível em 390px sem scroll)

- Promessa (resultado, não cargo)
- Subheadline (como / para quem)
- CTA primário (link `wa.me`, não `<button>` fantasiado)
- Visual de impacto (mockup/foto/vídeo curto; vídeo sem autoplay com som)
- Capacidade visível se couber sem empurrar o CTA para baixo; senão logo abaixo da dobra, ainda cedo

## Corpo (ordem = `PAGE_BEATS`)

HERO → PAIN (PAS) → PROOF → CASES (Café com Letras: antes / depois / Resultado, não print solto) → BENEFITS (outcome primeiro; mechanism opcional e menor) → PROCESS (4 Passos) → OBJECTIONS (Accordion) → GUARANTEE → CAPACITY (vagas reais deste mês; se `remainingSlots === 0`, texto honesto de fila, CTA WhatsApp continua) → CLOSE (Promessa curta + CTA de novo) → FOOTER (WhatsApp + form curto)

CTA primário aparece **no mínimo 3 vezes**: HERO, depois de PROOF ou CASES, CLOSE. Mesmo verbo.

## Formulário

- Só `name` e `whatsapp`
- `FieldGroup` + `Field` (shadcn)
- Validação: `validateLeadCapture`
- Estados: idle, invalid (inline, `data-invalid` / `aria-invalid`), submitting (label do botão **não muda** para "Enviando..."; use busy + disable), success no próprio controle ("Pedido de conversa enviado. Te chamo no WhatsApp."), error com recuperação, input preservado
- Sem toast de canto para sucesso desta ação

## Performance / mobile

- Mobile-first. Hit target ≥ 44px no CTA
- Sem JS no hero além do necessário
- Imagens WebP/AVIF, width/height, `priority` só no visual do hero
- Sem animações no load que atrasem LCP
- `content-visibility` em beats abaixo da dobra se a página ficar longa
- Import direto, nunca barrel `@/components/ui` se a skill de bundle proibir; siga shadcn + `bundle-barrel-imports`

## O que não fazer

- Não inventar depoimento, logo, métrica ou Resultado
- Não usar urgência falsa ("últimas horas", "oferta relâmpago")
- Não vender stack no hero
- Não abrir modal de captura
- Não adicionar dark mode, i18n, CMS, auth, analytics pesado no first load
- Não "melhorar" o domínio com sinônimos (Projeto, Portfólio, Headline, FAQ como entidade)

## Done when

- [ ] `pnpm dev` / `npm run dev` sobe `/` estático
- [ ] Above the fold completo em 390px
- [ ] Três CTAs "Chamar no WhatsApp" com o mesmo `whatsappHref`
- [ ] Form: 2 campos, estados cobertos, testes de domínio verdes
- [ ] Playwright mobile: CTA visível, `wa.me` correto, objeção abre
- [ ] Typography-audit sem CRITICAL
- [ ] `prefers-reduced-motion` respeitado
- [ ] Copy sem palavras banidas e sem em dash
- [ ] Nenhuma string de Promessa/Dor/Case duplicada fora de `src/content/offer.ts`

Comece pelos testes de domínio (TDD), depois scaffold Next + shadcn + tokens, depois a page beat a beat. Não entregue um template genérico.
