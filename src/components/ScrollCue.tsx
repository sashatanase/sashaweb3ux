import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScrollCueProps {
  targetId: string;
  className?: string;
}

export function ScrollCue({ targetId, className }: ScrollCueProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY < 300);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Scroll to next section"
      className={cn(
        "scroll-cue fixed bottom-7 left-1/2 z-50 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border border-foreground/40 bg-transparent text-foreground transition-[opacity,border-color,background-color] duration-300 hover:border-foreground hover:bg-foreground/5 md:h-12 md:w-12",
        visible ? "opacity-100" : "pointer-events-none opacity-0",
        className,
      )}
    >
      <ChevronDown className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
    </button>
  );
}
