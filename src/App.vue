<template>
  <v-app>
    <div class="content" :class="store.isLogin ? 'isLogin': ''">
      <Header></Header>
      <SideBar v-if="store.isLogin"></SideBar>
      <div class="ma-5">
        <RouterView></RouterView>
      </div>
      <Tree v-if="store.isLogin"></Tree>
      <Footer></Footer>
    </div>


  </v-app>
</template>

<script setup>
import SideBar from "./components/Sidebar.vue";
import Tree from "./components/Tree.vue";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";

import { useLoginStore } from "./stores/login";

const store = useLoginStore();


</script>

<style scoped>


.isLogin {
  margin-left: 3.5rem;
}

</style>
