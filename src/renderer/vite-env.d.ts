/// <reference types="vite/client" />

import type { ElectronApi } from "../preload/contracts";

declare global {
    interface Window {
        /**
         * Typed API exposed from preload.
         * Node/Electron cannot be used directly in the UI — only this contract.
         */
        electronAPI?: ElectronApi;
    }
}
