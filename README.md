# Monteiro - Pentest Writeups

Plataforma para publicar writeups de pentests.

## Como usar

1. Faça download dos arquivos (ou clone do repositório)
2. Coloque seus PDFs na pasta `writeups/`
3. Edite o arquivo `script.js` e adicione seus writeups no array `writeups`
4. Atualize os links das redes sociais no `index.html`

## Adicionar um novo writeup

Abra o arquivo `script.js` e adicione um novo objeto no array `writeups`:

```javascript
{
  title: "Nome da Máquina",
  platform: "htb", // htb, thm, ctf, bugbounty
  difficulty: "hard", // easy, medium, hard, insane
  description: "Descrição breve do writeup...",
  tags: ["SQLi", "PrivEsc", "Linux"],
  date: "2025-01-15",
  pdf: "writeups/nome-da-maquina.pdf"
}
```

## Estrutura de arquivos

```
├── index.html      # Página principal
├── styles.css      # Estilos
├── script.js       # Dados e lógica
├── monteiro.png    # Logo
└── writeups/       # Pasta para PDFs
    └── example-machine.pdf
```

## Deploy no GitHub Pages

1. Crie um repositório no GitHub
2. Faça upload de todos os arquivos
3. Vá em Settings > Pages
4. Selecione "Deploy from a branch" > "main" > "/ (root)"
5. Clique em Save

Seu site estará disponível em: `https://seu-usuario.github.io/nome-do-repositorio`
