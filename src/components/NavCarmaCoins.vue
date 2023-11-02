<script setup>
import { ref, onMounted } from 'vue'
import { useUserStore } from '../stores/user'
const user = useUserStore()
const userCarma = ref()

onMounted( async () => {
  user.profile = await user.fetchUserProfile()
  userCarma.value = user.profile.currBalanceCarma
})

</script>

<template>
  <div class="nav-btns-carma-coins">
    <i class="pi pi-hourglass"></i>
    <span>{{ userCarma? userCarma : 0 }}</span>
  </div>
</template>

<style scoped>
.nav-btns-carma-coins {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--color-primary);
}
</style>
