// Apple touch icon. Same MD logotype, scaled up to 180x180 with rounded
// corners that match iOS home-screen aesthetic.

import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#000",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontStyle: "italic",
          fontWeight: 500,
          fontSize: 105,
          color: "#fff",
          letterSpacing: "0.02em",
          paddingBottom: 6,
        }}
      >
        MD
      </div>
    ),
    size,
  );
}
