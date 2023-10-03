<script setup>
import { ref } from 'vue'
import InputText from 'primevue/InputText'
import Avatar from 'primevue/Avatar'
import Button from 'primevue/Button'
import Menu from 'primevue/Menu'

import ChatContactListItem from './ChatContactListItem.vue'

const messageTextInput = ref('')

const chatContactList = ref([
  {
    avatarImageUrl: '',
    contactName: 'John Doe',
    lastMessage: 'Hello, I am interesting in this giveaway from you.',
    lastMessageTime: '09:10',
    lastMessageCount: 2
  },
  {
    avatarImageUrl: '',
    contactName: 'Jane Smith',
    lastMessage: 'Hello, I am interesting in this giveaway from you.',
    lastMessageTime: '09:10',
    lastMessageCount: 1
  },
  {
    avatarImageUrl: '',
    contactName: 'Melon Man',
    lastMessage: 'Hello, I am interesting in this giveaway from you.',
    lastMessageTime: '09:10',
    lastMessageCount: 1
  }
])



const userActionsMenu = ref()
const userActions = ref([
  {
    label: 'Offer Help',
    icon: 'pi pi-thumbs-up',
    command: () => {
      console.log('Offer Help CLICKED')
    }
  },
  {
    label: 'Request Help',
    icon: 'pi pi-envelope',
    command: () => {
      console.log('Request Help CLICKED')
    }
  }
])

const toggleUserActions = (event) => {
  userActionsMenu.value.toggle(event)
}

const selectedContactName = ref()
const setSelectedContact = (name) => {
  selectedContactName.value = name
}
</script>

<template>
  <div class="chatroom-container">
    <aside class="chat-sidebar">
      <div class="chat-list-search">
        <InputText
          v-model="messageTextInput"
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
          avatarImageUrl=""
          :contactName="contact.contactName"
          :lastMessage="contact.lastMessage"
          :lastMessageTime="contact.lastMessageTime"
          :lastMessageCount="contact.lastMessageCount"
          :selectedContactName="selectedContactName"
          @click="setSelectedContact(contact.contactName)"
        />
      </ul>
    </aside>
    <main class="chat-window">
      <div class="chat-window-header">
        <div class="chat-window-header-contact">
          <Avatar label="J" shape="circle" size="large" />
          <span class="chat-window-header-contact-name">John Doe</span>
        </div>
        <div class="chat-window-header-user-actions">
          <Button
            icon="pi pi-ellipsis-v"
            severity="warning"
            text
            rounded
            aria-label="Notification"
            @click="toggleUserActions"
          />
          <Menu ref="userActionsMenu" :model="userActions" :popup="true">
            <template #item="{ item, label, props }">
              <a class="flex" v-bind="props.action">
                <span v-bind="props.icon" />
                <span v-bind="props.label">{{ label }}</span>
                <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
              </a>
            </template>
            <template #end>
              <div style="border-top: solid 1px #e2e2e2"></div>
              <button
                class="w-full p-link flex align-items-center p-2 pl-4 text-red-500 hover:surface-200 border-noround"
              >
                <i class="pi pi-ban" />
                <span class="ml-2">Block User</span>
              </button>
            </template>
          </Menu>
        </div>
      </div>
      <div class="chat-window-message-content">
        <div class="message-content-container left">
          <Avatar label="J" shape="circle" />
          <div class="recipient-message">Hello, I am interesting in this giveaway from you.</div>
        </div>
        <div class="message-content-container right">
          <Avatar label="P" shape="circle" style="background-color: #4caf4f; color: #fff" />
          <div class="sender-message">Hi! Thanks for your interest in my giveaway!</div>
        </div>
        <div class="message-content-container right">
          <Avatar label="P" shape="circle" style="background-color: #4caf4f; color: #fff" />
          <div class="sender-message">
            May I know if you are free to collect at 3pm? At Ang Mo Kio MRT station Exit B?
          </div>
        </div>
        <div class="message-content-container left">
          <Avatar label="J" shape="circle" />
          <div class="recipient-message">Yes. Sounds good to me!</div>
        </div>
        <div class="message-content-container right">
          <Avatar label="P" shape="circle" style="background-color: #4caf4f; color: #fff" />
          <div class="sender-message">Great! See you at Ang Mo Kio MRT Station Exit B 3pm!</div>
        </div>
        <div class="message-content-container left">
          <Avatar label="J" shape="circle" />
          <div class="recipient-message">Thank you. See you there!</div>
        </div>
      </div>
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

.chat-window {
  padding-top: 0;
  margin-left: var(--sidebar-width);
  position: relative;
  min-height: calc(100vh - var(--nav-height));
  width: calc(100% - var(--sidebar-width));
  overflow-y: auto;
}

.chat-window-header {
  position: fixed;
  width: calc(100% - var(--sidebar-width));
  height: var(--chat-header-height);
  background: #fff;
  border-bottom: solid 1px #dbdbdb;
  padding: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}
.chat-window-header-contact {
  display: flex;
  align-items: center;
  gap: 10px;
}

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

.chat-window-input-field {
  position: fixed;
  bottom: 0;
  border-top: solid 1px #dbdbdb;
  width: inherit;
  padding: 10px;

  display: flex;
  gap: 10px;
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
  .chat-sidebar {
    display: none;
  }

  .chat-window {
    margin-left: 0;

    width: 100%;
  }

  .chat-window-header {
    width: 100%;
  }
}
</style>
