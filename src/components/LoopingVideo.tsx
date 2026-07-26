import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

export type LoopingVideoProps = {
  src: string;
  poster: string;
  caption?: string;
  label?: string;
};

export function LoopingVideo({ src, poster, caption, label }: LoopingVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReducedMotion(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (reducedMotion) {
      video.pause();
      setPlaying(false);
    } else {
      void video.play().then(
        () => setPlaying(true),
        () => setPlaying(false),
      );
    }
  }, [reducedMotion]);

  return (
    <figure className="w-full">
      <div className="relative w-full overflow-hidden">
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay={!reducedMotion}
          loop
          muted
          playsInline
          preload="metadata"
          aria-label={label ?? caption}
          className="block h-auto w-full"
        />
        {reducedMotion && !playing && (
          <button
            type="button"
            onClick={() => {
              void videoRef.current?.play().then(() => setPlaying(true));
            }}
            className="absolute inset-0 grid place-items-center bg-background/40 transition-colors hover:bg-background/50"
            aria-label="Play prototype recording"
          >
            <span className="grid h-16 w-16 place-items-center rounded-full border border-border bg-background/80">
              <Play className="h-6 w-6" aria-hidden="true" />
            </span>
          </button>
        )}
      </div>
      {caption && (
        <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
