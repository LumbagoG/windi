import type { PingResult } from "../../../../shared/contracts/system";

/**
 * Унифицированный API платформы для renderer.
 *
 * - В Electron: проксирует вызовы в preload (IPC).
 * - В Web SPA: даёт web-реализацию (моки/инфо из browser).
 *
 * Бизнес-смысл: UI/фичи не должны знать, в какой среде они запущены.
 */
export type PlatformApi = {
    versions: {
        electron: string;
        node: string;
        chrome: string;
    };
    system: {
        ping(): Promise<PingResult>;
    };
};
