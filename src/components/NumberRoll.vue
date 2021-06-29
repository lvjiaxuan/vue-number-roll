<template>
  <ul class="base-num-roll" :style="{ height: rollHeight }">
    <li v-for="m in liTranslate.length" :key="m" :class="itemClass">
      <div
        :style="[
          liTranslate[m - 1],
          { 'transition-duration': duration / 1000 + 's' },
          { 'transition-timing-function': timeFunction },
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
import { ref, computed, defineProps, onBeforeMount, onMounted, watch } from 'vue'

const props = defineProps({
  startNumber: {
    type: [Number, String],
    default: 0,
    validator(value: number | string) {
      return Number.isInteger(+value) && +value >= 0
    },
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
  timeFunction: {
    type: String,
    default: 'ease-in-out',
    validator(value: string) {
      return (
        ['linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out'].includes(value) ||
        value.includes('cubic-bezier')
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
  itemClass: {
    type: String,
    required: true,
  },
  autoplay: {
    type: Boolean,
    default: false,
  },
})

let liTranslate = ref<{ transform: string }[]>([])

const rollNumber = computed(() => props.endNumber.toString().padStart(+props.minLength, '0'))
const rollHeightUnit = computed(() => props.rollHeight.replace(/\d/g, ''))
const rollHeightNumber = computed(
  () => +props.rollHeight.replace(new RegExp(rollHeightUnit.value, 'g'), '')
)

watch([() => props.startNumber, () => props.rollHeight, () => props.minLength], init)

onBeforeMount(init)
onMounted(() => props.autoplay && start())

/**
 * methods
 */

function init() {
  liTranslate.value = []
  props.startNumber
    .toString()
    .padStart(+props.minLength, '0')
    .split('')
    .forEach((item, idx) => setLiTranslate(idx, +item))
}

function start() {
  liTranslate.value.length = 0
  rollNumber.value.split('').forEach((item, idx) => setLiTranslate(idx, +item))
}

function setLiTranslate(idx: number, item: number) {
  liTranslate.value[idx] = {
    transform: `translateY(${
      (props.reverse ? (9 - +item) * rollHeightNumber.value : -item * rollHeightNumber.value) +
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
