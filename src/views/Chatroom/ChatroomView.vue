<script setup>
import { ref } from 'vue'

import ChatContactList from './ChatContactList.vue'
import ChatWindowHeader from './ChatWindowHeader.vue'
import ChatWindowMessages from './ChatWindowMessages.vue'
import ChatWindowInputField from './ChatWindowInputField.vue'

const selectedContact = ref({
  id: '2',
  displayName: 'John Doe',
  userType: 1,
  avatarImage: 'https://avatarfiles.alphacoders.com/342/342016.jpg'
})
</script>

<template>
  <div class="chatroom-container">
    <ChatContactList />

    <main class="chat-window">
      <ChatWindowHeader :selectedContact="selectedContact" />

      <ChatWindowMessages :selectedContact="selectedContact" />

      <ChatWindowInputField />
    </main>
  </div>
</template>

<style scoped>
.chatroom-container {
  padding-top: 65px;
  position: relative;

  --sidebar-width: 350px;
  --chat-header-height: 70px;
  --nav-height: 65px;
  --chat-text-field-height: 70px;
}

.chat-window {
  padding-top: 0;
  margin-left: var(--sidebar-width);
  position: relative;
  min-height: calc(100vh - var(--nav-height));
  width: calc(100% - var(--sidebar-width));
  overflow-y: auto;
}

@media screen and (max-width: 768px) {
  .nav-mobile-header {
    display: none;
  }
  .nav-bar-mobile {
    display: none;
  }

  .chatroom-container {
    margin-top: 0;
  }

  .chat-window {
    margin-left: 0;

    width: 100%;
  }
}
</style>
