<script setup lang="ts">
import { reactive, ref, version, watch, defineAsyncComponent  } from 'vue'


const NumberRoll = defineAsyncComponent(() => {
  if(import.meta.env.DEV) {
    console.log('hi')
    import('./../../../dist/index.css')
    return import('./../../../src')
  } else {
    return import('vue-number-roll')
  }
})

const numberRollRef = ref<InstanceType<typeof NumberRoll>>()
const options = reactive({
  start: {
    value: 132,
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
    value: '0.5s',
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
        :start="options.start.value"
        :end="options.end.value"
        :total-length="options.totalLength.value"
        :transition-delay="options.transitionDelay.value"
        :transition-duration="options.transitionDuration.value"
        :transition-timing-function="options.transitionTimingFunction.value"
        :immediate="options.immediate.value"
        :reverse-roll-direction="options.reverseRollDirection.value"
        item-class="rounded-3 w120px text-30 mx c-white bg-linear-gradient"
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
      <label
        for="item-class"
        inline-block
        m="x3 y3"
        flex="~ items-center"
      >
        item-class = "rounded-3 w120px text-30 mx c-white bg-linear-gradient"
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

    <p text-center>
      Vue version: {{ version }}
    </p>

    <p text-center>
      <a
        href="https://lvjiaxuan.github.io/vue-number-roll/vue2"
        target="_blank"
        rel="noopener noreferrer"
        decoration-none
        italic
      >
        vue2 version
      </a>
    </p>
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

.bg-linear-gradient {
  background-image: linear-gradient(0deg, rgba(100, 184, 255, 1) 0%, rgba(0, 120, 255, 1) 50%, rgba(100, 184, 255, 1) 100%);
}
</style>
