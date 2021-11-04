// edit it to suit your needs.
// references：https://www.conventionalcommits.org/zh-hans/v1.0.0/

const typeChoices = [
  { value: 'feat', name: ' feat: 新增新特性' },
  { value: 'fix', name: '  fix: 修复一个bug' },
  { value: 'wip', name: '  wip: 进行中，未完成，to rebase' },
  { value: 'perf', name: ' perf: 优化（性能、逻辑、重构等）' },
  { value: 'build', name: 'build: 构建内容变化（依赖版本、babel、rc文件、confg等）' },
  { value: 'docs', name: ' docs: README、添加帮助注释、其它文档等' },
  { value: 'release', name: '  rel: 发布版本' },
]

module.exports = {
  prompter: function (cz, commit) {
    cz.prompt([
      {
        type: 'list',
        name: 'type',
        message: '选择一个提交类型',
        choices: typeChoices,
        default: typeChoices[0].value,
      },
      {
        type: 'input',
        name: 'description',
        message: '简单描述一下',
      },
    ]).then(answers => {
      const { type, description } = answers
      commit(`${type}: ${description}`)
    })
  },
}
