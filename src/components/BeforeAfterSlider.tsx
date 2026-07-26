import { useCallback, useEffect, useRef, useState } from "react";

export type BeforeAfterSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  beforeLabel?: string;
  afterLabel?: string;
  caption?: string;
};

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  beforeLabel,
  afterLabel,
  caption,
}: BeforeAfterSliderProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const draggingRef = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.width === 0) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!draggingRef.current) return;
      e.preventDefault();
      updateFromClientX(e.clientX);
    };
    const onUp = () => {
      draggingRef.current = false;
    };
    window.addEventListener("pointermove", onMove, { passive: false });
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [updateFromClientX]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 2));
    if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 2));
    if (e.key === "Home") setPosition(0);
    if (e.key === "End") setPosition(100);
  };

  return (
    <figure className="py-4">
      <div
        ref={frameRef}
        className="relative w-full touch-none select-none overflow-hidden"
        onPointerDown={(e) => {
          draggingRef.current = true;
          updateFromClientX(e.clientX);
        }}
      >
        {/* Base (after) image defines the frame's aspect ratio */}
        <img src={afterSrc} alt={afterAlt} className="block h-auto w-full" draggable={false} />

        {/* Before image, clipped to the left of the divider */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <img
            src={beforeSrc}
            alt={beforeAlt}
            className="absolute inset-0 block h-full w-full"
            draggable={false}
          />
        </div>

        {beforeLabel && (
          <span className="pointer-events-none absolute left-3 top-3 bg-background/70 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground backdrop-blur">
            {beforeLabel}
          </span>
        )}
        {afterLabel && (
          <span className="pointer-events-none absolute right-3 top-3 bg-background/70 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground backdrop-blur">
            {afterLabel}
          </span>
        )}

        {/* Divider + handle */}
        <div
          className="pointer-events-none absolute inset-y-0 w-px bg-foreground/80"
          style={{ left: `${position}%` }}
        >
          <div
            role="slider"
            tabIndex={0}
            aria-label="Before and after comparison"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(position)}
            onKeyDown={onKeyDown}
            onPointerDown={(e) => {
              e.stopPropagation();
              draggingRef.current = true;
            }}
            className="pointer-events-auto absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border border-foreground/80 bg-background/90 backdrop-blur"
          >
            <span className="font-mono text-[11px] text-foreground">‹ ›</span>
          </div>
        </div>
      </div>
      {caption && (
        <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
