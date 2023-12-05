<script setup lang="ts">
import { useUserStore } from '@/store/useUserStore'
import { useGameStore } from '@/store/useGameStore'
const user = useUserStore()
const game = useGameStore()
</script>

<template>
    <h1>Welcome {{ user.name }}</h1>
    <h2>Difficulty: {{ game.difficulty }}</h2>
    <button @click="game.setDifficulty(1)">easy</button>
    <button @click="game.setDifficulty(2)">hard</button>
    <router-link to="/play">Play</router-link>
</template>

<style scoped></style>