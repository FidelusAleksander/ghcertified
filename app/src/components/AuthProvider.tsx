"use client";

/**
 * AuthProvider — Supabase auth context for the app.
 *
 * Wraps the app and provides auth state via React context.
 * Listens to onAuthStateChange for session updates.
 * All auth happens client-side (static site, no server runtime).
 */

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import type { User, Session } from "@supabase/supabase-js";
import { getSupabase, hasSupabaseConfig } from "@/lib/supabase";
import { consumePendingResult } from "@/components/challenges/SaveResultButton";
import { saveChallengeResult } from "@/lib/save-result";

interface AuthContextValue {
  available: boolean;
  user: User | null;
  session: Session | null;
  loading: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const available = hasSupabaseConfig();
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(available);

  useEffect(() => {
    if (!available) {
      return;
    }

    const supabase = getSupabase();

    // Get initial session
    supabase.auth.getSession().then(({ data: { session: s } }) => {
      setSession(s);
      setUser(s?.user ?? null);
      setLoading(false);
    });

    // Listen for auth state changes (sign in, sign out, token refresh)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, s) => {
      setSession(s);
      setUser(s?.user ?? null);
      setLoading(false);

      // Auto-save pending result after OAuth redirect
      if (event === "SIGNED_IN" && s?.user) {
        const pending = consumePendingResult();
        if (pending) {
          void saveChallengeResult(pending.gameType, pending.result);
        }
      }
    });

    return () => subscription.unsubscribe();
  }, [available]);

  const signIn = useCallback(async () => {
    if (!available) {
      return;
    }

    await getSupabase().auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: window.location.href,
      },
    });
  }, [available]);

  const signOut = useCallback(async () => {
    if (!available) {
      return;
    }

    await getSupabase().auth.signOut();
  }, [available]);

  return (
    <AuthContext.Provider
      value={{ available, user, session, loading, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
}
