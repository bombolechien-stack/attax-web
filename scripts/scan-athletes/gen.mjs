// Génère les athlètes en scanlines (lignes blanches sur fond transparent, à utiliser comme masque CSS).
import { chromium } from "playwright";
import fs from "node:fs";
const SRC = process.env.SRC || "/home/claude/w1/img/";
const list = JSON.parse(fs.readFileSync(process.argv[2], "utf8"));
const OUT = process.argv[3];
fs.mkdirSync(OUT, { recursive: true });
const b = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell" });
const pg = await b.newPage();
await pg.setContent("<canvas id=c></canvas>");
for (const it of list) {
  const data = "data:image/png;base64," + fs.readFileSync(SRC + it.src + ".png").toString("base64");
  const url = await pg.evaluate(async ({ data, o }) => {
    const img = await new Promise((r) => { const i = new Image(); i.onload = () => r(i); i.src = data; });
    const W = o.w || 720, H = Math.round(W * img.height / img.width);
    const cv = document.getElementById("c"); cv.width = W; cv.height = H;
    const ctx = cv.getContext("2d"); ctx.clearRect(0, 0, W, H);
    const off = document.createElement("canvas"); off.width = W; off.height = H;
    const c = off.getContext("2d"); c.drawImage(img, 0, 0, W, H);
    const d = c.getImageData(0, 0, W, H).data;
    const sp = o.spacing || 9, step = 2, g = o.gamma || 1.1, con = o.contrast || 1.35, br = o.bright || 0;
    const maxH = sp * (o.fill || 0.46), cut = o.cut ?? 0.16;
    ctx.fillStyle = "#fff";
    for (let y = sp / 2; y < H; y += sp) {
      const top = [], bot = [];
      for (let x = 0; x <= W; x += step) {
        let acc = 0, n = 0;
        for (let yy = Math.max(0, Math.floor(y - sp / 2)); yy < Math.min(H, y + sp / 2); yy++) { const i = (yy * W + Math.min(W - 1, x)) * 4; acc += (.3 * d[i] + .59 * d[i + 1] + .11 * d[i + 2]) / 255; n++; }
        let l = acc / n; l = Math.min(1, Math.max(0, (l - .5) * con + .5 + br));
        let v = Math.pow(1 - l, g);
        v = v < cut ? 0 : (v - cut) / (1 - cut);           // fond clair → pas de ligne
        const h = maxH * v; top.push([x, y - h]); bot.push([x, y + h]);
      }
      ctx.beginPath(); ctx.moveTo(top[0][0], top[0][1]); for (const p of top) ctx.lineTo(p[0], p[1]);
      for (let k = bot.length - 1; k >= 0; k--) ctx.lineTo(bot[k][0], bot[k][1]); ctx.closePath(); ctx.fill();
    }
    // fondu en bas (les pieds se posent sans bord net)
    if (o.fadeBottom) { ctx.globalCompositeOperation = "destination-out"; const gr = ctx.createLinearGradient(0, H * (1 - o.fadeBottom), 0, H); gr.addColorStop(0, "rgba(0,0,0,0)"); gr.addColorStop(1, "rgba(0,0,0,1)"); ctx.fillStyle = gr; ctx.fillRect(0, 0, W, H); ctx.globalCompositeOperation = "source-over"; }
    return cv.toDataURL("image/png");
  }, { data, o: it });
  fs.writeFileSync(`${OUT}/${it.name}.png`, Buffer.from(url.split(",")[1], "base64"));
  console.log("ok", it.name);
}
await b.close();
