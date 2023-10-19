<script setup>
import { defineProps, toRefs } from 'vue'

// components
import ListingsFilterButton from '@/components/Listings/ListingsFilterButton.vue'
import ListingsSearchBar from './ListingsSearchBar.vue'
import ListingsCreateButton from '@/components/Listings/ListingsCreateButton.vue'

const props = defineProps({
  searchBarPlaceholder: String,
  createButtonRouteName: String
})

const { searchBarPlaceholder, createButtonRouteName } = toRefs(props)

defineEmits(["passQuery"])

</script>

<template>
  <section class="listings-header">
    <ListingsFilterButton @passQuery="(query)=>$emit('passQuery',query)"/>
    <ListingsSearchBar :placeholder="searchBarPlaceholder" />
    <ListingsCreateButton :routeName="createButtonRouteName" />
  </section>
</template>

<style scoped>
.listings-header {
  display: flex;
  justify-content: center;
  width: 100%;
  padding-right: 10px;
  padding-top: 10px;
}
</style>
