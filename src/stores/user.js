import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      currentUser: null,
      session: null,
      profile: {
        avatarUrl: null,
        username: '',
        handle: '',
        description: '',
        dietaryRestrictions: '',
        allergies: [],
        locationName: '',
        locationDescription: ''
      }
    }
  },
  actions: {}
})
