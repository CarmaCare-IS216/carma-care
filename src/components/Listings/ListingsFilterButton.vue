<script setup>
import { ref } from 'vue'
import { useMatchMedia, screenSize } from '../../composables/useMatchMedia'
import Button from 'primevue/Button'
import Sidebar from 'primevue/sidebar'
import Checkbox from 'primevue/checkbox';
import Dropdown from 'primevue/Dropdown';





const tabletScreen = useMatchMedia(screenSize.tablet)
const checked = ref(false);
const visible = ref(false);
const allWasActive=ref(false);

const categories = ref([
    { name: 'All', key: 'All' },
    { name: 'Food', key: 'Food' },
    { name: 'Apparel', key: 'Apparel' },
    { name: 'Tuition', key: 'Tuition' }
]);

const selectedCategories = ref();


const selectedRestrictions = ref( { name: 'None', value: 'Null' });
const dietaryRestrictions = ref([
    { name: 'None', value: 'Null' },
    { name: 'Halal', value: 'Halal' },
    { name: 'Vegetarian', value: 'Vegetarian' },
    { name: 'Vegan', value: 'Vegan' }
]);

const allergens = ref([
    {name: "Milk", key: "Milk"},
    {name: "Eggs", key: "Eggs"},
    {name: "Fish", key: "Fish"},
    {name: "Shellfish", key: "Shellfish"},
    {name: "Almonds", key: "Almonds"},
    {name: "Walnuts", key: "Walnuts"},
    {name: "Peanuts", key: "Peanuts"},
    {name: "Wheat", key: "Wheat"},
    {name: "Soy", key: "Soy"},
    {name: "Sesame", key: "Sesame"},
    {name: "Garlic", key: "Garlic"},
    {name: "Oninons", key: "Oninons"}
]);
const selectedAllergens = ref();


const submitFilter=()=>{
    console.log(selectedCategories.value)
    // console.log(selectedRestrictions.value.value)
    // console.log(selectedAllergens.value.value)
}

const checkAll=()=>{
    if(Object.values(selectedCategories.value).indexOf('All') > -1 && !allWasActive.value){
      selectedCategories.value.push("Food")
      selectedCategories.value.push("Apparel")
      selectedCategories.value.push("Tuition")
      allWasActive.value=true
      
    }else if(Object.values(selectedCategories.value).indexOf('All')==-1 && allWasActive.value){
      console.log(111)
      selectedCategories.value=[]
      allWasActive.value=false

    }
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
      @click="visible = true"
    />
    <div class="card flex justify-content-center">
        <Sidebar v-model:visible="visible" @hide="submitFilter">
            <h2>Filters</h2>
            <div >
              <div v-for="category of categories" :key="category.key" class="flex align-items-center" >
                  <Checkbox  class="p-checkbox-checked" v-model="selectedCategories" :inputId="category.key" name="category" :value="category.name" @change="checkAll();checked=true"/>
                  <label :for="category.key" :value="category.name">{{ category.name }}</label>
              </div>

            </div>

            <h2>Dietary Restrictions</h2>
            
            <div class="dietaryRestrictions">
                <Dropdown v-model="selectedRestrictions" :options="dietaryRestrictions" optionLabel="name" placeholder="Select Restriction" class="w-full md:w-14rem" />
            </div>

            <h2>Food Allergens</h2>


            <div class="allergens">
              <div v-for="allergen of allergens" :key="allergen.key" class="flex align-items-center">
                  <Checkbox v-model="selectedAllergens" :inputId="allergen.key" name="allergen" :value="allergen.name" />
                  <label :for="allergen.key">{{ allergen.name }}</label>
              </div>
            </div>

        </Sidebar>
    </div>
  </div>
</template>

<style scoped></style>
