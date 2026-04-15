import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabasePublishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

function createSupabaseClient() {
  if (!supabaseUrl || !supabasePublishableKey) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "[supabase] Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY. Auth features disabled.",
      );
    }
    return null;
  }
  return createClient(supabaseUrl, supabasePublishableKey);
}

export const supabase = createSupabaseClient();
