import { useEffect, useState, type ReactNode } from "react";

export function ImageLightbox({
  src,
  alt,
  children,
}: {
  src: string;
  alt: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group/image block w-full cursor-zoom-in text-left"
        aria-label={`Open full-size view: ${alt}`}
      >
        {children}
      </button>
      {open && (
        <div
          className="fixed inset-0 z-[100] flex cursor-zoom-out flex-col items-center justify-center bg-background/95 p-6 backdrop-blur"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={alt}
        >
          <img
            src={src}
            alt={alt}
            className="max-h-full max-w-full object-contain"
          />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute top-5 right-5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
          >
            Close [Esc]
          </button>
        </div>
      )}
    </>
  );
}
