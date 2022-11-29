import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";

export default defineConfig({
  optimizeDeps: {
    include: ["@/sdk/4.1.2.js"]
  },
  build: {
    commonjsOptions: {
      include: []
    }
  },
  plugins: [uni()]
});
