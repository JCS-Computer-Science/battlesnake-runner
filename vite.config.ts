import { defineConfig } from "vitest/config";
import { sveltekit } from "@sveltejs/kit/vite";
import mkcert from "vite-plugin-mkcert";

import Icons from "unplugin-icons/vite";

export default defineConfig({
  plugins: [sveltekit(), Icons({ compiler: "svelte" }), mkcert()],
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"]
  },
  server: { https: true, proxy: {} }
});
