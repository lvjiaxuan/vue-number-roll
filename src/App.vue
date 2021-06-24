<template>

  <header>vue-number-roll</header>

  <number-roll start-number="11" roll-height="22px" item-class="num-item" />
</template>

<script setup lang="ts">
import NumberRoll from './components/NumberRoll.vue'

</script>

<style lang="scss">
.num-item {
  border-radius: 8px;
  width: 100px;
  margin: 10px;
  background: linear-gradient(0deg,rgba(100,184,255,1) 0%,rgba(0,120,255,1) 50%,rgba(100,184,255,1) 100%);
  font-size: 80px;
  color: #fff;
}
</style>
