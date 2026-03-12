# GitHub Actions Deploy Configuration

## Overview

O workflow automatiza:
- ✅ Build da aplicação Next.js
- ✅ Deploy em Preview (Pull Requests)
- ✅ Deploy em Produção (main branch)

## Setup

### 1. Gerar Firebase Service Account

1. Acesse [Firebase Console](https://console.firebase.google.com/)
2. Vá para **Project Settings** → **Service Accounts**
3. Clique em **Generate New Private Key**
4. Salve o arquivo JSON

### 2. Converter chave para Base64

```bash
cat caminho/para/serviceAccountKey.json | base64 -w 0
```

### 3. Configurar Secrets no GitHub

1. Vá para **Settings** → **Secrets and variables** → **Actions**
2. Clique em **New repository secret** e adicione:

#### Obrigatórios:

```
FIREBASE_SERVICE_ACCOUNT
```
Cole aqui o valor Base64 da chave gerada acima

#### Variáveis do Firebase:

```
FIREBASE_API_KEY
FIREBASE_AUTH_DOMAIN
FIREBASE_PROJECT_ID
FIREBASE_STORAGE_BUCKET
FIREBASE_MESSAGING_SENDER_ID
FIREBASE_APP_ID
```

Encontre estes valores em **Firebase Console** → **Project Settings** → **General**

### 4. Exemplo de Secrets

```
FIREBASE_SERVICE_ACCOUNT=eyJUeXBlIjoic2VydmljZV9hY2NvdW50IiwicHJvamVjdF9pZCI6ImdlcnUtYXBwLWRldiIsInByaXZhdGVfa2V5X2lkIjoiMTIzNDU2Nzg5MCIsInByaXZhdGVfa2V5IjoiLS1CRUdJTi4uLS1FTkQgUFJJVkFURSBLRVktLSIsImNsaWVudF9lbWFpbCI6ImZpcmViYXNlLWFkbWluc2RrLXhheHl6QGdlcnUtYXBwLWRldi5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsImNsaWVudF9pZCI6IjEyMzQ1Njc4OTAiLCJhdXRoX3VyaSI6Imh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9vL29hdXRoMi9hdXRoIiwidG9rZW5fdXJpIjoiaHR0cHM6Ly9vYXV0aDIuZ29vZ2xlYXBpcy5jb20vdG9rZW4iLCJhdXRoX3Byb3ZpZGVyX3g1MDlfY2VydF91cmwiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9yb2JvdC92MS9tZXRhZGF0YS94NTA5L2ZpcmViYXNlLWFkbWluc2RrLXhheHl6JTQwZ2VydS1hcHAtZGV2LmlhbS5nc2VydmljZWFjY291bnQuY29tIiwiY2xpZW50X3g1MDlfY2VydF91cmwiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9yb2JvdC92MS9tZXRhZGF0YS94NTA5L2ZpcmViYXNlLWFkbWluc2RrLXhheHl6JTQwZ2VydS1hcHAtZGV2LmlhbS5nc2VydmljZWFjY291bnQuY29tIn0=

FIREBASE_API_KEY=AIzaSyC...
FIREBASE_AUTH_DOMAIN=geru-app-dev.firebaseapp.com
FIREBASE_PROJECT_ID=geru-app-dev
FIREBASE_STORAGE_BUCKET=geru-app-dev.appspot.com
FIREBASE_MESSAGING_SENDER_ID=123456789
FIREBASE_APP_ID=1:123456789:web:abcdef1234567890
```

## Como Funciona

### Pull Requests
- Deploy em preview channel
- Link gerado automaticamente no PR
- Teste antes de mergear

### Main Branch
- Deploy automático ao fazer push
- Publicado em `https://geru-app-dev.web.app`

## Troubleshooting

### Build falha com erro de variáveis
- Verifique se todos os `NEXT_PUBLIC_*` secrets estão configurados
- Variáveis públicas (NEXT_PUBLIC_) aparecem no bundle

### Erro de permissão Firebase
- Gere uma nova chave de serviço
- Converta corretamente para Base64
- Verifique o valor do secret

### Deploy não aparece
- Verifique se o projeto Firebase existe
- Confirme o projectId no workflow
- Veja os logs do GitHub Actions

## Customização

Para alterar comportamentos, edite `.github/workflows/deploy.yml`:

- `branches`: Branches que disparam deploy
- `channelId`: Nome do canal preview
- `projectId`: ID do projeto Firebase
