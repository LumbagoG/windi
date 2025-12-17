import type { PlatformApi } from "./types";

/**
 * Web-реализация PlatformApi для запуска renderer как обычного SPA.
 * Здесь нет IPC, поэтому system.ping — локальная заглушка.
 */
export function createWebPlatformApi(): PlatformApi {
    const chrome = typeof navigator !== "undefined" ? navigator.userAgent : "unknown";

    return {
        versions: {
            electron: "web",
            node: "web",
            chrome,
        },
        system: {
            ping: async () => ({
                message: "pong (web)",
                at: new Date().toISOString(),
            }),
        },
    };
}
