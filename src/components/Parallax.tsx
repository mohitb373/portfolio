"use client";

import { useEffect, useRef } from "react";

interface ParallaxProps {
  className?: string;
  onLoad?: () => void;
}

/**
 * A lightweight mouse-driven parallax avatar. Replace the SVG/initials with
 * an <img> of yourself if you prefer — keep the `parallax-layer` classes.
 */
export default function Parallax({ className = "", onLoad }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    onLoad?.();
    const el = ref.current;
    if (!el) return;
    const handle = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      el.style.transform = `rotateY(${x * 12}deg) rotateX(${-y * 12}deg)`;
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, [onLoad]);

  const initials = "YN"; // placeholder — change in src/data/profile if desired

  return (
    <div
      className={`grid place-items-center ${className}`}
      style={{ perspective: "600px" }}
    >
      <div
        ref={ref}
        className="grid place-items-center rounded-full noselect"
        style={{
          width: "min(40vh, 80vmin)",
          height: "min(40vh, 80vmin)",
          border: "solid 3px var(--secondary-color)",
          transition: "transform 0.2s ease",
          fontSize: "min(18vh, 36vmin)",
          fontWeight: "bold",
        }}
      >
        <span style={{ transform: "translateZ(40px)" }}>{initials}</span>
      </div>
    </div>
  );
}
