<template>
  <v-window
    v-model="window"
    show-arrows
  >
    <v-window-item
      v-for="n in length"
      :key="n"
    >
      <v-card height="200px" class="d-flex justify-center align-center">
        <span class="text-h2">Card {{ n }}</span>
      </v-card>
    </v-window-item>
  </v-window>
</template>
<script setup>
import { ref } from 'vue'

const length = ref(3)
const window = ref(0)

</script>
<style lang="">
  
</style>