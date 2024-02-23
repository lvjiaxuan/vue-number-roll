import lv from '@lvjiaxuan/eslint-config'

export default lv({
  oxlint: true,
  unocss: true,
  typescript: {
    tsconfigPath: ['tsconfig.json', 'tsconfig.node.json'],
  },
})
