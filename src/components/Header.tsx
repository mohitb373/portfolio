"use client";

interface HeaderProps {
  name: string;
  left?: string;
  right?: string;
  num: number;
  nav: (n: number) => void;
}

const Arrow = ({
  dir,
  label,
  onClick,
}: {
  dir: "left" | "right";
  label?: string;
  onClick: () => void;
}) => {
  if (!label) return <div style={{ flex: "1 1 0", minWidth: 0 }} />;
  return (
    <div
      onClick={onClick}
      className="noselect cursor-pointer flex items-center"
      style={{
        fontSize: "clamp(0.7rem, 2.5vmin, 0.95rem)",
        opacity: 0.7,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        flex: "1 1 0",
        minWidth: 0,
        textAlign: dir === "left" ? "left" : "right",
      }}
      title={label}
    >
      {dir === "left" ? `< ${label}` : `${label} >`}
    </div>
  );
};

export default function Header({
  name,
  left,
  right,
  num,
  nav,
}: HeaderProps) {
  return (
    <div
      className="flex items-center justify-between noselect"
      style={{
        padding: "calc(40px + 5vmin) 4vmin 0 4vmin",
        gap: "2vmin",
      }}
    >
      <Arrow dir="left" label={left} onClick={() => nav(num - 1)} />
      <div
        className="font-bold"
        style={{
          fontSize: "clamp(1rem, 4vmin, 1.6rem)",
          flexShrink: 0,
          textAlign: "center",
          whiteSpace: "nowrap",
        }}
      >{`> ${name}()`}</div>
      <Arrow dir="right" label={right} onClick={() => nav(num + 1)} />
    </div>
  );
}
