module.exports = {
  env: {// 标志各环境自带的全局变量
    browser: true,
    node: false,
    commonjs: false,
  },
  // parser: 'babel-eslint', 新版已取消 会报错 https://eslint.org/docs/user-guide/migrating-to-6.0.0#the-default-parser-now-validates-options-more-strictly
  parserOptions: {
    ecmaVersion: 12,// es全局变量支持
    sourceType: 'module',// 默认script modules表示esm
  },
  plugins: [],
  extends: ["eslint:recommended"]
}