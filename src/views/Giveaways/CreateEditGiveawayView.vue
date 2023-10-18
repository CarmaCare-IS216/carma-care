<script setup>
import { ref } from 'vue'
import router from '../../router'
import { useMatchMedia, screenSize } from '../../composables/useMatchMedia'

import CardContainer from '../../components/CardContainer/CardContainer.vue'

import Dialog from 'primevue/dialog';
import Button from 'primevue/Button'
import InputText from 'primevue/InputText'
import Dropdown from 'primevue/Dropdown'
import MultiSelect from 'primevue/multiselect'
import Textarea from 'primevue/Textarea'
import Chips from 'primevue/chips';

import { supabase } from '../../lib/supabase'

import {
  LISTING_TYPE,
  DIETARY_RESTRICTIONS,
  FOOD_ALLERGENS,
  STATUS,
  SERVING_SIZE, 
  CATEGORY
} from '../../util/constants'

import { convertConstantsToDropdownOptions } from '../../util/helper' 

// vue-toastification
import { useToast, POSITION } from 'vue-toastification'


import { useUserStore } from '../../stores/user'; 

const toast = useToast()
const user = useUserStore()

const form = ref({
  posterID: user.currentUser.id,
  username: user.profile.username,
  listingType: "", // (LISTING_TYPE.Request for CreateEditRequestView.vue)
  listingTitle: "", 
  status: "", 
  category: "", 
  dietaryRestrictions: DIETARY_RESTRICTIONS.None,
  foodAllergens: FOOD_ALLERGENS.None, 
  tags: [ ],
  description: "", 
  images: [ ],
  quantityNum: "",
  locationAddress: "", 
  locationDescription: ""
})


const giveawayTypeOptions = convertConstantsToDropdownOptions(LISTING_TYPE) 

const statusOptions = convertConstantsToDropdownOptions(STATUS) 

const allergensOptions = convertConstantsToDropdownOptions(FOOD_ALLERGENS) 

const dietaryRestrictionsOptions = convertConstantsToDropdownOptions(DIETARY_RESTRICTIONS) 

const servingsizeOptions = convertConstantsToDropdownOptions(SERVING_SIZE) 

const categoryOptions = convertConstantsToDropdownOptions(CATEGORY) 

const visible = ref(false);

const handleBackBtn = () => {
  router.go(-1)
}

const handleChangeCategoryOption = (event) => {
  console.log('event ', event.value);

  if (event.value !== CATEGORY.Food) {
    form.value.quantityNum = 0
    form.value.foodAllergens = FOOD_ALLERGENS.None
    form.value.dietaryRestrictions = DIETARY_RESTRICTIONS.None
  }
}

console.log(giveawayTypeOptions) 

const handleCreateGiveaway = async () => {
  const { data, error } = await supabase
    .from('listings')
    .insert({
      poster_id: user.currentUser.id,
      listingType: form.value.listingType,
      listingTitle: form.value.listingTitle,
      status: form.value.status, 
      category: form.value.category, 
      dietaryRestrictions: form.value.dietaryRestrictions, 
      allergens: form.value.foodAllergens, 
      tags: form.value.tags, 
      listingDesc: form.value.description, 
      images: form.value.images, 
      quantityNum: form.value.quantityNum, 
      locationAddress: form.value.locationAddress,
      locationDesc: form.value.locationDescription
    })

  if (error) {
    console.log("createGiveaway error: ", error)
    toast.error('Created Giveaway unsuccessful', {
      position: POSITION.TOP_CENTER,
      timeout: 2000
    })
  } else {
    console.log(`${data} created`)
    router.push({ name: "Giveaways" }) 
    toast.success('Created Giveaway successfully', {
      position: POSITION.TOP_CENTER,
      timeout: 2000
    })
  }
}

const tabletScreen = useMatchMedia(screenSize.tablet)
</script>

