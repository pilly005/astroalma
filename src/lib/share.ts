// Shareable compatibility card — renders a 1080x1350 canvas and
// shares it via Capacitor Share (the viral loop). Falls back to
// text share on web preview.

import { Share } from "@capacitor/share";
import { Filesystem, Directory } from "@capacitor/filesystem";
import { Capacitor } from "@capacitor/core";
import type { CompatibilityResult } from "./sinastry";
import { APP_CONFIG } from "../config";

export async function shareCompatibility(
  nameA: string,
  nameB: string,
  result: CompatibilityResult
): Promise<void> {
  if (!Capacitor.isNativePlatform()) {
    await Share.share({
      title: APP_CONFIG.displayName,
      text: `${nameA} + ${nameB}: ${result.total}% de compatibilidad cósmica. ${result.verdict}`,
      dialogTitle: "Compartir compatibilidad",
    });
    return;
  }

  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1350;
  const ctx = canvas.getContext("2d")!;

  // Background
  const bg = ctx.createLinearGradient(0, 0, 0, 1350);
  bg.addColorStop(0, "#1e1033");
  bg.addColorStop(1, "#0d0620");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, 1080, 1350);

  // Stars
  ctx.fillStyle = "#e8c874";
  for (let i = 0; i < 120; i++) {
    const x = Math.random() * 1080;
    const y = Math.random() * 1350;
    const r = Math.random() * 2 + 0.5;
    ctx.globalAlpha = Math.random() * 0.7 + 0.2;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;

  // Title
  ctx.textAlign = "center";
  ctx.fillStyle = "#e8c874";
  ctx.font = "600 44px Georgia, serif";
  ctx.fillText("Compatibilidad Cósmica", 540, 150);

  ctx.fillStyle = "#f7efdd";
  ctx.font = "48px Georgia, serif";
  ctx.fillText(`${nameA}  ♥  ${nameB}`, 540, 240);

  // Score ring
  const cx = 540, cy = 480, R = 150;
  ctx.lineWidth = 26;
  ctx.strokeStyle = "#3d2a6b";
  ctx.beginPath();
  ctx.arc(cx, cy, R, 0, Math.PI * 2);
  ctx.stroke();
  ctx.strokeStyle = "#e8c874";
  ctx.beginPath();
  ctx.arc(cx, cy, R, -Math.PI / 2, -Math.PI / 2 + (Math.PI * 2 * result.total) / 100);
  ctx.stroke();
  ctx.fillStyle = "#f7efdd";
  ctx.font = "96px Georgia, serif";
  ctx.fillText(`${result.total}%`, cx, cy + 34);

  // Verdict
  ctx.fillStyle = "#c9b8e8";
  ctx.font = "italic 36px Georgia, serif";
  wrapText(ctx, result.verdict, cx, 720, 880, 52);

  // Top 3 axes
  ctx.textAlign = "left";
  const top = [...result.items].sort((x, y) => y.score - x.score).slice(0, 3);
  top.forEach((item, i) => {
    const y = 900 + i * 90;
    ctx.fillStyle = "#e8c874";
    ctx.font = "600 34px Georgia, serif";
    ctx.fillText(`${item.label}`, 120, y);
    ctx.fillStyle = "#f7efdd";
    ctx.textAlign = "right";
    ctx.fillText(`${item.score}%`, 960, y);
    ctx.textAlign = "left";
  });

  // Brand + disclaimer
  ctx.textAlign = "center";
  ctx.fillStyle = "#8f7fb8";
  ctx.font = "30px system-ui, sans-serif";
  ctx.fillText(APP_CONFIG.displayName, 540, 1260);
  ctx.font = "24px system-ui, sans-serif";
  ctx.fillText("Solo con fines de entretenimiento", 540, 1300);

  const dataUrl = canvas.toDataURL("image/png");
  const base64 = dataUrl.split(",")[1];
  const fileName = `sinastria-${Date.now()}.png`;
  const saved = await Filesystem.writeFile({
    path: fileName,
    data: base64,
    directory: Directory.Cache,
  });
  await Share.share({
    title: "Mi compatibilidad cósmica",
    text: `${nameA} + ${nameB}: ${result.total}% — ${result.verdict}`,
    files: [saved.uri],
    dialogTitle: "Compartir",
  });
}

function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number
) {
  const words = text.split(" ");
  let line = "";
  let yy = y;
  for (const w of words) {
    const test = line ? line + " " + w : w;
    if (ctx.measureText(test).width > maxWidth && line) {
      ctx.fillText(line, x, yy);
      line = w;
      yy += lineHeight;
    } else {
      line = test;
    }
  }
  ctx.fillText(line, x, yy);
}
