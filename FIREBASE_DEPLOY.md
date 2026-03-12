# Firebase Hosting Deployment Guide

## Setup Inicial

### 1. Instalar Firebase CLI

```bash
pnpm add -D firebase-tools
```

### 2. Autenticar com Firebase

```bash
npx firebase login
```

Isso abrirá o navegador para você autenticar com sua conta Google.

### 3. Configurar Projeto (já pré-configurado)

O arquivo `.firebaserc` já está configurado com:
- Project ID: `geru-app-dev`
- Site: `geru-app-docs`

## Build & Deploy

### Build Estático

```bash
pnpm build
```

Isso gera a pasta `out/` com o projeto pronto para deploy.

### Deploy para Firebase Hosting

```bash
pnpm deploy:hosting
```

Ou use o comando direto:

```bash
firebase deploy --only hosting
```

## Verificar Deploy

Após o deploy, a aplicação estará disponível em:
```
https://geru-app-docs.web.app
```

## Arquivos Importantes

- **`firebase.json`** - Configuração do Firebase Hosting
- **`.firebaserc`** - IDs dos projetos Firebase
- **`next.config.mjs`** - Configurado para export estático (SSG)
- **`out/`** - Pasta gerada com arquivos estáticos (não commitada)

## Solução de Problemas

### Erro: "Invalid API Key"
- Certifique-se de que está autenticado: `npx firebase login`
- Verifique se o projeto existe em Firebase Console

### Erro: "Site não encontrado"
- Confirme o nome do site em Firebase Console
- Atualize `.firebaserc` se necessário

### Build falha com erro de tipos
- Execute: `pnpm install`
- Verifique: `pnpm build` localmente primeiro

## Segurança

- ✅ `.env.local` NÃO está commitado (no `.gitignore`)
- ✅ Credenciais públicas (NEXT_PUBLIC_*) são seguras
- ✅ Firebase Security Rules protegem dados no backend

