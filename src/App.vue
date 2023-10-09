<script setup>
import { onBeforeMount } from 'vue'
import { userStore } from './stores/user'
import { supabase } from './lib/supabase'

onBeforeMount(() => {
  supabase.auth.getSession().then(({ data }) => {
    userStore.currentUser = data.session
  })

  supabase.auth.onAuthStateChange((_, _session) => {
    userStore.currentUser = _session
  })
})
</script>

<template>
  <component :is="$route.meta.layout">
    <RouterView />
  </component>
</template>

<style scoped></style>
