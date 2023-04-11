<script lang="ts" setup>
import { computed, onMounted, ref, toRefs, watch } from 'vue'

const props = defineProps({
  startNumber: {
    type: [ Number, String ],
    default: 0,
    validator: (value: number | string) => Number.isInteger(+value) && +value >= 0,
  },
  endNumber: {
    type: [ Number, String ],
    default: 0,
    validator: (value: number | string) => Number.isInteger(+value) && +value >= 0,
  },
  minLength: {
    type: [ Number, String ],
    default: 0,
    validator: (value: number | string) => Number.isInteger(+value) && +value >= 0,
  },
  rollHeight: {
    type: String,
    required: true,
  },
  reverseDirection: {
    type: Boolean,
    default: false,
  },
  autoplay: {
    type: Boolean,
    default: false,
  },
  numberClass: {
    type: String,
    default: '',
  },
  transitionDuration: {
    type: [ Number, String ],
    default: 3000,
    validator: (value: number | string) => Number.isInteger(+value) && +value >= 0,
  },
  transitionTimingFunction: {
    type: String,
    default: 'ease-in-out',
    validator: (value: string) =>
      [ 'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out' ].includes(value) || value.includes('cubic-bezier'),
  },
  transitionDelay: {
    type: [ Number, String ],
    default: 0,
    validator: (value: number | string) => Number.isInteger(+value) && +value >= 0,
  },
})


const splitNumbers = ref<{ transform: string }[]>([])
function init() {
  splitNumbers.value.length = 0
  props.startNumber
    .toString()
    .padStart(+props.minLength, '0')
    .split('')
    .forEach((number, idx) => setSingleTranslate(idx, +number))
}


const endNumberPadding = computed(() => props.endNumber.toString().padStart(+props.minLength, '0'))
function start() {
  splitNumbers.value.length = 0
  endNumberPadding.value.split('').forEach((number, idx) => setSingleTranslate(idx, +number))
}

const rollHeightUnit = computed(() => props.rollHeight.replace(/\d/g, ''))
const rollHeightNumber = computed(() => +props.rollHeight.replace(new RegExp(rollHeightUnit.value, 'g'), ''))
function setSingleTranslate(idx: number, number: number) {
  splitNumbers.value[idx] = {
    transform: `translateY(${
      (props.reverseDirection ? (+number - 9) * rollHeightNumber.value : -number * rollHeightNumber.value) +
      rollHeightUnit.value
    })`,
  }
}

/**
 * watch
 */
watch([ () => props.startNumber, () => props.rollHeight, () => props.minLength, () => props.reverseDirection ], init, { immediate: true })

/**
 * life cycle
 */
onMounted(() => props.autoplay && window.requestAnimationFrame(start))

/**
 * expose
 */
defineExpose({ start, reset: init })
</script>

<template>
  <ul
    class="base-num-roll"
    :style="{ height: rollHeight }"
  >
    <li
      v-for="index in splitNumbers.length"
      :key="index"
      :class="numberClass"
    >
      <div
        :style="[
          splitNumbers[index - 1],
          { 'transition-duration': +transitionDuration / 1000 + 's' },
          { 'transition-timing-function': transitionTimingFunction },
        ]"
      >
        <p
          v-for="n in 10"
          :key="n"
          :style="{ height: rollHeight }"
        >
          {{ reverseDirection ? 10 - n : n - 1 }}
        </p>
      </div>
    </li>
  </ul>
</template>

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
