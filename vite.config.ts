import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    server: {
      port: 3000, // <--- Mude para a porta que desejar (ex: 3000, 5173, etc)
    },
  },
});