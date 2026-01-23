import type { PingResult } from "../../../../shared/contracts/system";

/**
 * State of the IPC connectivity check feature (ping/pong).
 * Business purpose: provide the user/developer with a quick signal that the main↔renderer connection is alive.
 */
export type SystemPingState = {
    /** Indicates if a request is currently in progress. */
    isLoading: boolean;
    /** The last successful result. */
    result: PingResult | null;
    /** Error message (if any). */
    error: string | null;
};
