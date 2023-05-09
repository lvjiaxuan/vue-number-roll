import { fileURLToPath, URL } from 'node:url'
import UnoCSS from 'unocss/vite'
import { presetAttributify, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'
import { defineConfig } from 'vite'
import vue2 from '@vitejs/plugin-vue2'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue2(),
    UnoCSS({
      presets: [ presetAttributify(), presetUno() ],
      transformers: [  transformerVariantGroup(), transformerDirectives() ],
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
