<template>
  <ul
    class="base-num-roll"
    :style="{ height: rollHeightRef }"
  >
    <li
      v-for="index in liTranslate.length"
      :key="index"
      :class="customClassRef"
    >
      <div
        :style="[
          liTranslate[index - 1],
          { 'transition-duration': +durationRef / 1000 + 's' },
          { 'transition-timing-function': transitionTimingFunctionRef },
        ]"
      >
        <p
          v-for="n in 10"
          :key="n"
          :style="{ height: rollHeightRef }"
        >
          {{ reverseDirectionRef ? 10 - n : n - 1 }}
        </p>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch, toRefs } from 'vue'

/**
 * props
 */
// eslint-disable-next-line no-undef
const props = defineProps({
  startNumber: {
    type: [Number, String],
    default: 0,
    validator: (value: number | string) => Number.isInteger(+value) && +value >= 0,
  },
  endNumber: {
    type: [Number, String],
    default: 0,
    validator: (value: number | string) => Number.isInteger(+value) && +value >= 0,
  },
  duration: {
    type: [Number, String],
    default: 3000,
    validator: (value: number | string) => Number.isInteger(+value) && +value >= 0,
  },
  transitionTimingFunction: {
    type: String,
    default: 'ease-in-out',
    validator: (value: string) =>
      ['linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out'].includes(value) || value.includes('cubic-bezier'),
  },
  minLength: {
    type: [Number, String],
    default: 0,
    validator: (value: number | string) => Number.isInteger(+value) && +value >= 0,
  },
  rollHeight: {
    type: String,
    required: true,
    validator: (value: string) => /^\d+(px|rem|em|%)+$/g.test(value),
  },
  reverseDirection: {
    type: Boolean,
    default: false,
  },
  autoplay: {
    type: Boolean,
    default: false,
  },
  customClass: {
    type: String,
    default: '',
  },
})

const {
  // fixme 如果模板直接使用同名的变量，会报错，所以加了`Ref`
  startNumber: startNumberRef,
  endNumber: endNumberRef,
  duration: durationRef,
  transitionTimingFunction: transitionTimingFunctionRef,
  minLength: minLengthRef,
  rollHeight: rollHeightRef,
  reverseDirection: reverseDirectionRef,
  autoplay: autoplayRef,
  customClass: customClassRef,
} = toRefs(props)

/**
 * data
 */
const liTranslate = ref<{ transform: string }[]>([])
const rollNumber = computed(() => endNumberRef.value.toString().padStart(+minLengthRef.value, '0'))
const rollHeightUnit = computed(() => rollHeightRef.value.replace(/\d/g, ''))
const rollHeightNumber = computed(() => +rollHeightRef.value.replace(new RegExp(rollHeightUnit.value, 'g'), ''))

/**
 * watch
 */
watch([startNumberRef, rollHeightRef, minLengthRef, reverseDirectionRef], init, { immediate: true })

/**
 * life cycle
 */
onMounted(() => autoplayRef.value && setTimeout(start, 1000))

/**
 * methods
 */
// eslint-disable-next-line no-undef
defineExpose({ start, reset: init })

function init() {
  liTranslate.value.length = 0
  startNumberRef.value
    .toString()
    .padStart(+minLengthRef.value, '0')
    .split('')
    .forEach((number, idx) => setLiTranslate(idx, +number))
}

function start() {
  liTranslate.value.length = 0
  rollNumber.value.split('').forEach((number, idx) => setLiTranslate(idx, +number))
}

function setLiTranslate(idx: number, number: number) {
  // Vue3
  liTranslate.value[idx] = {
    transform: `translateY(${
      (reverseDirectionRef.value ? (+number - 9) * rollHeightNumber.value : -number * rollHeightNumber.value) +
      rollHeightUnit.value
    })`,
  }
}
</script>

<style lang="scss">
.base-num-roll {
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
  display: inline-flex;
  li {
    transition-property: transform;
    box-sizing: border-box;
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    p {
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
    }
  }
}
</style>
