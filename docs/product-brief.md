# Product brief

Modo: shape → spec. A página ainda não existe.

## Brief

- User: dono de negócio local ou profissional que já usa Instagram, chega pelo celular, sabe que o site atual não traz conversa.
- Job: "quero um site que me traga cliente, não um site bonito que ninguém chama".
- Current behavior: site cartão-de-visitas, lento no 4G, sem CTA óbvio, ou nenhum site. Perde pedido para o concorrente que responde no WhatsApp.
- Desired outcome: o Visitante toca **Chamar no WhatsApp** (ou envia o formulário curto) e começa o briefing.
- Success signal: clique no canal primário ou Lead criado pelo formulário.
- Non-goals: blog, menu com 10 links, catálogo de serviços, login, dark-mode toggle, chatbot, página Sobre separada.
- Object: Lead (via Conversão da Oferta).
- Action, scope, consequence: **Chamar no WhatsApp** abre conversa pré-preenchida com o autor. Não é compra. Reversível (fechar o WhatsApp). Formulário **Enviar pedido de conversa** cria um Lead com nome + WhatsApp.
- Permissions: pública, sem auth.
- Open decisions: número de WhatsApp real, foto/vídeo do hero, números verdadeiros das Métricas, Resultado real do Case Café com Letras, Capacidade deste mês, texto final da Garantia.

Inferred (corrigir): público = negócios que vendem por WhatsApp/Instagram no Brasil; tom = direto, concreto, pt-BR; tráfego = quente/morno, não anúncio frio.

## Decisões (com rule ID)

- Uma ação primária por superfície: Chamar no WhatsApp. `rule/one-primary-action`
- WhatsApp é link (muda de lugar, `wa.me`). Formulário é button (submete). `rule/navigation-vs-action`
- Sem modal para converter; CTA e formulário são inline. `rule/inline-before-modal`, `rule/smallest-intervention`
- FAQ de Objeção usa Accordion inline, não Dialog. `rule/inline-before-modal`
- CTA nomeia objeto e consequência: "Chamar no WhatsApp", nunca "Enviar", "Saiba mais", "Fale comigo". `rule/name-object-scope-consequence`, `rule/destructive-names-action`, `rule/no-confirm-ok-labels`, `rule/canonical-verb`
- Verbos canônicos: **Chamar** (canal primário), **Enviar pedido de conversa** (canal secundário). Não misturar com "Falar", "Começar", "Submit".
- Estados alcançáveis do CTA: Oferta aberta (Capacidade > 0); Oferta cheia (Capacidade = 0, ainda pode Chamar para fila; o porquê fica visível, nunca botão mudo). `rule/cover-reachable-states`
- Formulário: idle, validação inline, enviando (label estável), sucesso (passado, nomeia o Lead), erro (o que aconteceu + recuperação), input preservado. `rule/cover-reachable-states`, `rule/preserve-user-input`, `rule/error-states-recovery`, `rule/success-state-specific`, `rule/loading-stable-labels`, `rule/loading-state-specific`
- Campos: só nome e WhatsApp. Sem email, empresa, mensagem. `rule/smallest-intervention`
- Sem nav multi-link. Logo + CTA primário no topo, no máximo âncoras da própria página. `rule/one-primary-action`
- Teclado completa o fluxo do formulário; todo controle tem nome acessível. `rule/keyboard-complete-flow`, `rule/accessible-name-required`

## Pass self-check

- Rules cited vs applicable: cited the interaction, naming, state, a11y, and hierarchy rules that govern this surface. Not reached: `rule/no-nested-modals` (no modal planned), `rule/destructive-proportional` (no destructive action), `rule/empty-state-action` (content is authored, not a collection UI), `rule/permission-benefit-first` (no permission prompt).
- Findings without rule ID: 0
- Coverage gaps: none for the conversion surface. Visual direction is owned by anti-ui-slop + tailwind-design-system + typography-audit at build time, not here.
- Internal brief: job, desired outcome, and consequence filled.
