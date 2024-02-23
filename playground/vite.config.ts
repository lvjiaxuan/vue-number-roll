import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { presetUno, presetAttributify, transformerVariantGroup } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    UnoCSS({
      presets: [
        presetAttributify(),
        presetUno()
      ],
      transformers: [
        transformerVariantGroup()
      ]
    }),
    Components({
      dirs: [
        'src/components',
      ],
      dts: 'src/components.d.ts',
    }),
    AutoImport({
      imports: [
        'vue',
      ],
      dirs: [
        'src/composables',
      ],
      vueTemplate: true,
      dts: 'src/auto-imports.d.ts',
    }),
  ],
})
