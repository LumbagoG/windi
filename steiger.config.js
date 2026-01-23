import fsd from "@feature-sliced/steiger-plugin";
import { defineConfig } from "steiger";

/**
 * @type {import('steiger').Config}
 */
export const config = defineConfig([
    ...fsd.configs.recommended,
    {
        // Ignore files in node_modules, .next, etc.
        ignores: [
            "**/node_modules/**",
            "**/.next/**",
            "**/public/**",
            "**/dist/**",
            "**/out/**",
            "**/release/**",
        ],
    },
    {
        // General project settings
        // Apply Steiger/FSD ONLY to the renderer part, where FSD is actually used.
        files: ["./src/renderer/**"],
        rules: {
            // Disable insignificant-slice rule as the project is still in early stages
            "fsd/insignificant-slice": "off",
            // Disable no-segmentless-slices rule for the initial development phase
            "fsd/no-segmentless-slices": "off",
            // Disable purpose-based segments check as we use a standard structure
            "fsd/segments-by-purpose": "off",
        },
    },
    {
        // Special settings for the shared layer
        files: ["./src/renderer/shared/**"],
        rules: {
            // Configure shared layer specifics
            "fsd/public-api": "warn",
            "fsd/shared-lib-grouping": "warn",
        },
    },
]);

export default config;
