<script setup>
import { defineProps, toRefs, ref } from 'vue'
import ChatContactListItem from './ChatContactListItem.vue'

import InputText from 'primevue/InputText'

const selectedContactName = ref()
const searchContactInput = ref('')
const chatContactList = ref([
  {
    contactName: 'John Doe',
    avatarImage: 'https://avatarfiles.alphacoders.com/342/342016.jpg',
    lastMessage: 'Hello, I am interesting in this giveaway from you.',
    lastMessageTime: '09:10',
    lastMessageCount: 2
  },
  {
    contactName: 'Jane Smith',
    avatarImage: null,
    lastMessage: 'Hello, I am interesting in this giveaway from you.',
    lastMessageTime: '09:10',
    lastMessageCount: 1
  },
  {
    contactName: 'Melon Man',
    avatarImage: null,
    lastMessage: 'Hello, I am interesting in this giveaway from you.',
    lastMessageTime: '09:10',
    lastMessageCount: 1
  }
])

const setSelectedContact = (name) => {
  selectedContactName.value = name
}
</script>

<template>
  <aside class="chat-sidebar">
    <div class="chat-list-search">
      <InputText
        v-model="searchContactInput"
        type="text"
        size="small"
        placeholder="Search"
        class="w-full"
      />
    </div>
    <ul class="chat-contact-list">
      <ChatContactListItem
        v-for="(contact, index) in chatContactList"
        :key="index"
        :avatarImage="contact.avatarImage"
        :contactName="contact.contactName"
        :lastMessage="contact.lastMessage"
        :lastMessageTime="contact.lastMessageTime"
        :lastMessageCount="contact.lastMessageCount"
        :selectedContactName="selectedContactName"
        @click="setSelectedContact(contact.contactName)"
      />
    </ul>
  </aside>
</template>

<style scoped>
.chat-sidebar {
  position: fixed;
  width: var(--sidebar-width);
  height: calc(100vh - calc(--nav-height));
  background: #efefef;
}

.chat-list-search {
  background: #fff;
  border-right: solid 1px #dbdbdb;
  border-bottom: solid 1px #dbdbdb;
  height: var(--chat-header-height);
  padding: 10px;

  display: flex;
  align-items: center;
  position: sticky;
}

.chat-contact-list {
  overflow-y: auto;
  list-style-type: none;
  padding: 0;
  margin: 0;
  height: calc(100vh - (var(--nav-height) + var(--chat-header-height)));
}

@media screen and (max-width: 768px) {
  .chat-sidebar {
    display: none;
  }
}
</style>
