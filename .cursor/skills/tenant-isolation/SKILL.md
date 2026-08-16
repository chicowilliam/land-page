---
name: tenant-isolation
description: >-
  Isolamento de tenant em aplicações multi-cliente — scoping por tenantId,
  middleware do Prisma, prevenção de vazamento entre clientes.
  Use when building or reviewing Prisma queries, API routes, middleware,
  multi-tenant panels, or any code that reads/writes client data.
---

# Isolamento de Tenant (Multi-tenancy)

Aplica-se sempre que o projeto atende múltiplos clientes/lojas/empresas na mesma base de dados (ex: painel admin usado por vários clientes).

## Regra de ouro
`tenantId` nunca vem do corpo da requisição (`req.body.tenantId`) nem de query string.
Ele sempre vem da sessão autenticada / token JWT já validado no middleware de auth.

```ts
// ERRADO — tenant escolhido pelo cliente da API
const tenantId = req.body.tenantId;

// CERTO — tenant vem da sessão já autenticada
const tenantId = req.auth.tenantId;
```

## Schema
- Toda tabela que guarda dado de cliente final precisa de coluna `tenantId`
- Índice composto obrigatório: `@@index([tenantId, id])` (ou `@@unique([tenantId, algumCampo])` quando fizer sentido)
- Chave estrangeira de `tenantId` sempre com `onDelete: Restrict` (nunca cascade silencioso que apaga dado de outro tenant por engano)

```prisma
model Pedido {
  id        String   @id @default(uuid())
  tenantId  String
  clienteId String
  // ...
  tenant    Tenant   @relation(fields: [tenantId], references: [id])

  @@index([tenantId, id])
}
```

## Middleware do Prisma (defesa em profundidade)
Além de filtrar `tenantId` manualmente em cada query, usar `$extends` do Prisma para injetar o filtro automaticamente e reduzir risco de esquecimento:

```ts
const prismaTenant = (tenantId: string) =>
  prisma.$extends({
    query: {
      pedido: {
        async findMany({ args, query }) {
          args.where = { ...args.where, tenantId };
          return query(args);
        },
      },
    },
  });
```
Isso não substitui checar `tenantId` explicitamente nas queries críticas — é uma segunda camada, não a única.

## Checklist antes de subir uma rota nova
- Toda query de leitura/escrita filtra por `tenantId` vindo da sessão
- Nenhum endpoint aceita `tenantId` como parâmetro livre do cliente
- Logs de erro nunca imprimem dado de outro tenant (evitar `console.log` de objetos inteiros em produção)
- Testado manualmente: usuário do tenant A não consegue ler/editar registro do tenant B trocando o `id` na URL

## Sinal de alerta ao revisar código
Se uma query em `infra/prisma/*` não tem `tenantId` no `where`, tratar como bug de segurança, não como detalhe de estilo.
