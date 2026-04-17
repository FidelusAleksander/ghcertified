"use client";

/**
 * SaveResultButton — save game result to Supabase.
 *
 * Shows "Save Result" when logged in, "Sign in to save" when not.
 * Handles pending result persistence across OAuth redirect.
 */

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useAuth } from "@/components/AuthProvider";
import { saveGameResult } from "@/lib/save-result";
import { Button } from "@/components/ui/button";
import { LogIn, Save, Check, AlertCircle } from "lucide-react";
import type { GameResult, GameType } from "@/types/games";

const PENDING_RESULT_KEY = "ghcertified_pending_result";

interface SaveResultButtonProps {
  gameType: GameType;
  result: GameResult;
}

/** Store pending result in sessionStorage before OAuth redirect. */
export function storePendingResult(gameType: GameType, result: GameResult) {
  try {
    sessionStorage.setItem(
      PENDING_RESULT_KEY,
      JSON.stringify({ gameType, result }),
    );
  } catch {
    // sessionStorage unavailable (e.g., private browsing)
  }
}

/** Retrieve and clear pending result after OAuth redirect. */
export function consumePendingResult(): {
  gameType: GameType;
  result: GameResult;
} | null {
  try {
    const raw = sessionStorage.getItem(PENDING_RESULT_KEY);
    if (!raw) return null;
    sessionStorage.removeItem(PENDING_RESULT_KEY);
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function SaveResultButton({ gameType, result }: SaveResultButtonProps) {
  const { user, signIn, loading: authLoading } = useAuth();
  const t = useTranslations("Games");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSave = async () => {
    setSaving(true);
    setError(null);
    const res = await saveGameResult(gameType, result);
    setSaving(false);

    if (res.success) {
      setSaved(true);
    } else {
      setError(res.error ?? t("saveFailed"));
    }
  };

  const handleSignIn = () => {
    storePendingResult(gameType, result);
    signIn();
  };

  if (saved) {
    return (
      <div className="flex items-center justify-center gap-1.5 text-sm font-medium text-emerald-600">
        <Check className="size-4" />
        {t("resultSaved")}
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-2">
        <div className="flex items-center justify-center gap-1.5 text-sm font-medium text-destructive">
          <AlertCircle className="size-4" />
          {error}
        </div>
        <Button
          onClick={handleSave}
          variant="outline"
          className="w-full rounded-[9px] text-[14px] font-semibold"
        >
          <Save className="size-4" />
          {t("saveResult")}
        </Button>
      </div>
    );
  }

  if (!user) {
    return (
      <Button
        onClick={handleSignIn}
        disabled={authLoading}
        variant="outline"
        className="w-full rounded-[9px] text-[14px] font-semibold"
      >
        <LogIn className="size-4" />
        {t("signInToSave")}
      </Button>
    );
  }

  return (
    <Button
      onClick={handleSave}
      disabled={saving}
      variant="outline"
      className="w-full rounded-[9px] text-[14px] font-semibold"
    >
      <Save className="size-4" />
      {saving ? "…" : t("saveResult")}
    </Button>
  );
}
