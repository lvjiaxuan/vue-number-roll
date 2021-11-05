<template>
  <main>{{ foo }}-{{ haha }}</main>
</template>

<script lang="ts">
/**
 *  not support fully
 */
// import Vue, { PropType } from 'vue'
// export default Vue.extend({

//   data() {
//     return {
//       foo: 'foo'
//     }
//   },

//   props: {
//     haha: {
//       type: String as PropType<'a' | 'b' | 'c'>,
//       default: 'a',
//     },
//   },
// })

/**
 * support
 */
// import { defineComponent, PropType } from '@vue/composition-api'
// export default defineComponent({
//   data() {
//     return {
//       foo: 'foo',
//     }
//   },

//   props: {
//     haha: {
//       type: String as PropType<'a' | 'b' | 'c'>,
//       default: 'a',
//     },
//   },
// })

/**
 * not support fully
 */
// import { PropType } from 'vue'
import { PropType } from '@vue/composition-api'
export default {
  props: {
    haha: {
      type: String as PropType<'a' | 'b' | 'c'>,
      default: 'a',
    },
  },
  data() {
    return {
      foo: 'foo',
    }
  },
}
</script>
