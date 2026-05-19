import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const runtime = "edge";
export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px",
          background: "#000000",
          color: "#ffffff",
          fontFamily: "monospace",
        }}
      >
        <div style={{ fontSize: 34, opacity: 0.6 }}>{"> portfolio"}</div>
        <div style={{ fontSize: 96, fontWeight: 700, marginTop: 16 }}>
          {profile.name}
        </div>
        <div style={{ fontSize: 48, opacity: 0.85, marginTop: 8 }}>
          {profile.title}
        </div>
        <div
          style={{
            display: "flex",
            gap: 24,
            marginTop: 56,
            fontSize: 30,
            opacity: 0.55,
          }}
        >
          {["about", "experience", "projects", "skills", "contact"].map(
            (s) => (
              <span key={s}>{`${s}()`}</span>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
