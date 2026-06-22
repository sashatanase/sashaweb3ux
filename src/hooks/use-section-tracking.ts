import { useEffect } from "react";

import { track } from "@/lib/analytics";

export type TrackedSection = { id: string; name: string };

// Observes the page's sections and emits two kinds of GA4 events:
//   - `section_reached`  once, when a section first scrolls ~40% into view.
//     Comparing reach counts across sections is the drop-off / funnel signal.
//   - `section_view`     when a section stops being the most-visible one (or the
//     tab is hidden), carrying `time_ms` — how long it held the viewport. That
//     is the "where do people spend time" signal.
//
// Pass a module-level constant array so the effect doesn't re-run every render.
export function useSectionTracking(sections: TrackedSection[]): void {
  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;

    const els = sections
      .map((s) => ({ ...s, el: document.getElementById(s.id) }))
      .filter((s): s is TrackedSection & { el: HTMLElement } => s.el !== null);
    if (els.length === 0) return;

    const nameById = new Map(els.map((s) => [s.id, s.name]));
    const ratios = new Map<string, number>();
    const reached = new Set<string>();
    let active: string | null = null;
    let activeSince = 0;

    const flush = (now: number) => {
      if (active && activeSince) {
        const ms = Math.round(now - activeSince);
        // Ignore sub-second glances; they're scroll-through noise.
        if (ms >= 1000) {
          track("section_view", {
            section_id: active,
            section_name: nameById.get(active),
            time_ms: ms,
          });
        }
      }
    };

    const repickActive = () => {
      let best: string | null = null;
      let bestRatio = 0;
      for (const [id, ratio] of ratios) {
        if (ratio > bestRatio) {
          bestRatio = ratio;
          best = id;
        }
      }
      const candidate = bestRatio > 0.1 ? best : null;
      if (candidate !== active) {
        const now = performance.now();
        flush(now);
        active = candidate;
        activeSince = candidate ? now : 0;
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id;
          ratios.set(id, entry.isIntersecting ? entry.intersectionRatio : 0);
          if (entry.isIntersecting && entry.intersectionRatio >= 0.4 && !reached.has(id)) {
            reached.add(id);
            track("section_reached", { section_id: id, section_name: nameById.get(id) });
          }
        }
        repickActive();
      },
      { threshold: [0, 0.1, 0.25, 0.4, 0.5, 0.75, 1] },
    );

    for (const s of els) observer.observe(s.el);

    const onVisibilityChange = () => {
      if (document.visibilityState === "hidden") flush(performance.now());
    };
    const onPageHide = () => flush(performance.now());
    document.addEventListener("visibilitychange", onVisibilityChange);
    window.addEventListener("pagehide", onPageHide);

    return () => {
      flush(performance.now());
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("pagehide", onPageHide);
    };
  }, [sections]);
}
