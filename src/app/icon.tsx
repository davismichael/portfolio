// Favicon generated at build/request time. Matches the "MD" logotype in
// <Navigation />: italic, light, on a black square. Next will emit it as a
// 32x32 PNG and wire up the <link rel="icon"> tag automatically.

import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          fontSize: 19,
          color: "#fff",
          letterSpacing: "0.02em",
          // Slight optical lift so the italic doesn't look bottom-heavy at 32px
          paddingBottom: 1,
        }}
      >
        MD
      </div>
    ),
    size,
  );
}
