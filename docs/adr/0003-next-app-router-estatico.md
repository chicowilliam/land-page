# Next.js App Router, página estática, React + TypeScript

A landing precisa carregar rápido no celular (tráfego de Instagram/WhatsApp). Geramos a página estática no build (SSG), com React + TypeScript, Tailwind v4 e shadcn. SPA Vite foi rejeitada porque empurra JS demais antes do LCP e perde otimização de imagem/fonte no servidor.

**Consequences**: a Oferta é lida no servidor; o client bundle fica só no que precisa de estado (formulário, FAQ accordion, motion). Sem fetch de conteúdo no cliente. Sem waterfall.
