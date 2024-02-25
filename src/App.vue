<script setup>
import navTop from './components/navTop.vue';
import navLeft from './components/navLeft.vue';
import mainM from './components/mainM.vue';
</script>

<template>
  <navTop />
  <div class="m">
    <navLeft />
    <mainM />
  </div>
</template>

<style scoped>
.m {
  display: flex;
  gap: 10px;
  padding: 10px 0;
}
</style>
