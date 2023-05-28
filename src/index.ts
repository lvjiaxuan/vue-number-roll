import {
  computed,
  defineComponent,
  h,
  isVue2,
  onMounted,
  ref,
  watch,
} from 'vue-demi'

let rollForVue2: () => unknown
let resetForVue2: () => unknown

export default defineComponent({
  name: 'VueNumberRoll',

  props: {
    start: {
      // The start number.
      type: [ Number, String ],
      default: 0,
      validator: (value: number | string) => Number.isInteger(+value) && +value >= 0,
    },
    end: {
      // The end number.
      type: [ Number, String ],
      default: 0,
      validator: (value: number | string) => Number.isInteger(+value) && +value >= 0,
    },
    totalLength: {
      // The total length of number, padding start with `0`.
      // It would be ignored, if it is less than the start number and the end number
      type: [ Number, String ],
      default: 0,
      validator: (value: number | string) => Number.isInteger(+value) && +value >= 0,
    },
    reverseRollDirection: {
      // Reverse the direction of the rolling.
      type: Boolean,
      default: false,
    },
    immediate: {
      // Set `true` to roll immediately on mounted.
      type: Boolean,
      default: false,
    },
    itemClass: {
      // Set style to number item, like background-color/border/font-size, etc.
      type: String,
      default: '',
    },
    transitionDuration: {
      // The value is same as `transition-duration`.
      type: String,
      default: '3s',
    },
    transitionTimingFunction: {
      // The value is same as `transition-timing-function`.
      type: String,
      default: 'ease-in-out',
    },
    transitionDelay: {
      // The value is same as `transition-delay`.
      type: String,
      default: '0',
    },
  },

  methods: {
    roll() {
      rollForVue2 && rollForVue2()
    },
    reset() {
      resetForVue2 && resetForVue2()
    },
  },

  setup(props, { expose }) {
    const itemTranslateYs = ref<{ transform: string }[]>([])
    function init() {
      itemTranslateYs.value.length = 0
      props.start
        .toString()
        .padStart(+props.totalLength, '0')
        .split('')
        .forEach((number, idx) => setItemTranslateY(idx, +number))
    }

    const endNumberWithPadding = computed(() => props.end.toString().padStart(+props.totalLength, '0'))
    function roll() {
      itemTranslateYs.value.length = 0
      endNumberWithPadding.value.split('').forEach((number, idx) => setItemTranslateY(idx, +number))
    }

    const vueNumberRollRef = ref<HTMLElement | null>(null)
    const itemHeightNumber = computed(() =>
      (vueNumberRollRef.value?.children[0]?.children[0]?.children[0] as HTMLElement)?.offsetHeight ?? 0)

    function setItemTranslateY(idx: number, number: number) {
      itemTranslateYs.value[idx] = {
        transform: `translateY(${
          (props.reverseRollDirection
            ? (number - 9) * itemHeightNumber.value
            : -number * itemHeightNumber.value).toString() + 'px'
        })`,
      }
    }

    const isInitialized = ref(false)
    const stop = watch(itemHeightNumber, _itemHeightNumber => {
      if (_itemHeightNumber > 0) {
        stop()
        init()
        // void nextTick(() => window.requestAnimationFrame(() => isInitialized.value = true))
        setTimeout(() => isInitialized.value = true)
      }
    })
    watch([
      () => props.start,
      () => props.totalLength,
      () => props.reverseRollDirection,
    ], init, { immediate: true })

    onMounted(() => {
      if (props.immediate) {
        const stop = watch(isInitialized, _isInitialized => {
          stop()
          _isInitialized && roll()
        })
      }
    })

    // These two methods were set at methods, working as an alias, for the lack of Intellisense.
    expose({ roll, reset: init })

    if (isVue2) {
      rollForVue2 = roll
      resetForVue2 = init
    }

    return () => h(
      'ul',
      {
        class: 'vue-number-roll-reset m0 p0 list-none overflow-hidden inline-flex',
        ref: vueNumberRollRef,
      },
      itemTranslateYs.value.map((_, index) => h(
        'li',
        {
          class: `${ props.itemClass } mt0 mb0`,
          style: { height: itemHeightNumber.value.toString() + 'px' },
        },
        [
          h(
            'div',
            {
              class: 'flex-(~ justify-center items-center box-border)',
              style: [
                itemTranslateYs.value[index],
                isInitialized.value ? {
                  'transition-duration': props.transitionDuration,
                  'transition-timing-function': props.transitionTimingFunction,
                  'transition-delay': props.transitionDelay,
                } : {},
              ],
            },
            [ ...new Array<void>(10) ].map((_, index) => h(
              'div',
              { class: [ 'lh-none' /* { 'c-transparent': isColorTransparent.value }*/ ] },
              `${ props.reverseRollDirection ? 9 - index : index }`,
            )),
          ),
        ],
      )),
    )
  },
})
