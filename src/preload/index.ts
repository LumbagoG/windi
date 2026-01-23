import { contextBridge, ipcRenderer } from "electron";
import type { ElectronApi } from "./contracts";

/**
 * Implementation of the "bridge" between renderer and main process.
 * Here we allow only specific safe operations and hide direct access to `ipcRenderer`.
 */
const api: ElectronApi = {
    versions: {
        electron: process.versions.electron,
        node: process.versions.node,
        chrome: process.versions.chrome,
    },
    system: {
        ping: async () => ipcRenderer.invoke("system:ping"),
    },
};

contextBridge.exposeInMainWorld("electronAPI", api);
