"use client";

import { profile } from "@/data/profile";
import Header from "../Header";

interface SectionProps {
  scroll: (n: number) => void;
}

export default function Contact({ scroll }: SectionProps) {
  return (
    <div
      className="screen-h"
      style={{ display: "grid", gridTemplateRows: "auto 1fr" }}
    >
      <Header name="contact" left="skills" num={4} nav={scroll} />
      <div
        className="scroller grid place-content-center"
        style={{ overflow: "scroll", padding: "5vmin" }}
      >
        <div
          style={{
            width: "min(520px, 90vw)",
            margin: "auto",
            textAlign: "center",
          }}
        >
          <p
            className="font-bold"
            style={{
              fontSize: "max(2.8vmin, 1.05em)",
              marginBottom: "2em",
              lineHeight: 1.5,
            }}
          >
            {profile.contact.blurb}
          </p>

          <div className="flex flex-col" style={{ gap: "1vmin" }}>
            {profile.contact.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="noselect"
                style={{
                  border: "solid 2px var(--secondary-color)",
                  borderRadius: "6vmin",
                  padding: "3vmin",
                  fontWeight: "bold",
                  fontSize: "max(2.4vmin, 0.95em)",
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
                {`> ${link.label}: ${link.value}`}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
