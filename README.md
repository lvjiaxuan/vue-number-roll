# vue-number-roll

[![](https://img.shields.io/npm/v/vue-number-roll?color=a1b858&label=npm)](https://www.npmjs.com/package/vue-number-roll)
![](https://img.shields.io/badge/supports-vue%202%2F3-brightgreen)
[![](https://img.shields.io/npm/dependency-version/vue-number-roll/vue-demi)](https://github.com/vueuse/vue-demi)

[Vue3 Preview](https://lvjiaxuan.github.io/vue-number-roll).

[Vue2 Preview](https://lvjiaxuan.github.io/vue-number-roll/vue2).

## Install

```sh
npm i vue-number-roll
```

## Props

<!-- eslint-skip -->
```ts
props: {
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
  reverseRollDirection: {
    // Reverse the direction of the rolling.
    type: Boolean,
    default: false,
  },
  immediate: {
    // Set `true` to roll immediately on mounted.
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
},
```

## Expose

<!-- eslint-skip -->
```ts
expose({ roll, reset: init })
```

## Development

Run `nr dev`.

> [!WARNING]
> Do not modify the dev dir to vue2's, I can't figure it out for now.

### Preview vue 2/3

- `pnpm run preview:vue3`
- `pnpm run preview:vue2`
