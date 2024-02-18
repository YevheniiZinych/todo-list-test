import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/todo-list-test",
  plugins: [react()],
  server: {
    port: 4080,
    open: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTests.js",
  },
});
