// Thin wrapper around the GA4 `gtag` that is loaded once in `src/routes/__root.tsx`.
//
// The site is a single-page layout, so GA4's automatic measurement only sees
// `/` as one page. To answer "which sections get attention", "what gets
// clicked", and "where do people drop off" we emit a small set of explicit
// events. Keep the event names stable — they are what the weekly analytics
// agent queries from the GA4 Data API.
//
// NOTE: event *parameters* (e.g. `section_id`, `link_url`) only show up in GA
// reports / the Data API once they are registered as **custom dimensions** in
// GA4 Admin. See `.github/analytics-agent/README.md` for the list to register.

type GtagParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** Send a custom event to GA4. No-ops on the server or before gtag loads. */
export function track(event: string, params: GtagParams = {}): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  // Drop empty values so GA doesn't store noise.
  const clean: GtagParams = {};
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== "") clean[key] = value;
  }
  window.gtag("event", event, clean);
}

/** A primary call-to-action (e.g. "Get in touch", "Case Studies"). */
export function trackCta(ctaId: string, ctaText: string, location: string): void {
  track("cta_click", { cta_id: ctaId, cta_text: ctaText, location });
}

/** An in-page / cross-page navigation click (header, footer, case-study list). */
export function trackNav(target: string, location: string): void {
  track("nav_click", { nav_target: target, location });
}

/** An outbound link to a third-party site (socials, articles, talks). */
export function trackOutbound(url: string, text?: string): void {
  let domain = "";
  try {
    domain = new URL(url).hostname.replace(/^www\./, "");
  } catch {
    /* relative or otherwise non-absolute href — leave domain blank */
  }
  track("outbound_click", { link_url: url, link_text: text, link_domain: domain });
}
