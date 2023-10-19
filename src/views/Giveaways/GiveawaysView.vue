<script setup>
import ListingsHeader from '../../components/Listings/ListingsHeader.vue'
import ListingsCard from '../../components/Listings/ListingsCard.vue'
import { useUserStore } from '../../stores/user'
import { supabase } from '@/lib/supabase'
import { ref, onMounted } from 'vue'

const queryData = ref([])

onMounted(() => {
  getData(queryData)
})
</script>

<!-- play with time data -->

<template>
  <main class="giveaways">
    <ListingsHeader
      @passQuery="async (query) =>queryData=await getFiltered(query) "
      @passSearch='async (query) =>queryData=await search(query)'
      searchBarPlaceholder="Search Giveaways"
      createButtonRouteName="Create Giveaway"
    />
    <div class="container listings-cards">
      <ListingsCard
        v-for="item in queryData"
        :key="item.listingID"
        :listingType="item.listingType"
        :username="item.userProfiles.username"
        :avatarUrl="item.userProfiles.avatarUrl"
        :postingTime="item.postingTime"
        :locationAddress="item.locationAddress"
        :category="item.category"
        :image="item.images[0]"
        :listingTitle="item.listingTitle"
        :tags="item.tags"
        :status="item.status"
        :quantityNum="item.quantityNum"
      />
    </div>
  </main>
</template>

<style scoped></style>

<script>


async function getData(queryData) {
  // const columnsToSelect='listingType', 'username', 'postingTime', 'locationAddress', 'category', 'image', 'listingTitle', 'tags', 'quantityNum', 'quantityUnit'
  const { data, error } = await supabase
    .from('listings')
    .select(
      'listingID,listingType, postingTime, locationAddress, category, images, listingTitle, tags,status, quantityNum, userProfiles(username, avatarUrl)'
    )

  // : avatarUrl = item.avatarUrl

  if (error) {
    console.log('error: ', error)
    // handle the error
  } else {
    // do something with the data (e.g. assign data to an array ref)
    queryData.value=data

  }
}


async function getFiltered(condition) {
  var categoryFilter=condition.categoryFilter
  var restrictionsFilter=condition.restrictionsFilter
  var allergensFilter=condition.allergensFilter

  var query=supabase
    .from('listings')
    .select(
      'listingID,listingType,allergens, postingTime, locationAddress, category, images, listingTitle, tags,status, quantityNum, userProfiles(username, avatarUrl)'
    )
    
  query.in("category",categoryFilter)

  if(restrictionsFilter!="Null"){
    query.eq("dietaryRestrictions",restrictionsFilter)
  }




  const { data, error } = await query
  
  if (error) {
    console.log('error: ', error)
    // handle the error
  } else {
    // do something with the data (e.g. assign data to an array ref)
    var output=[]
    var noAllergens=true
    if (allergensFilter!=""){
        for(var record in data){

          if(data[record].allergens!=null){
            for(var allergen of allergensFilter){
              allergen=allergen.slice(3)

              if(data[record].allergens.includes(allergen)){
                console.log("removed ", record)
                noAllergens=false
                break
              }
            }
          }


          if(noAllergens){
            output.push(data[record])
          }
          noAllergens=true
        }
      return output

    }
    else{
      return data
    }

  }
}

async function search(searchData) {
  if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
  }
  this.timer = setTimeout(() => {
      // your code
      console.log(searchData)

      // const columnsToSelect='listingType', 'username', 'postingTime', 'locationAddress', 'category', 'image', 'listingTitle', 'tags', 'quantityNum', 'quantityUnit'
      // const { data, error } = await supabase
      //   .from('listings')
      //   .select(
      //     'listingID,listingType, postingTime, locationAddress, category, images, listingTitle, tags,status, quantityNum, userProfiles(username, avatarUrl)'
      //   )

      // // : avatarUrl = item.avatarUrl

      // if (error) {
      //   console.log('error: ', error)
      //   // handle the error
      // } else {
      //   // do something with the data (e.g. assign data to an array ref)
      //   queryData.value=data

      // }


  }, 800);

}



</script>
