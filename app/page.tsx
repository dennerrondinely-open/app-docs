'use client';

import Link from 'next/link';
import { LoginButton } from '@/components/login-button';

export default function HomePage() {
  return (
    <>
      <header className="flex justify-between items-center p-6 border-b">
        <h1 className="text-2xl font-bold">Geru App</h1>
        <LoginButton />
      </header>
      <main className="flex min-h-screen items-center justify-center px-6">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <span className="rounded-full border px-3 py-1 text-sm text-fd-muted-foreground">
            Fumadocs + Next.js
          </span>
          <h1 className="text-4xl font-semibold tracking-tight">Documentação do Geru App</h1>
          <p className="text-lg text-fd-muted-foreground">
            Guia completo de instalação, execução, arquitetura, endpoints, telas, fluxos e gerenciamento de estado.
          </p>
          <div className="flex gap-3">
            <Link
              href="/docs"
              className="rounded-lg bg-fd-primary px-4 py-2 text-sm font-medium text-fd-primary-foreground"
            >
              Abrir documentação
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
