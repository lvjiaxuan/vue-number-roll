<template>
  <main>
    <h1 class="title">
      vue-number-roll
    </h1>

    <section class="container">
      <number-roll
        ref="numberRollRef"
        class="custom"
        custom-class="num-item"
        :start-number="options.startNumber.value"
        :end-number="options.endNumber.value"
        :duration="options.duration.value"
        :transition-timing-function="options.transitionTimingFunction.value"
        :min-length="options.minLength.value"
        :roll-height="options.rollHeight.value"
        :reverse-direction="options.reverseDirection.value"
        :autoplay="options.autoplay.value"
      />
    </section>

    <section class="options">
      <label
        v-for="(item, key) in options"
        :key="key"
        :for="key"
      >
        {{ key }}:<input
          :id="key"
          v-model="item.value"
          :type="item.type"
        >
      </label>
    </section>

    <button @click="go">
      滚起来
    </button>
    <button @click="reset">
      重置
    </button>

    <code>{{ htmlCode }}</code>

    <code class="css-style">
      .num-item { border-radius: 8px; width: 100px; margin: 10px; background: linear-gradient(0deg, rgba(100, 184, 255,
      1) 0%, rgba(0, 120, 255, 1) 50%, rgba(100, 184, 255, 1) 100%); font-size: 80px; color: #fff; }</code>
  </main>
</template>

<script lang="ts" setup>
import NumberRoll from './components/NumberRoll.vue'
import { computed, reactive, watch, ref } from '@vue/composition-api'

/**
 * data
 */
const numberRollRef = ref<typeof NumberRoll>()
const options = reactive({
  startNumber: {
    value: 123,
    type: 'number',
  },
  endNumber: {
    value: 9876,
    type: 'number',
  },
  duration: {
    value: 2555,
    type: 'number',
  },
  transitionTimingFunction: {
    value: 'ease-in-out',
    type: 'text',
  },
  minLength: {
    value: 5,
    type: 'number',
  },
  rollHeight: {
    value: '120px',
    type: 'text',
  },
  reverseDirection: {
    value: false,
    type: 'checkbox',
  },
  autoplay: {
    value: false,
    type: 'checkbox',
  },
})

/**
 * computed
 */
const htmlCode = computed(
  () => `<number-roll
            startNum="${options.startNumber.value}"
            endNum="${options.endNumber.value}"
            duration="${options.duration.value}"
            time-function="${options.transitionTimingFunction.value}"
            min-length="${options.minLength.value}"
            roll-height="${options.rollHeight.value}"
            item-class="num-item"
            ${options.autoplay.value ? 'autoplay' : ''}
            ${options.reverseDirection.value ? 'reverse-irection' : ''} />`
)

// { [P in keyof typeof options]: typeof options[P] extends { value: infer V } ? V : never }

/**
 * watch
 */
watch(
  () => options.autoplay.value,
  newValue => sessionStorage.setItem('autoplay', newValue.toString())
)

/**
 * life cycle
 */

/**
 * init
 */
options.autoplay.value = sessionStorage.getItem('autoplay') === 'true'

/**
 * methods
 */
const go = () => {
  // @ts-ignore
  numberRollRef.value.start()
}

const reset = () => {
  // @ts-ignore
  numberRollRef.value.reset()
}
</script>

<style lang="scss">
main {
  width: 720px;
  margin: 0 auto;
}
.title {
  text-align: center;
  color: #5026a7;
  font-size: 60px;
}
.container {
  text-align: center;
}
.options {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px 0;
  label {
    display: inline-block;
    margin: 15px 30px 15px 0;
  }
  input[type='text'],
  input[type='number'] {
    display: inline-block;
    padding: 4px 7px;
    width: 70px;
    height: 25px;
    cursor: text;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.65);
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    transition: all 0.3s;
  }
  input[type='checkbox'] {
    margin: 0;
    width: 25px;
    height: 25px;
  }
}
button {
  margin-top: 10px;
  color: #470938;
  width: 100%;
  margin-bottom: 0;
  font-weight: 500;
  text-align: center;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  line-height: 1.5;
  padding: 10px 15px;
  font-size: 16px;
  border-radius: 4px;
  user-select: none;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  background-color: #fff;
  border-color: #d9d9d9;
  &:hover {
    color: #1a3e59;
    background-color: #f2d6eb;
  }
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
  font-size: 14px;
  &.css-style {
    white-space: pre-wrap;
  }
}
.num-item {
  border-radius: 8px;
  width: 100px;
  margin: 10px;
  background: linear-gradient(0deg, rgba(100, 184, 255, 1) 0%, rgba(0, 120, 255, 1) 50%, rgba(100, 184, 255, 1) 100%);
  font-size: 80px;
  color: #fff;
}
</style>
