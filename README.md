# Website Julio

Site de portfólio pessoal (**React**, **Vite**, **TypeScript**, **Tailwind CSS** e **shadcn/ui**): perfil, experiência, formação, automação, projetos (via API pública do GitHub), objetivos e contato.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Conteúdo e assets

- Textos e links principais: [`src/content/site.ts`](src/content/site.ts).
- Foto do perfil: coloque `Julio.png` em [`public/imgs/Julio.png`](public/imgs/) (o [`Avatar`](src/components/sections/HeroAbout.tsx) usa fallback com iniciais se a imagem não existir).
- PDFs do currículo: [`public/cv/`](public/cv/) (`curriculo-julio.pdf`, `curriculo-profissional.pdf`).

## GitHub API (opcional)

Sem autenticação, a API pública do GitHub tem limite baixo de requisições. Para desenvolvimento local, você pode criar `.env.local`:

```bash
VITE_GITHUB_TOKEN=seu_token_classic_somente_leitura
```

Não commite tokens. Em produção o site usa o cache em `sessionStorage` por sessão após o primeiro carregamento bem-sucedido.

## shadcn/ui

Novos componentes (exemplo):

```bash
npx shadcn@latest add dialog
```

## Deploy

Saída estática em `dist/`. Se publicar em subpath (ex.: GitHub Pages), defina `base` em [`vite.config.ts`](vite.config.ts).
