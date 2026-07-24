import { useMemo } from "react";

/**
 * Embeds a live, click-through Figma prototype as an <iframe>.
 *
 * ── HOW TO GET THE VALUE FOR THIS COMPONENT ──────────────────────────────
 * In Figma: open your prototype → click "Share" (top-right) → "Get embed code".
 * You can pass EITHER of the following:
 *
 *   1. `embedUrl`  (recommended) — copy just the `src="..."` value out of the
 *      iframe snippet Figma gives you. It looks like:
 *      https://embed.figma.com/proto/FILEKEY/Name?node-id=1-2&...&embed-host=share
 *
 *   2. `shareUrl`  — paste a normal prototype share link
 *      (https://www.figma.com/proto/FILEKEY/Name?node-id=1-2&...). The component
 *      wraps it in Figma's official embed endpoint for you.
 *
 * Provide one or the other. `embedUrl` wins if both are given.
 * ─────────────────────────────────────────────────────────────────────────
 */
type Props = {
  /** Full iframe src from Figma's "Get embed code" (preferred). */
  embedUrl?: string;
  /** A normal Figma prototype share URL; wrapped in the embed endpoint. */
  shareUrl?: string;
  /** Accessible title for the iframe. */
  title: string;
  /** Caption shown under the frame (optional). */
  caption?: string;
  /**
   * Aspect ratio of the frame as width / height. Match your prototype's
   * artboard so it isn't letterboxed. Defaults to 16 / 9. Common values:
   *   desktop 16 / 9 = 1.777 · mobile 9 / 16 = 0.5625 · tablet 4 / 3 = 1.333
   */
  ratio?: number;
  /** Show the "Open in Figma ↗" link under the frame. Defaults to true. */
  showFullscreenLink?: boolean;
};

export function FigmaEmbed({
  embedUrl,
  shareUrl,
  title,
  caption,
  ratio = 16 / 9,
  showFullscreenLink = true,
}: Props) {
  const src = useMemo(() => {
    if (embedUrl) return embedUrl;
    if (shareUrl) {
      return `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(shareUrl)}`;
    }
    return "";
  }, [embedUrl, shareUrl]);

  // The link that opens the prototype full-screen in a new tab.
  const openUrl = shareUrl ?? embedUrl ?? "";

  if (!src) {
    return (
      <div className="my-8 border border-dashed border-border p-6 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
        FigmaEmbed: pass an <code>embedUrl</code> or <code>shareUrl</code> prop.
      </div>
    );
  }

  return (
    <figure className="my-10">
      <div
        className="relative w-full overflow-hidden border border-border bg-muted"
        style={{ aspectRatio: String(ratio) }}
      >
        <iframe
          src={src}
          title={title}
          loading="lazy"
          allowFullScreen
          allow="fullscreen"
          className="absolute inset-0 h-full w-full"
          style={{ border: "none" }}
        />
      </div>

      {(caption || (showFullscreenLink && openUrl)) && (
        <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          <span>{caption}</span>
          {showFullscreenLink && openUrl && (
            <a
              href={openUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              Open in Figma ↗
            </a>
          )}
        </figcaption>
      )}
    </figure>
  );
}
