<template>
  <ul class="base-num-roll custom" :style="{ height: rollHeight }">
    <li v-for="m in liTranslate.length" :key="m" :style="[ liTranslate[m - 1], { 'transition-duration': duration / 1000 + 's' }, { 'transition-timing-function': timeFunction } ]">
      <p v-for="n in 10" :key="n" :style="{ height: rollHeight }">{{ n - 1 }}</p>
    </li>
  </ul>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class NumberRoll extends Vue {

  private liTranslate: string[] = [];

  @Prop({
    type: [Number, String],
    required: true
  }) number!: string | number;

  @Prop({
    type: [Number, String],
    default: 2000
  }) duration!: string | number;

  @Prop({
    type: String,
    default: 'ease-in-out'
  }) timeFunction!: string;

  @Prop({
    type: [Number, String],
    default: 0
  }) minLength!: string | number;

  @Prop({
    type: String,
    required: true
  }) rollHeight!: string;

  get rollNumber() {

    return this.number.toString().padStart(+this.minLength, '0');
  }

  created() {

    this.init();
  }

  /**
   * methods
   */

  init() {

    const length = this.rollNumber.toString().length;
    const liTranslate = [];
    for(let i = 0; i < length; i++) {
      this.$set(this.liTranslate, i, { transform: 'translateY(0)' });
    }
  }

  startRoll() {

    const unit = this.rollHeight.replace(/^\d+/g, '');
    const num = +this.rollHeight.replace(new RegExp(unit, 'g'), '');

    this.rollNumber.split('').forEach((item, idx) => {
      this.$set(this.liTranslate, idx, { transform: 'translateY(' + (-item * num) + unit });
    });
  }
}
</script>

<style lang="scss">
.base-num-roll {
  margin: 0;
  padding: 0;
  list-style: none;
  display: inline-block;
  font-size: 0;
  overflow: hidden;

  li {
    display: inline-block;

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

.custom {
  border: 1px solid red;

  li {
    // transition: transform 1.5s ease-out .1s;
    transition-property: transform;
    width: 50px;
    height: 50px;
    margin: 0 5px;
  }

  p {
    border: 1px solid green;
    font-size: 16px;
  }
}
</style>