<script setup>
// import '../../components/Listings/Listings.css'
// import ListingsFilterButton from '../../components/Listings/ListingsFilterButton.vue'
// import ListingsSearchBar from '../../components/Listings/ListingsSearchBar.vue'
// import ListingsCreateButton from '../../components/Listings/ListingsCreateButton.vue'

import ListingsHeader from '../../components/Listings/ListingsHeader.vue'
</script>

<template>
  <main class="requests">
    <!-- <section class="listings-header">
      <ListingsFilterButton />
      <ListingsSearchBar placeholder="Search Requests" />
      <ListingsCreateButton routeName="Create Request" />
    </section> -->
    <ListingsHeader searchBarPlaceholder="Search Requests" createButtonRouteName="Create Request" />
  </main>
</template>

<style scoped></style>
