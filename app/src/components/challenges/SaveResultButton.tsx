"use client";

/**
 * SaveResultButton — auto-save status and sign-in CTA for game results.
 *
 * Logged-in users get automatic save when the score is eligible.
 * Logged-out users can still sign in and save eligible results after redirect.
 */

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { useAuth } from "@/components/AuthProvider";
import { saveChallengeResult } from "@/lib/save-result";
import {
  getMinimumCorrectToSave,
  isResultEligibleToSave,
} from "@/lib/challenge-result-save-policy";
import { GitHubMark } from "@/components/GitHubMark";
import { Button } from "@/components/ui/button";
import { Save, Check, AlertCircle } from "lucide-react";
import type { ChallengeResult, ChallengeType } from "@/types/challenges";

const PENDING_RESULT_KEY = "ghcertified_pending_result";

interface SaveResultButtonProps {
  gameType: ChallengeType;
  result: ChallengeResult;
}

/** Store pending result in sessionStorage before OAuth redirect. */
export function storePendingResult(gameType: ChallengeType, result: ChallengeResult) {
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
  gameType: ChallengeType;
  result: ChallengeResult;
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
  const { available, user, signIn, loading: authLoading } = useAuth();
  const t = useTranslations("Challenges");
  const [saveResult, setSaveResult] = useState<Awaited<
    ReturnType<typeof saveChallengeResult>
  > | null>(null);
  const [error, setError] = useState<string | null>(null);
  const autoSaveStarted = useRef(false);
  const minimumCorrectToSave = getMinimumCorrectToSave(gameType);
  const isEligible = isResultEligibleToSave(gameType, result);

  useEffect(() => {
    if (!available || !user || !isEligible || autoSaveStarted.current) {
      return;
    }

    autoSaveStarted.current = true;

    void saveChallengeResult(gameType, result).then((response) => {
      setSaveResult(response);
      setError(response.success ? null : response.error ?? null);
    });
  }, [available, gameType, isEligible, result, user]);

  const handleSave = async () => {
    autoSaveStarted.current = true;
    setSaveResult(null);
    setError(null);
    const response = await saveChallengeResult(gameType, result);
    setSaveResult(response);

    if (!response.success) {
      setError(response.error ?? t("saveFailed"));
    }
  };

  const handleSignIn = () => {
    if (!isEligible) {
      return;
    }

    storePendingResult(gameType, result);
    void signIn();
  };

  if (!available) {
    return null;
  }

  if (!isEligible) {
    return (
      <div className="flex items-center justify-center gap-1.5 text-sm font-medium text-muted-foreground">
        <AlertCircle className="size-4" />
        {t("saveThresholdNotMet", { count: minimumCorrectToSave })}
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
        <GitHubMark />
        {t("signInToSave")}
      </Button>
    );
  }

  if (saveResult?.status === "saved") {
    return (
      <div className="flex items-center justify-center gap-1.5 text-sm font-medium text-emerald-600">
        <Check className="size-4" />
        {t("resultSaved")}
      </div>
    );
  }

  if (saveResult?.status === "failed") {
    return (
      <div className="space-y-2">
        <div className="flex items-center justify-center gap-1.5 text-sm font-medium text-destructive">
          <AlertCircle className="size-4" />
          {error ?? t("saveFailed")}
        </div>
        <Button
          onClick={handleSave}
          variant="outline"
          className="w-full rounded-[9px] text-[14px] font-semibold"
        >
          <Save className="size-4" />
          {t("retrySave")}
        </Button>
      </div>
    );
  }

  if (saveResult?.status === "requires-sign-in") {
    return (
      <Button
        onClick={handleSignIn}
        disabled={authLoading}
        variant="outline"
        className="w-full rounded-[9px] text-[14px] font-semibold"
      >
        <GitHubMark />
        {t("signInToSave")}
      </Button>
    );
  }

  if (saveResult?.status === "unavailable") {
    return null;
  }

  if (saveResult?.status === "ineligible") {
    return (
      <div className="flex items-center justify-center gap-1.5 text-sm font-medium text-muted-foreground">
        <AlertCircle className="size-4" />
        {t("saveThresholdNotMet", { count: minimumCorrectToSave })}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-1.5 text-sm font-medium text-muted-foreground">
      <Save className="size-4" />
      {t("savingResult")}
    </div>
  );
}
