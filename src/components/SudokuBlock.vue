<script setup lang="ts">
import { computed, ref } from 'vue';
import NumberBlock from './NumberBlock.vue';

const number = ref(6)
const isGreatherThan5 = computed(() => number.value > 5 ? true : false)

</script>

<template>
    <div class="sudoku-block" v-if="isGreatherThan5">
        <NumberBlock v-for="n in 9" :key="n" />
    </div>
</template>

<style scoped>
div {
    border: 1px solid blue;
}
</style>
