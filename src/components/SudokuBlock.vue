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
.sudoku-block {
    border: 1px solid black;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    height: 100%;
}
</style>
