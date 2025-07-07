import { app, BrowserWindow } from "electron";
import * as path from "node:path";

let win: BrowserWindow | null = null;

function createWindow(): BrowserWindow {
  win = new BrowserWindow({
    width: 600,
    height: 600,
  });

  const url = path.join("file://", __dirname, "../dist/browser/index.html");
  win.loadURL(url);

  return win;
}

app.disableHardwareAcceleration();

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});
