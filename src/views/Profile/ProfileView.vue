<script setup>
import Tab from '../../components/Tab/Tab.vue'
import TabsWrapper from '../../components/Tab/TabsWrapper.vue'

const showLog = () => console.log('helloooo')
</script>

<template>
  <main class="remove-padding">
    <section class="profile">
      <div class="profile-content">
        <div class="profile-photo">Photo</div>

        <div class="profile-info">Info</div>

        <div class="profile-statistics">Statistics</div>
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

      <!-- <TabView class="tabview-custom">
        <TabPanel>
          <template #header>
            <i class="pi pi-gift mr-2 text-2xl"></i>
            <span>Giveaways</span>
          </template>
          <div class="container">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </div>
        </TabPanel>
        <TabPanel>
          <template #header>
            <i class="pi pi-megaphone mr-2 text-2xl"></i>
            <span>Requests</span>
          </template>
          <div class="container">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
            sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
          </div>
        </TabPanel>
      </TabView> -->
    </section>
  </main>
</template>

<style scoped>
.profile {
  width: 100%;
  min-height: 450px;
  height: 100%;
  background: lightgray;
}

.profile-content {
  display: grid;
  grid-template-areas: '';
}

.profile-photo {
  grid-area: profile-photo;
}
.profile-info {
  grid-area: profile-info;
}
.profile-statistics {
  grid-area: statistics;
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
