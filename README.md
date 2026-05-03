# projeto-qrcode

Kit de utilidades simples para gerar/ler QR Codes e gerar senhas aleatórias.

**Pré-requisitos**
- Node.js (recomendado v18+)

**Instalação**

```bash
npm install
```

Crie um arquivo `.env` na raiz com as variáveis usadas pelo projeto (exemplo abaixo).

**Exemplo de `.env`**

```env
UPPERCASE_LETTERS=true
LOWERCASE_LETTERS=true
NUMBERS=true
SPECIAL_CHARACTERS=true
PASSWORD_LENGTH=8
```

**Scripts**

- `npm run start` — inicia o CLI (arquivo de entrada: `src/index.js`).

**Uso**

1. Rode `npm run start`.
2. Escolha `1` para QR Code ou `2` para Password.

- Geração de senha: lógica em `src/services/password/handle.js`.
- Geração/Leitura de QR: arquivos em `src/services/qr-code/`.

**Estrutura relevante**

- [src/index.js](src/index.js) — ponto de entrada e prompt principal.
- [src/prompts/prompt-main.js](src/prompts/prompt-main.js) — schema do prompt principal.
- [src/services/password/handle.js](src/services/password/handle.js) — gera senha conforme `.env`.
- [src/services/qr-code/create.js](src/services/qr-code/create.js) — scaffold para gerar QR.

**Contribuições**

PRs são bem-vindos. Abra uma issue para discutir mudanças maiores.

**License**

ISC
