import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { PLANS } from "@/lib/services";

// Link preview card (Slack, LinkedIn, iMessage, X). 1200x630, light,
// headline plus the three prices, logo bottom left.
export const alt = "Davis Makes. Apps and websites, designed and shipped.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Inter from Google Fonts at render time. Falls back to the built-in sans
// if the fetch fails, so the card always renders.
async function loadInter(weight: 400 | 700) {
  try {
    const css = await (
      await fetch(`https://fonts.googleapis.com/css2?family=Inter:wght@${weight}&display=swap`, {
        headers: { "User-Agent": "Mozilla/5.0" },
      })
    ).text();
    const url = css.match(/src: url\((.+?)\) format\('(woff2|truetype|opentype)'\)/)?.[1];
    if (!url) return null;
    return await (await fetch(url)).arrayBuffer();
  } catch {
    return null;
  }
}

export default async function OpenGraphImage() {
  const logo = await readFile(path.join(process.cwd(), "public/brand/davismakes-logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  const [regular, bold] = await Promise.all([loadInter(400), loadInter(700)]);
  const fonts = [
    regular && { name: "Inter", data: regular, weight: 400 as const, style: "normal" as const },
    bold && { name: "Inter", data: bold, weight: 700 as const, style: "normal" as const },
  ].filter(Boolean) as { name: string; data: ArrayBuffer; weight: 400 | 700; style: "normal" }[];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: "64px 72px",
          fontFamily: fonts.length ? "Inter" : "sans-serif",
          color: "#171717",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 22, letterSpacing: 6, color: "#737373", textTransform: "uppercase" }}>
            Fixed price · 2 to 6 weeks · You own every line
          </div>
          <div style={{ display: "flex", flexDirection: "column", marginTop: 28, fontSize: 88, fontWeight: 700, lineHeight: 1.02, letterSpacing: -3 }}>
            <div style={{ display: "flex" }}>
              <span style={{ color: "#c14c21" }}>Apps</span>
              <span>&nbsp;and websites,</span>
            </div>
            <div>designed and shipped.</div>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 40 }}>
            {PLANS.map((p) => (
              <div key={p.id} style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: 18, letterSpacing: 4, color: "#737373", textTransform: "uppercase" }}>
                  {p.name}
                </div>
                <div style={{ fontSize: 44, fontWeight: 700, marginTop: 6 }}>{p.price}</div>
              </div>
            ))}
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} alt="" width={264} height={82} />
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
