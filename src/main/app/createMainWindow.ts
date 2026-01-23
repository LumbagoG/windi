import { existsSync } from "node:fs";
import { join } from "node:path";
import { BrowserWindow } from "electron";

/**
 * Creates the main application window.
 * Important security rule: Node APIs are not available in the renderer; interaction goes through preload.
 */
export function createMainWindow(): BrowserWindow {
    /**
     * Resolve the preload file for dev/prod without strict extension binding.
     * In dev, electron-vite often builds preload as ESM (`index.mjs`), and in prod as CJS (`index.cjs`).
     */
    const preloadPath = existsSync(join(__dirname, "../preload/index.mjs"))
        ? join(__dirname, "../preload/index.mjs")
        : join(__dirname, "../preload/index.cjs");

    const win = new BrowserWindow({
        width: 1100,
        height: 720,
        show: false,
        webPreferences: {
            preload: preloadPath,
            nodeIntegration: false,
            contextIsolation: true,
        },
    });

    win.on("ready-to-show", () => {
        win.show();
    });

    return win;
}
