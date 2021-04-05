# vue-number-roll

![images](https://img.shields.io/badge/vue-2.6.10-brightgreen)
![images](https://img.shields.io/badge/vue--cli-3.x-lightgrey)

> 一个vue数字滚动组件，[demo](https://lvjiaxuan.github.io/vue-number-roll/index.html)

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
| reverse      | false       | 反转滚动方向                    |
| itemClass    | required    | 每个滚动数字的样式              |

## 组件方法

- start：开始滚动
- reset：重置

```vue
<template>
	<number-roll ref="number-roll" endNum="123" roll-height="120px"/>
</template>

<script>
// ...
this.$refs['number-roll'].start();
this.$refs['number-roll'].reset();
// ...
</script>
```

## 注意

- 不支持负数