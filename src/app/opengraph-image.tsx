import { ImageResponse } from "next/og";

export const alt = "AmeriList — Find Medicare prospects in your market";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0e2744",
          color: "#f4f7fa",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 1, color: "#8fd4de" }}>AmeriList</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 64, fontWeight: 600, lineHeight: 1.1, maxWidth: 900 }}>
            Find Medicare prospects in your market
          </div>
          <div style={{ display: "flex", marginTop: 24, fontSize: 26, color: "#c5d4e0", maxWidth: 820 }}>
            Prospect data and marketing for agents, agencies, and marketers.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
