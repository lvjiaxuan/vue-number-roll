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
  }) startNum!: string | number;

  @Prop({
    type: [Number, String],
    required: true
  }) endNum!: string | number;

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
    required: true,
    validator(value) {

      if(!/^\d/g.test(value) || /[a-z]+$/g.test(value)) return false;
      return true;
    }
  }) rollHeight!: string;

  get rollNumber() {

    return this.endNum.toString().padStart(+this.minLength, '0');
  }

  get rollHeighUnit() {

    return this.rollHeight.replace(/^\d+/g, '');
  }

  get rollHeightNum() {

    return +this.rollHeight.replace(new RegExp(this.rollHeighUnit, 'g'), '');
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

    this.startNum.toString().split('').forEach((item, idx) => this.setLiTranslate(idx, item));
  }

  startRoll() {

    this.rollNumber.split('').forEach((item, idx) => this.setLiTranslate(idx, item));
  }

  setLiTranslate(idx: number, item: number | string) {

    this.$set(this.liTranslate, idx, { transform: 'translateY(' + (-item * this.rollHeightNum) + this.rollHeighUnit })
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
    transition-property: transform;

    p {
      font-size: initial;
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