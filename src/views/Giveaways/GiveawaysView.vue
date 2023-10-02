<script setup>
import ListingsHeader from '../../components/Listings/ListingsHeader.vue'
import ListingsCard from '../../components/Listings/ListingsCard.vue'
</script>

<template>
  <main class="giveaways">
    <ListingsHeader
      searchBarPlaceholder="Search Giveaways"
      createButtonRouteName="Create Giveaway"
    />
    <div class="container listings-cards">
      <ListingsCard />
      <ListingsCard />
      <ListingsCard />
      <ListingsCard />
    </div>
  </main>
</template>

<style scoped></style>
