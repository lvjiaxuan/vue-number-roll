import base from './vite.config'
import { mergeConfig } from 'vite'
import path from 'node:path'

export default mergeConfig(base, {
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/NumberRoll.vue'),
      name: 'NumberRoll',
    },
    rollupOptions: {
      external: [ 'vue' ],
      output: { globals: { vue: 'Vue' } },
    },
  },
})
