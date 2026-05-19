"use client";

import { profile } from "@/data/profile";
import Header from "../Header";

interface SectionProps {
  scroll: (n: number) => void;
}

export default function About({ scroll }: SectionProps) {
  return (
    <div
      className="screen-h"
      style={{ display: "grid", gridTemplateRows: "auto 1fr" }}
    >
      <Header
        name="about_me"
        left="home"
        right="experience"
        num={1}
        nav={scroll}
      />
      <div
        className="scroller"
        style={{ overflow: "scroll", padding: "5vmin" }}
      >
        <div
          style={{
            width: "min(600px, 90vw)",
            margin: "3vmin auto",
            textAlign: "center",
          }}
        >
          <div
            className="font-bold flex flex-col"
            style={{ rowGap: "0.5em", fontSize: "max(3.2vmin, 1.1em)" }}
          >
            {profile.about.intro.map((line, i) => (
              <div key={i}>
                {line.text}
                {line.strong && <strong>{line.strong}</strong>}
              </div>
            ))}
          </div>

          {profile.about.sections.map((s) => (
            <div key={s.heading} style={{ marginTop: "2em" }}>
              <h5
                className="font-bold"
                style={{ fontSize: "max(2.6vmin, 1em)", margin: "1em 0" }}
              >
                {s.heading}
              </h5>
              <p
                style={{
                  fontSize: "max(2.2vmin, 0.95em)",
                  lineHeight: 1.6,
                  opacity: 0.9,
                }}
              >
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
