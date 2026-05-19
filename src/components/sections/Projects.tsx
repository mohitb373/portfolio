"use client";

import { profile } from "@/data/profile";
import Header from "../Header";

interface SectionProps {
  scroll: (n: number) => void;
}

export default function Projects({ scroll }: SectionProps) {
  return (
    <div
      className="screen-h"
      style={{ display: "grid", gridTemplateRows: "auto 1fr" }}
    >
      <Header
        name="projects"
        left="experience"
        right="skills"
        num={3}
        nav={scroll}
      />
      <div
        className="scroller"
        style={{ overflow: "scroll", padding: "5vmin" }}
      >
        <div style={{ width: "min(680px, 92vw)", margin: "3vmin auto" }}>
          {profile.projects.map((p) => (
            <div
              key={p.name}
              style={{
                backgroundColor: "var(--opacity-color)",
                borderRadius: "16px",
                padding: "3.5vmin",
                marginBottom: "3vmin",
              }}
            >
              <div
                className="font-bold"
                style={{ fontSize: "max(2.8vmin, 1.05em)" }}
              >
                {`> ${p.name}`}
              </div>
              <p
                style={{
                  fontSize: "max(2.1vmin, 0.92em)",
                  lineHeight: 1.55,
                  opacity: 0.88,
                  margin: "0.8em 0",
                }}
              >
                {p.description}
              </p>

              <div
                className="flex flex-wrap"
                style={{ gap: "1vmin", margin: "0.6em 0 1em" }}
              >
                {p.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      border: "solid 1.5px var(--secondary-color)",
                      borderRadius: "999px",
                      padding: "0.25em 0.9em",
                      fontSize: "max(1.8vmin, 0.78em)",
                      opacity: 0.85,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap" style={{ gap: "2vmin" }}>
                {p.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="noselect"
                    style={{
                      fontWeight: "bold",
                      fontSize: "max(2vmin, 0.88em)",
                      textDecoration: "underline",
                      textUnderlineOffset: "4px",
                    }}
                  >
                    {`${l.label} ↗`}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
