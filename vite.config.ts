import ScriptSetup from 'unplugin-vue2-script-setup/vite'
import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    createVuePlugin(),
    ScriptSetup({
      /* options */
    }),
  ],
})
