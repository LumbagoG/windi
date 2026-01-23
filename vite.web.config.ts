import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

/**
 * Vite config for running the renderer as a regular browser SPA.
 * Electron-specific parts (preload) are absent in this mode.
 */
export default defineConfig({
    root: resolve(__dirname, "src/renderer"),
    plugins: [react()],
    resolve: {
        alias: {
            "@app": resolve(__dirname, "src/renderer/app"),
            "@pages": resolve(__dirname, "src/renderer/pages"),
            "@widgets": resolve(__dirname, "src/renderer/widgets"),
            "@features": resolve(__dirname, "src/renderer/features"),
            "@entities": resolve(__dirname, "src/renderer/entities"),
            "@shared": resolve(__dirname, "src/renderer/shared"),
        },
    },
    build: {
        outDir: resolve(__dirname, "dist/web"),
        emptyOutDir: true,
    },
});
