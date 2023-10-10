<script setup>
import { onBeforeMount } from 'vue'

// supabase
import { supabase } from './lib/supabase'

// stores
import { useUserStore } from './stores/user'

const user = useUserStore()

onBeforeMount(() => {
  supabase.auth.getSession().then(({ data }) => {
    user.currentUser = data.user
    user.session = data.session
  })

  supabase.auth.onAuthStateChange((_, _session) => {
    user.currentUser = _session.user
    user.session = _session
  })
})
</script>

<template>
  <component :is="$route.meta.layout">
    <RouterView />
  </component>
</template>

<style scoped></style>
