'use client';

import React from 'react';
import { useAuth } from '@/lib/use-auth';
import { useRouter } from 'next/navigation';

interface ProtectedRouteProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function ProtectedRoute({ children, fallback }: ProtectedRouteProps) {
  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();

  if (loading) {
    return <div className="p-4">Carregando...</div>;
  }

  if (!isAuthenticated) {
    router.push('/login');
    return fallback || <div className="p-4 text-red-600">Redirecionando para login...</div>;
  }

  return <>{children}</>;
}
