import { getElectronApi } from "../electron";
import { createWebPlatformApi } from "./createWebPlatformApi";
import type { PlatformApi } from "./types";

let memo: PlatformApi | null = null;

/**
 * Returns the correct API for the current runtime environment.
 * In Electron, we use the preload API; in the browser, the web implementation.
 */
export function getPlatformApi(): PlatformApi {
    if (memo) return memo;

    if (window.electronAPI) {
        memo = getElectronApi();
        return memo;
    }

    memo = createWebPlatformApi();
    return memo;
}
