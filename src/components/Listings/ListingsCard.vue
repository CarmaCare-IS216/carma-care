<script setup>
import { defineProps, toRefs } from 'vue'
import Image from 'primevue/image'
import { stringifyQuery } from 'vue-router';

const props = defineProps({
  name:String,
  avatarURL:String,
  

})

</script>

<template>
  <router-link to="#">
    <div class="listings-card">
      <div class="card-header">
        <div class="card-header-avatar">
          <!-- card header avatar goes in here -->
          Avatar
        </div>

        <div class="card-header-content">
          <div class="card-header-top">
            <span class="card-header-name">
              <!-- card header name goes in here -->
              Name
            </span>
            <div class="card-header-edit-btn">
              <!-- card header edit button goes in here -->
              Edit
            </div>
          </div>

          <div class="card-header-bottom">
            <span class="card-header-time">
              <!-- card header time goes in here -->
              Time
            </span>
            <span class="card-header-location">
              <!-- card header location goes in here -->
              Location
            </span>
          </div>
        </div>
      </div>

      <div class="card-image-container">
        <div class="card-image-item-tag">
          <!-- card image tag goes in here -->
          Tags
        </div>
        <Image class="card-image" src="" alt="" />
      </div>

      <div class="card-content">
        <div class="card-content-title">
          <!-- card title goes in here -->
          Title
        </div>
        <div class="card-content-tags">
          <!-- card tags goes in here -->
          Content
        </div>
      </div>

      <div class="card-footer">
        <!-- card item status goes in here -->
        Status
        <div class="card-item-servings">
          <!-- card item servings goes in here -->
          Servings
        </div>
      </div>
    </div>
  </router-link>
</template>

<style scoped>
a {
  text-decoration: none;
  color: #495057;
  /* border: solid 1px red; */
}
.listings-card {
  /* max-width: 350px; */
  width: 100%;
  box-shadow: 0 7px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: solid;
}
</style>
