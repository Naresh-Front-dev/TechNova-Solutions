import { ImageResponse } from "next/og";

export const alt = "TechNova Solutions — Technology that solves real business problems";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

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
          padding: "72px",
          color: "#171717",
          background: "#f7f7f2",
          border: "18px solid #ffffff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px", fontSize: 28, fontWeight: 600 }}>
          <div
            style={{
              width: 58,
              height: 58,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid #171717",
              fontSize: 20,
            }}
          >
            TN
          </div>
          TechNova Solutions
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ width: 58, height: 4, background: "#225c4b" }} />
          <p style={{ margin: "24px 0 0", maxWidth: 940, fontSize: 70, lineHeight: 1.02, fontWeight: 600, letterSpacing: "-3px" }}>
            Technology that solves real business problems.
          </p>
        </div>
      </div>
    ),
    size,
  );
}
