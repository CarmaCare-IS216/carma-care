<script setup>
import { defineProps, toRefs } from 'vue'
import InputText from 'primevue/InputText'

const props = defineProps({
  placeholder: String
})
const { placeholder } = toRefs(props)
</script>

<template>
  <span class="p-input-icon-left listings-header-search-container">
    <i class="pi pi-search" />
    <InputText class="listings-header-search" type="text" :placeholder="placeholder" />
  </span>
</template>

<style scoped>
.listings-header-search-container {
  width: 100%;
  max-width: 500px;
}

.listings-header-search {
  width: 100%;
  border-radius: 100px;
}

@media screen and (max-width: 768px) {
  .listings-header-search-container {
    max-width: unset;
  }
}
</style>
