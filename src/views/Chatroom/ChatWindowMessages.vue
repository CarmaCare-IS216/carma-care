<script setup>
import { defineProps, toRefs, ref } from 'vue'

import Avatar from 'primevue/Avatar'

const props = defineProps({
  selectedContact: Object
})

const { selectedContact } = toRefs(props)

// todo: replace with actual loggedInUser from supabase
const loggedInUser = ref({
  id: '1',
  displayName: 'Peter Parker',
  userType: 1,
  avatarImage: null
})

const chatMessages = ref([
  {
    senderId: '2',
    recipientId: '1',
    messageContent: 'Hello, I am interesting in this giveaway from you.'
  },
  {
    senderId: '1',
    recipientId: '2',
    messageContent: 'Hi! Thanks for your interest in my giveaway!'
  },
  {
    senderId: '1',
    recipientId: '2',
    messageContent:
      'May I know if you are free to collect at 3pm? At Ang Mo Kio MRT station Exit B?'
  },
  {
    senderId: '2',
    recipientId: '1',
    messageContent: 'Yes. Sounds good to me!'
  },
  {
    senderId: '1',
    recipientId: '2',
    messageContent: 'Great! See you at Ang Mo Kio MRT Station Exit B 3pm!'
  },
  {
    senderId: '2',
    recipientId: '1',
    messageContent: 'Thank you. See you there!'
  }
])

const getSenderMessageAvatar = (senderId) => {
  if (senderId === selectedContact.value.id) {
    return selectedContact.value.avatarImage
  }
  if (senderId === loggedInUser.value.id) {
    return loggedInUser.value.avatarImage
  }
  return null
}
</script>

<template>
  <div class="chat-window-message-content">
    <template v-for="(message, index) in chatMessages" :key="index">
      <div
        class="message-content-container"
        :class="{ right: message.senderId === loggedInUser.id }"
      >
        <Avatar
          v-if="getSenderMessageAvatar(message.senderId)"
          shape="circle"
          :image="getSenderMessageAvatar(message.senderId)"
        />
        <Avatar
          v-else
          label="P"
          size="medium"
          shape="circle"
          style="background-color: #4caf4f; color: #fff"
        />
        <div :class="loggedInUser.id === message.senderId ? 'sender-message' : 'recipient-message'">
          {{ message.messageContent }}
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.chat-window-message-content {
  margin-top: var(--chat-header-height);
  padding: 20px;
  overflow-y: auto;
  height: calc(
    100vh - (var(--nav-height) + var(--chat-header-height) + var(--chat-text-field-height))
  );

  display: inline-flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}

.message-content-container {
  display: inline-flex;
  height: fit-content;
  align-items: center;
  gap: 10px;
}
.message-content-container.left {
  justify-content: left;
}
.message-content-container.right {
  justify-content: right;
  flex-direction: row-reverse;
}

.recipient-message {
  padding: 10px 20px;
  width: fit-content;
  border-radius: 100px;
  background: #efefef;
  justify-content: left;
  box-shadow: 0 10px 20px rgb(153 153 153 / 30%);
}

.sender-message {
  width: fit-content;
  padding: 10px 20px;
  border-radius: 100px;
  background: var(--color-primary);
  color: #fff;
  justify-content: right;
  box-shadow: 0 7px 30px rgba(244, 133, 58, 0.5);
}
</style>
