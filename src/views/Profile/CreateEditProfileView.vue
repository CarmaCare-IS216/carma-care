<script setup>
import { ref } from 'vue'

import Button from 'primevue/Button'
import InputText from 'primevue/InputText'
import Textarea from 'primevue/Textarea'

import Stepper from '../../components/Stepper/Stepper.vue'
import StepperPanel from '../../components/Stepper/StepperPanel.vue'
import StepperFooter from '../../components/Stepper/StepperFooter.vue'

const basicInformation = ref({
  name: '',
  handle: '',
  description: ''
})

const validateBasicInformation = () => {
  console.log('validate')
}
</script>

<template>
  <main>
    <div class="container container-create-profile">
      <Stepper>
        <StepperPanel title="Basic Information">
          <div class="container-basic-information">
            <span class="p-float-label">
              <InputText v-model="basicInformation.name" class="w-full" />
              <label>Name</label>
            </span>

            <span class="p-float-label">
              <InputText v-model="basicInformation.handle" class="w-full" />
              <label>Handle</label>
            </span>

            <span class="p-float-label">
              <Textarea
                v-model="basicInformation.description"
                autoResize
                rows="5"
                cols="30"
                class="w-full"
              />
              <label>Description</label>
            </span>
          </div>

          <StepperFooter position="right">
            <Button label="Next" rounded @click="validateBasicInformation" />
          </StepperFooter>
        </StepperPanel>

        <StepperPanel title="Dietary Restrictions">
          <div class="container-dietary-restrictions">
            <p>Dietary Restrictions</p>
          </div>
          <StepperFooter position="right">
            <Button label="Back" rounded outlined />
            <Button label="Next" rounded />
          </StepperFooter>
        </StepperPanel>

        <StepperPanel title="Location Address">
          <div class="container-location-address">
            <p>Location Address</p>
          </div>
          <StepperFooter position="right">
            <Button label="Back" rounded outlined />
            <Button label="Create Profile" rounded />
          </StepperFooter>
        </StepperPanel>
      </Stepper>
    </div>
  </main>
</template>

<style scoped>
.container-create-profile {
  display: grid;
  justify-content: center;
  max-width: 700px;
  width: 100%;
  /* border: solid; */
}

.container-basic-information,
.container-dietary-restrictions,
.container-location-address {
  display: grid;
  gap: 40px;
  margin-top: 40px;
}
</style>
