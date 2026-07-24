import { useCallback, useRef, useState } from "react";
import { ZoomOverlay } from "@/components/FullBleedZoomImage";

export type Panel = {
  src: string;
  alt: string;
  caption: string;
};

export function PanelGrid({ panels }: { panels: Panel[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const close = useCallback(() => {
    const idx = openIndex;
    setOpenIndex(null);
    queueMicrotask(() => {
      if (idx != null) triggerRefs.current[idx]?.focus();
    });
  }, [openIndex]);

  return (
    <div className="py-4">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {panels.map((p, i) => (
          <figure key={p.src}>
            <button
              ref={(el) => {
                triggerRefs.current[i] = el;
              }}
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-label={`${p.alt} — click to expand`}
              className="group relative block aspect-square w-full cursor-zoom-in overflow-hidden rounded-lg border border-border bg-background focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <img
                src={p.src}
                alt={p.alt}
                loading={i < 2 ? "eager" : "lazy"}
                decoding="async"
                className="h-full w-full object-contain"
              />
              <span className="pointer-events-none absolute bottom-3 right-3 rounded-full border border-border/60 bg-background/85 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                Click to expand
              </span>
            </button>
            <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              {String(i + 1).padStart(2, "0")} · {p.caption}
            </figcaption>
          </figure>
        ))}
      </div>
      {openIndex != null && (
        <ZoomOverlay src={panels[openIndex].src} alt={panels[openIndex].alt} onClose={close} />
      )}
    </div>
  );
}
