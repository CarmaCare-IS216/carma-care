import { createRouter, createWebHistory } from 'vue-router'

// Views
import GiveawaysView from '@/views/Giveaways/GiveawaysView.vue'
import CreateEditGiveawayView from '@/views/Giveaways/CreateEditGiveawayView.vue'

import RequestsView from '@/views/Requests/RequestsView.vue'
import CreateEditRequestView from '@/views/Requests/CreateEditRequestView.vue'

import ProfileView from '@/views/Profile/ProfileView.vue'
import CreateEditProfileView from '@/views/Profile/CreateEditProfileView.vue'

import ChatroomView from '@/views/Chatroom/ChatroomView.vue'

import AuthView from '@/views/Auth/AuthView.vue'

// layouts
import DefaultLayout from '@/layouts/DefaultLayout.vue'

// stores
import { useUserStore } from '../stores/user'

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
        layout: DefaultLayout,
        requiresAuth: true
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
        layout: DefaultLayout,
        requiresAuth: true
      }
    },

    {
      path: '/profile/:handle',
      name: 'Profile',
      component: ProfileView,
      meta: {
        layout: DefaultLayout,
        requiresAuth: true
      }
    },
    {
      path: '/profile/create',
      name: 'Create Profile',
      component: CreateEditProfileView,
      meta: {
        layout: DefaultLayout,
        requiresAuth: true
      }
    },

    {
      path: '/chatroom',
      name: 'Chatroom',
      component: ChatroomView,
      meta: {
        layout: DefaultLayout,
        requiresAuth: true
      }
    },

    {
      path: '/login',
      name: 'Login',
      component: AuthView,
      meta: {
        layout: DefaultLayout
      }
    },
    {
      path: '/signup',
      name: 'Signup',
      component: AuthView,
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

async function getUser(next) {
  const user = useUserStore()
  if (user.currentUser === null) {
    next('/login')
  } else {
    next()
  }
}

// auth requirements
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    getUser(next)
  } else {
    next()
  }
})

export default router
