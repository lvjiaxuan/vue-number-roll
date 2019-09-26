<template>
  <div id="app">
    <number-roll ref="number-roll" number="923" duration="1000" min-length="4" rollHeight="50px"/>
    <br>
    <button @click="go">test</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NumberRoll from './components/NumberRoll.vue';

@Component({
  components: {
    NumberRoll,
  },
})
export default class App extends Vue {

  go() {
    (<NumberRoll>this.$refs['number-roll']).startRoll();
  }
}
</script>

<style lang="scss">
</style>
