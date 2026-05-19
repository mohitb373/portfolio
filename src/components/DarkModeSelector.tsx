"use client";

interface DarkModeSelectorProps {
  value: boolean; // true = dark
  onClick: () => void;
}

export default function DarkModeSelector({
  value,
  onClick,
}: DarkModeSelectorProps) {
  return (
    <div
      onClick={onClick}
      className="fixed cursor-pointer noselect"
      style={{
        backgroundColor: "var(--secondary-color)",
        width: "70px",
        height: "40px",
        borderRadius: "20px",
        margin: "3vmin",
        transform: "translateZ(1px)",
        zIndex: 50,
      }}
    >
      <div
        style={{
          backgroundColor: "var(--background-color)",
          width: "30px",
          height: "30px",
          margin: "5px",
          position: "relative",
          left: `${(value ? 1 : 0) * 30}px`,
          transition: "all 0.3s ease",
          borderRadius: "30px",
          display: "grid",
          placeItems: "center",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="18"
          height="18"
          style={{ fill: "var(--secondary-color)" }}
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            fillRule="nonzero"
            d="M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2h.1A6.979 6.979 0 0 0 10 7zm-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938 7.999 7.999 0 0 0 4 12z"
          />
        </svg>
      </div>
    </div>
  );
}
