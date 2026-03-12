'use client';

import Link from 'next/link';
import { useAuth } from '@/lib/use-auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function HomePage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.push('/docs');
    }
  }, [user, loading, router]);

  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <span className="rounded-full border px-3 py-1 text-sm text-fd-muted-foreground">
          Fumadocs + Next.js + Firebase Auth
        </span>
        <h1 className="text-4xl font-semibold tracking-tight">Documentação do Geru App</h1>
        <p className="text-lg text-fd-muted-foreground">
          Guia completo de instalação, execução, arquitetura, endpoints, telas, fluxos e gerenciamento de estado.
        </p>
        <div className="flex gap-3">
          {user ? (
            <Link
              href="/docs"
              className="rounded-lg bg-fd-primary px-4 py-2 text-sm font-medium text-fd-primary-foreground"
            >
              Abrir documentação
            </Link>
          ) : (
            <Link
              href="/login"
              className="rounded-lg bg-fd-primary px-4 py-2 text-sm font-medium text-fd-primary-foreground"
            >
              Fazer login
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
