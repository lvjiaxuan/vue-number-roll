<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue-demi'

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


const itemTranslateYs = ref<{ transform: string }[]>([])
function init() {
  itemTranslateYs.value.length = 0
  props.start
    .toString()
    .padStart(+props.totalLength, '0')
    .split('')
    .forEach((number, idx) => setItemTranslateY(idx, +number))
}


const endNumberWithPadding = computed(() => props.end.toString().padStart(+props.totalLength, '0'))
function roll() {
  itemTranslateYs.value.length = 0
  endNumberWithPadding.value.split('').forEach((number, idx) => setItemTranslateY(idx, +number))
}


const itemHeightUnit = computed(() => props.itemHeightWithUnit.replace(/\d/g, ''))
const itemHeightNumber = computed(() => +props.itemHeightWithUnit.replace(new RegExp(itemHeightUnit.value, 'gi'), ''))
function setItemTranslateY(idx: number, number: number) {
  itemTranslateYs.value[idx] = {
    transform: `translateY(${
      (props.reverseRollDirection ? (+number - 9) * itemHeightNumber.value : -number * itemHeightNumber.value) +
      itemHeightUnit.value
    })`,
  }
}


watch([
  () => props.start,
  () => props.itemHeightWithUnit,
  () => props.totalLength,
  () => props.reverseRollDirection,
], init, { immediate: true })

// 不能 dom 渲染好的第一帧就重置 transform，我也不知道第二帧为什么不行
onMounted(() => props.immediate && window.requestAnimationFrame(() => window.requestAnimationFrame(roll)))

defineExpose({ roll, reset: init })
</script>

<template>
  <ul
    m0
    p0
    list-none
    overflow-hidden
    inline-flex
    class="number-roll-reset"
  >
    <li
      v-for="index in itemTranslateYs.length"
      :key="index"
      transition-property-transform
      box-border
      mt0
      mb0
      :class="itemClass"
      :style="{ height: itemHeightWithUnit }"
    >
      <div
        :style="[
          itemTranslateYs[index - 1],
          { 'transition-duration': transitionDuration },
          { 'transition-timing-function': transitionTimingFunction },
          { 'transition-delay': transitionDelay }
        ]"
      >
        <p
          v-for="n in 10"
          :key="n"
          m0
          p0
          flex="~ justify-center items-center box-border"
          :style="{ height: itemHeightWithUnit }"
        >
          {{ reverseRollDirection ? 10 - n : n - 1 }}
        </p>
      </div>
    </li>
  </ul>
</template>

<style lang="scss">
// .number-roll-reset {
//   @apply m0 p0 list-none overflow-hidden inline-flex;
//   li {
//     @apply transition-property-transform box-border mt0 mb0;
//     p {
//       @apply m0 p0 flex-(~ justify-center items-center box-border);
//     }
//   }
// }
</style>
