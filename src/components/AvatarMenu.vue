<script setup>
import { ref } from 'vue'

// router
import router from '../router'

// supabase
import { supabase } from '../lib/supabase'

// composables
import { useMatchMedia, screenSize } from '../composables/useMatchMedia'

// primevue
import Avatar from 'primevue/Avatar'
import Menu from 'primevue/Menu'

// custom components
import NavCarmaCoins from './NavCarmaCoins.vue'

// stores
import { useUserStore } from '../stores/user'

const user = useUserStore()

const menu = ref()
const items = ref([
  {
    label: 'My Profile',
    icon: 'pi pi-user',
    command: () => {
      router.push({ path: '/profile/@peter-parker' })
    }
  },
  {
    label: 'My Giveaways',
    icon: 'pi pi-gift',
    command: () => {
      console.log('My Giveaways CLICKED')
    }
  },
  {
    label: 'My Requests',
    icon: 'pi pi-megaphone',
    command: () => {
      console.log('My Requests CLICKED')
    }
  },
  {
    label: 'Chatroom',
    icon: 'pi pi-comments',
    command: () => {
      router.push({ name: 'Chatroom' })
    }
  }
])

const toggle = (event) => {
  menu.value.toggle(event)
}

const handleLogout = async () => {
  const { error } = await supabase.auth.signOut()

  if (error) {
    console.log(error)
  } else {
    console.log('Logout successfully')
    user.currentUser = null
    router.push({ name: 'Login' })
  }
}

const tabletScreen = useMatchMedia(screenSize.tablet)
</script>

<template>
  <div class="nav-btns-avatar-menu">
    <div class="nav-btns-avatar" @click="toggle">
      <Avatar
        label="P"
        size="medium"
        shape="circle"
        style="background-color: #4caf4f; color: #fff"
      />
      <div v-if="!tabletScreen">
        <span class="name">Peter Parker</span>
      </div>
    </div>

    <Menu ref="menu" :model="items" :popup="true">
      <template #start>
        <button
          class="w-full p-link flex flex-column justify-content-center p-2 pl-4 text-color hover:surface-200 border-noround"
        >
          <NavCarmaCoins />
          <div class="text-orange-500">Donate Carma</div>
        </button>
        <div style="border-bottom: solid 1px #e2e2e2"></div>
      </template>
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
          @click="handleLogout"
          class="w-full p-link flex align-items-center p-2 pl-4 text-color hover:surface-200 border-noround"
        >
          <i class="pi pi-sign-out text-red-500" />
          <span class="ml-2 text-red-500">Log Out</span>
        </button>
      </template>
    </Menu>
  </div>
</template>

<style scoped>
.nav-btns-avatar {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.nav-btns-avatar .name {
  padding-left: 10px;
}

@media screen and (max-width: 1260px) {
  .nav-btns-avatar .name {
    display: none;
  }
}
</style>
