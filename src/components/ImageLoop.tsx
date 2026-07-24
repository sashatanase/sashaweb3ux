import { useEffect, useState, useCallback } from "react";

export type ImageLoopItem = {
  src: string;
  alt: string;
  caption?: string;
};

type ImageLoopProps = {
  images: ImageLoopItem[];
  /** Seconds each image stays fully visible. */
  dwell?: number;
  /** Seconds the crossfade takes. */
  transition?: number;
  /** Aspect ratio of the frame, e.g. "16/10". */
  ratio?: string;
  className?: string;
};

export function ImageLoop({
  images,
  dwell = 1.5,
  transition = 0.5,
  ratio = "16/10",
  className = "",
}: ImageLoopProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const step = useCallback(() => {
    setIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (prefersReducedMotion || images.length <= 1) return;
    if (paused) return;
    const interval = setInterval(step, (dwell + transition) * 1000);
    return () => clearInterval(interval);
  }, [dwell, transition, paused, prefersReducedMotion, images.length, step]);

  if (images.length === 0) return null;

  return (
    <figure
      className={`group relative w-full overflow-hidden border border-border ${className}`}
      style={{ aspectRatio: ratio }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Looped image gallery"
    >
      {images.map((img, i) => {
        const active = i === index;
        return (
          <div
            key={img.src + i}
            className="absolute inset-0 flex items-center justify-center bg-background"
            style={{
              opacity: active ? 1 : 0,
              transition: prefersReducedMotion ? "none" : `opacity ${transition}s ease-in-out`,
              zIndex: active ? 1 : 0,
            }}
            aria-hidden={!active}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="h-full w-full object-contain"
              loading={i < 2 ? "eager" : "lazy"}
            />
          </div>
        );
      })}

      {/* Progress dots */}
      <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className={`h-1.5 w-1.5 rounded-full transition-colors ${
              i === index ? "bg-foreground" : "bg-foreground/30 hover:bg-foreground/60"
            }`}
            aria-label={`Go to image ${i + 1}`}
            aria-current={i === index ? "true" : undefined}
          />
        ))}
      </div>

      {/* Caption */}
      {images[index]?.caption && (
        <figcaption className="absolute right-3 top-3 z-10 max-w-[70%] bg-background/80 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground backdrop-blur">
          {images[index].caption}
        </figcaption>
      )}
    </figure>
  );
}
