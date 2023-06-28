<template>
  <v-app>
    <v-main>
      <SideBar></SideBar>
      <RouterView></RouterView>
      <Tree></Tree>
      <Footer></Footer>
    </v-main>
  </v-app>
</template>

<script setup>
import SideBar from './components/Sidebar.vue'
import Tree from './components/Tree.vue'
import Footer from './components/Footer.vue'

</script>

<style scoped>

</style>
