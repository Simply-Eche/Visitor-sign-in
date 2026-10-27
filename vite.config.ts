import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fitcStorePlugin } from "./server/fitcStore";

export default defineConfig({
  plugins: [react(), fitcStorePlugin()],
  server: {
    port: 5173,
    host: true,
    allowedHosts: true,
    strictPort: true,
  },
  preview: {
    port: 5173,
    host: true,
    allowedHosts: true,
  },
});
