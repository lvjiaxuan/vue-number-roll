<script lang="ts" setup>
const isDark = useDark()
</script>

<template>
  <button
    i-ri-sun-line
    dark:i-ri-moon-line
    icon-btn
    title="Toggle Color Mode" @click="isDark = !isDark" />
  <Playground/>
</template>
