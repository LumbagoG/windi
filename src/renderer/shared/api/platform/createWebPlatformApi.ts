import type { PlatformApi } from "./types";

/**
 * Web implementation of PlatformApi for running the renderer as a regular SPA.
 * There is no IPC here, so system.ping is a local stub.
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
