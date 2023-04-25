import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import { presetAttributify, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'
import UnoCSS from 'unocss/vite'
import vue from '@vitejs/plugin-vue'
import avg from 'unocss-transformer-attribute-values-group'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS({
      presets: [ presetAttributify(), presetUno() ],
      transformers: [ avg, transformerVariantGroup(), transformerDirectives() ],
    }),
  ],
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
})
