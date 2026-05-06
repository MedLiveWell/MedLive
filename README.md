# Med Live Well

Distribuidora B2B de produtos de reabilitação. Site institucional construído em Next.js 15 (App Router) + TypeScript.

## Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- CSS puro com variáveis (sistema de marca)
- Catamaran via `next/font`

## Comandos

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm run start
npm run typecheck
npm run lint
```

## Estrutura

```
src/
├── app/                    Rotas (App Router)
│   ├── layout.tsx          Layout raiz: Header + Footer + fonts
│   ├── page.tsx            /            Home
│   ├── produtos/           /produtos
│   ├── produto/[slug]/     /produto/:slug
│   ├── para-quem-vendemos/
│   ├── sobre/
│   ├── seja-revendedor/
│   ├── blog/
│   └── globals.css         CSS global (sistema de marca)
├── components/             Componentes reutilizáveis
└── lib/
    └── data.ts             Catálogo, categorias, blog, valores

public/
└── images/                 Logo + fotos de produto + centro de distribuição
```

## Branding

Cores:
- Azul Cobalto `#0F3A7A` (confiança, força)
- Azul Celeste `#4FB0D4` (empatia)
- Laranja Tangerina `#F08A2B` (vitalidade)

Tipografia: Catamaran (300–900).

## Sobre o wireframe

A versão original do wireframe HTML está preservada em `wireframe-source/` para referência.
