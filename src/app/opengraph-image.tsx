import { ImageResponse } from "next/og";

export const alt = "Aidan Verkerk — Frontend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 90,
        background: "#fafaf8",
        color: "#16161a",
      }}
    >
      <div style={{ fontSize: 32, color: "#3d4fe0" }}>Portfolio</div>
      <div style={{ fontSize: 104, fontWeight: 700, marginTop: 16 }}>
        Aidan Verkerk
      </div>
      <div style={{ fontSize: 42, color: "#62626b", marginTop: 20 }}>
        Frontend developer · React, Next.js, TypeScript
      </div>
    </div>,
    size,
  );
}
