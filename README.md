# Avatar Inteligente — SoulUp | TechLeet

Aplicação **SPA (Single Page Application)** do projeto Avatar Inteligente da SoulUp, migrada da Sprint 02 (HTML/CSS/JS) para **React + Vite + TypeScript**, conforme os requisitos da Sprint 03 da disciplina Front-End Design Engineering.

O "Avatar Inteligente" é o mascote digital da SoulUp, e os "Avatares Personalizáveis" permitem que cada usuário customize seu próprio avatar com acessórios desbloqueados pelo uso do aplicativo.

## Tecnologias utilizadas

- **React 18** — construção da interface e componentização
- **Vite** — build tool e servidor de desenvolvimento
- **TypeScript** — tipagem estática em todo o projeto
- **TailwindCSS** — estilização e responsividade (mobile, tablet e desktop)
- **React Router DOM** — navegação SPA, rotas estáticas e dinâmicas
- **React Hook Form** — validação do formulário de contato
- **Git / GitHub** — versionamento do projeto

> Nesta Sprint não há consumo de API — os dados (integrantes e conteúdo das páginas) estão em `src/data`.

## Estrutura de pastas

```
soulup-techleet/
├── public/
│   └── imagens/              # imagens e ícones do projeto (avatares, fotos da equipe, logos)
├── src/
│   ├── components/
│   │   ├── layout/           # Header, Footer, Layout (usados em todas as páginas)
│   │   ├── ui/                # Button, Card (componentes genéricos reutilizáveis)
│   │   ├── avatar/            # AvatarCustomizer, SolucaoCard
│   │   ├── faq/                # FaqItem, FaqList
│   │   ├── membros/           # MembroCard
│   │   └── formularios/       # ContatoForm (React Hook Form)
│   ├── data/                  # dados estáticos (membros, faq, soluções)
│   ├── hooks/                 # hooks customizados (usePageTitle)
│   ├── pages/                 # uma página por rota (Home, Sobre, Integrantes, FAQ, Contato, Solução...)
│   ├── types/                 # tipagens TypeScript compartilhadas
│   ├── App.tsx                 # definição das rotas (React Router)
│   ├── main.tsx                # ponto de entrada da aplicação
│   └── index.css               # diretivas do Tailwind e estilos globais
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── vite.config.ts
```

## Rotas da aplicação

| Rota | Página | Tipo |
|---|---|---|
| `/` | Home | Estática |
| `/sobre` | Sobre o Projeto | Estática |
| `/integrantes` | Lista da equipe | Estática |
| `/integrantes/:id` | Perfil de um integrante | Dinâmica (`useParams`) |
| `/solucao` | Lista das soluções do projeto | Estática |
| `/solucao/:id` | Detalhe de uma solução | Dinâmica (`useParams`) |
| `/faq` | Perguntas frequentes | Estática |
| `/contato` | Formulário de contato | Estática |
| `*` | Página não encontrada (404) | Fallback |

## Como executar localmente

Pré-requisito: [Node.js](https://nodejs.org/) 18 ou superior.

```bash
# 1. Instalar as dependências
npm install

# 2. Rodar o servidor de desenvolvimento
npm run dev

# 3. Abrir no navegador
http://localhost:5173
```

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Link do repositório

> Substituir pelo link do repositório GitHub do grupo:
> `https://github.com/<usuario>/<repositorio>`

## Link do vídeo (YouTube)

> Substituir pelo link do vídeo de apresentação do projeto:
> `https://youtube.com/...`

## Integrantes

| Nome | RM | Turma | GitHub | LinkedIn |
|---|---|---|---|---|
| Samuel Pedroso | 569335 | 1TDSR | [GitHub](https://github.com/OSamuelXavierDev) | [LinkedIn](https://www.linkedin.com/in/samuel-xavier-061434274) |
| Diogo Pedroso Alves | 570024 | 1TDSR | [GitHub](https://github.com/DiogoPedrosoAlves) | [LinkedIn](https://www.linkedin.com/in/diogo-pedroso-alves-895346237/) |
| Murilo Munari Bissiato | 569602 | 1TDSR | [GitHub](https://github.com/murilomunari) | [LinkedIn](https://www.linkedin.com/in/murilomunaribissiato/) |
| Pedro Henrique Toledo Sampaio | 571707 | 1TDSR | [GitHub](https://github.com/PedroSampaio20) | [LinkedIn](https://www.linkedin.com/in/pedro-sampaio2002/) |
| Felipe Ferreira Amado | 572567 | 1TDSR | [GitHub](https://github.com/FelipeFerreiraAmado) | [LinkedIn](https://www.linkedin.com/in/felipe-amado/) |

As fotos de cada integrante estão em `public/imagens/` e são exibidas nas páginas Integrantes e no perfil individual de cada membro (`/integrantes/:id`).

## Contato

Dúvidas sobre o projeto: **rm570024@fiap.com.br**
