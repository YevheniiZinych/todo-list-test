import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/todo-list-test",
  plugins: [react()],
  server: {
    port: 4040,
    open: true,
  },
});
