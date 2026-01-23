# Windi (Electron + React + Vite + TypeScript)

**Windi** test application on Electron, where:

- **main**: creates a window, registers IPC
- **preload**: typed safe bridge `window.electronAPI`
- **renderer**: React application, organized by **FSD**

## Requirements

- Node.js **18+**
- Yarn (some scripts in the project call `yarn`, so it should be available)

## Installation

```bash
yarn
```

## Running in dev mode (Electron)

```bash
yarn dev
```

An Electron window will open. On the home page:
- Electron/Node/Chromium versions are visible
- there is a **Ping main** button that performs `ipcRenderer.invoke('system:ping')` via preload.

## Build (production)

```bash
yarn build
```

Then you can verify the production build:

```bash
yarn preview
```

## Running as a browser SPA (Web)

- **Dev server**:

```bash
yarn dev:web
```

- **SPA Build** (in `dist/web`):

```bash
yarn build:web
```

- **Preview SPA**:

```bash
yarn preview:web
```

In web mode `window.electronAPI` is absent, so the application uses the web implementation of `PlatformApi`
(`@shared/api -> getPlatformApi()`).

## App packaging (electron-builder)

- **Pack to folder (without installer)**:

```bash
yarn pack
```

Result: `release/` (e.g., `release/mac-arm64/*.app`).

- **Installer/distributions**:

```bash
yarn dist
```

## Important note about macOS (signing)

If you don't have a Developer ID certificate, `electron-builder` will issue a warning and **skip code signing** — this is normal for a test application. For a real release, you need to configure signing (otherwise Gatekeeper will complain).

## Linting

```bash
yarn lint
```

`lint` runs the full set of checks: **Biome + TypeScript + Steiger**.

- **Biome**: `yarn lint:biome`
- **TypeScript**: `yarn lint:types`
- **Steiger (FSD)**: `yarn lint:steiger` (checks only `src/renderer`)

## Auto-formatting

```bash
yarn format
```

## Pre-commit hook

The project has **husky** connected: before each commit, `npm run lint:all` (Biome + TS + Steiger) is executed.

Additionally, `lint-staged.config.js` is configured (if you want to enable auto-fixes for staged files).

## Project structure (key parts)

```text
src/
  main/                 # Electron main process (wiring, window, IPC)
  preload/              # preload bridge (exports window.electronAPI)
  renderer/             # React UI (FSD)
    app/                # bootstrap, providers, global styles
    pages/              # pages
    widgets/            # feature composition
    features/           # features (model + ui)
    shared/             # shared/ui, shared/api, shared/lib
  shared/               # shared contracts (e.g., IPC types)
```

## About IPC and security

- In `BrowserWindow`, `nodeIntegration` is disabled, and `contextIsolation` is enabled.
- The UI has no direct access to Node/Electron — only via `window.electronAPI` from preload.
