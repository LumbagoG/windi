import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./providers/App";
import "./styles/global.css";

/**
 * Renderer entry point (React).
 * Only UI bootstrapping is allowed here, without business logic.
 */
function bootstrap(): void {
    const el = document.getElementById("root");
    if (!el) throw new Error("Root element #root not found");

    createRoot(el).render(
        <StrictMode>
            <App />
        </StrictMode>,
    );
}

bootstrap();
