import {
  h,
  defineComponent
} from 'vue-demi'

export default defineComponent({
  setup() {
    return h('ul', [
      h('li', 'xxx'),
      h('li', 'yyy'),
      h('li', 'zzz'),
    ])
  }
})