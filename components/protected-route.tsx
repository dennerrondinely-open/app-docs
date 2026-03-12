'use client';

import React from 'react';
import { useAuth } from '@/lib/use-auth';

interface ProtectedRouteProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function ProtectedRoute({ children, fallback }: ProtectedRouteProps) {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div className="p-4">Carregando...</div>;
  }

  if (!isAuthenticated) {
    return fallback || <div className="p-4 text-red-600">Acesso negado. Faça login para continuar.</div>;
  }

  return <>{children}</>;
}
