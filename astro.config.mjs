import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
const { BASE_URL } = loadEnv(import.meta.env.MODE, process.cwd(), "");

import solidjs from "@astrojs/solid-js";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: "https://mikejke.github.io",
  base: BASE_URL,
  trailingSlash: "always",
  integrations: [solidjs(), image()],
  experimental: {
    assets: true,
  },
});
