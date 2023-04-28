import { URL, fileURLToPath } from 'node:url'
import { type Plugin, defineConfig } from 'vite'
import { presetAttributify, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'
import UnoCSS from 'unocss/vite'
import avg from 'unocss-transformer-attribute-values-group'

// https://vitejs.dev/config/
export default defineConfig(async ({ command, mode }) =>
// let vue: () => Plugin
// let root: string
// if (mode.toString() === '3') {
//   // @ts-ignore
//   vue = (await import('@vitejs/plugin-vue')).default
//   root = './playgrounds/vue3'
// } else if (mode.toString() === '2') {
//   // @ts-ignore
//   vue = (await import('@vitejs/plugin-vue2')).default
//   root = './playgrounds/vue2.7'
// }

  ({
    // root: root!,
    plugins: [
      // vue!(),
      (await import('@vitejs/plugin-vue')).default(),
      UnoCSS({
        presets: [ presetAttributify(), presetUno() ],
        transformers: [ avg, transformerVariantGroup(), transformerDirectives() ],
      }),
    ],
    resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
    optimizeDeps: { exclude: [ 'vue-demi' ] },
  }),
)

// export default defineConfig({
//   root: './playgrounds/vue3',
//   plugins: [
//     xxx(),
//     UnoCSS({
//       presets: [ presetAttributify(), presetUno() ],
//       transformers: [ avg, transformerVariantGroup(), transformerDirectives() ],
//     }),
//   ],
//   resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
// })
