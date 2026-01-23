import type { PingResult } from "../../../../shared/contracts/system";

/**
 * Unified platform API for the renderer.
 *
 * - In Electron: proxies calls to preload (IPC).
 * - In Web SPA: provides the web implementation (mocks/info from the browser).
 *
 * Business logic: UI/features should not know which environment they are running in.
 */
export type PlatformApi = {
    versions: {
        electron: string;
        node: string;
        chrome: string;
    };
    system: {
        ping(): Promise<PingResult>;
    };
};
