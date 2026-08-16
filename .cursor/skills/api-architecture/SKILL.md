---
name: api-architecture
description: >-
  Convenções de construção de API Node.js — camadas, validação Zod, erros
  padronizados, paginação e versionamento.
  Use when creating or editing API routes, controllers, services, repositories,
  or HTTP handlers.
---

# Construção de API

## Camadas (nunca pular etapa)
```
rota/controller  →  service (regra de negócio)  →  repository (Prisma)
```
- Rota/controller: só lê request, valida com Zod, chama o service, formata resposta
- Service: regra de negócio, orquestra repositórios, nunca importa `req`/`res`
- Repository: única camada que fala com o Prisma

## Validação na borda
Toda entrada externa (body, params, query) validada com Zod antes de chegar no service:

```ts
const criarClienteSchema = z.object({
  nome: z.string().min(1),
  email: z.string().email(),
});

router.post("/clientes", async (req, res) => {
  const dados = criarClienteSchema.parse(req.body); // lança erro 400 se inválido
  const cliente = await clienteService.criar(dados);
  res.status(201).json(cliente);
});
```

## Formato de erro padronizado
Toda resposta de erro segue o mesmo shape, nunca stack trace exposto em produção:

```ts
{
  error: {
    code: "VALIDATION_ERROR",
    message: "Email inválido",
  }
}
```

## Status codes com disciplina
- `200` sucesso em GET/PUT | `201` recurso criado | `204` sucesso sem corpo (delete)
- `400` erro de validação | `401` não autenticado | `403` autenticado mas sem permissão | `404` não encontrado | `409` conflito (ex: email duplicado)
- `500` só para erro inesperado — nunca usar 500 para erro de validação previsível

## Paginação (padrão para listagens)
```
GET /pedidos?page=1&pageSize=20
→ { data: [...], meta: { page: 1, pageSize: 20, total: 134 } }
```
Nunca retornar lista completa sem paginação em endpoints que podem crescer (pedidos, clientes, logs).

## Auth e rate limit
- Middleware de autenticação roda antes de qualquer controller, nunca dentro dele
- Rotas públicas (ex: formulário de contato) precisam de rate limit básico para evitar spam/abuso

## Versionamento
- Prefixo de versão na URL desde o início, mesmo em projeto pequeno: `/api/v1/...`
- Evita quebra de contrato quando o cliente já tiver integração ativa (ex: painel admin consumindo a mesma API)
