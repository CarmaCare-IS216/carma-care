import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      currentUser: {},
      session: {}
    }
  },
  actions: {}
})
