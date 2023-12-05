import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const name = 'lea'
  return { name }
})
