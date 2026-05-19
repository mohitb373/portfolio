"use client";

import { ReactNode, useState } from "react";

interface PageProps {
  num: number;
  total: number;
  scroll: (n: number) => void;
  children: ReactNode;
}

const MIN_SWIPE = 50;

export default function Page({ num, total, scroll, children }: PageProps) {
  const [touchStart, setTouchStart] = useState<React.Touch | null>(null);
  const [touchEnd, setTouchEnd] = useState<React.Touch | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    if ((e.target as HTMLElement).closest(".noscroll")) {
      setTouchStart(null);
      return;
    }
    setTouchStart(e.targetTouches[0]);
  };

  const onTouchMove = (e: React.TouchEvent) =>
    setTouchEnd(e.targetTouches[0]);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const dx = touchStart.clientX - touchEnd.clientX;
    const dy = touchStart.clientY - touchEnd.clientY;
    if (Math.abs(dx) < Math.abs(dy)) return;
    if (dx > MIN_SWIPE && num < total - 1) scroll(num + 1);
    if (dx < -MIN_SWIPE && num > 0) scroll(num - 1);
  };

  return (
    <div
      className="page"
      data-test={`${num}`}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {children}
    </div>
  );
}
