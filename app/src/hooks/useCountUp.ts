"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

/**
 * Animate a number from 0 to `target` over `duration` ms using ease-out-quart.
 * Respects prefers-reduced-motion — skips to final value immediately.
 */
export function useCountUp(target: number, duration = 800): number {
  const storeRef = useRef({
    value: 0,
    listeners: new Set<() => void>(),
  });

  useEffect(() => {
    const store = storeRef.current;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (target === 0 || prefersReduced) {
      store.value = target;
      store.listeners.forEach((l) => l());
      return;
    }

    let raf: number;
    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      const next = Math.round(eased * target);

      if (next !== store.value) {
        store.value = next;
        store.listeners.forEach((l) => l());
      }

      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);

  const subscribe = (onStoreChange: () => void) => {
    storeRef.current.listeners.add(onStoreChange);
    return () => {
      storeRef.current.listeners.delete(onStoreChange);
    };
  };

  const getSnapshot = () => storeRef.current.value;
  const getServerSnapshot = () => 0;

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
