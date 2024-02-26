<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <nav class="mainM">
    <RouterView />
  </nav>
</template>

<style scoped>
.mainM {
  min-width: var(--minMax_widthMainM);
  max-width: var(--minMax_widthMainM);
  min-height: var(--minMax_heightMainM);
  max-height: var(--minMax_heightMainM);
  background-color: var(--dark2);
}

@media only screen and (max-width: 618px) {
  .mainM {
  min-width: var(--minMax_widthMobileMainM);
  max-width: var(--minMax_widthMobileMainM);
  }
}
</style>