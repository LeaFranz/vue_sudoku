<script setup lang="ts">
import GameBoard from './GameBoard.vue'
import { useUserStore } from '@/store/useUserStore'
import { useGameStore } from '@/store/useGameStore'
const user = useUserStore()
const game = useGameStore()
</script>

<template>
    <main>
        <GameBoard />
    </main>
    <aside>
        <router-link to="/">Back</router-link>
        <header>
            <h1>Sudoku :D</h1>
            <h2>Player {{ user.name }}</h2>
            <h2>Difficulty: {{ game.getDifficultyLabel }}</h2>
        </header>
    </aside>
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