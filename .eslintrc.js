module.exports = {
  env: {
    commonjs: true,
    browser: true,
    es2021: true,
  },
  extends: ['plugin:vue/essential'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 12,
    sourceType: 'module',
  },
  globals: {
    Vue: 'readonly',
    process: 'readonly',
  },
}
