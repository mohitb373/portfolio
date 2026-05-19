"use client";

import { pageOrder } from "@/data/profile";

interface NavDotsProps {
  current: number;
  onSelect: (n: number) => void;
}

export default function NavDots({ current, onSelect }: NavDotsProps) {
  return (
    <div
      className="fixed noselect flex"
      style={{
        bottom: "3vmin",
        left: "50%",
        transform: "translateX(-50%) translateZ(1px)",
        gap: "14px",
        zIndex: 50,
        padding: "10px 16px",
        borderRadius: "999px",
        backgroundColor: "var(--opacity-color)",
      }}
    >
      {pageOrder.map((name, i) => {
        const active = i === current;
        return (
          <button
            key={name}
            aria-label={`Go to ${name}`}
            aria-current={active ? "true" : undefined}
            onClick={() => onSelect(i)}
            className="cursor-pointer"
            style={{
              width: active ? "26px" : "10px",
              height: "10px",
              padding: 0,
              border: "none",
              borderRadius: "999px",
              backgroundColor: "var(--secondary-color)",
              opacity: active ? 1 : 0.4,
              transition: "all 0.35s ease",
            }}
          />
        );
      })}
    </div>
  );
}
