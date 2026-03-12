# Configuração de Single Sign-On com Firebase Auth

## Estrutura

- `lib/firebase.ts` - Inicialização do Firebase
- `lib/auth-context.tsx` - Contexto de autenticação
- `lib/use-auth.ts` - Hook para acessar autenticação
- `components/login-button.tsx` - Botão de login com Google SSO
- `components/protected-route.tsx` - Wrapper para proteger rotas

## Setup

### 1. Configurar Firebase Console

1. Acesse [Firebase Console](https://console.firebase.google.com/)
2. Crie um novo projeto ou use `geru-app-dev`
3. Ative Authentication → Google Sign-in
4. Copie as credenciais do projeto

### 2. Variáveis de Ambiente

1. Copie `.env.local.example` para `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Preencha com suas credenciais do Firebase:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=xxx
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=xxx
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=geru-app-dev
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=xxx
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=xxx
   NEXT_PUBLIC_FIREBASE_APP_ID=xxx
   ```

### 3. Usar no Projeto

#### Adicionar botão de login na navbar:

```tsx
import { LoginButton } from '@/components/login-button';

export function Navbar() {
  return (
    <nav>
      <LoginButton />
    </nav>
  );
}
```

#### Proteger uma rota:

```tsx
import { ProtectedRoute } from '@/components/protected-route';

export function AdminPage() {
  return (
    <ProtectedRoute>
      <h1>Área Administrativa</h1>
    </ProtectedRoute>
  );
}
```

#### Acessar dados do usuário:

```tsx
'use client';

import { useAuth } from '@/lib/use-auth';

export function UserProfile() {
  const { user, isAuthenticated, loading } = useAuth();

  if (loading) return <p>Carregando...</p>;
  if (!isAuthenticated) return <p>Não autenticado</p>;

  return (
    <div>
      <p>Nome: {user?.displayName}</p>
      <p>Email: {user?.email}</p>
      <img src={user?.photoURL || ''} alt="Avatar" />
    </div>
  );
}
```

## Provedores Suportados

Atualmente configurado para:
- ✅ Google Sign-in

Pode ser expandido para:
- GitHub
- Facebook
- Microsoft
- etc.

## Segurança

- Todas as chaves públicas estão em `NEXT_PUBLIC_*` (seguro)
- Não commitir `.env.local` (já no `.gitignore`)
- Usar Firebase Security Rules para proteger dados no backend
