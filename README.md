# vue-number-roll

[![](https://img.shields.io/npm/v/vue3-number-roll?color=a1b858&label=npm)](https://www.npmjs.com/package/vue3-number-roll)
![](https://img.shields.io/badge/support-vue%202%2F3-brightgreen)
![](https://img.shields.io/npm/dependency-version/vue-number-roll/dev/vue-demi)

[Demo](https://lvjiaxuan.github.io/vue-number-roll/index.html)

## Usage

Install
```sh
npm i vue-number-roll
```

## Props

```ts
const props = defineProps({
  start: {
    // The start number.
    type: [ Number, String ],
    default: 0,
    validator: (value: number | string) => Number.isInteger(+value) && +value >= 0,
  },
  end: {
    // The end number.
    type: [ Number, String ],
    default: 0,
    validator: (value: number | string) => Number.isInteger(+value) && +value >= 0,
  },
  totalLength: {
    // The total length of number, padding start with `0`.
    // It would be ignored, if it is less than the start number and the end number
    type: [ Number, String ],
    default: 0,
    validator: (value: number | string) => Number.isInteger(+value) && +value >= 0,
  },
  itemHeightWithUnit: {
    // The height style with unit of a number item.
    // It is used to calculate the rolling things.
    type: String,
    required: true,
  },
  reverseRollDirection: {
    // Reverse the direction of the rolling.
    type: Boolean,
    default: false,
  },
  immediate: {
    // Set `true`8 to roll immediately on mounted.
    type: Boolean,
    default: false,
  },
  itemClass: {
    // Set style to number item, like background-color/border/font-size, etc.
    type: String,
    default: '',
  },
  transitionDuration: {
    // The value is same as `transition-duration`.
    type: String,
    default: '3s',
  },
  transitionTimingFunction: {
    // The value is same as `transition-timing-function`.
    type: String,
    default: 'ease-in-out',
  },
  transitionDelay: {
    // The value is same as `transition-delay`.
    type: String,
    default: '0',
  },
})
```

## Expose

```ts
defineExpose({ roll, reset: init })
```

***

> **Warning**
> 
> I have no more edge case consideration, so use at your discretion. And PR welcome.