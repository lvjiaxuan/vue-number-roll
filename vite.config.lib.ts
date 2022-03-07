import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://cn.vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/components/NumberRoll.vue'),
      name: 'NumberRoll',
      fileName: format => `index.${format}.js`,
    },
  },
  plugins: [vue()],
})
