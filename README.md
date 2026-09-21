# Instituto PSI & DH — landing page

Landing page da psicóloga Kelly Cristina Bento Ferreira (CRP 05/80468), feita para
receber tráfego pago do Google Ads. A ação única da página é iniciar uma conversa
no WhatsApp.

HTML, CSS e JavaScript puros — sem build, sem dependências. Abrir o `index.html`
já funciona.

## Como rodar

Abra `index.html` no navegador. Se preferir um servidor local:

```bash
python -m http.server 8000
# depois: http://localhost:8000
```

## Estrutura

```
index.html      estrutura e conteúdo
styles.css      todo o estilo, com os três breakpoints
script.js       barra flutuante e entrada do hero
assets/         imagens já otimizadas para web
img/            fotos e logo originais, como vieram do formulário
```

## A ideia do design

A identidade veio do próprio logotipo da cliente: um cérebro preenchido por uma
cena subaquática. Ela é instrutora de mergulho além de psicóloga, e o consultório
nasceu de um projeto social que levava jovens para mergulhar.

Então a página **desce**. O fundo atravessa uma coluna d'água — começa na claridade
da superfície, escurece até o azul abissal nas Especialidades (a parte mais técnica
do conteúdo) e volta à luz no contato.

A paleta é a que a cliente definiu:

| Token | Hex | Onde aparece |
|---|---|---|
| abissal | `#011F44` | fundo das Especialidades, cor do texto |
| profundo | `#0F3269` | botões, fundo do Instituto |
| coluna | `#4688B3` | textos de apoio, régua, fios |
| superfície | `#7AE3EF` | acento luminoso, usado com parcimônia |
| respiro | `#FFCBE7` | marcador do pilar de desenvolvimento humano |
| socorro | `#FF0010` | **só** no pilar de primeiros socorros |

Tipografia: **Spectral** para títulos e leitura, **Archivo** para interface e dados,
**Allura** uma única vez, como assinatura da Kelly ao fim do texto sobre ela.

## Os efeitos, e por que são estes

A página é dinâmica sem recorrer ao repertório padrão (fade-up em cada seção,
hover em todo card, gradiente decorativo). Cada efeito aqui responde ao conceito
ou a uma ação de quem está usando:

- **Mescla entre níveis** — a transição de um fundo para o outro acontece nos
  últimos 150px de cada seção, dentro do respiro, então a descida parece contínua
  em vez de cortada. É CSS puro, sem JavaScript.
- **Entrada do hero** — uma única sequência na carga: título, texto e ação emergem
  de baixo, escalonados. Nada mais na página anima ao entrar na tela.
- **Barra flutuante** — some no topo e entra quando o hero sai, mantendo o
  WhatsApp sempre a um toque.
- **Luz no botão** — um brilho ciano atravessa o botão no hover, como um feixe
  passando pela água.
- **Sublinhado do menu** — cresce da esquerda, no hover e no foco pelo teclado.

Tudo isso é desligado quando o sistema pede `prefers-reduced-motion: reduce`.
A página continua inteira e navegável, só sem movimento.

## Acessibilidade

- HTML semântico, um `h1` só, hierarquia de títulos correta
- Link "Ir para o conteúdo" para quem navega por teclado
- Foco visível em tudo que é focável
- Contraste conferido nas seções escuras
- `alt` descritivo nas fotos

## SEO

Title e description escritos para a busca local, Open Graph para o card do
WhatsApp, e JSON-LD do tipo `Psychologist` com telefone, horário e as duas
localidades.

## Antes de publicar

1. **Domínio** — trocar a URL em `og:url` e adicionar `rel="canonical"` quando o
   domínio existir.
2. **Fotos em alta** — as originais têm 540px de largura, o que deixa as imagens
   um pouco suaves em telas retina. Se a Kelly tiver os arquivos originais da
   câmera, vale reprocessar.
3. **Instagram** — a página não linka o perfil porque ele ainda não existe. Quando
   criar, cabe no rodapé.
4. **Hospedagem** — qualquer serviço de site estático serve e é gratuito nesse
   tamanho: GitHub Pages, Netlify ou Vercel.

## Publicar no GitHub

```bash
git init
git add .
git commit -m "Landing page do Instituto PSI & DH"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPO.git
git push -u origin main
```

Para servir pelo GitHub Pages: **Settings → Pages → Source: main / (root)**.
