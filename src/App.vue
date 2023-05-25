<template>
  <v-app>
    <v-main>
      <SideBar></SideBar>
      <RouterView></RouterView>
    </v-main>
  </v-app>
</template>

<script setup>
import SideBar from './components/Sidebar.vue'
</script>
