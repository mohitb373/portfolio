"use client";

import { useState } from "react";
import { profile } from "@/data/profile";
import Typewriter from "../Typewriter";
import Parallax from "../Parallax";

interface HomeProps {
  scroll: (n: number) => void;
  onLoad?: () => void;
}

const MENU = [
  { label: "> about_me()", target: 1 },
  { label: "> experience()", target: 2 },
  { label: "> skills()", target: 3 },
  { label: "> contact()", target: 4 },
];

export default function Home({ scroll, onLoad }: HomeProps) {
  const [state, setState] = useState(0);

  return (
    <div
      className="screen-h scroller flex flex-col"
      style={{ padding: "5vmin", overflowY: "auto" }}
    >
      <div style={{ margin: "auto 0", width: "100%" }}>
      <div className="grid place-content-center font-bold text-center">
        <Parallax className="m-[4vmin]" onLoad={onLoad} />

        <div style={{ fontSize: "5vmin", color: "var(--secondary-color)" }}>
          <Typewriter
            text={profile.name}
            showCursor={state < 1}
            onEnd={() => setState(1)}
          />
        </div>

        <div
          style={{
            fontSize: "3vmin",
            color: "var(--secondary-color)",
            opacity: state < 1 ? 0 : 1,
            transition: "opacity 0.4s ease",
          }}
        >
          <Typewriter
            text={` ${profile.title}`}
            start={state >= 1}
            showCursor={state >= 1}
            onEnd={() => setState(2)}
          />
        </div>
      </div>

      <ul
        className="scroller noselect"
        style={{
          listStyle: "none",
          padding: "2vmin",
          fontSize: "max(2.5vmin, 1em)",
          fontWeight: "bold",
          margin: "6vmin auto 0",
          width: "min(420px, 88vw)",
          maxWidth: "100%",
          transition: "opacity 1s ease",
          opacity: state < 2 ? 0 : 1,
        }}
      >
        {MENU.map((m) => (
          <li
            key={m.label}
            onClick={() => scroll(m.target)}
            className="cursor-pointer"
            style={{
              color: "var(--secondary-color)",
              border: "solid 2px var(--secondary-color)",
              padding: "3vmin",
              borderRadius: "6vmin",
              margin: "1vmin 0",
              textAlign: "center",
              transition: "background-color 0.2s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor =
                "var(--opacity-color)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
          >
            {m.label}
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}
