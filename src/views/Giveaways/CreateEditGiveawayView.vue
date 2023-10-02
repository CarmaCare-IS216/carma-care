<script setup>
import { ref } from 'vue'
import router from '../../router'
import { useMatchMedia, screenSize } from '../../composables/useMatchMedia'

import CardContainer from '../../components/CardContainer/CardContainer.vue'
import Button from 'primevue/Button'
import InputText from 'primevue/InputText'
import Dropdown from 'primevue/Dropdown'
import MultiSelect from 'primevue/multiselect'
import Textarea from 'primevue/Textarea'

const giveawayTypeOptions = ref([
  { name: 'Food', value: 'food' },
  { name: 'Clothes', value: 'clothes' },
  { name: 'Tuition', value: 'tuition' }
])

const statusOptions = ref([
  { name: 'Open', value: 'open' },
  { name: 'In Transaction', value: 'in-transaction' },
  { name: 'Closed', value: 'closed' }
])

const giveawayInfo = ref({
  name: '',
  type: '',
  status: '',
  tags: [],
  description: '',
  locationInfo: {
    name: '',
    description: ''
  },
  photos: []
})

const handleBackBtn = () => {
  router.go(-1)
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
                  <InputText v-model="giveawayInfo.name" class="w-full" />
                  <label>Giveaway Name</label>
                </span>

                <span class="p-float-label giveaway-type">
                  <Dropdown
                    v-model="giveawayInfo.type"
                    :options="giveawayTypeOptions"
                    optionLabel="name"
                    class="w-full"
                  />
                  <label>Giveaway Type</label>
                </span>

                <span class="p-float-label giveaway-status">
                  <Dropdown
                    v-model="giveawayInfo.status"
                    :options="statusOptions"
                    optionLabel="name"
                    class="w-full"
                  />
                  <label>Status</label>
                </span>

                <span class="p-float-label giveaway-tags">
                  <MultiSelect
                    v-model="giveawayInfo.tags"
                    display="chip"
                    :options="statusOptions"
                    optionLabel="name"
                    :maxSelectedLabels="3"
                    class="w-full"
                  />
                  <label>Tags</label>
                </span>

                <span class="p-float-label giveaway-description">
                  <Textarea
                    v-model="giveawayInfo.description"
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
                <p>Add in Location Information content here</p>
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
              <Button icon="pi pi-plus" label="Create" rounded disabled />
            </div>
          </div>
        </form>
      </section>
    </div>
  </main>
  <!-- Dialog goes here -->
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
    'giveaway-tags        giveaway-tags'
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
.giveaway-status {
  grid-area: giveaway-status;
}
.giveaway-tags {
  grid-area: giveaway-tags;
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
