import { useSystemPing } from "../model/useSystemPing";
import { SystemPingPanel } from "./SystemPingPanel";

/**
 * Feature container: links the model and UI.
 * Hook calls and prop passing are allowed here; logic remains in the model.
 */
export function SystemPing() {
    const { state, runPing } = useSystemPing();
    return <SystemPingPanel state={state} onPing={runPing} />;
}
