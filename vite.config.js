import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api/schedule-meeting": {
        target: "http://localhost:8000",
        changeOrigin: true,
      },
      "/api/message": {
        target: "http://localhost:8000",
        changeOrigin: true,
      },
      "/api/business_email": {
        target: "http://localhost:8000",
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
});
