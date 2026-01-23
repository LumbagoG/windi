import { Button } from "@shared/ui";
import type { SystemPingState } from "../model/types";

export type SystemPingPanelProps = {
    /** Feature state (data for the UI). */
    state: SystemPingState;
    /** User action: trigger ping. */
    onPing(): void;
};

/**
 * Presentational UI for ping.
 * No side-effects/IPC — only rendering based on props.
 */
export function SystemPingPanel({ state, onPing }: SystemPingPanelProps) {
    return (
        <div style={{ display: "grid", gap: 12 }}>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <Button onClick={onPing} disabled={state.isLoading}>
                    {state.isLoading ? "Pinging..." : "Ping main"}
                </Button>
                {state.result ? (
                    <span style={{ opacity: 0.9 }}>
                        Response: <b>{state.result.message}</b> (
                        {new Date(state.result.at).toLocaleString()})
                    </span>
                ) : (
                    <span style={{ opacity: 0.7 }}>Click the button to test IPC.</span>
                )}
            </div>

            {state.error ? (
                <div
                    style={{
                        color: "#fb7185",
                        background: "rgba(251,113,133,0.12)",
                        padding: 10,
                        borderRadius: 12,
                    }}
                >
                    Error: {state.error}
                </div>
            ) : null}
        </div>
    );
}
