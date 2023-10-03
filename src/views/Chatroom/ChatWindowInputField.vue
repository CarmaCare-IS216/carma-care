<script setup>
import { ref } from 'vue'

import InputText from 'primevue/InputText'
import Button from 'primevue/Button'

const messageTextInput = ref('')
</script>

<template>
  <div class="chat-window-input-field">
    <InputText
      v-model="messageTextInput"
      type="text"
      size="small"
      placeholder="Say something"
      class="w-full"
    />
    <Button icon="pi pi-send" severity="warning" rounded aria-label="Notification" />
  </div>
</template>

<style scoped>
.chat-window-input-field {
  position: fixed;
  bottom: 0;
  border-top: solid 1px #dbdbdb;
  width: inherit;
  padding: 10px;

  display: flex;
  gap: 10px;
}
</style>
