import { mergeConfig } from 'vite'
import base from './vite.config'
import path from 'node:path'
import dts from 'vite-plugin-dts'
import pkg from './package.json' assert { type: 'json' }

export default mergeConfig(base, {
  publicDir: false,
  build: {
    outDir: 'lib',
    lib: {
      entry: path.resolve(__dirname, './src/NumberRoll.vue'),
      name: 'NumberRoll',
    },
    rollupOptions: {
      external: [ 'vue-demi' ],
      output: { globals: { vueDemo: 'vue-demi' } },
    },
  },
  plugins: [
    dts({
      beforeWriteFile(_, content) {
        return { filePath: path.join(__dirname, pkg.types), content }
      },
    }),
  ],
})
