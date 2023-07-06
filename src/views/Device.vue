<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="3">
        <v-select
          v-model="deviceFilter.group"
          :items="deviceItems.group"
          label="隸屬場域"
          variant="outlined"
          density="compact"
        ></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <v-select
          v-model="deviceFilter.deviceName"
          :items="deviceItems.deviceName"
          label="裝置名稱"
          variant="outlined"
          density="compact"
        ></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <v-select
          v-model="deviceFilter.deviceType"
          :items="deviceItems.deviceType"
          label="裝置類型"
          variant="outlined"
          density="compact"
        ></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <v-text-field
          v-model="deviceFilter.deviceId"
          label="裝置ID"
          variant="outlined"
          density="compact"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <v-text-field
          v-model="deviceFilter.gatewayId"
          label="閘道器ID"
          variant="outlined"
          density="compact"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <v-select
          v-model="deviceFilter.isConnect"
          :items="deviceItems.isConnect"
          label="連線狀態"
          variant="outlined"
          density="compact"
        ></v-select>
      </v-col>
      <v-col cols="12" md="3"></v-col>
      <v-col cols="12" md="3" class="text-right">
        <v-btn
          prepend-icon="mdi-window-close"
          color="red"
          rounded="default"
          @click="clearSelect"
          >清除</v-btn
        >
        <v-btn
          prepend-icon="mdi-magnify"
          color="success"
          rounded="default"
          class="ml-5"
          @click="search"
          >搜尋</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
  <div class="d-flex justify-space-between align-center mt-5 mb-5">
    <h3>查詢結果</h3>

    <v-menu location="start">
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
          icon="mdi-dots-vertical"
          variant="plain"
        >
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in more"
          :key="index"
          :value="index"
        >
          <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>

  <div class="d-flex justify-space-between align-center mt-5 mb-5">
    <h4>裝置列表</h4>

    <v-btn prepend-icon="mdi-filter" rounded="default">
      選擇欄位

      <v-menu
        activator="parent"
        location="start"
        :close-on-content-click="false"
      >
        <v-list>
          <v-list-item>
            <v-checkbox
              v-for="(item, index) in tableFilter"
              :key="index"
              :value="item.value"
              density="compact"
              :label="item.text"
              hide-details
              v-model="selected"
            >
            </v-checkbox>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-btn>
  </div>

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
    <template #pagination="{ prevPage, nextPage, isFirstPage, isLastPage }">
      <v-btn
        :disabled="isFirstPage"
        @click="prevPage"
        icon="mdi-chevron-left"
        variant="plain"
      ></v-btn>
      <v-btn
        :disabled="isLastPage"
        @click="nextPage"
        icon="mdi-chevron-right"
        variant="plain"
      ></v-btn>
    </template>
  </EasyDataTable>
</template>

<script setup>
import { ref, watch, reactive, onMounted } from "vue";
import { useTheme } from "vuetify";
import axios from "axios";
const theme = useTheme();

let url =
  "https://ecloud.ntpc.edu.tw/infactory-backend/api/devicekanban/v2/groupbygatewaydevice?categories=gateway,powerMeter,airConditioner&groupid=296";

onMounted(() => {
  getDevice();
});

//datatable
const headers = ref([
  { text: "裝置ID", value: "deviceId" },
  { text: "裝置名稱", value: "deviceName" },
  { text: "裝置類型", value: "deviceType" },
  { text: "隸屬場域", value: "group" },
  { text: "閘道器ID", value: "gatewayId" },
  { text: "連線狀態", value: "isConnect" },
]);

const items = ref([]);

const getDevice = async () => {
  const res = await axios.get(url);
  let allDeivices = res.data.data.deviceGroupByGatewayVos[0].deviceKanbans;
  //console.log('allDeivices', allDeivices)
  for (let category of allDeivices) {
    //console.log('device',category.devices)
    for (let device of category.devices) {
      // console.log('device',device.deviceId)

      let item = {
        deviceId: device.deviceId,
        deviceName: device.deviceName,
        deviceType: device.deviceType,
        group: "板橋國小",
        gatewayId: device.gatewayId,
        isConnect: device.connStatus,
      };
      items.value.push(item);
    }
  }
};

const replaceText = {
  isConnect: {
    1: "連線",
    0: "斷線",
  },
};

//切換datatable顏色
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


//TODO: 匯出上傳三個點功能
const more = ['批次上傳裝置名稱/場域名稱','匯出']

// 選擇欄位勾選
const tableFilter = ref([
  { text: "裝置ID", value: "deviceId" },
  { text: "裝置名稱", value: "deviceName" },
  { text: "裝置類型", value: "deviceType" },
  { text: "隸屬場域", value: "group" },
  { text: "閘道器ID", value: "gatewayId" },
  { text: "連線狀態", value: "isConnect" },
]);

const selected = ref([
  "deviceId",
  "deviceName",
  "deviceType",
  "group",
  "gatewayId",
  "isConnect",
]);

watch(
  () => selected.value,
  (newValue, oldValue) => {
    console.log("newValue", newValue); //有watch到

    let result = tableFilter.value.filter((title) => {
      // 勾回來不會跟著變動
      return newValue.includes(title.value);
    });
    console.log("result", result);
    headers.value = result;
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
});

const deviceItems = reactive({
  group: ["1", "2"],
  deviceName: ["1", "2"],
  deviceType: ["1", "2", "3"],
  isConnect: ["1", "2", "3"],
});

const clearSelect = () => {
  deviceFilter.group = null;
  deviceFilter.deviceName = null;
  deviceFilter.deviceType = null;
  deviceFilter.deviceId = null;
  deviceFilter.gatewayId = null;
  deviceFilter.isConnect = null;
};

const search = () => {
  console.log("search");
};
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
  --easy-table-rows-per-page-selector-width: 70px;
  /* --easy-table-rows-per-page-selector-option-padding: 10px;
  --easy-table-rows-per-page-selector-z-index: 1; */

  --easy-table-scrollbar-track-color: #2d3a4f;
  --easy-table-scrollbar-color: #2d3a4f;
  --easy-table-scrollbar-thumb-color: #4c5d7a;
  --easy-table-scrollbar-corner-color: #2d3a4f;

  --easy-table-loading-mask-background-color: #2d3a4f;
}
</style>
