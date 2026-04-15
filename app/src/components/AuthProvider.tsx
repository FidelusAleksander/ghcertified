"use client";

import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useCallback,
  type ReactNode,
} from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";

interface AuthState {
  user: User | null;
  loading: boolean;
}

type AuthAction =
  | { type: "SESSION_RESOLVED"; user: User | null }
  | { type: "NO_CLIENT" };

function authReducer(_state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case "SESSION_RESOLVED":
      return { user: action.user, loading: false };
    case "NO_CLIENT":
      return { user: null, loading: false };
  }
}

interface AuthContextValue {
  user: User | null;
  loading: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue>({
  user: null,
  loading: true,
  signIn: async () => {},
  signOut: async () => {},
});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    loading: true,
  });

  useEffect(() => {
    if (!supabase) {
      dispatch({ type: "NO_CLIENT" });
      return;
    }

    supabase.auth.getSession().then(({ data: { session } }) => {
      dispatch({ type: "SESSION_RESOLVED", user: session?.user ?? null });
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      dispatch({ type: "SESSION_RESOLVED", user: session?.user ?? null });
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = useCallback(async () => {
    if (!supabase) return;
    await supabase.auth.signInWithOAuth({ provider: "github" });
  }, []);

  const signOut = useCallback(async () => {
    if (!supabase) return;
    await supabase.auth.signOut();
  }, []);

  return (
    <AuthContext.Provider value={{ user: state.user, loading: state.loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
