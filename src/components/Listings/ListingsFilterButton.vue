<script setup>
import { ref } from 'vue'
import { useMatchMedia, screenSize } from '../../composables/useMatchMedia'
import Button from 'primevue/Button'
import Sidebar from 'primevue/sidebar'
import Checkbox from 'primevue/checkbox';
import Dropdown from 'primevue/Dropdown';


defineEmits(["passQuery"])


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
    var categoryFilter
    var restrictionsFilter
    var allergensFilter


    var categoryCheckedBox=selectedCategories.value

    if(categoryCheckedBox==null || categoryCheckedBox.length==0 || categoryCheckedBox.length==(categories.value).length){
      // checked nothing/checked all
      categoryFilter=[]
      for(var category of categories.value.slice(1)){
        categoryFilter.push(category.name)
      }

    }
    else{
      categoryFilter=categoryCheckedBox
    }

    restrictionsFilter=selectedRestrictions.value.value

    var allergensCheckbox=selectedAllergens.value

    if(allergensCheckbox==null||allergensCheckbox.length==0){
      // checked nothing/
      allergensFilter=""
    }
    else{
      
      allergensFilter=allergensCheckbox
    }
    
    return {"categoryFilter":categoryFilter,"restrictionsFilter":restrictionsFilter,"allergensFilter":allergensFilter,}
}

const checkAll=()=>{
    // check all boxes
    if(Object.values(selectedCategories.value).indexOf('All') > -1 && !allWasActive.value){
      selectedCategories.value.push("Food")
      selectedCategories.value.push("Apparel")
      selectedCategories.value.push("Tuition")
      allWasActive.value=true
      
    // uncheck all boxes

    }else if(Object.values(selectedCategories.value).indexOf('All')==-1 && allWasActive.value){
      selectedCategories.value=undefined
      allWasActive.value=false

    }
}
</script>

<template>
  <div v-if="tabletScreen">
    <Button icon="pi pi-sliders-h" text rounded aria-label="Filter" @click="visible = true" />
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
    
  </div>
  <div class="card flex justify-content-center">
        <Sidebar v-model:visible="visible" @hide="$emit('passQuery',submitFilter())" >
            <h2>Filters</h2>
            <div class="filters">
              <div v-for="category of categories" :key="category.key" class="flex align-items-center" >
                  <Checkbox  class="p-checkbox-checked" v-model="selectedCategories" :inputId="category.key" name="category" :value="category.name" @change="checkAll();checked=true"/>
                  <label class="label" :for="category.key" :value="category.name">{{ category.name }}</label>
              </div>

            </div>

            
            <div class="dietaryRestrictions">
              <h2>Dietary Restrictions</h2>

                <Dropdown v-model="selectedRestrictions" :options="dietaryRestrictions" optionLabel="name" placeholder="Select Restriction" class="w-full md:w-14rem" />
            </div>



            <div class="allergens">
              <h2>Food Allergens</h2>
              
              <div v-for="allergen of allergens" :key="allergen.key" class="flex align-items-center">
                  <Checkbox v-model="selectedAllergens" :inputId="allergen.key" name="allergen" :value="allergen.name" />
                  <label class="label" :for="allergen.key">{{ allergen.name }}</label>
              </div>
            </div>

        </Sidebar>
    </div>
</template>

<style scoped>
.label{
  margin-left: 10px;
}
.filters{
  margin-top: 10px;
}

.dietaryRestrictions{
  margin-top: 10px;
}

.allergens{
  margin-top:10px
}
</style>
