import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/Projet5-Kasa/",
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true,
    host: true,
    open: "/Projet5-Kasa/",
  },
});
