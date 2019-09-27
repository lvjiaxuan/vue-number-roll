<template>
  <div id="app">

    <h1 class="title">vue-number-roll</h1>

    <section class="container">
      <number-roll class="custom" ref="number-roll"
        :start-num="options.startNum.value"
        :end-num="options.endNum.value"
        :duration="options.duration.value"
        :time-function="options.timeFunction.value"
        :min-length="options.minLength.value"
        :roll-height="options.rollHeight.value"
        :autoplay="options.autoplay.value"
        :reverse="options.reverse.value"
        item-class="num-item"/>
    </section>

    <section class="options">

      <label v-for="(item, key) in options" :key="key" :for="key">
        {{ key }}:
        <input :type="item.type" :id="key" v-model="item.value"/>
      </label>

    </section>

    <button @click="go">滚起来</button>
    <button @click="reset">重置</button>

    <code>{{ codeText }}</code>

<code class="css-style">.num-item {
  width: 100px;
  margin: 10px;
  background: linear-gradient(0deg,rgba(100,184,255,1) 0%,rgba(0,120,255,1) 50%,rgba(100,184,255,1) 100%);
  border-radius: 8px;
  font-size: 80px;
  color: #fff;
}</code>

  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import NumberRoll from './components/NumberRoll.vue';

@Component({
  components: {
    NumberRoll,
  },
})
export default class App extends Vue {

  options: any  = {
    duration: {
      value: 2555,
      type: 'number'
    },
    timeFunction: {
      value: 'ease-in-out',
      type: 'text'
    },
    minLength: {
      value: 5,
      type: 'number'
    },
    rollHeight: {
      value: '120px',
      type: 'text'
    },
    startNum: {
      value: 22,
      type: 'number'
    },
    endNum: {
      value: 123,
      type: 'number'
    },
    reverse: {
      value: false,
      type: 'checkbox'
    },
    autoplay: {
      value: false,
      type: 'checkbox'
    }
  }

  get codeText() {

    return `<number-roll
            startNum="${ this.options.startNum.value }"
            endNum="${ this.options.endNum.value }"
            duration="${ this.options.duration.value }"
            time-function="${ this.options.timeFunction.value }"
            min-length="${ this.options.minLength.value }"
            roll-height="${ this.options.rollHeight.value }"
            item-class="num-item"
            ${ this.options.autoplay.value ? 'autoplay' : '' }
            ${ this.options.reverse.value ? 'reverse' : '' } />`;
  }

  @Watch('options.autoplay.value')
  onAutoplayChange(value: boolean) {
    sessionStorage.setItem('autoplay', value.toString());
  }

  created() {
    const autoplay = sessionStorage.getItem('autoplay');
    if(autoplay === 'true') {
      this.options.autoplay.value = true;
    } else {
      this.options.autoplay.value = false;
    }
  }

  go() {
    (<NumberRoll>this.$refs['number-roll']).start();
  }

  reset() {
    (<NumberRoll>this.$refs['number-roll']).reset();
  }
}
</script>

<style lang="scss">
#app {
  max-width: 888px;
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

  input[type=text], input[type=number] {
    display: inline-block;
    padding: 4px 7px;
    width: 70px;
    height: 25px;
    cursor: text;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(0, 0, 0, .65);
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    transition: all .3s;
  }

  input[type=checkbox] {
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
  transition: all .3s cubic-bezier(.645, .045, .355, 1);
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
  background: linear-gradient(0deg,rgba(100,184,255,1) 0%,rgba(0,120,255,1) 50%,rgba(100,184,255,1) 100%);
  font-size: 80px;
  color: #fff;
}
</style>