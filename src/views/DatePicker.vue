
<template>
  <div>
    <h1><code>v-text-field type="datetime-local"</code></h1>
    <v-text-field type="datetime-local" label="Date" hint="請選擇日期" class="w-50"></v-text-field>
    <h1><code>input type="datetime-local"</code></h1>
    <input type="datetime-local" value="2018-06-12T19:30">
    <h1>vue3 datePicker</h1>
    <VueDatePicker :dark="isDark"></VueDatePicker>
    <h2>無法使用<code>v-date-picker</code></h2>
    <!-- <v-date-picker></v-date-picker> -->
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { useTheme } from "vuetify";
const theme = useTheme();

const isDark = ref(true)
watch(
  () => theme.global.name.value,
  (newValue, oldValue) => {

    if (newValue === "customLightTheme") {
      isDark.value = false;
    } else {
      isDark.value = true;
    }
  },
  { immediate: true } 
);
</script>

<style scoped>
[type="datetime-local"]{
  /* background-color: pink; */
}
input [type="datetime-local"]::-webkit-datetime-edit-month-field{
  color: red;
}

</style>