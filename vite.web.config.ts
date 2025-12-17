import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

/**
 * Vite конфиг для запуска renderer как обычного браузерного SPA.
 * Electron-specific части (preload) в этом режиме отсутствуют.
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
