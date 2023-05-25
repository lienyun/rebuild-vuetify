<template>
  <v-navigation-drawer
    v-model="drawer"
    :rail="rail"
    permanent
    @click="rail = false"
  >
    <v-list-item prepend-icon="mdi-menu" title="Insynerger">
      <template v-slot:append>
        <v-btn
          variant="text"
          color="black"
          icon="mdi-window-close"
          @click.stop="rail = !rail"
        ></v-btn>
      </template>
    </v-list-item>

    <v-list v-model:opened="open" density="compact">
      <v-list-group value="Home">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-home"
            title="首頁"
          ></v-list-item>
        </template>

        <v-list-item
          v-for="(title, i) in home"
          :key="i"
          :title="title"
          prepend-icon="mdi-circle-medium"
          :value="title"
          active-color="pink"
          rounded
        >
          <template v-slot:append v-if="title === '全部功能'">
            <v-badge color="success" content="NEW" inline></v-badge>
            <v-badge  content="1" inline></v-badge>
          </template>
        </v-list-item>
      </v-list-group>
      <v-divider />

      <v-list-group value="functions">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-apps"
            title="功能"
          ></v-list-item>
        </template>

        <v-list-group value="item" class="mainFunction">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              title="智慧交通管理"
              prepend-icon="mdi-circle-medium"
            ></v-list-item>
          </template>

          <v-list-item
            v-for="(title, i) in cruds"
            :key="i"
            :value="title"
            :title="title"
          ></v-list-item>
        </v-list-group>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>
<script setup>
import { ref } from "vue";
const open = ref(["Users"]);
const home = ["方案", "全部功能", "已購買", "未購買"];

const cruds = ["地圖", "事件管理", "設備管理", "統計"];

const drawer = ref(true);
const rail = ref(true);
</script>

<style scoped>
.v-list-group__items .v-list-item {
  padding-inline-start: 16px !important;
}

.subMenu {
  /* padding-inline-start: 32px !important; */
}
</style>
