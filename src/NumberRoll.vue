<script lang="ts" setup>
import { computed, onMounted, ref, toRefs, watch } from 'vue'

const props = defineProps({
  start: {
    type: [ Number, String ],
    default: 0,
    validator: (value: number | string) => Number.isInteger(+value) && +value >= 0,
  },
  end: {
    type: [ Number, String ],
    default: 0,
    validator: (value: number | string) => Number.isInteger(+value) && +value >= 0,
  },
  zeroStart: {
    type: [ Number, String ],
    default: 0,
    validator: (value: number | string) => Number.isInteger(+value) && +value >= 0,
  },
  itemHeightWithUnit: {
    type: String,
    required: true,
  },
  reverseRollDirection: {
    type: Boolean,
    default: false,
  },
  immediate: {
    type: Boolean,
    default: false,
  },
  itemClass: {
    type: String,
    default: '',
  },
  transitionDuration: {
    type: [ Number, String ],
    default: 3000,
  },
  transitionTimingFunction: {
    type: String,
    default: 'ease-in-out',
  },
  transitionDelay: {
    type: [ Number, String ],
    default: 0,
  },
})


const itemTranslateYs = ref<{ transform: string }[]>([])
function init() {
  itemTranslateYs.value.length = 0
  props.start
    .toString()
    .padStart(+props.zeroStart, '0')
    .split('')
    .forEach((number, idx) => setItemTranslateY(idx, +number))
}


const endNumberWithPadding = computed(() => props.end.toString().padStart(+props.zeroStart, '0'))
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
  () => props.zeroStart,
  () => props.reverseRollDirection,
], init, { immediate: true })

// 不能 dom 渲染好的第一帧就重置 transform
onMounted(() => props.immediate && window.requestAnimationFrame(roll))

defineExpose({ roll, reset: init })
</script>

<template>
  <ul class="number-roll-reset">
    <li
      v-for="index in itemTranslateYs.length"
      :key="index"
      :class="itemClass"
    >
      <div
        :style="[
          itemTranslateYs[index - 1],
          { 'transition-duration': transitionDuration.toString() },
          { 'transition-timing-function': transitionTimingFunction },
        ]"
      >
        <p
          v-for="n in 10"
          :key="n"
          :style="{ height: itemHeightWithUnit }"
        >
          {{ reverseRollDirection ? 10 - n : n - 1 }}
        </p>
      </div>
    </li>
  </ul>
</template>

<style lang="scss">
.number-roll-reset {
  @apply m0 p0 list-none overflow-hidden inline-flex;
  li {
    @apply transition-property-transform box-border mt0 mb0;
    p {
      @apply m0 p0 flex-(~ justify-center items-center box-border);
    }
  }
}
</style>
