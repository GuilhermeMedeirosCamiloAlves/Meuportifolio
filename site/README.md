# Site Pessoal — Guilherme Alves

## Estrutura de arquivos

```
site/
├── index.html              → página principal (Sobre + Projetos + Contato)
├── style.css                → todo o estilo do site
├── script.js                 → pequenos comportamentos (ano no rodapé, menu ativo)
├── assets/                   → imagens do site (capas dos projetos já incluídas)
└── projetos/
    ├── _template.html        → MODELO para criar um novo projeto
    ├── projeto-1.html         → exemplo: Cardápio Digital
    ├── projeto-2.html         → exemplo: Landing Page de Serviço
    └── projeto-3.html         → exemplo: Portfólio de Fotografia
```

## O que já está pronto

- Nome, curso (Ciência da Computação) e universidade (UNIR) já preenchidos
- Design próprio: papel claro, verde-pinho como cor de destaque, tipografia
  Space Grotesk + IBM Plex Sans/Mono
- Um "mockup" de resultado de busca no topo, ilustrando sua proposta:
  sites que aparecem quando o cliente é procurado
- 3 projetos de exemplo, com capas ilustrativas (SVG) — **troque pelos seus
  projetos reais quando tiver**
- Totalmente responsivo (celular, tablet e computador)

## 1. Trocar as informações de contato

No `index.html`, dentro da seção `id="contato"`, troque:
- `seuemail@exemplo.com` pelo seu email
- o número no link do WhatsApp (`https://wa.me/55XXXXXXXXXXX`)
- os links de GitHub e LinkedIn

## 2. Adicionar sua foto (opcional)

Coloque uma imagem chamada `foto-perfil.jpg` dentro da pasta `assets/`.
Se você não colocar nenhuma foto, o site mostra automaticamente suas
iniciais "GA" no lugar — não quebra em nenhum dos dois casos.

## 3. Adicionar um novo projeto

Cada projeto tem duas partes: o **card** na página inicial e a **página própria** dele.

### Passo A — Criar a página do projeto
1. Copie o arquivo `projetos/_template.html`
2. Renomeie a cópia, ex: `projetos/meu-novo-projeto.html`
3. Edite dentro dele: título, descrição, imagem de capa, tecnologias e texto

### Passo B — Adicionar o card na página inicial
No `index.html`, dentro de `<div class="project-grid">`, copie um bloco como este:

```html
<a class="project-card" href="projetos/meu-novo-projeto.html">
  <div class="project-image">
    <img src="assets/minha-imagem.jpg" alt="Capa do projeto">
  </div>
  <div class="project-info">
    <h3>Nome do Projeto</h3>
    <p>Descrição curta do projeto.</p>
    <p class="project-tech">HTML, CSS, JavaScript</p>
  </div>
</a>
```

Cole um bloco desses para cada novo projeto, ajustando:
- `href` → caminho do arquivo html criado no Passo A
- `src` da imagem → caminho da imagem de capa (pode ser .jpg, .png ou .svg)
- título, descrição e tecnologias usadas

O grid se ajusta sozinho: 3 colunas em telas grandes, 2 em tablets e 1 em
celular.

## 4. Testar localmente

Basta abrir o `index.html` no navegador. Se quiser um servidor local:

```bash
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## 5. Publicar o site (gratuito)

- **GitHub Pages**: suba a pasta para um repositório no GitHub e ative o
  Pages nas configurações do repositório. Isso combina bem com seu foco em
  SEO — GitHub Pages já entrega o site rápido, o que ajuda no ranqueamento.
- **Netlify / Vercel**: arraste a pasta do site direto na interface deles.
