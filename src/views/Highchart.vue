<template>
  <h1>
    套件：highcharts-vue
  </h1>
  <p>就用這個套件ㄌ</p>
  <div id="app"><chart :key="chartTheme"></chart></div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useTheme } from "vuetify";

import Chart from "../components/Chart.vue";
import Highcharts from "highcharts";
import darkTheme from '../chartTheme/darkTheme'
import lightTheme from '../chartTheme/lightTheme'

const theme = useTheme();
const chartTheme = ref('darkTheme')

watch(
  () => theme.global.name.value,
  (newValue, oldValue) => {

    if (newValue === "customLightTheme") {
      chartTheme.value = 'lightTheme'
      Highcharts.setOptions(lightTheme)
    } else {
      chartTheme.value = 'darkTheme'
      Highcharts.setOptions(darkTheme)
    }
  },
  { immediate: true } 
);

const handler = ()=>{
  var args = arguments;
  for(var arg of args){
    if(arg instanceof Function){
      arg();
    }
  }
}
</script>
