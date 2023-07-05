<template>
  <v-navigation-drawer
    :rail="rail"
    permanent
    @click="rail = false"
  >
  <div class="overflow-y-auto h-100" :class="scrollbarTheme" >
    <v-list v-model:opened="open" density="compact">
      <v-list-item
        :prepend-icon="!rail ? undefined : 'mdi-menu'"
      >
      <router-link to="/"><img src="../assets/Insynerger.svg" alt="Image" class="mt-3" /></router-link>
        
        <template v-slot:append>
          <v-btn
            variant="plain"
            color="white"
            :icon="rail ? undefined : 'mdi-window-close'"
            size="small"
            width="28"
            height="28"
            @click.stop="rail = !rail"
            @click="closeSidebar"
          ></v-btn>
        </template>
      </v-list-item>

      <v-list-group value="home">
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
          rounded-xl
          class="mainItem"
        >
          <template v-slot:append v-if="title === '全部功能'">
            <v-badge color="success" content="NEW" inline></v-badge>
            <v-badge content="1" inline></v-badge>
          </template>
        </v-list-item>
      </v-list-group>
      <v-divider />

      <v-list-group value="functions" class="mainFunction">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-apps"
            title="功能"
          ></v-list-item>
        </template>

        <v-list-group value="item">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              title="test"
              prepend-icon="mdi-circle-medium"
              class="mainItem"
            ></v-list-item>
          </template>

          <router-link v-for="(crud, i) in cruds" :to="crud.href" class="text-linkColor">
            <v-list-item
            :key="i"
            :value="crud.title"
            :title="crud.title"
          ></v-list-item>
          </router-link>
          
        </v-list-group>
      </v-list-group>
    </v-list>
  </div>


    <template v-slot:append>
      <v-divider />
      <div class="pt-4 pb-4 d-flex justify-center">
        <v-btn
          icon="mdi-white-balance-sunny"
          variant="outlined"
          color="medium-emphasis"
          size="small"
          @click="toggleTheme"
        ></v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>
<script setup>
import { ref, watch } from "vue";
import { useTheme } from "vuetify";

const open = ref([]); //設定哪些item預設要打開
const home = ["方案", "全部功能", "已購買", "未購買"];


const cruds = [
{ title: "設備管理", href: "/device" },
{ title: "地圖", href: "/map" },
{ title: "圖表", href: "/highchart" },
{ title: "圖表2", href: "/highchart2" },
{ title: "datatable", href: "/datatable" },
{ title: "元素", href: "/element" },
{ title: "選擇日期", href: "/datepicker" },
{ title: "Pagination", href: "/pagination" },
{ title: "Dialog", href: "/dialog" },
{ title: "Carousel", href: "/carousel" },
{ title: "Login", href: "/login" },

];

const rail = ref(true);

const darkMode = ref(false);
const theme = useTheme();

const toggleTheme = () => {
  darkMode.value = !darkMode.value;
  theme.global.name.value = darkMode.value ? "customDarkTheme" : "customLightTheme";
};

const drawer = ref(true)

const scrollbarTheme = ref('dark')

watch(
  () => theme.global.name.value,
  (newValue, oldValue) => {

    if (newValue === "customLightTheme") {
      scrollbarTheme.value = "light";
    } else {
      scrollbarTheme.value = "dark";
    }
  },
  { immediate: true } 
);

const closeSidebar = ()=>{
  open.value = []
}
</script>

<style scoped>
.v-list .mainItem {
  padding-inline-start: 16px !important;
}
.mainItem + .v-list-group__items .v-list-item {
  padding-inline-start: 70px !important;
}
a {
  text-decoration: none;
}

.light::-webkit-scrollbar {
  width: 15px;
}

.light::-webkit-scrollbar-track {
  background: #e6e6e6;
  border-left: 1px solid #dadada;
}

.light::-webkit-scrollbar-thumb {
  background: #b0b0b0;
  border: solid 3px #e6e6e6;
  border-radius: 7px;
}


.dark::-webkit-scrollbar {
  width: 15px;
}

.dark::-webkit-scrollbar-track {
  background: #202020;
  border-left: 1px solid #2c2c2c;
}

.dark::-webkit-scrollbar-thumb {
  background: #3e3e3e;
  border: solid 3px #202020;
  border-radius: 7px;
}

</style>
