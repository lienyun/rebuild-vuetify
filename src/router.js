import { createRouter, createWebHashHistory } from "vue-router";
import Home from './views/Home.vue'
import Button from './views/Button.vue'
import Font from './views/Font.vue'
import Map from './views/Map.vue'
import Highchart from './views/Highchart.vue'
import Highchart2 from './views/Highchart2.vue'
import DataTable from './views/DataTable.vue'
import Element from './views/Element.vue'
import DatePicker from './views/DatePicker.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/button',
        name: 'button',
        component: Button
    },
    {
        path: '/font',
        name: 'font',
        component: Font
    },
    {
        path: '/map',
        name: 'map',
        component: Map
    },
    {
        path: '/highchart',
        name: 'highchart',
        component: Highchart
    },
    {
        path: '/highchart2',
        name: 'highchart2',
        component: Highchart2
    },
    {
        path: '/datatable',
        name: 'DataTable',
        component: DataTable
    },
    {
        path: '/element',
        name: 'element',
        component: Element
    },
    {
        path: '/datepicker',
        name: 'datepicker',
        component: DatePicker
    },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
