---
name: motion-setup
description: >-
  Setup e convenções de animação com Framer Motion — instala automaticamente,
  define variants padrão e respeita acessibilidade.
  Use when adding or editing animations in TSX/JSX, Framer Motion, section
  entrance, hover/tap, or prefers-reduced-motion.
---

# Motion / Animações

## Setup automático
- Se o componente precisar de animação e `framer-motion` não estiver no `package.json`, instalar antes de escrever o código (`npm install framer-motion`, ou `pnpm add` / `yarn add` conforme o lockfile do projeto)
- Centralizar variants reutilizáveis em `src/lib/motion.ts` em vez de redefinir objetos de animação em cada componente:

```ts
// src/lib/motion.ts
export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};
```

## Convenções
- Animação de entrada de seção: usar `whileInView` com `viewport={{ once: true, amount: 0.2 }}` — nunca reanimar a cada scroll
- Easing padrão: curva custom `[0.22, 1, 0.36, 1]` (estilo easeOutExpo) em vez do `easeInOut` genérico do Framer, para uma sensação mais premium
- Duração padrão: 0.4–0.6s para elementos de UI que entram na tela, 0.15–0.25s para hover/tap
- Nunca animar `width`/`height` ou propriedades que disparam reflow diretamente — usar `scale` ou a prop `layout` do Framer Motion

## Acessibilidade
- Sempre respeitar `prefers-reduced-motion` via `useReducedMotion()` do Framer Motion, reduzindo ou desligando animações de entrada quando `true`
- Nunca usar animação como único jeito de transmitir informação essencial (erro, sucesso etc. também precisam de indicação estática)

## Hover / interação
- Botões e cards: `whileHover={{ scale: 1.02 }}` e `whileTap={{ scale: 0.98 }}` como padrão, ajustável por contexto
- Não animar tudo por padrão — se o `:hover` do Tailwind já resolve visualmente, não duplicar com Framer Motion
