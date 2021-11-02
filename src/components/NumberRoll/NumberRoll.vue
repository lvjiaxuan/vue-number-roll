<template>
  <ul class="base-num-roll" :style="{ height: rollHeight }">
    <li v-for="index in liTranslate.value.length" :key="index" :class="customClass">
      <div
        :style="[
          liTranslate.value[index - 1],
          { 'transition-duration': +duration / 1000 + 's' },
          { 'transition-timing-function': transitionTimingFunction },
        ]"
      >
        <p v-for="n in 10" :key="n" :style="{ height: rollHeight }">
          {{ reverse ? 10 - n : n - 1 }}
        </p>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref, computed, onBeforeMount, onMounted, watch, toRefs } from '@vue/composition-api'

/**
 * props
 */
const { startNumber, endNumber, duration, transitionTimingFunction, minLength, rollHeight, reverse, autoplay } = toRefs(
  defineProps({
    startNumber: {
      type: [Number, String],
      default: 0,
      validator: (value: number | string) => Number.isInteger(+value) && +value >= 0,
    },
    endNumber: {
      type: [Number, String],
      default: 3000,
      validator(value: number | string) {
        return Number.isInteger(+value) && +value >= 0
      },
    },
    duration: {
      type: [Number, String],
      default: 3000,
      validator(value: number | string) {
        return Number.isInteger(+value) && +value >= 0
      },
    },
    transitionTimingFunction: {
      type: String,
      default: 'ease-in-out',
      validator(value: string) {
        return (
          ['linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out'].includes(value) || value.includes('cubic-bezier')
        )
      },
    },
    minLength: {
      type: [Number, String],
      default: 0,
      validator(value: number | string) {
        return Number.isInteger(+value) && +value >= 0
      },
    },
    rollHeight: {
      type: String,
      required: true,
      validator(value: string) {
        return /^\d+(px|rem|em|%)+$/g.test(value)
      },
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
)

/**
 * data
 */
let liTranslate = ref<{ transform: string }[]>([])
const rollNumber = computed(() => endNumber.value.toString().padStart(+minLength, '0'))
const rollHeightUnit = computed(() => rollHeight.value.replace(/\d/g, ''))
const rollHeightNumber = computed(() => +rollHeight.value.replace(new RegExp(rollHeightUnit.value, 'g'), ''))

/**
 * compostion api
 */
watch([startNumber, rollHeight, minLength], init)

/**
 * life cycle
 */
onBeforeMount(init)
onMounted(() => autoplay.value && start())

/**
 * methods
 */

defineExpose({ start, reset: init })

function init() {
  // liTranslate.value = []
  // startNumber
  //   .toString()
  //   .padStart(+minLength, '0')
  //   .split('')
  //   .forEach((item, idx) => setLiTranslate(idx, +item))
}

function start() {
  // liTranslate.value.length = 0
  // rollNumber.value.split('').forEach((item, idx) => setLiTranslate(idx, +item))
}

function setLiTranslate(idx: number, item: number) {
  // liTranslate.value[idx] = {
  //   transform: `translateY(${
  //     (props.reverse ? (9 - +item) * rollHeightNumber.value : -item * rollHeightNumber.value) + rollHeightUnit.value
  //   })`,
  // }
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
