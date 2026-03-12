'use client';

import { LoginButton } from '@/components/login-button';
import { useAuth } from '@/lib/use-auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function LoginPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.push('/docs');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-6 bg-linear-to-br from-blue-50 to-indigo-100">
      <div className="mx-auto flex max-w-md flex-col items-center gap-8 rounded-lg bg-white p-8 shadow-lg">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Geru App</h1>
          <p className="text-gray-600">Documentação Técnica</p>
        </div>

        <div className="w-full">
          <p className="text-center text-gray-600 mb-6">
            Faça login para acessar a documentação completa
          </p>
          <LoginButton />
        </div>

        <div className="w-full pt-6 border-t">
          <p className="text-center text-sm text-gray-500">
            Apenas usuários autenticados podem acessar o conteúdo
          </p>
        </div>
      </div>
    </main>
  );
}
