// Apple touch icon: the Davis Makes monogram on its square background.
import { readFile } from "node:fs/promises";
import path from "node:path";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const file = await readFile(path.join(process.cwd(), "src/app/apple-icon.png"));
  return new Response(new Uint8Array(file), { headers: { "Content-Type": contentType } });
}
