import type { PingResult } from "../shared/contracts/system";

/**
 * Preload API contracts available in the renderer via `window.electronAPI`.
 * Important: this is a "whitelist" of operations allowed for the UI.
 */
export type ElectronApi = {
    /** Environment versions (read-only). */
    versions: {
        electron: string;
        node: string;
        chrome: string;
    };

    /** System operations (via IPC invoke). */
    system: {
        ping(): Promise<PingResult>;
    };
};
