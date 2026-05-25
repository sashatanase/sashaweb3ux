import { useEffect, useRef } from "react";

/**
 * Renders the dotted background on a canvas and warps the dot positions
 * around the cursor (lens/bulge effect). Dots keep their original size
 * and color — only their positions are displaced.
 */
export function CursorDots() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const SPACING = 32;
    const DOT_RADIUS = 1;
    const WARP_RADIUS = 180; // px area affected around cursor
    const WARP_STRENGTH = 28; // max px displacement

    let width = 0;
    let height = 0;
    let dpr = Math.max(1, window.devicePixelRatio || 1);

    // cursor positions (target + eased current)
    let tx = -9999;
    let ty = -9999;
    let cx = tx;
    let cy = ty;

    const resolveColor = () => {
      // resolve --foreground into rgba with low alpha
      const probe = document.createElement("span");
      probe.style.color = "var(--foreground)";
      probe.style.display = "none";
      document.body.appendChild(probe);
      const rgb = getComputedStyle(probe).color; // e.g. "rgb(20, 20, 20)"
      probe.remove();
      const m = rgb.match(/\d+(\.\d+)?/g);
      if (!m) return "rgba(0,0,0,0.14)";
      const [r, g, b] = m;
      return `rgba(${r}, ${g}, ${b}, 0.14)`;
    };
    let dotColor = resolveColor();

    const resize = () => {
      dpr = Math.max(1, window.devicePixelRatio || 1);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      // ease cursor toward target
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = dotColor;

      const r2 = WARP_RADIUS * WARP_RADIUS;

      // tile dots, with a small overscan so warped dots near edges stay clean
      for (let y = SPACING / 2; y < height + SPACING; y += SPACING) {
        for (let x = SPACING / 2; x < width + SPACING; x += SPACING) {
          let px = x;
          let py = y;

          const dx = x - cx;
          const dy = y - cy;
          const d2 = dx * dx + dy * dy;

          if (d2 < r2 * 4) {
            const d = Math.sqrt(d2) || 0.0001;
            // gaussian falloff for smooth lens
            const falloff = Math.exp(-d2 / (2 * r2 * 0.35));
            const push = WARP_STRENGTH * falloff;
            px = x + (dx / d) * push;
            py = y + (dy / d) * push;
          }

          ctx.beginPath();
          ctx.arc(px, py, DOT_RADIUS, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      raf = requestAnimationFrame(draw);
    };

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const onLeave = () => {
      tx = -9999;
      ty = -9999;
    };
    const onResize = () => {
      resize();
      dotColor = resolveColor();
    };

    resize();
    let raf = requestAnimationFrame(draw);
    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}
