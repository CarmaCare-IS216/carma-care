<script setup>
import { ref } from 'vue'
import Button from 'primevue/Button'
import OverlayPanel from 'primevue/OverlayPanel'

const notificationMenu = ref()

const toggleNotification = (event) => {
  notificationMenu.value.toggle(event)
}
</script>

<template>
  <div class="nav-bar-notification">
    <Button
      icon="pi pi-bell"
      severity="warning"
      rounded
      outlined
      aria-label="Notification"
      @click="toggleNotification"
    />
  </div>
  <OverlayPanel ref="notificationMenu">Menu</OverlayPanel>
</template>

<style scoped>
.nav-bar-notification {
  display: flex;
  justify-content: right;
}
</style>
