# Portfólio — Vinicius William

Página única que apresenta Vinicius William, desenvolvedor de sites e sistemas em Belo Horizonte, para pessoas que já demonstraram interesse no trabalho dele. Não é campanha de tráfego frio: a página existe para gerar confiança e abrir uma conversa no WhatsApp, sem pressão.

## Language

**Projeto**:
Trabalho real listado na página (Café com Letras, Clube de Jazz, Clube OTOTOI). Todos estão em desenvolvimento e devem aparecer exatamente assim, sem resultados, conversões ou métricas insinuadas.
_Avoid_: Case, Entrega, Resultado (enquanto não houver resultado real e verificável)

**Serviço**:
Capacidade que Vinicius oferece: sites institucionais, landing pages, sistemas e painéis, integrações.
_Avoid_: Oferta, Pacote, Solução

**Processo**:
Os quatro passos do trabalho: Entendimento, Estrutura e direção visual, Desenvolvimento, Revisão e publicação. Escopo, prazo, revisões, hospedagem e manutenção são definidos na proposta de cada projeto.
_Avoid_: Metodologia, Framework

**Conversa**:
A única ação que a página pede: abrir o WhatsApp com a mensagem pré-preenchida. Não existe formulário nem segunda etapa de captura.
_Avoid_: Conversão, Lead, Cadastro, Submit

**Visitante**:
Pessoa que chega à página já com interesse no trabalho. Deve entender em ~15 segundos quem é Vinicius, o que ele desenvolve e como falar com ele.
_Avoid_: Tráfego, Audiência

## Regras invioláveis

- Nenhuma métrica, depoimento, cliente ou resultado inventado.
- Nenhuma escassez artificial ("X vagas", contadores, urgência).
- Nenhum botão sem destino funcional; sem links vazios.
- Projetos em desenvolvimento não ganham link falso — apenas o status.

## Arquitetura

- Conteúdo tipado em `src/content/site.ts`, contrato em `src/domain/types.ts`.
- Helper de WhatsApp em `src/domain/whatsapp.ts` (testado em `whatsapp.test.ts`).
- Componentes de seção em `src/components/site/`.
- Identidade visual: neo-brutalismo editorial — papel `#F3F0E8`, tinta `#161512`, cobalto `#3157F5`; Archivo (display), Instrument Sans (texto), IBM Plex Mono (etiquetas).
