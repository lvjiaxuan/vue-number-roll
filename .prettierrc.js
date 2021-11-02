module.exports = {
  printWidth: 120, // 推荐长度
  tabWidth: 2, // 缩进长度
  useTabs: false, // false空格 true制表符
  semi: false, // false不用分号
  singleQuote: true, // 使用单引号
  quoteProps: 'as-needed', // 对象中的key是否使用引号：as-needed有需要的才加 consistent有一个用了就全用 preserve保留用户输入
  jsxSingleQuote: false, // JSX中使用单引号
  trailingComma: 'es5', // 尾逗号 es5数组对象 all数组对象形参 none不使用
  bracketSpacing: true, // true一行上的对象花括号要加空格
  jsxBracketSameLine: true, // true-jsx的结束标签不单独一行
  arrowParens: 'avoid', // always箭头函数单参数也要加括号 avoid可以不加
  rangeStart: 0, // 格式化开始的字符集位置
  rangeEnd: Infinity, // 格式化结束的字符集位置
  // parser 解析器 prettier自动推断输入文件识别解析器 一般不用设置
  // filePath 返回Prettier推断的解析器 只有在 cli 和 api 中使用有效
  requirePragma: false, // 格式化带有指定头部注释的文件
  insertPragma: false, // 格式化完成后会在文件头部插入注释@format
  proseWrap: 'never', // markdown的折行处理 always根据prinWidth折行 never软折行 preserve按解析器处理
  htmlWhitespaceSensitivity: 'css', // html中空格的处理 css根据display显示 strict显示空格 ignore不显示空格
  vueIndentScriptAndStyle: false, // vue文件中的script和style标签的代码是否缩进
  endOfLine: 'lf', // 换行符形式
  embeddedLanguageFormatting: 'auto', // 是否格式化Prettier能识别内嵌代码（比如标签的内嵌）
}
