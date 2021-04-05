<template>
  <div @click="$emit('clicked')"><slot></slot></div>
</template>

<script>
console.log("Загрузился Button");
export default {};
</script>

<style>
</style>