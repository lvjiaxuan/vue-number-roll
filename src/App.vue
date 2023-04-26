<script setup lang="ts">
import NumberRoll from './NumberRoll.vue'
import { reactive, ref, watch } from 'vue-demi'

/**
 * data
 */
const numberRollRef = ref<InstanceType<typeof NumberRoll>>()
type OptionsType = Partial<Record<
  keyof InstanceType<typeof NumberRoll>['$props'],
  { value: number, type: 'number' }
    | { value: string, type: 'text' }
    | { value: boolean, type: 'checkbox' }
>>
const options = reactive({
  start: {
    value: 123,
    type: 'number',
  },
  end: {
    value: 9876,
    type: 'number',
  },
  totalLength: {
    value: 5,
    type: 'number',
  },
  transitionDelay: {
    value: '0',
    type: 'text',
  },
  transitionDuration: {
    value: '2555ms',
    type: 'text',
  },
  transitionTimingFunction: {
    value: 'ease-in-out',
    type: 'text',
  },
  itemHeightWithUnit: {
    value: '120px',
    type: 'text',
  },
  reverseRollDirection: {
    value: false,
    type: 'checkbox',
  },
  immediate: {
    value: false,
    type: 'checkbox',
  },
})

watch(
  () => options.immediate.value,
  newValue => sessionStorage.setItem('immediate', (!!newValue).toString()),
)

options.immediate.value = sessionStorage.getItem('immediate') === 'true'
</script>

<template>
  <main
    m="xa y0"
    w-250
  >
    <h1 text="~ center purple-800 6xl">
      <a
        href="https://github.com/lvjiaxuan/vue-number-roll"
        target="_blank"
        rel="noopener noreferrer"
        decoration-none
        italic
      >vue-number-roll</a>
      <sub text="0.35em">
        under
        <a
          href="https://github.com/vueuse/vue-demi"
          target="_blank"
          rel="noopener noreferrer"
          decoration-none
          italic
        >
          vue-demi
        </a>
      </sub>
    </h1>

    <section
      text-center
      mb5
    >
      <number-roll
        ref="numberRollRef"
        :start="options.start!.value"
        :end="options.end!.value"
        :total-length="options.totalLength.value"
        :item-height-with-unit="options.itemHeightWithUnit.value"
        :transition-delay="options.transitionDelay.value"
        :transition-duration="options.transitionDuration.value"
        :transition-time-function="options.transitionTimingFunction.value"
        :immediate="options.immediate.value"
        :reverse-roll-direction="options.reverseRollDirection.value"
        item-class="item-class"
      />
    </section>

    <section
      flex="~ wrap justify-center"
      my5
    >
      <label
        v-for="(value, key) in options"
        :key="key"
        inline-block
        m="x3 y3"
        flex="~ items-center"
        :for="key"
      >
        {{ key }}&nbsp;&nbsp;<input
          :id="key"
          v-model="value.value"
          :type="value.type"
          class="[&[type=(number text)]]:(inline-block
            py-2
            px-1.5
            w-20
            h-5
            text-base
            c-neutral-950
            b-#d9d9d9
            b-solid
            b
            rd
            transition-all
            duration-30
          ) [&[type=checkbox]]:(m-0 w-4 h-4)"
        >
      </label>
    </section>

    <div flex="~ justify-between">
      <button
        class="btn"
        @click="numberRollRef!.roll"
      >
        Let's roll
      </button>
      <button
        class="btn"
        @click="numberRollRef!.reset"
      >
        Reset
      </button>
    </div>

    <code class="css-style">
      .item-class {
      border-radius: 8px;
      width: 100px;
      margin: 10px;
      background: linear-gradient(0deg, rgba(100, 184, 255, 1) 0%, rgba(0, 120, 255, 1) 50%, rgba(100, 184, 255, 1) 100%);
      font-size: 80px;
      color: #fff;
      }
    </code>
  </main>
</template>

<style lang="scss">
.btn {
  @apply m-1 c-dark font-bold text-center touch-manipulation
    flex-auto
    cursor-pointer bg-none b b-solid b-transparent
    ws-nowrap lh-normal py3 text-lg rounded select-none
    hover:(c-rose bg-pink-200)
}

code {
  margin-top: 25px;
  display: block;
  padding: 8px 15px;
  background-color: #f6f8fa;
  border-radius: 5px;
  border: 1px solid #e5e5e5;
  overflow-x: auto;
  color: #333;
  font-size: 16px;
  line-height: 1.5;
}
.item-class {
  border-radius: 8px;
  width: 100px;
  margin: 10px;
  background: linear-gradient(0deg, rgba(100, 184, 255, 1) 0%, rgba(0, 120, 255, 1) 50%, rgba(100, 184, 255, 1) 100%);
  font-size: 80px;
  @apply c-white;
  // color: #fff;
  // height: 120px;
}
</style>
