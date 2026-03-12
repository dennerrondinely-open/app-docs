'use client';

import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { source } from '@/lib/source';
import { baseOptions } from '@/lib/layout.shared';
import { DocsHeader } from '@/components/docs-header';
import { ProtectedRoute } from '@/components/protected-route';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <ProtectedRoute>
      <DocsHeader />
      <DocsLayout tree={source.getPageTree()} {...baseOptions()}>
        {children}
      </DocsLayout>
    </ProtectedRoute>
  );
}
