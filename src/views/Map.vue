<template>
  <h1>google map test demo</h1>
  <GoogleMap
    api-key="AIzaSyAfjabQ1c5Cwd9H7djheg3rZM3mzhxptvk"
    style="width: 100%; height: 90%"
    icon="../assets/logo.svg"
    :center="center"
    :zoom="15"
    :zoomControl="false"
    :draggable="false"
  >
    <Marker :options="{ position: center }">
      <!-- 點擊後打開的infoWindow -->
      <InfoWindow>
          <h1>思納捷科技</h1>
      </InfoWindow>
    </Marker>

    <CustomMarker
      :options="{
        position: { lat: 25.059855180987636, lng: 121.55206894177061 },
        anchorPoint: 'BOTTOM_CENTER',
      }"
       
    >
      <div style="text-align: center" @click="showInfo = !showInfo">
        <div style="font-size: 1.125rem">but. we love butter</div>
        <img
          src="../assets/logo.svg"
          width="50"
          height="50"
          style="margin-top: 8px"
        />
      </div>
    </CustomMarker>

    <!-- 置放在下方的custom button -->
    <CustomControl position="BOTTOM_CENTER">
      <button class="custom-btn" @click="sayHi">👋</button>
    </CustomControl>
    <CustomControl position="BOTTOM_CENTER">
      <button class="custom-btn" @click="toggleMarker">❗</button>
    </CustomControl>

    <!-- 載入後直接呈現的infoWindow，關掉後就打不開 -->
    <InfoWindow
      :options="{
        position: { lat: 25.059517497382334, lng: 121.56291761876483 },
      }"
    >
      民生社區中心
    </InfoWindow>
  </GoogleMap>

  <v-card title="Card title" text="經度：緯度：" class="card" v-if="showInfo"></v-card>
</template>

<script setup>
import {
  GoogleMap,
  Marker,
  CustomMarker,
  CustomControl,
  InfoWindow,
} from "vue3-google-map";
import { ref } from 'vue'

const center = { lat: 25.058729565345814, lng: 121.55487908354056 };
const sayHi = () => alert("Hi!");
const toggleMarker = () =>{
  
}

const showInfo = ref(false)
</script>

<style scoped>
.custom-btn {
  box-sizing: border-box;
  background: white;
  height: 40px;
  width: 40px;
  border-radius: 2px;
  border: 0px;
  margin: 10px;
  padding: 0px;
  font-size: 1.25rem;
  text-transform: none;
  appearance: none;
  cursor: pointer;
  user-select: none;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px;
  overflow: hidden;
}

.card {
  position: absolute;
  top: 48px;
  right: 10%;

}

</style>
