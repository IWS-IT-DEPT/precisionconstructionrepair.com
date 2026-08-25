import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#17140f",
          backgroundImage:
            "radial-gradient(circle at 85% 20%, rgba(192,146,119,0.35), transparent 55%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            marginBottom: "36px",
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "10px 18px",
              borderRadius: "6px",
              backgroundColor: "#c09277",
              color: "#17140f",
              fontSize: "30px",
              fontWeight: 800,
              letterSpacing: "2px",
            }}
          >
            PCR
          </div>
          <div style={{ display: "flex", fontSize: "26px", color: "#c09277", fontWeight: 600 }}>
            PRECISION CONSTRUCTION REPAIR
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: "58px",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.15,
            maxWidth: "980px",
          }}
        >
          Industrial Maintenance, Machining &amp; Welding
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "28px",
            fontSize: "28px",
            color: "rgba(255,255,255,0.7)",
          }}
        >
          Serving the US-43 industrial corridor from Mobile to Jackson, AL
        </div>
      </div>
    ),
    { ...size },
  );
}
