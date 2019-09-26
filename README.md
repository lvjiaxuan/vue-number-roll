# vue-number-roll

![images](https://img.shields.io/badge/vue-2.6.10-brightgreen)
![images](https://img.shields.io/badge/vue--cli-3.x-lightgrey)

> 一个vu数字滚动组件

## 安装

```
npm i vue-number-roll
```
## 选项

| props        | 默认值      | 描述                            |
| ------------ | ----------- | ------------------------------- |
| startNum     | 0           | 滚动初始值                      |
| endNum       | required    | 滚动结束值                      |
| duration     | 3000        | transition-duration             |
| timeFunction | ease-in-out | transition-timing-function      |
| minLength    | 0           | 滚动数字最小长度，用0补充在前面 |
| rollHeight   | required    | 滚动组件高度                    |

## todolist

- 不支持负数
- 布局仍需优化