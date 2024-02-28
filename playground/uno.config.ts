import { defineConfig, presetUno, presetAttributify, transformerVariantGroup, transformerDirectives } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno()
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives()
  ]
})