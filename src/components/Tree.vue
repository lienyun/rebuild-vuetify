<template>
  <v-navigation-drawer v-model="drawer" temporary location="right">
    <v-list-item title="群組" value="group" class="mt-3"></v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>

      <v-list-group value="Admin">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" title="ECROOT" prepend-icon="mdi mdi-domain" class="mainItem"></v-list-item>
        </template>

        <v-list-item
          v-for="(title, i) in group"
          :key="i"
          :title="title"
          prepend-icon="mdi-circle-medium"
          :value="title"
        ></v-list-item>

      </v-list-group>
    </v-list>
  </v-navigation-drawer>


  <v-btn
    icon="mdi-office-building"
    class="groupIcon"
    @click.stop="drawer = !drawer"
  ></v-btn>




</template>

<script setup>
import { ref } from "vue";
const drawer = ref(false);

const group = ref(["資安測試","台大","板橋國小"]);

</script>

<style scoped>
.groupIcon {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
}

.v-list .mainItem {
  padding-inline-start: 16px !important;
}
.mainItem + .v-list-group__items .v-list-item {
  padding-inline-start: 15px !important;
}
a {
  text-decoration: none;
}
button {
  z-index: 99;
}
</style>
