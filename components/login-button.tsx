'use client';

import React, { useState } from 'react';
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { getFirebaseAuth } from '@/lib/firebase';
import { useAuth } from '@/lib/use-auth';
import { isEmailAllowed, getEmailErrorMessage } from '@/lib/email-validation';

const googleProvider = new GoogleAuthProvider();

export function LoginButton() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      setError(null);
      const auth = getFirebaseAuth();
      const result = await signInWithPopup(auth, googleProvider);
      
      // Validate email domain
      if (!isEmailAllowed(result.user.email)) {
        await signOut(auth);
        setError(getEmailErrorMessage());
        return;
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao fazer login');
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      setLoading(true);
      setShowDropdown(false);
      const auth = getFirebaseAuth();
      await signOut(auth);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao fazer logout');
      console.error('Logout error:', err);
    } finally {
      setLoading(false);
    }
  };

  if (user) {
    return (
      <div className="relative">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-fd-accent transition-colors"
        >
          {user.photoURL && user.photoURL.trim() ? (
            <img
              src={user.photoURL}
              alt={user.displayName || user.email || 'User'}
              className="w-8 h-8 rounded-full object-cover"
              onError={(e) => {
                // Fallback if image fails to load
                e.currentTarget.style.display = 'none';
              }}
            />
          ) : null}
          <div className={`${user.photoURL && user.photoURL.trim() ? 'hidden' : ''} w-8 h-8 rounded-full bg-fd-primary flex items-center justify-center text-white text-sm font-medium shrink-0`}>
            {(user.displayName || user.email || '?')?.[0]?.toUpperCase()}
          </div>
          <span className="text-sm font-medium text-fd-foreground hidden sm:inline">
            {user.displayName || user.email}
          </span>
        </button>

        {showDropdown && (
          <div className="absolute right-0 mt-1 w-48 bg-fd-background border border-fd-border rounded-lg shadow-lg z-50">
            <div className="p-3 border-b border-fd-border">
              <p className="text-sm font-medium text-fd-foreground">{user.displayName || 'Usuário'}</p>
              <p className="text-xs text-fd-muted-foreground truncate">{user.email}</p>
            </div>
            <button
              onClick={handleSignOut}
              disabled={loading}
              className="w-full text-left px-3 py-2 text-sm text-fd-foreground hover:bg-fd-accent transition-colors disabled:opacity-50 rounded-b-lg"
            >
              {loading ? 'Saindo...' : 'Sair'}
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={handleGoogleSignIn}
        disabled={loading}
        className="px-4 py-2 bg-fd-primary text-fd-primary-foreground rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 font-medium text-sm"
      >
        {loading ? 'Entrando...' : 'Entrar com Google'}
      </button>
      {error && <p className="mt-2 text-fd-destructive text-sm">{error}</p>}
    </div>
  );
}
