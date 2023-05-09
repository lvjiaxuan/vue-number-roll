import { type UserConfig, mergeConfig } from 'vite'
import base from './vite.config'
import path from 'node:path'
import dts from 'vite-plugin-dts'
import pkg from './package.json' assert { type: 'json' }
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

export default mergeConfig(base, {
  base: '/vue-number-roll',
  publicDir: false,
  build: {
    outDir: 'lib',
    lib: {
      entry: path.resolve(__dirname, './src/NumberRoll.ts'),
      name: 'NumberRoll',
    },
    rollupOptions: {
      external: [ 'vue', 'vue-demi' ],
      output: {
      // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: { vue: 'Vue' },
      },
    },
  },
  plugins: [
    dts({
      beforeWriteFile(_, content) {
        return { filePath: path.join(__dirname, pkg.types), content }
      },
    }),
    cssInjectedByJsPlugin(),
  ],
} as UserConfig)
