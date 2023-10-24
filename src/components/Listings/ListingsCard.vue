<script setup>
import { defineProps, toRefs } from 'vue'
import Avatar from 'primevue/Avatar'
import 'primeicons/primeicons.css'
import Tag from 'primevue/tag'
const props = defineProps({
  listingID: String,
  listingType: String,
  username: String,
  avatarUrl: String,
  postingTime: String,
  locationAddress: String,
  category: String,
  image: String,
  listingTitle: String,
  tags: Array,
  status: String,
  quantityNum: Number,
  isPoster: Boolean
})
// Calculate the time difference in milliseconds
const timeDifference = Date.now() - Date.parse(props.postingTime)

// Calculate the time difference in different units
const seconds = timeDifference / 1000
const minutes = seconds / 60
const hours = minutes / 60
const days = hours / 24
var timeDiff
if (days > 1) {
  if (days.toFixed(0) == 1) {
    timeDiff = days.toFixed(0) + ' day ago'
  } else {
    timeDiff = days.toFixed(0) + ' days ago'
  }
} else if (hours > 1) {
  if (hours.toFixed(0) == 1) {
    timeDiff = hours.toFixed(0) + ' hour ago'
  } else {
    timeDiff = hours.toFixed(0) + ' hours ago'
  }
} else if (minutes > 1) {
  if (minutes.toFixed(0) == 1) {
    timeDiff = minutes.toFixed(0) + ' minute ago'
  } else {
    timeDiff = minutes.toFixed(0) + ' minutes ago'
  }
} else if (seconds > 1) {
  if (seconds.toFixed(0) == 1) {
    timeDiff = seconds.toFixed(0) + ' second ago'
  } else {
    timeDiff = seconds.toFixed(0) + ' seconds ago'
  }
}
</script>

<template>
  <router-link :to="{ path: `/giveaways/${listingID}` }">
    <div class="listings-card">
      <div class="card-header">
        <div class="card-header-avatar">
          <!-- card header avatar goes in here -->
          <Avatar
            v-if="avatarUrl != null"
            id="avatar"
            class="mr-2"
            size="large"
            shape="circle"
            :image="avatarUrl"
          />
          <Avatar
            v-else
            id="avatar"
            class="mr-2"
            size="large"
            shape="circle"
            :label="username?.[0].toUpperCase()"
          />
        </div>

        <div class="card-header-content">
          <div class="card-header-top">
            <span class="card-header-name">
              <!-- card header name goes in here -->
              {{ username }}
            </span>
            <div v-if="isPoster" class="card-header-edit-btn">
              <!-- card header edit button goes in here -->
              <router-link :to="{ path: `/giveaways/edit/${listingID}` }">
                <i class="pi pi-file-edit" style="font-size: larger; margin-right: 2px"></i>
              </router-link>
            </div>
          </div>

          <div class="card-header-bottom">
            <span class="card-header-time">
              <!-- card header time goes in here -->
              {{ timeDiff }}
            </span>
            <span class="card-header-location">
              <!-- card header location goes in here -->
              <i class="pi pi-map-marker"></i>
              {{ locationAddress }}
            </span>
          </div>
        </div>
      </div>

      <div class="card-image-container">
        <div class="card-image-item-tag" style="height: 250px">
          <!-- card image tag goes in here -->
          <img class="card-image" :src="image" alt="" />
          <Tag
            v-if="category == 'Food'"
            id="tag"
            :value="category"
            style="
              margin: 2px, 0, 0, 5px;
              border: solid 1px black;
              color: orange;
              background-color: white;
            "
          ></Tag>
          <Tag
            v-if="category == 'Tuition'"
            id="tag"
            :value="category"
            style="
              margin: 2px, 0, 0, 5px;
              border: solid 1px black;
              color: #6aef42;
              background-color: white;
            "
          ></Tag>
          <Tag
            v-if="category == 'Apparel'"
            id="tag"
            :value="category"
            style="
              margin: 2px, 0, 0, 5px;
              border: solid 1px black;
              color: #679af1;
              background-color: white;
            "
          ></Tag>
        </div>
      </div>

      <div class="card-content">
        <div class="card-content-title">
          <!-- card title goes in here -->
          {{ listingTitle }}
        </div>
        <div class="card-content-tags">
          <!-- card tags goes in here -->
          <Tag v-for="(item, index) in tags" :key="index" class="category" :value="item"></Tag>
        </div>
      </div>

      <div class="card-footer">
        <!-- card item status goes in here -->
        <Tag v-if="status == 'Available'" severity="success" :value="status"></Tag>
        <Tag v-else severity="warning" :value="status"></Tag>

        <div class="card-item-servings" v-if="category == 'Food'">
          <!-- card item servings goes in here -->
          <i class="pi pi-user"></i>
          {{ quantityNum }} servings
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
  background-color: #d9d9d9;
}

#avatar {
  border-radius: 100%;
  margin: 5px 10px 5px 10px;
  display: flex;
  background-color: white;
}

.card-header {
  display: flex;
  align-items: center;
}

.card-header-time {
  white-space: nowrap;
}

.card-header-content {
  width: 100%;
  margin-right: 5px;
  overflow: hidden;
}

.card-header-top {
  display: flex;
  justify-content: space-between;
}

.card-header-bottom {
  color: grey;
  display: flex;
  gap: 10px;
  width: 230.5px;
  height: 25px;
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

.card-image-item-tag {
  position: relative;
}

#tag {
  position: absolute;
  top: 10px;
  left: 10px;

  padding: 5px;
  background-color: white;
  border: 2px solid red;
}

.card-content-title {
  margin-left: 5px;
  margin-top: 10px;
}

.card-content-tags {
  gap: 5px;
  display: flex;
  margin: 10px 0 10px 5px;
}

.card-footer {
  margin: 0 5px 10px 5px;
  display: flex;
  justify-content: space-between;
}

.category {
  border: solid 1px black;
  color: grey;
  background-color: white;
}
</style>
