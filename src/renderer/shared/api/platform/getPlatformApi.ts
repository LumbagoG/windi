import { getElectronApi } from "../electron";
import { createWebPlatformApi } from "./createWebPlatformApi";
import type { PlatformApi } from "./types";

let memo: PlatformApi | null = null;

/**
 * Возвращает корректный API для текущей среды выполнения.
 * В Electron берём preload API; в браузере — web реализацию.
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
