import { defineStore } from 'pinia'
import { supabase } from '../lib/supabase'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      currentUser: null,
      session: null,
      profile: null
      // {
      //   avatarUrl: null,
      //   username: '',
      //   handle: '',
      //   description: '',
      //   dietaryRestrictions: '',
      //   allergies: [],
      //   locationName: '',
      //   locationDescription: ''
      // }
    }
  },
  actions: {
    async fetchUserProfile(id) {
      try {
        const { data, error } = await supabase
          .from('userProfiles')
          .select('*')
          .eq('id', id)
          .single()

        if (error) {
          // Handle the error here
          console.error('Error fetching user profiles:', error.message)
          return null
        } else {
          return data
        }
      } catch (err) {
        console.error('An error occurred:', err)
      }
    }
  }
})
