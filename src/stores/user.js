import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      currentUser: null,
      session: null
    }
  },
  actions: {}
})
