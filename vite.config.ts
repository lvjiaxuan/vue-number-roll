import { URL, fileURLToPath } from 'node:url'
import { presetAttributify, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'
import UnoCSS from 'unocss/vite'
import avg from 'unocss-transformer-attribute-values-group'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vue-number-roll',
  plugins: [
    vue(),
    UnoCSS({
      presets: [ presetAttributify(), presetUno() ],
      transformers: [ avg, transformerVariantGroup(), transformerDirectives() ],
    }),
  ],
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
  optimizeDeps: { exclude: [ 'vue-demi' ] },
},
)
