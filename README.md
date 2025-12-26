# 🔴 Monteiro Security - Writeups Platform

Plataforma profissional para hospedar writeups de pentesting com visual inspirado no HackTheBox.

## 📁 Estrutura de Arquivos

```
seu-repositorio/
├── index.html           # Página principal
├── writeups.json        # Arquivo de configuração dos writeups
├── Monteiro.png         # logo
└── writeups/            # Pasta com os PDFs dos writeups
    ├── htb-lame.pdf
    ├── htb-blue.pdf
    └── thm-ad-lab.pdf
```

## 🚀 Como Adicionar um Novo Writeup

### Passo 1: Adicione o PDF

1. Coloque seu arquivo PDF na pasta `writeups/`
2. Use um nome descritivo, exemplo: `htb-lame.pdf` ou `thm-ad-lab.pdf`

### Passo 2: Edite o writeups.json

Abra o arquivo `writeups.json` e adicione um novo objeto ao array. Exemplo:

```json
{
  "title": "Nome da Máquina",
  "platform": "htb",
  "difficulty": "medium",
  "description": "Descrição breve do writeup e técnicas utilizadas.",
  "tags": ["Tag1", "Tag2", "Tag3"],
  "date": "2024-12-26",
  "pdf": "writeups/seu-arquivo.pdf"
}
```

### Campos Explicados:

- **title**: Nome da máquina/desafio
- **platform**: Use `htb`, `thm`, `ctf` ou `bugbounty`
- **difficulty**: Use `easy`, `medium`, `hard` ou `insane`
- **description**: Descrição do writeup (150-200 caracteres ideal)
- **tags**: Array de técnicas/tecnologias (máximo 5-6 tags recomendado)
- **date**: Data no formato `AAAA-MM-DD`
- **pdf**: Caminho para o arquivo PDF (sempre `writeups/nome-arquivo.pdf`)

## 📋 Exemplo Completo

```json
{
  "writeups": [
    {
      "title": "Lame",
      "platform": "htb",
      "difficulty": "easy",
      "description": "Exploração de vulnerabilidade no Samba 3.0.20 com backdoor no vsftpd.",
      "tags": ["SMB", "vsftpd", "RCE", "Linux"],
      "date": "2024-12-15",
      "pdf": "writeups/htb-lame.pdf"
    },
    {
      "title": "Bounty Hunter",
      "platform": "htb",
      "difficulty": "easy",
      "description": "XXE injection em aplicação web com escalação via Python capabilities.",
      "tags": ["XXE", "Web", "Python", "Privilege Escalation"],
      "date": "2024-12-05",
      "pdf": "writeups/htb-bounty-hunter.pdf"
    }
  ]
}
```

## 🎨 Personalizações

### Alterar Cores

Edite as variáveis CSS no `index.html` (linha ~15):

```css
:root {
    --primary-red: #ff3e3e;    /* Cor principal (vermelho)
    --dark-bg: #0f0f0f;        /* Fundo escuro
    --card-bg: #141b22;        /* Fundo dos cards
}
```

### Adicionar Nova Plataforma

1. No `writeups.json`, use o código da plataforma (ex: `"platform": "vulnhub"`)
2. O sistema criará automaticamente o filtro
3. Para customizar a badge, adicione no CSS:

```css
.badge-vulnhub {
    background: linear-gradient(135deg, #seu-cor1 0%, #seu-cor2 100%);
    color: white;
}
```

## 🌐 Deploy no GitHub Pages

1. Crie um repositório chamado `seu-usuario.github.io`
2. Faça upload de todos os arquivos
3. Em Settings → Pages → Source, selecione `main branch`
4. Seu site estará em: `https://seu-usuario.github.io`

## 📱 Recursos

✅ Responsivo (funciona em mobile)
✅ Filtros por plataforma e dificuldade
✅ Busca em tempo real
✅ Estatísticas automáticas
✅ PDFs abrem em nova aba
✅ Visual profissional estilo HackTheBox

## 🔧 Troubleshooting

**Os writeups não aparecem:**
- Verifique se o arquivo `writeups.json` está na mesma pasta que `index.html`
- Abra o Console do navegador (F12) para ver erros
- Confirme que o JSON está válido (use jsonlint.com)

**PDF não abre:**
- Verifique se o caminho no campo `pdf` está correto
- Confirme que o arquivo existe na pasta `writeups/`
- Teste abrindo o PDF diretamente no navegador

**Logo não aparece:**
- Renomeie sua logo para `Monteiro.png` (case-sensitive)
- Coloque na mesma pasta que `index.html`

## 📝 Dicas de Uso

- Mantenha descrições concisas (150-200 caracteres)
- Use no máximo 5-6 tags por writeup
- Adicione writeups do mais recente para o mais antigo no JSON
- Para organizações maiores, considere criar um script Python para gerar o JSON automaticamente

## 📄 Licença

Livre para uso pessoal e profissional.