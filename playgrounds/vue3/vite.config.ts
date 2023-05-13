import { URL, fileURLToPath } from 'node:url'
import UnoCSS from 'unocss/vite'
import { presetAttributify, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS({
      presets: [ presetAttributify(), presetUno() ],
      transformers: [ transformerVariantGroup(), transformerDirectives() ],
    }),
  ],
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
})