<template>
  <number-roll />
</template>

<script setup lang="ts">
import NumberRoll from './components/NumberRoll.vue'

</script>

<style lang="scss">
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
