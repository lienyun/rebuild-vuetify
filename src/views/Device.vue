<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="3">
        <v-select v-model="deviceFilter.group" :items="deviceFilter.group" label="隸屬場域"></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <v-select v-model="deviceFilter.deviceName" :items="deviceFilter.deviceName" label="裝置名稱"></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <v-select v-model="deviceFilter.deviceType" :items="deviceFilter.deviceType" label="裝置類型"></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <v-select v-model="deviceFilter.deviceId" :items="deviceFilter.deviceId" label="裝置ID"></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <v-select v-model="deviceFilter.gatewayId" :items="deviceFilter.gatewayId" label="閘道器ID"></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <v-select v-model="deviceFilter.isConnect" :items="deviceFilter.isConnect" label="連線狀態"></v-select>
      </v-col>
    </v-row>
  </v-container>
  

  <h3>查詢結果</h3>
  <EasyDataTable
    :headers="headers"
    :items="items"
    :table-class-name="tableMode"
    no-hover
  >
    <template #item-isConnect="items">
      <v-chip
        :class="items.isConnect ? 'bg-success' : 'bg-warning'"
        rounded
        density="comfortable"
        >{{ replaceText.isConnect[items.isConnect] }}</v-chip
      >
    </template>
  </EasyDataTable>
</template>

<script setup>
import { ref, watch, reactive } from "vue";
import { useTheme } from "vuetify";

const theme = useTheme();

const headers = [
  { text: "裝置ID", value: "deviceId" },
  { text: "裝置名稱", value: "deviceName" },
  { text: "裝置類型", value: "deviceType" },
  { text: "隸屬場域", value: "group" },
  { text: "閘道器ID", value: "gatewayId" },
  { text: "連線狀態", value: "isConnect" },
];

const items = [
  {
    deviceId: "II09000D6F0005A5DD5B",
    deviceName: "宏偉電表",
    deviceType: "InSynerger雙CT型電力計",
    group: "測試層架",
    gatewayId: "BN90600347FFFE044340",
    isConnect: false,
  },
  {
    deviceId: "II09000D6F0005A5DD5B",
    deviceName: "Insynerger電表",
    deviceType: "InSynerger雙CT型電力計",
    group: "測試層架",
    gatewayId: "BN90600347FFFE044340",
    isConnect: true,
  },
  {
    deviceId: "II09000D6F0005A5DD5B",
    deviceName: "神奇海螺",
    deviceType: "InSynerger雙CT型電力計",
    group: "測試層架",
    gatewayId: "BN90600347FFFE044340",
    isConnect: true,
  },
  {
    deviceId: "II09000D6F0005A5DD5B",
    deviceName: "貝果",
    deviceType: "InSynerger雙CT型電力計",
    group: "測試層架",
    gatewayId: "BN90600347FFFE044340",
    isConnect: false,
  },
  {
    deviceId: "II09000D6F0005A5DD5B",
    deviceName: "好餓",
    deviceType: "InSynerger雙CT型電力計",
    group: "測試層架",
    gatewayId: "BN90600347FFFE044340",
    isConnect: true,
  },
];

const replaceText = {
  isConnect: {
    true: "連線",
    false: "斷線",
  },
};
const tableMode = ref("");

watch(
  () => theme.global.name.value,
  (newValue, oldValue) => {
    if (newValue === "customLightTheme") {
      tableMode.value = "";
    } else {
      tableMode.value = "dark-table";
    }
  },
  { immediate: true }
);


// 下拉式選單
const deviceFilter = reactive({
  group: null,
  deviceName: null,
  deviceType: null,
  deviceId: null,
  gatewayId: null,
  isConnect: null,
})
// TODO
const deviceItems = reactive([
  {group: ['1','2','3']},
  {deviceName: ['1','2','3']},
  {deviceType: ['1','2','3']},
  {deviceId: ['1','2','3']},
  {gatewayId: ['1','2','3']},
  {isConnect: ['1','2','3']}
])

</script>

<style scoped>
.dark-table {
  --easy-table-border: 1px solid #445269;
  --easy-table-row-border: 1px solid #445269;

  /* --easy-table-header-font-size: 14px;
  --easy-table-header-height: 50px; */
  --easy-table-header-font-color: #c1cad4;
  --easy-table-header-background-color: #272727;

  --easy-table-header-item-padding: 10px 15px;

  --easy-table-body-even-row-font-color: #fff;
  --easy-table-body-even-row-background-color: #4c5d7a;

  --easy-table-body-row-font-color: #c0c7d2;
  --easy-table-body-row-background-color: #272727;
  /* --easy-table-body-row-height: 50px;
  --easy-table-body-row-font-size: 14px; */

  --easy-table-body-row-hover-font-color: #272727;
  --easy-table-body-row-hover-background-color: #eee;

  --easy-table-body-item-padding: 10px 15px;

  --easy-table-footer-background-color: #272727;
  --easy-table-footer-font-color: #c0c7d2;
  /* --easy-table-footer-font-size: 14px;
  --easy-table-footer-padding: 0px 10px;
  --easy-table-footer-height: 50px; */

  /* --easy-table-rows-per-page-selector-width: 70px;
  --easy-table-rows-per-page-selector-option-padding: 10px;
  --easy-table-rows-per-page-selector-z-index: 1; */

  --easy-table-scrollbar-track-color: #2d3a4f;
  --easy-table-scrollbar-color: #2d3a4f;
  --easy-table-scrollbar-thumb-color: #4c5d7a;
  --easy-table-scrollbar-corner-color: #2d3a4f;

  --easy-table-loading-mask-background-color: #2d3a4f;
}
</style>
