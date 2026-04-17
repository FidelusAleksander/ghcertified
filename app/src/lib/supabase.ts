/**
 * Supabase browser client — lazy singleton for client-side usage.
 *
 * The app is a static site (output: "export") so there is no server runtime.
 * All Supabase calls happen in the browser. RLS is the security boundary.
 *
 * Uses a lazy getter to avoid crashing during static build (SSG) when
 * env vars are not available.
 */

import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let _client: SupabaseClient | null = null;

export function hasSupabaseConfig(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
  );
}

export function getSupabase(): SupabaseClient {
  if (!_client) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

    if (!url || !key) {
      throw new Error(
        "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY",
      );
    }

    _client = createClient(url, key);
  }

  return _client;
}
