<template lang="">
  <div class="ma-5">
    <v-card width="216" height="216" class="text-center card-content pa-5">
      <v-img
        class="rounded-circle"
        width="50"
        height="50"
        cover
        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
      ></v-img>
      <v-card-title>充電站管理</v-card-title>
      <v-card-subtitle>In-Charge</v-card-subtitle>
      <v-card-actions>
        <v-btn variant="flat" rounded="3" class="mt-4" href="/" color="blue-darken-2">前往功能</v-btn>
      </v-card-actions>

      <v-btn
          icon="mdi-star-outline"
          variant="plain"
          color="medium-emphasis"
          class="star"
          @click="starred"
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
</template>

<script setup>
import { ref } from 'vue'

const isStarred = ref(false)
const starred = ()=>{
    isStarred.value = !isStarred.value
}


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
