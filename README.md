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

 [GitHub](https://github.com/DiogoPedrosoAlves/soulup-techleet)

## Link do vídeo (YouTube)

 `https://youtube.com/...`

## Integrantes

| Foto | Nome | RM | Turma | GitHub | LinkedIn |
|---|---|---|---|---|---|
| <img src="public/imagens/samuel.jpeg" width="60" /> | Samuel Pedroso | 569335 | 1TDSR | [GitHub](https://github.com/OSamuelXavierDev) | [LinkedIn](https://www.linkedin.com/in/samuel-xavier-061434274) |
| <img src="public/imagens/diogo.jpeg" width="60" /> | Diogo Pedroso Alves | 570024 | 1TDSR | [GitHub](https://github.com/DiogoPedrosoAlves) | [LinkedIn](https://www.linkedin.com/in/diogo-pedroso-alves-895346237/) |
| <img src="public/imagens/murilo.jpeg" width="60" /> | Murilo Munari Bissiato | 569602 | 1TDSR | [GitHub](https://github.com/murilomunari) | [LinkedIn](https://www.linkedin.com/in/murilomunaribissiato/) |
| <img src="public/imagens/pedro.jpeg" width="60" /> | Pedro Henrique Toledo Sampaio | 571707 | 1TDSR | [GitHub](https://github.com/PedroSampaio20) | [LinkedIn](https://www.linkedin.com/in/pedro-sampaio2002/) |
| <img src="public/imagens/felipe.jpeg" width="60" /> | Felipe Ferreira Amado | 572567 | 1TDSR | [GitHub](https://github.com/FelipeFerreiraAmado) | [LinkedIn](https://www.linkedin.com/in/felipe-amado/) |

As fotos de cada integrante também aparecem na página **Integrantes** e no perfil individual de cada membro (`/integrantes/:id`).

## Imagens e ícones do projeto

| Ícone/Imagem | Uso |
|---|---|
| <img src="public/imagens/AvatarSoulUp.png" width="50" /> | Mascote / Avatar Inteligente da SoulUp |
| <img src="public/imagens/AvatarF-Base.jpg" width="50" /> | Base do Avatar Personalizável |
| <img src="public/imagens/IconeHome.png" width="30" /> | Favicon da Home |
| <img src="public/imagens/IconeUser.png" width="30" /> | Favicon das páginas Sobre / Integrantes |
| <img src="public/imagens/IconeTelefone.png" width="30" /> | Favicon da página Contato |
| <img src="public/imagens/TechLeet.png" width="60" /> | Logo da equipe TechLeet (rodapé) |
| <img src="public/imagens/SoulUp.png" width="60" /> | Logo da empresa SoulUp (rodapé) |

Todos os arquivos de imagem do projeto estão em `public/imagens/`.

## Contato

Dúvidas sobre o projeto: **rm570024@fiap.com.br**
