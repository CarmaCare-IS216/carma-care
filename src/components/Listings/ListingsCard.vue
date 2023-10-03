<script setup>
import { defineProps, toRefs } from 'vue'
import Image from 'primevue/image'
import { stringifyQuery } from 'vue-router'
import Avatar from 'primevue/Avatar'
import 'primeicons/primeicons.css'
import Tag from 'primevue/tag'
const props = defineProps({
  name: String,
  avatarURL: String
})
</script>

<template>
  <router-link to="#">
    <div class="listings-card">
      <div class="card-header">
        <div class="card-header-avatar" >
          <!-- card header avatar goes in here -->
          <Avatar
            id="avatar"
            class="mr-2"
            size="large"
            shape="circle"
            image="data:image/png;base64,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"
          />
        </div>

        <div class="card-header-content">
          <div class="card-header-top">
            <span class="card-header-name">
              <!-- card header name goes in here -->
              Name
            </span>
            <div class="card-header-edit-btn">
              <!-- card header edit button goes in here -->
              <i class="pi pi-file-edit" style="font-size: larger; margin-right: 2px"></i>
            </div>
          </div>

          <div class="card-header-bottom">
            <span class="card-header-time">
              <!-- card header time goes in here -->
              Time
            </span>
            <span class="card-header-location">
              <!-- card header location goes in here -->
              <i class="pi pi-map-marker"></i>
              Location
            </span>
          </div>
        </div>
      </div>

      <div class="card-image-container" >
        <div class="card-image-item-tag" style="height: 250px;">
          <!-- card image tag goes in here -->
          <img
            class="card-image"
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <Tag
            id="tag"
            value="Primary"
            style="
              margin: 2px, 0, 0, 5px;
              border: solid 1px black;
              color: orange;
              background-color: white;
            "
          ></Tag>
        </div>

      </div>

      <div class="card-content">
        <div class="card-content-title">
          <!-- card title goes in here -->
          Title
        </div>
        <div class="card-content-tags">
          <!-- card tags goes in here -->
          <Tag
            class="category"
            value="Primary"

          ></Tag>
          <Tag
            class="category"

            value="Primary"

          ></Tag>
          <Tag
            class="category"

            value="Primary"

          ></Tag>
          
        </div>
      </div>

      <div class="card-footer">
        <!-- card item status goes in here -->
        <Tag severity="success" value="Success"></Tag>
        <div class="card-item-servings">
          <!-- card item servings goes in here -->
          <i class="pi pi-user"></i>
          4 Servings
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

#avatar {
  border-radius: 100%;
  margin: 5px 10px 5px 10px;
  display: flex;
}

.card-header {
  display: flex;
  align-items: center;
}

.card-header-content {
  width: 100%;
  margin-right:5px;
}


.card-header-top {
  display: flex;
  justify-content: space-between;
}

.card-header-bottom {
  color:grey;
  display: flex;
  gap:10px
}

.card-header-content {
  height: fit-content;
}


.card-image-container {
  height: 250px;
    overflow: hidden;
}
.card-image {
  width: 100%;
    height: 250px;
    object-fit: cover;
}

.card-image > .p-image {
  width: 100%;
}

.card-image-item-tag{
  position: relative;
}

#tag{
  position: absolute;
  top: 10px;
  left: 10px; 
  
  padding: 5px;
  background-color: white;
  border: 2px solid red;
}

.card-content-title{
  margin-left:5px;
  margin-top:10px;
}

.card-content-tags{
  gap:5px;
  display: flex;
  margin:10px 0 10px 5px;
}


.card-footer{
  margin: 0 5px 10px 5px;
  display: flex;
  justify-content: space-between;
}


.category{
  border: solid 1px black;
  color: grey;
  background-color: white;
}
</style>
