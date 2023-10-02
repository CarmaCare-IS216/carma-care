<script setup>
import NavBar from '@/components/NavBar/NavBar.vue'
import NavBarMobileHeader from '../components/NavBarMobile/NavBarMobileHeader.vue'
import NavBarMobileMenu from '../components/NavBarMobile/NavBarMobileMenu.vue'
import { useMatchMedia, screenSize } from '@/composables/useMatchMedia'

const tabletScreen = useMatchMedia(screenSize.tablet)
</script>

<template>
  <div>
    <header>
      <template v-if="tabletScreen">
        <NavBarMobileHeader />
        <template v-if="$route.name !== 'Create Giveaway' && $route.name !== 'Create Request'">
          <NavBarMobileMenu />
        </template>
      </template>
      <template v-else>
        <NavBar />
      </template>
    </header>

    <!-- output the page content -->
    <div>
      <router-view />
    </div>

    <!-- footer -->
    <footer></footer>
  </div>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  z-index: 999;
}
</style>
