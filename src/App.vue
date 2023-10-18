<script setup>
import { onMounted } from 'vue'

// supabase
import { supabase } from './lib/supabase'

// stores
import { useUserStore } from './stores/user'

const user = useUserStore()

onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    if (data.session !== null) {
      user.currentUser = data.session.user
      user.session = data.session
      user.fetchUserProfile(data.session.user.id).then((data) => {
        user.profile = data
      })
    }
  })

  supabase.auth.onAuthStateChange((_, _session) => {
    if (_session !== null) {
      user.currentUser = _session.user
      user.session = _session
    }
  })
})
</script>

<template>
  <component :is="$route.meta.layout">
    <RouterView />
  </component>
</template>

<style scoped></style>
