import { defineConfig, presetAttributify, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'
import avg from 'unocss-transformer-attribute-values-group'

const d = defineConfig({
  presets: [ presetAttributify(), presetUno() ],
  transformers: [ avg, transformerVariantGroup(), transformerDirectives() ],
})
