"use client";

import { useEffect, useRef, useState } from "react";

interface TypewriterProps {
  text: string;
  start?: boolean; // begin typing only when true
  speed?: number; // ms per character
  showCursor?: boolean;
  onEnd?: () => void;
  className?: string;
}

export default function Typewriter({
  text,
  start = true,
  speed = 70,
  showCursor = true,
  onEnd,
  className = "",
}: TypewriterProps) {
  const [count, setCount] = useState(0);
  const endedRef = useRef(false);

  useEffect(() => {
    if (!start) return;
    if (count >= text.length) {
      if (!endedRef.current) {
        endedRef.current = true;
        onEnd?.();
      }
      return;
    }
    const id = setTimeout(() => setCount((c) => c + 1), speed);
    return () => clearTimeout(id);
  }, [count, start, text, speed, onEnd]);

  return (
    <div className={`noselect ${className}`}>
      <span>{text.slice(0, count)}</span>
      {showCursor && (
        <span
          className="inline-block animate-pulse"
          style={{ marginLeft: "2px" }}
        >
          _
        </span>
      )}
    </div>
  );
}
