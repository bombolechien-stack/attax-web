// Panneaux « carrousel » : la photo entière en scanlines (même algorithme que les carrousels, scan.js).
import { chromium } from "playwright";
import fs from "node:fs";
const [, , listFile, OUT] = process.argv;
const list = JSON.parse(fs.readFileSync(listFile, "utf8"));
const scan = fs.readFileSync("/home/claude/w1/scan.js", "utf8");
const b = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell" });
const pg = await b.newPage();
await pg.setContent(`<canvas id=c></canvas><script>${scan}</script>`);
for (const it of list) {
  const data = "data:image/png;base64," + fs.readFileSync(`/home/claude/w1/img/${it.src}.png`).toString("base64");
  const url = await pg.evaluate(async ({ data, it }) => {
    const cv = document.getElementById("c"); cv.width = it.w || 560; cv.height = it.h || 840;
    await scanPhoto(cv, data, { spacing: it.spacing || 8, color: it.color || "#1C2540", bg: it.bg || "#EEF2FA", fx: it.fx ?? 0.5, fy: it.fy ?? 0.5, zoom: it.zoom || 1, gamma: it.gamma || 1.25, contrast: it.contrast || 1.5, bright: it.bright ?? 0.04, under: it.under });
    return cv.toDataURL("image/png");
  }, { data, it });
  fs.writeFileSync(`${OUT}/${it.name || it.src}.png`, Buffer.from(url.split(",")[1], "base64"));
}
await b.close();
console.log("ok", list.length);
