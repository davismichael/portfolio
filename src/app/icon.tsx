// Favicon: serves the Davis Makes monogram PNG. (icon.png sits beside this
// file too; this route keeps the older <link rel="icon"> wiring intact.)
import { readFile } from "node:fs/promises";
import path from "node:path";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default async function Icon() {
  const file = await readFile(path.join(process.cwd(), "src/app/icon.png"));
  return new Response(new Uint8Array(file), { headers: { "Content-Type": contentType } });
}
