import path from 'path'
import ScriptSetup from 'unplugin-vue2-script-setup/vite'
import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/components/NumberRoll.vue'),
      name: 'NumberRoll',
      fileName: format => `index.${format}.js`,
    },
  },
  plugins: [
    createVuePlugin(),
    ScriptSetup({
      /* options */
    }),
  ],
})
