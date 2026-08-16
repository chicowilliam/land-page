# Conteúdo da Oferta como modelo de domínio tipado, sem CMS

A página é pessoal, de exemplo, e a Oferta muda pouco. O conteúdo vive como dados TypeScript que satisfazem o contrato em `src/domain`, não como strings soltas nos componentes nem como CMS. Componentes recebem a Oferta; não conhecem copy.

**Considered Options**: CMS (sanity/contentful); markdown; copy hardcoded no JSX. CMS é reversível depois, mas agora adiciona waterfall, auth e custo para um único autor. JSX hardcoded espalha a linguagem ubíqua e impede testar regras de Capacidade/Conversão sem montar UI.

**Consequences**: mudar Promessa, Case ou Capacidade é editar o módulo de conteúdo, não o layout. UI não importa barrel de copy. Quando a Oferta precisar de edição não-dev, aí sim um CMS vira adapter atrás do mesmo contrato.
