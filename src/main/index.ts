import { join } from "node:path";
import { app, BrowserWindow } from "electron";
import { createMainWindow } from "./app/createMainWindow";
import { registerSystemIpc } from "./ipc/registerSystemIpc";

/**
 * Main entry point for the Electron main process.
 * This is where we keep the wiring: app initialization, window creation, IPC.
 */
async function bootstrap(): Promise<void> {
    registerSystemIpc();

    const mainWindow = createMainWindow();

    /**
     * electron-vite in dev mode starts the renderer dev server and passes the URL via env.
     * Important: use `process.env` for the main process since `import.meta.env` is not guaranteed here.
     */
    const devServerUrl = process.env.ELECTRON_RENDERER_URL;
    if (devServerUrl) {
        await mainWindow.loadURL(devServerUrl);
    } else {
        // In production, we load the static renderer build (dist/renderer/index.html).
        await mainWindow.loadFile(join(__dirname, "../renderer/index.html"));
    }
}

app.whenReady().then(() => {
    void bootstrap().catch((e) => {
        // Explicitly log errors to avoid silent/unhandled rejections.
        console.error("Failed to bootstrap Electron app", e);
        app.quit();
    });
});

app.on("window-all-closed", () => {
    // On macOS, it's conventional to keep the application active until an explicit quit.
    if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
    // On macOS, clicking the dock icon should restore the window.
    if (BrowserWindow.getAllWindows().length === 0) void bootstrap();
});
