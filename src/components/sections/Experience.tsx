"use client";

import { profile } from "@/data/profile";
import Header from "../Header";

interface SectionProps {
  scroll: (n: number) => void;
}

export default function ExperienceSection({ scroll }: SectionProps) {
  return (
    <div
      className="screen-h"
      style={{ display: "grid", gridTemplateRows: "auto 1fr" }}
    >
      <Header
        name="experience"
        left="about"
        right="projects"
        num={2}
        nav={scroll}
      />
      <div
        className="scroller"
        style={{ overflow: "scroll", padding: "5vmin" }}
      >
        <div style={{ width: "min(640px, 90vw)", margin: "3vmin auto" }}>
          {profile.experience.map((job, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "var(--opacity-color)",
                borderRadius: "16px",
                padding: "3vmin",
                marginBottom: "3vmin",
              }}
            >
              <div
                className="flex flex-wrap items-baseline justify-between"
                style={{ gap: "0.5em" }}
              >
                <span
                  className="font-bold"
                  style={{ fontSize: "max(2.8vmin, 1.05em)" }}
                >
                  {job.role}
                </span>
                <span style={{ fontSize: "max(2vmin, 0.85em)", opacity: 0.7 }}>
                  {job.period}
                </span>
              </div>
              <div
                style={{
                  fontSize: "max(2.2vmin, 0.95em)",
                  opacity: 0.85,
                  margin: "0.4em 0 0.8em",
                }}
              >
                {`@ ${job.company}`}
              </div>
              <ul style={{ paddingLeft: "1.2em", margin: 0 }}>
                {job.points.map((p, j) => (
                  <li
                    key={j}
                    style={{
                      fontSize: "max(2vmin, 0.9em)",
                      lineHeight: 1.5,
                      marginBottom: "0.4em",
                      listStyle: "'> '",
                    }}
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
