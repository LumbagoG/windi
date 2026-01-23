import { SystemPing } from "@features/systemPing";
import { Card } from "@shared/ui";

/**
 * Widget: composition of a feature within a page/screen.
 * Widgets aggregate features/entities but do not contain business logic.
 */
export function SystemPingWidget() {
    return (
        <Card title="Connectivity check (IPC)">
            <SystemPing />
        </Card>
    );
}
