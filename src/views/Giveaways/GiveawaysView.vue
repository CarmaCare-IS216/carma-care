<script setup>
import ListingsHeader from '../../components/Listings/ListingsHeader.vue'
import ListingsCard from '../../components/Listings/ListingsCard.vue'

import { supabase } from '@/lib/supabase'
import { ref, onMounted } from 'vue'
const default_data = ref([])
onMounted(() => {
  getData(default_data)
})

</script>

<!-- play with time data -->


<template>
  <main class="giveaways">
    <ListingsHeader searchBarPlaceholder="Search Giveaways" createButtonRouteName="Create Giveaway" />
    <div class="container listings-cards">

      <ListingsCard v-for="(item, index) in default_data" :key="index" :listingType=item.listingType :username=item.userProfiles.username
        :avatarUrl=item.userProfiles.avatarUrl :postingTime=item.postingTime :locationAddress=item.locationAddress :category=item.category
        :image=item.images[0] :listingTitle=item.listingTitle :tags=item.tags :status=item.status
        :quantityNum=item.quantityNum  />

    </div>
  </main>
</template>

<style scoped></style>










<script>
async function getData(default_data) {
  // const columnsToSelect='listingType', 'username', 'postingTime', 'locationAddress', 'category', 'image', 'listingTitle', 'tags', 'quantityNum', 'quantityUnit'
  const { data, error } = await supabase.from('listings').select('listingType, postingTime, locationAddress, category, images, listingTitle, tags,status, quantityNum, userProfiles(username, avatarUrl)')

  // : avatarUrl = item.avatarUrl

  if (error) {
    console.log('error: ', error)
    // handle the error
  } else {
    // do something with the data (e.g. assign data to an array ref)
    default_data.value = data
    console.log(data)
  }
}







console.log((Date.now() - 1696482154051))


</script>