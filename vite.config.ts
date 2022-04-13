import vue from "@vitejs/plugin-vue"
import { fileURLToPath, URL } from "url"
import { defineConfig } from "vite"
import svgLoader from "vite-svg-loader"

export default defineConfig({
  plugins: [
    vue(),
    svgLoader({
      defaultImport: "raw"
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  }
})
