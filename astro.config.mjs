import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
const { BASE_URL } = loadEnv(import.meta.env.MODE, process.cwd(), "");

import solidJs from "@astrojs/solid-js";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: "https://mikejke.github.io",
  base: BASE_URL,
  integrations: [solidJs(), image()],
  experimental: {
    assets: true,
  },
});
