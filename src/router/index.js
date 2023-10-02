import { createRouter, createWebHistory } from 'vue-router'

// Views
import GiveawaysView from '@/views/Giveaways/GiveawaysView.vue'
import CreateEditGiveawayView from '@/views/Giveaways/CreateEditGiveawayView.vue'

import RequestsView from '@/views/Requests/RequestsView.vue'
import CreateEditRequestView from '@/views/Requests/CreateEditRequestView.vue'

import ProfileView from '@/views/Profile/ProfileView.vue'
import CreateEditProfileView from '@/views/Profile/CreateEditProfileView.vue'

import ChatroomView from '@/views/Chatroom/ChatroomView.vue'

// layouts
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Giveaways',
      component: GiveawaysView,
      meta: {
        layout: DefaultLayout
      }
    },
    {
      path: '/giveaways/create',
      name: 'Create Giveaway',
      component: CreateEditGiveawayView,
      meta: {
        layout: DefaultLayout
      }
    },

    {
      path: '/requests',
      name: 'Requests',
      component: RequestsView,
      meta: {
        layout: DefaultLayout
      }
    },
    {
      path: '/requests/create',
      name: 'Create Request',
      component: CreateEditRequestView,
      meta: {
        layout: DefaultLayout
      }
    },

    {
      path: '/profile/:handle',
      name: 'Profile',
      component: ProfileView,
      meta: {
        layout: DefaultLayout
      }
    },
    {
      path: '/profile/create',
      name: 'Create Profile',
      component: CreateEditProfileView,
      meta: {
        layout: DefaultLayout
      }
    },

    {
      path: '/chatroom',
      name: 'Chatroom',
      component: ChatroomView,
      meta: {
        layout: DefaultLayout
      }
    }

    // {
    //   path: '/requests',
    //   name: 'Requests',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
