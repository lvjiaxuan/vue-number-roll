import lvjiaxuan from '@lvjiaxuan/eslint-plugin/flat'

export default [
  ...lvjiaxuan.configs.recommended,
  {
    files: [ '**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts' ],
    languageOptions: { parserOptions: { project: [ './tsconfig.json', './tsconfig.*.json' ] } },
  },
]
