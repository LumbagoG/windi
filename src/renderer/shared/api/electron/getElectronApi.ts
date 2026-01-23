import type { ElectronApi } from "../../../../preload/contracts";

/**
 * Access to the preload API.
 * All Electron interaction from the UI must go through this contract only.
 */
export function getElectronApi(): ElectronApi {
    if (!window.electronAPI) {
        throw new Error("Preload API is not available: window.electronAPI is missing");
    }

    return window.electronAPI;
}
