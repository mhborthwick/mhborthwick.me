import { defineConfig } from "vitest/config";

/**
 * Vitest configuration for testing Astro components and utilities.
 * Uses happy-dom for fast DOM operations in tests.
 */
export default defineConfig({
	test: {
		environment: "happy-dom",
		coverage: {
			provider: "v8",
			reporter: ["text", "json", "html"],
			exclude: [
				"node_modules/",
				"dist/",
				".astro/",
				"**/*.config.*",
				"**/*.test.*",
			],
		},
	},
});
