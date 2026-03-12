# Firebase Deployment Guide

## Setup

1. **Instale o Firebase CLI** (já incluído no projeto):
   ```bash
   pnpm add -D firebase-tools
   ```

2. **Autentique com sua conta Google**:
   ```bash
   npx firebase login
   ```

3. **Configure o ID do seu projeto Firebase** no `.firebaserc`:
   ```json
   {
     "projects": {
       "default": "seu-firebase-project-id"
     }
   }
   ```

## Build & Deploy

### Build estático
```bash
pnpm build
```
Isso gera a pasta `out/` com o projeto estático pronto para o Firebase.

### Deploy
```bash
pnpm deploy:hosting
```

Ou para deploy completo (se tiver outras funções):
```bash
pnpm deploy
```

## Estrutura

- **`firebase.json`** - Configuração do Firebase Hosting
- **`.firebaserc`** - Configuração do projeto
- **`next.config.mjs`** - Configurado com `output: 'export'` para geração estática
- **`out/`** - Pasta de saída (gerada pelo build, não commitada)

## Próximos passos

1. Crie um projeto no [Firebase Console](https://console.firebase.google.com/)
2. Obtenha seu ID do projeto
3. Atualize o `.firebaserc` com seu ID
4. Execute `npx firebase login` para autenticar
5. Faça o deploy com `pnpm deploy:hosting`

## CI/CD com GitHub Actions (opcional)

Veja um exemplo de workflow em `.github/workflows/deploy.yml` para automatizar deploys.
