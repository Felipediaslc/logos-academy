<!--
  Arquivo gerado/atualizado para orientar agentes de IA no repositório
  logos-academy. Conteúdo conciso, acionável e específico ao layout e padrões
  observados no código. Escreva em português (pt-BR).
-->

# Instruções rápidas para agentes de IA

**Propósito:** Ajudar agentes a serem produtivos imediatamente neste projeto Next.js (app router, Next 14).

- **Startup:** `npm install` então `npm run dev` (usa `next dev`). Para produção: `npm run build` e `npm run start`.
- **Lint:** `npm run lint` (configuração padrão do Next).

**Arquitetura / Onde olhar primeiro**
- **Rotas e estrutura:** a aplicação usa o novo `app/` router do Next.js. Cada pasta com `page.tsx` é uma rota (ex.: `app/homepages/page.tsx`).
- **Layout global:** `app/layout.tsx` registra fontes locais (`next/font/local`) e renderiza `ConditionalNavBar` (veja `app/components/routPage/rout.jsx`).
- **Componentes reutilizáveis:** `app/components/*` contém subcomponentes (ex.: `NavBar/navBar.tsx`, `ui/Button.js`, `ui/accordion.tsx`). Muitos componentes são client components — procure por `"use client"`.
- **Utilities:** função `cn` para combinar classes Tailwind está em `app/lib/utils.ts`.

**Padrões detectados (pontos importantes para seguir)**
- **Server vs Client:** por padrão os arquivos em `app/` são server components. Se o componente usa estado/efeitos ou browser APIs, ele declara `"use client"` (ex.: `NavBar` e `rout.jsx`). Mantenha essa divisão.
- **Estilo:** Tailwind é usado (`tailwind.config.ts`, `postcss.config.mjs`). Use a helper `cn(...)` de `app/lib/utils.ts` para combinar classes quando for necessário.
- **Imagens e ativos:** ativos estáticos ficam em `public/`. Ex.: `app/components/NavBar` importa `public/img-navbar.png` via `next/image`.
- **Fontes locais:** `app/layout.tsx` usa `localFont` e espera fontes em `app/fonts/` (ex.: `GeistVF.woff`). Evite mover sem atualizar `layout.tsx`.

**Dependências e integrações observadas**
- `next@14` — usar recursos do App Router/React Server Components.
- UI libraries: `@radix-ui`, `@heroicons/react`, `lucide-react`, `shadcn` e `swiper` — ver `package.json`.
- `mongoose` está listado como dependência; não há backend óbvio no repositório. Se criar integrações com DB, confirme onde o servidor (API routes / separate service) será hospedado.

**Convensões de código**
- **Rotas internas:** muitos links usam `href` com caminhos como `/components/sobre` — confirme se a intenção é servir essas rotas dentro de `app/` (procure `page.tsx` correspondentes). Quando adicionar uma rota, crie `folder/page.tsx`.
- **Botões e elementos de UI:** existe um `ui/Button.js` e componentes `ui/*`; prefira reutilizar esses para consistência.
- **Arquivos TS/JS:** o projeto usa TypeScript em grande parte (`.tsx`), mas também há arquivos `.js`/`.jsx` — preserve o tipo quando for editar (não force conversão sem motivo).

**Exemplos úteis para edições automáticas**
- Quer adicionar uma rota `/cursos`: crie `app/cursos/page.tsx` com export default `function Page() { return <Cursos /> }` e adicione componentes em `app/components/cursos` se necessário.
- Para component state -> coloque `"use client"` na primeira linha do arquivo; caso contrário, mantenha como server component.
- Para combinar classes Tailwind: `import { cn } from '@/app/lib/utils'` e use `className={cn('p-4', condition && 'text-white')}`.

**O que evitar / checar**
- Não remova a chamada a `ConditionalNavBar` em `app/layout.tsx` sem revisar `app/components/routPage/rout.jsx` (há lógica de exibição condicional).
- Se usar `mongoose`, confirme variáveis de ambiente e onde a conexão será configurada (não existe uma camada de API evidente aqui).

Se precisar de mais detalhes (ex.: mapear rotas faltantes, atualizar navegação, ou incluir instruções de deploy), indique o alvo e eu ajusto este arquivo.

*** Fim das instruções ***
