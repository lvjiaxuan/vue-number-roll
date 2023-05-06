import lvjiaxuan from '@lvjiaxuan/eslint-plugin/flat'

export default [
  { ignores: [ 'lib/*' ] },
  ...lvjiaxuan.configs.recommended,
]
