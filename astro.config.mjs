// @ts-check
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	integrations: [react()],
	vite: {
		plugins: [...tailwindcss()],
		server: {
			// Explicit HMR config improves hot reload reliability (Astro + React + Tailwind)
			hmr: true,
			watch: {
				// Use polling if native file watching misses changes (e.g. some editors, network drives)
				usePolling: true,
			},
		},
	},
});
