/**
 * Result of a test ping call (IPC).
 * Shared contract for main/preload/renderer.
 */
export type PingResult = {
    /** Text response to verify IPC connectivity. */
    message: string;
    /** Server time (main process). */
    at: string;
};
