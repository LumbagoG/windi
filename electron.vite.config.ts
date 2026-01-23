import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "electron-vite";

/**
 * Electron project build configuration:
 * - main: main process (window creation, app lifecycle)
 * - preload: safe bridge between renderer and Node/Electron API
 * - renderer: React application (UI)
 */
export default defineConfig(({ command }) => {
    const isBuild = command === "build";

    return {
        /**
         * In electron-vite@2.x, `main/preload/renderer` are SEPARATE Vite configs.
         * Therefore, `entry/input/vite` fields cannot be used here (it's a different API).
         */
        main: {
            build: isBuild
                ? {
                      outDir: resolve(__dirname, "dist/main"),
                      rollupOptions: {
                          output: {
                              format: "cjs",
                              entryFileNames: "index.cjs",
                          },
                      },
                  }
                : undefined,
        },
        preload: {
            build: isBuild
                ? {
                      outDir: resolve(__dirname, "dist/preload"),
                      rollupOptions: {
                          output: {
                              format: "cjs",
                              entryFileNames: "index.cjs",
                          },
                      },
                  }
                : undefined,
        },
        renderer: {
            root: resolve(__dirname, "src/renderer"),
            plugins: [react()],
            build: isBuild
                ? {
                      outDir: resolve(__dirname, "dist/renderer"),
                  }
                : undefined,
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
        },
    };
});
