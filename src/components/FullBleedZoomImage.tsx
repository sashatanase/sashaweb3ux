import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  srcSet: string;
  sizes?: string;
  fallbackSrc: string;
  zoomSrc: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
};

export function FullBleedZoomImage({
  srcSet,
  sizes = "100vw",
  fallbackSrc,
  zoomSrc,
  width,
  height,
  alt,
  caption,
}: Props) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const openOverlay = useCallback(() => setOpen(true), []);
  const closeOverlay = useCallback(() => {
    setOpen(false);
    // return focus to the trigger
    queueMicrotask(() => triggerRef.current?.focus());
  }, []);

  return (
    <figure className="py-4">
      <div
        className="relative"
        style={{ width: "100vw", marginLeft: "calc(50% - 50vw)" }}
      >
        <button
          ref={triggerRef}
          type="button"
          onClick={openOverlay}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              openOverlay();
            }
          }}
          aria-label={`${alt} — click to expand`}
          className="group relative block w-full cursor-zoom-in bg-background focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <img
            src={fallbackSrc}
            srcSet={srcSet}
            sizes={sizes}
            width={width}
            height={height}
            alt={alt}
            loading="lazy"
            decoding="async"
            className="block h-auto w-full object-contain"
            style={{ maxHeight: "80vh" }}
          />
          <span className="pointer-events-none absolute bottom-4 right-4 rounded-full border border-border/60 bg-background/85 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
            Click to expand
          </span>
        </button>
      </div>
      {caption && (
        <div className="mx-auto max-w-[760px]">
          <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            {caption}
          </figcaption>
        </div>
      )}
      {open && (
        <ZoomOverlay src={zoomSrc} alt={alt} onClose={closeOverlay} />
      )}
    </figure>
  );
}

export function ZoomOverlay({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [imgSize, setImgSize] = useState<{ w: number; h: number } | null>(null);
  const [viewport, setViewport] = useState({
    w: typeof window !== "undefined" ? window.innerWidth : 1024,
    h: typeof window !== "undefined" ? window.innerHeight : 768,
  });
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const draggingRef = useRef<{ x: number; y: number } | null>(null);
  const pinchRef = useRef<{ dist: number; scale: number } | null>(null);

  // fit-to-screen base scale so image fully visible at scale=1
  const baseScale = imgSize
    ? Math.min(viewport.w / imgSize.w, viewport.h / imgSize.h)
    : 1;
  const displayScale = baseScale * scale;

  // clamp offset so image never fully leaves the screen
  const clampOffset = useCallback(
    (x: number, y: number, s: number) => {
      if (!imgSize) return { x, y };
      const dispW = imgSize.w * baseScale * s;
      const dispH = imgSize.h * baseScale * s;
      const maxX = Math.max(0, (dispW - viewport.w) / 2);
      const maxY = Math.max(0, (dispH - viewport.h) / 2);
      return {
        x: Math.max(-maxX, Math.min(maxX, x)),
        y: Math.max(-maxY, Math.min(maxY, y)),
      };
    },
    [imgSize, baseScale, viewport.w, viewport.h],
  );

  // lock body scroll
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // viewport tracking
  useEffect(() => {
    const onResize = () =>
      setViewport({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // keyboard: Esc closes, trap focus
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "Tab") {
        // trap focus — only one focusable element (close button)
        e.preventDefault();
        closeBtnRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    closeBtnRef.current?.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (!containerRef.current || !imgSize) return;
    const rect = containerRef.current.getBoundingClientRect();
    const cx = e.clientX - rect.left - rect.width / 2;
    const cy = e.clientY - rect.top - rect.height / 2;
    const factor = Math.exp(-e.deltaY * 0.0015);
    const newScale = Math.max(1, Math.min(6, scale * factor));
    // keep the point under the cursor stationary
    const ratio = newScale / scale;
    const newOffset = {
      x: cx - (cx - offset.x) * ratio,
      y: cy - (cy - offset.y) * ratio,
    };
    const clamped = clampOffset(newOffset.x, newOffset.y, newScale);
    setScale(newScale);
    setOffset(clamped);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    if (scale <= 1) return;
    (e.target as Element).setPointerCapture?.(e.pointerId);
    draggingRef.current = { x: e.clientX - offset.x, y: e.clientY - offset.y };
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    const nx = e.clientX - draggingRef.current.x;
    const ny = e.clientY - draggingRef.current.y;
    setOffset(clampOffset(nx, ny, scale));
  };
  const onPointerUp = () => {
    draggingRef.current = null;
  };

  // touch pinch
  const onTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      pinchRef.current = { dist: Math.hypot(dx, dy), scale };
    }
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && pinchRef.current) {
      e.preventDefault();
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.hypot(dx, dy);
      const newScale = Math.max(
        1,
        Math.min(6, pinchRef.current.scale * (dist / pinchRef.current.dist)),
      );
      setScale(newScale);
      setOffset((o) => clampOffset(o.x, o.y, newScale));
    }
  };
  const onTouchEnd = () => {
    pinchRef.current = null;
  };

  return (
    <div
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      onWheel={onWheel}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      style={{ touchAction: "none" }}
    >
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/30 border-t-white" />
        </div>
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        draggable={false}
        onLoad={(e) => {
          const el = e.currentTarget;
          setImgSize({ w: el.naturalWidth, h: el.naturalHeight });
          setLoaded(true);
        }}
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px) scale(${displayScale})`,
          transformOrigin: "center center",
          cursor: scale > 1 ? "grab" : "zoom-in",
          userSelect: "none",
          maxWidth: "none",
          maxHeight: "none",
          opacity: loaded ? 1 : 0,
          transition: draggingRef.current ? "none" : "opacity 200ms",
          willChange: "transform",
        }}
      />
      <button
        ref={closeBtnRef}
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/60 text-white transition-colors hover:bg-black/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
    </div>
  );
}
