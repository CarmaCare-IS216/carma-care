<script setup>
import Tab from '../../components/Tab/Tab.vue'
import TabsWrapper from '../../components/Tab/TabsWrapper.vue'
import Button from 'primevue/Button';
import { useMatchMedia, screenSize } from '../../composables/useMatchMedia'
import Avatar from 'primevue/Avatar';

import { ref } from 'vue'

const showLog = () => console.log('helloooo')
const tabletScreen = useMatchMedia(screenSize.tablet)

const profileInfo = ref({
  name: 'Peter Parker',
  username: '@peterparker',
  description: 'Hello people!  I’m a student from SMU! It’s Singapore Management University in case you don’t know! I love to volunteer during my free time.  I also do giveaways as well. ',
  giveaways: 186,
  requests: 97,
  profilePhoto: "https://avatarfiles.alphacoders.com/342/342016.jpg",
  // profilePhoto: null,
})

</script>

<template>
  <main class="remove-padding">
    <section class="profile">
      <div class="profile-content">
        <Avatar v-if="profileInfo.profilePhoto" :image=profileInfo.profilePhoto class="profile-photo" shape="circle" />
        <Avatar v-else image="https://static.vecteezy.com/system/resources/previews/005/129/844/non_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg" class="profile-photo" shape="circle" />
        <div class="profile-info">
          <div style="display: flex; justify-content: space-between; padding-bottom: 20px;">
            <div>
              <h1>{{ profileInfo.name }}</h1>
              <p>{{ profileInfo.username }}</p>
            </div>
            <Button type="button" class="edit-button" label="Edit Profile" icon="pi pi-cog"/>
          </div>
          <p style="padding-bottom: 20px;">{{ profileInfo.description }}</p>
          <Button class="dietary-restrictions">Dietary Restrictions</Button>
        </div>
        <div class="profile-statistics">
          <div style="width: fill-available; display: flex; align-items: center; justify-content: space-between;">
            <div style="display: flex;">
              <div class="statistics-icon-wrapper">
                <div><Button class="icon" icon="pi pi-star"/></div>
                <div>
                  <h3>{{ profileInfo.giveaways }}</h3>
                  <p>Giveaways Made</p>
                </div>
              </div>
              <div class="statistics-icon-wrapper">
                <div><Button class="icon" icon="pi pi-download"/></div>
                <div>
                  <h3>{{ profileInfo.requests }}</h3>
                  <p>Requests Made</p>
                </div>
              </div>
            </div>
            <div>
              <Button v-if="tabletScreen" type="button" class="statistics-button" icon="pi pi-chart-bar"/>
              <Button v-else type="button" class="statistics-button" label="View Statistics" icon="pi pi-chart-bar"/>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="my-listings">
      <TabsWrapper>
        <Tab icon="pi-gift" title="Giveaways" @click="showLog">
          <div class="container pt-small">Giveaways</div>
        </Tab>
        <Tab icon="pi-megaphone" title="Requests">
          <div class="container pt-small">Requests</div>
        </Tab>
      </TabsWrapper>
    </section>
  </main>
</template>

<style scoped>

.statistics-icon-wrapper {
  display: flex;
  width: 150px;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
}
.statistics-button {
  background:white;
  color: black;
  border-radius: 100px;
  border-color: black;
}
.edit-button {
  background:grey;
  color: white;
  border-radius: 100px;
  border: none;
}
.profile {
  display: flex;
  width: 100%;
  height: 100%;
  background: whitesmoke;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-content {
  display: grid;
  grid-template-areas:
    'profile-photo profile-info profile-info'
    'statistics statistics statistics';
  gap: 30px;
  padding: 10px;
  width: 600px;
  justify-content: center;
}

.profile-photo {
  grid-area: profile-photo;
  background: darkgray;
  height: 200px;
  width: 200px;
  border-radius: 200px;
  line-height: 200px;
  text-align: center;
  font-size: 8rem;
}
.profile-info {
  grid-area: profile-info;
  width: fill-available;
}
.profile-statistics {
  grid-area: statistics;
  /* background: plum; */
}

@media only screen and (max-width: 768px) {
  .profile-content {
    grid-template-areas:
      'profile-photo statistics'
      'profile-info profile-info';
    align-items: center;
    width: 100%;
  }
  .profile-photo {
    height: 150px;
    width: 150px;
  }
  .icon {
    display: none
  }
  .statistics-button {
    font-size: 0;
  }
  .statistics-icon-wrapper {
    max-width: 100px;
  }
}
Button.icon {
  background: lightgray;
  color:black;
  border-radius: 100%;
  outline: none;
  border: none;
  margin-right: 15px;
}
Button.dietary-restrictions {
  color:black;
  border-color: black;
  background: none;
  border-radius: 50px;
  outline: none;
}

/*******************
Overriding PrimeVue's tab component styles 
********************/
.tabview-custom {
  display: grid;
  justify-items: center;
}
.tabview-custom > a {
  width: 170px !important;
}
</style>
