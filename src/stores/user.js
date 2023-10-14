import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      currentUser: reactive({}),
      session: reactive({})
    }
  },
  actions: {}
})
