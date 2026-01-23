import { getPlatformApi } from "@shared/api";
import { Card } from "@shared/ui";
import logoUrl from "@shared/ui/assets/Logo.svg";
import { SystemPingWidget } from "@widgets/systemPingWidget";

/**
 * Home page — the application's demo screen.
 * This is where we assemble widgets (composition level).
 */
export function HomePage() {
    const { versions } = getPlatformApi();

    return (
        <main style={{ padding: 24, display: "grid", gap: 16, maxWidth: 980, margin: "0 auto" }}>
            <header style={{ display: "grid", gap: 6 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <img src={logoUrl} alt="Windi" style={{ height: 28, width: "auto" }} />
                </div>
                <div style={{ opacity: 0.75 }}>
                    Minimal application using Electron + React (FSD in renderer) with Web SPA mode
                </div>
            </header>

            <Card title="Environment versions">
                <div style={{ display: "flex", gap: 16, flexWrap: "wrap", opacity: 0.9 }}>
                    <span>
                        Electron: <b>{versions.electron}</b>
                    </span>
                    <span>
                        Node: <b>{versions.node}</b>
                    </span>
                    <span>
                        Chromium: <b>{versions.chrome}</b>
                    </span>
                </div>
            </Card>

            <SystemPingWidget />
        </main>
    );
}