<template>
  <main>
    <div class="container container-narrow container-create-edit-giveaway">
      <section class="preview">
        <!-- Card goes here -->
        Preview Card
      </section>

      <section class="form-container">
        <form>
          <div class="card-container">
            <CardContainer title="Giveaway Information">
              <div class="giveaway-information">
                <span class="p-float-label giveaway-name">
                  <InputText v-model="form.listingTitle" class="w-full" />
                  <label>Giveaway Title</label>
                </span>

                <div class="p-float-label giveaway-type">
                <Dropdown
                  v-model="form.listingType"
                  :options="giveawayTypeOptions"
                  optionLabel="label"
                  optionValue="value"
                  class="w-full" />

                <label>Giveaway Type</label>
              </div>

               <div class="p-float-label giveaway-category">
                <Dropdown
                  @change="handleChangeCategoryOption"
                  v-model="form.category"
                  :options="categoryOptions"
                  optionLabel="label"
                  optionValue="value"
                  class="w-full" />

                <label>Giveaway Category</label>
              </div>

                <div class="p-float-label giveaway-status">
                <Dropdown
                  v-model="form.status"
                  :options="statusOptions"
                  optionLabel="label"
                  optionValue="value"
                  class="w-full" />

                <label for="dd-city">Giveaway Status</label>
              </div>

              <div v-if="form.category === CATEGORY.Food" class="p-float-label giveaway-serving">
                <Dropdown
                  v-model="form.quantityNum"
                  :options="servingsizeOptions"
                  optionLabel="label"
                  optionValue="value"
                  class="w-full" />

                <label>Serving Size</label>
              </div>

              <div v-if="form.category === CATEGORY.Food" class="p-float-label giveaway-restrictions">
                <Dropdown
                  v-model="form.dietaryRestrictions"
                  :options="dietaryRestrictionsOptions"
                  optionLabel="label"
                  optionValue="value"
                  class="w-full" />

                <label>Dietary Restrictions</label>
              </div>


              <div class="card p-fluid giveaway-tags">
        <span class="p-float-label">
            <Chips id="chips" v-model="form.tags" />
            <label for="chips">Tags</label>
        </span>
    </div>

    <div v-if="form.category === CATEGORY.Food" class="p-float-label">
                <MultiSelect display="chip"
                  v-model="form.foodAllergens"
                  :options="allergensOptions"
                  optionLabel="label"
                  optionValue="value"
                  class="w-full" />

                <label>List of Allergens</label>
              </div>

                <span class="p-float-label giveaway-description">
                  <Textarea
                    v-model="form.description"
                    autoResize
                    rows="5"
                    cols="30"
                    class="w-full"
                  />
                  <label>Description</label>
                </span>
              </div>
            </CardContainer>

            <CardContainer title="Location Information">
              <div class="location-information">
              
                <span class="p-float-label location">
                  <InputText v-model="form.locationAddress" class="w-full" />
                  <label>Location Address</label>
                </span>

                <span class="p-float-label giveaway-location-description">
                  <Textarea
                    v-model="form.locationDescription"
                    autoResize
                    rows="5"
                    cols="30"
                    class="w-full"
                  />
                  <label>Location Description</label>
                </span>



                
              </div>
            </CardContainer>

            <CardContainer title="Photo Gallery">
              <div class="photo-gallery">
                <p>Add in Photo Gallery content here</p>

              </div>
            </CardContainer>
          </div>

          <div class="btn-container pt-small">
            <Button
              v-if="tabletScreen"
              icon="pi pi-eye"
              aria-label="Preview"
              rounded
              @click="visible = true"
            />
            <div class="next-prev-btn-container">
              <router-link to="">
                <Button icon="pi pi-times" label="Cancel" rounded outlined @click="handleBackBtn" />
              </router-link>
              <Button icon="pi pi-plus" label="Create" rounded @click="handleCreateGiveaway" />
            </div>

          </div>
        </form>
      </section>
    </div>
  </main>
  <!-- Dialog goes here -->
  <Dialog v-model:visible="visible" modal header="DIALOG" :style="{ width: '50vw' }">
    <section class="preview">
        <!-- Card goes here -->
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
      </section>
        </Dialog>
</template>

<style scoped>
main {
  padding: unset;
}
.container-create-edit-giveaway {
  max-width: 1150px;
  padding-top: 25px;
}
.preview-btn-container {
  display: none;
  /* margin-top: 50px; */
}
.preview {
  position: sticky;
  width: var(--preview-card-width);
  background: red;
  padding: 30px;
  top: 113px;
}

.form-container form {
  position: relative;
  max-width: 1150px;
  width: 100%;
}

/*************************
*.Giveaway Information
*************************/
.giveaway-information {
  margin-top: 20px;
  display: grid;
  grid-template-areas:
    'giveaway-name        giveaway-name'
    'giveaway-type        giveaway-status'
    'giveaway-category  giveaway-category'
    'giveaway-serving     giveaway-serving'
    'giveaway-restrictions giveaway-restrictions'
    'giveaway-tags        giveaway-tags'
    'giveaway-allergens   giveaway-allergens'
    'giveaway-description giveaway-description';
  gap: 40px;
}
.giveaway-name {
  grid-area: giveaway-name;
  width: 100%;
}
.giveaway-type {
  grid-area: giveaway-type;
}
.giveaway-category {
  grid-area: giveaway-category;
}
.giveaway-serving {
  grid-area: giveaway-serving ;
}
.giveaway-restrictions {
  grid-area: giveaway-restrictions;
}
.giveaway-status {
  grid-area: giveaway-status;
}
.giveaway-tags {
  grid-area: giveaway-tags;
}
.giveaway-allergens {
  grid-area: giveaway-allergens;
}
.giveaway-description {
  grid-area: giveaway-description;
}

/*************************
*.Location Information
*************************/
.location-information {
  margin-top: 20px;
  display: grid;
  grid-template-areas: '';
  gap: 40px;
}

/*************************
*.Photo Gallery
*************************/
.photo-gallery {
  margin-top: 20px;
}

.btn-container {
  position: sticky;
  bottom: 0;
  display: flex;
  justify-content: center;
  gap: 15px;
  background: white;
  box-shadow: 0 -7px 30px rgba(0, 0, 0, 0.075);
  width: inherit;
  padding: 15px;
}
.next-prev-btn-container {
  display: flex;
  gap: 15px;
}

@media screen and (max-width: 768px) {
  main {
    padding-top: 40px;
  }
  .preview-btn-container {
    display: flex;
    justify-content: right;
  }

  .preview {
    display: none;
  }

  .card-container {
    margin-left: unset;
  }

  .btn-container {
    justify-content: space-between;
  }
}
</style>
