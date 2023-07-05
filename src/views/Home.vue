<template lang="">
  <!-- <div class="ma-5"> -->
    <div>
      <h2 class="mb-5 ml-2">功能選單</h2>
      <v-pagination v-model="page"></v-pagination>
    </div>

    <div class="d-flex flex-wrap">
      <v-card width="216" height="216" class="text-center card-content pa-5 ma-2" v-for="(card, i) in cards" :key="i">
      <v-img
        class="rounded-circle"
        width="50"
        height="50"
        cover
        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
      ></v-img>
      <v-card-title>{{card.title}}</v-card-title>
      <v-card-subtitle>{{card.subTitle}}</v-card-subtitle>
      <v-card-actions class="w-100">
        <v-btn variant="flat" rounded="3" class="mt-4" href="/" color="blue-darken-2" block>GO</v-btn>
      </v-card-actions>

      <v-btn
          icon="mdi-star-outline"
          variant="plain"
          color="medium-emphasis"
          class="star"
          @click="starred"
          :id="i"
          v-if="!isStarred"
    ></v-btn>

    <v-btn
          icon="mdi-star"
          variant="plain"
          color="yellow"
          class="star"
          @click="starred"
          v-if="isStarred"
    ></v-btn>

    </v-card>
    </div>
    
  <h2 class="mt-5">您可能會喜歡的功能...</h2>
    
    
  <!-- </div> -->
</template>

<script setup>
import { ref } from 'vue'

const isStarred = ref(false)
const starred = (e)=>{
  console.log(e.target)
  isStarred.value = !isStarred.value
}
const cards = [
  { title: '充電站管理', subTitle: 'In-Charge'},
  { title: '充電站管理', subTitle: 'In-Charge'},
  { title: '充電站管理', subTitle: 'In-Charge'},
  { title: '充電站管理', subTitle: 'In-Charge'},
  { title: '充電站管理', subTitle: 'In-Charge'},
  { title: '充電站管理', subTitle: 'In-Charge'},
  { title: '充電站管理', subTitle: 'In-Charge'},
  { title: '充電站管理', subTitle: 'In-Charge'},
  { title: '充電站管理', subTitle: 'In-Charge'},
  { title: '充電站管理', subTitle: 'In-Charge'},
  { title: '充電站管理', subTitle: 'In-Charge'},
]

const page = ref(1)
const pageSize = ref(10)

</script>
<style scoped>
.card-content {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.star {
    position: absolute;
    top: 0;
    right: 0;
}
</style>
