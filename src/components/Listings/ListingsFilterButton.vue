<script setup>
import { ref } from 'vue'
import { useMatchMedia, screenSize } from '../../composables/useMatchMedia'
import Button from 'primevue/Button'
import Menu from 'primevue/Menu'

const tabletScreen = useMatchMedia(screenSize.tablet)

const filterMenu = ref()
const filterMenuItems = ref([
  {
    label: 'Filter Options',
    items: [
      {
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {}
      },
      {
        label: 'Delete',
        icon: 'pi pi-times',
        command: () => {}
      }
    ]
  }
])

const toggleFilterMenu = (event) => {
  filterMenu.value.toggle(event)
}
</script>

<template>
  <div v-if="tabletScreen">
    <Button icon="pi pi-sliders-h" text rounded aria-label="Filter" @click="toggleFilterMenu" />
  </div>
  <div v-else>
    <Button
      class="button"
      icon="pi pi-sliders-h"
      label="Filters"
      rounded
      link
      @click="toggleFilterMenu"
    />
  </div>
  <Menu ref="filterMenu" id="overlay_menu" :model="filterMenuItems" :popup="true" />
</template>

<style scoped></style>
