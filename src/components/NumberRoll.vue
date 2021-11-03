<template>
  <ul class="base-num-roll" :style="{ height: props.rollHeight }">
    <li v-for="index in liTranslate.length" :key="index" :class="props.customClass">
      <div
        :style="[
          liTranslate[index - 1],
          { 'transition-duration': +props.duration / 1000 + 's' },
          { 'transition-timing-function': props.transitionTimingFunction },
        ]"
      >
        <p v-for="n in 10" :key="n" :style="{ height: props.rollHeight }">
          {{ props.reverse ? 10 - n : n - 1 }}
        </p>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch, set } from '@vue/composition-api'

/**
 * props
 */
const props = defineProps({
  startNumber: {
    type: [Number, String],
    default: 123,
    validator: (value: number | string) => Number.isInteger(+value) && +value >= 0,
  },
  endNumber: {
    type: [Number, String],
    default: 9876,
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
  reverse: {
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
  startNumber,
  endNumber,
  // duration,
  // transitionTimingFunction,
  minLength,
  rollHeight,
  reverse,
  autoplay,
  // customClass,
} = props

/**
 * data
 */
const liTranslate = ref<{ transform: string }[]>([])
const rollNumber = computed(() => endNumber.toString().padStart(+minLength, '0'))
const rollHeightUnit = computed(() => rollHeight.replace(/\d/g, ''))
const rollHeightNumber = computed(() => +rollHeight.replace(new RegExp(rollHeightUnit.value, 'g'), ''))

/**
 * compostion api
 */
watch([() => startNumber, () => rollHeight, () => minLength], init)

/**
 * life cycle
 */
init()
onMounted(() => autoplay && start())

/**
 * methods
 */
defineExpose({ start, reset: init })

function init() {
  liTranslate.value.length = 0
  startNumber
    .toString()
    .padStart(+minLength, '0')
    .split('')
    .forEach((number, idx) => setLiTranslate(idx, +number))
}

function start() {
  liTranslate.value.length = 0
  rollNumber.value.split('').forEach((number, idx) => setLiTranslate(idx, +number))
}

function setLiTranslate(idx: number, number: number) {
  // Vue2
  set(liTranslate.value, idx, {
    transform: `translateY(${
      (reverse ? (9 - +number) * rollHeightNumber.value : -number * rollHeightNumber.value) + rollHeightUnit.value
    })`,
  })
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
