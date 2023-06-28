import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import HighchartsVue from 'highcharts-vue'

import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';

loadFonts()
const app = createApp(App);

app.component('EasyDataTable', Vue3EasyDataTable).use(vuetify).use(router).use(HighchartsVue).mount('#app')
