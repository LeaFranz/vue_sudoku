<script setup lang="ts">
// import GameBoard from './components/GameBoard.vue'
</script>

<script setup></script>

<template>
  <router-view></router-view>
</template>

<style scoped>
main {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: calc(100vw - 4rem);
  max-height: calc(100vh - 4rem);
}

aside {
  width: 100%;
  padding: 2rem 0;
}

@media (min-width: 969px) {
  aside {
    min-width: 300px;
    padding: 0 2rem;
  }
}
</style>