import { defineConfig, configDefaults } from "vitest/config"
import react from "@vitejs/plugin-react"
import tsconfigPaths from "vite-tsconfig-paths"
import path from "path"

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globalSetup: "__tests__/setup/env.ts",
    environment: "jsdom",
    exclude: [...configDefaults.exclude, "__tests__/e2e/*"],
  },
})
