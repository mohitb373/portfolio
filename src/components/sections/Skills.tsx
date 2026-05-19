"use client";

import { useEffect, useRef, useState } from "react";
import { profile, type Skill } from "@/data/profile";
import Header from "../Header";

interface SectionProps {
  scroll: (n: number) => void;
}

function SkillNode({ skill, depth }: { skill: Skill; depth: number }) {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState("0px");
  const inner = useRef<HTMLDivElement>(null);

  const hasChildren = !!skill.inside?.length;

  useEffect(() => {
    if (!hasChildren || !inner.current) return;
    setHeight(open ? `${inner.current.scrollHeight}px` : "0px");
  }, [open, hasChildren]);

  if (!hasChildren) {
    return (
      <div
        style={{
          fontSize: "max(2.4vmin, 0.95em)",
          padding: "0.4em 0",
          fontWeight: "bold",
        }}
      >
        {`- ${skill.name}`}
      </div>
    );
  }

  return (
    <div style={{ padding: "0.4em 0" }}>
      <div
        onClick={() => setOpen((o) => !o)}
        className="cursor-pointer noselect flex items-center"
        style={{ width: "fit-content", fontWeight: "bold" }}
      >
        <span
          style={{
            display: "inline-block",
            transform: `rotate(${open ? 90 : 0}deg)`,
            transition: "transform 0.4s ease",
            marginRight: "0.6em",
            fontSize: "max(2.6vmin, 1em)",
          }}
        >
          {">"}
        </span>
        <span style={{ fontSize: "max(2.8vmin, 1.05em)" }}>
          {skill.name}:
        </span>
      </div>
      <div
        style={{
          height,
          overflow: "hidden",
          transition: "height 0.5s ease",
          paddingLeft: "1em",
        }}
      >
        <div
          ref={inner}
          style={{
            backgroundColor: "var(--opacity-color)",
            borderRadius: "10px",
            padding: "0.4em 1em",
            marginTop: "0.4em",
          }}
        >
          {skill.inside!.map((child) => (
            <SkillNode key={child.name} skill={child} depth={depth + 1} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Skills({ scroll }: SectionProps) {
  return (
    <div
      className="screen-h"
      style={{ display: "grid", gridTemplateRows: "auto 1fr" }}
    >
      <Header
        name="skills"
        left="experience"
        right="contact"
        num={3}
        nav={scroll}
      />
      <div
        className="scroller"
        style={{ overflow: "scroll", padding: "5vmin" }}
      >
        <div style={{ width: "min(600px, 90vw)", margin: "3vmin auto" }}>
          {profile.skills.map((s) => (
            <SkillNode key={s.name} skill={s} depth={0} />
          ))}
        </div>
      </div>
    </div>
  );
}
