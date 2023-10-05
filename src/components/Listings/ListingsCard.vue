<script setup>
import { defineProps, toRefs } from 'vue'
import Image from 'primevue/image'
import { stringifyQuery } from 'vue-router'
import Avatar from 'primevue/Avatar'
import 'primeicons/primeicons.css'
import Tag from 'primevue/tag'
const props = defineProps({
  record: Object
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
            :image=record.avatarURL
          />
        </div>

        <div class="card-header-content">
          <div class="card-header-top">
            <span class="card-header-name">
              <!-- card header name goes in here -->
              {{ record["posterID"] }}
            </span>
            <div class="card-header-edit-btn">
              <!-- card header edit button goes in here -->
              <i class="pi pi-file-edit" style="font-size: larger; margin-right: 2px"></i>
            </div>
          </div>

          <div class="card-header-bottom">
            <span class="card-header-time">
              <!-- card header time goes in here -->
              {{ Date.now()-record["postingTime"] }} ago
            </span>
            <span class="card-header-location">
              <!-- card header location goes in here -->
              <i class="pi pi-map-marker"></i>
              {{ record["locationAddress"] }}
            </span>
          </div>
        </div>
      </div>

      <div class="card-image-container" >
        <div class="card-image-item-tag" style="height: 250px;">
          <!-- card image tag goes in here -->
          <img
            class="card-image"
            :src=record.images
            alt=""
          />
          <Tag
            id="tag"
            :value="record.category"
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
          {{ record["listingTitle"] }}
        </div>
        <div class="card-content-tags">
          <!-- card tags goes in here -->
          <Tag v-for="(item, index) in record['tags']" :key="index"
            class="category"
            :value="item"

          ></Tag>
          
          
        </div>
      </div>

      <div class="card-footer">
        <!-- card item status goes in here -->
        <Tag v-if="record.status=='Available'"   severity="success" :value="record.status"></Tag>
        <Tag v-else   severity="warning" :value="record.status"></Tag>



        <div class="card-item-servings">
          <!-- card item servings goes in here -->
          <i class="pi pi-user"></i>
          {{ record["quantityNum"] }} {{ record["quantityUnit"] }}
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
