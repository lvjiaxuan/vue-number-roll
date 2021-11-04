# vue2-number-roll

![images](https://img.shields.io/badge/vue-2.6.14-brightgreen)

一个Vue2数字滚动组件，[demo](https://lvjiaxuan.github.io/vue-number-roll/index.html)


## 安装

```
npm i vue2-number-roll
```

Vue3的也有：
```bash
npm i vue3-number-roll
```

## 选项

| props        | 默认值      | 描述                            |
| ------------ | ----------- | ------------------------------- |
| startNumber  | 0           | 滚动初始值                      |
| endNumber    | 0    | 滚动结束值                      |
| duration     | 3000        | transition-duration             |
| transitionTimingFunction | ease-in-out | transition-timing-function      |
| minLength    | 0           | 滚动数字最小长度，用0补充在前面 |
| rollHeight   | required    | 滚动组件高度                    |
| reverseDirection      | false       | 反转滚动方向                    |
| autoplay      | false       | 1s后自动滚动                    |
| customClass    | 无    | 每个滚动数字的样式              |

## 组件方法

- start：开始滚动
- reset：重置到初始值

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

- 没有负数
- 没空测试边界情况，看着用

## 说点什么

由于TypeScript + Vue2不先天兼容（[看这里](https://www.zhihu.com/question/310485097/answer/591869966)），所以需要加点调料去腥（[看这里](https://cn.vuejs.org/v2/guide/typescript.html)）。

一开始是想用Vue2 Options API的写法，这也是最简单的开始：Vite2 + Vue2 + Vetur + TypeScript。

但是想想，组件库谁tm在乎你怎么写，而且还要做个Vue3版本的，那就用@vue/composition-api好了，这样可以不用再写一遍。

然后再想想，Vetur不支持我其他Vue3项目啊，不想切换来切换去，我要用Volar。其中，注意要根据其文档描述：**Setup for Vue2**。

> 关于Volar的Setup for Vue2，我实践了一些例子，已经表明了无论如何Vue2都不推荐使用了。详看[issue](https://github.com/johnsoncodehk/volar/issues/647#event-5543942889)。

> 关于`@vue/composition-api`，其写法也不是百分百等同于Vue2，还是有一些限制的。

都到这个地步，干脆再加个script setup吧。

最后，整个项目就使用了这些：Vite2 + Vue2 + Volar(Setup for Vue2) + TypeScript + @vue/composition-api + unplugin-vue2-script-setup
