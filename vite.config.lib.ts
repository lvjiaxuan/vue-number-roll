import { type UserConfig, mergeConfig } from 'vite'
import base from './vite.config'
import path from 'node:path'
import dts from 'vite-plugin-dts'
import pkg from './package.json' assert { type: 'json' }

export default mergeConfig(base, {
  base: '/vue-number-roll',
  publicDir: false,
  build: {
    outDir: 'lib',
    lib: {
      entry: path.resolve(__dirname, './src/NumberRoll.ts'),
      name: 'NumberRoll',
    },
    rollupOptions: { external: [ 'vue' ] },
  },
  plugins: [
    dts({
      beforeWriteFile(_, content) {
        return { filePath: path.join(__dirname, pkg.types), content }
      },
    }),
  ],
} as UserConfig)
