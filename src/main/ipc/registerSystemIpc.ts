import { ipcMain } from "electron";
import type { PingResult } from "../../shared/contracts/system";

/**
 * Registers IPC handlers related to system/test operations.
 * This is the "application layer" of the main process: business logic should not reside in the UI.
 */
export function registerSystemIpc(): void {
    ipcMain.handle("system:ping", async (): Promise<PingResult> => {
        return {
            message: "pong",
            at: new Date().toISOString(),
        };
    });
}
