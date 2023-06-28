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
import Pagination from './views/Pagination.vue'
import Dialog from './views/Dialog.vue'
import Carousel from './views/Carousel.vue'
import Login from './views/Login.vue'


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
    {
        path: '/pagination',
        name: 'pagination',
        component: Pagination
    },
    {
        path: '/dialog',
        name: 'dialog',
        component: Dialog
    },
    {
        path: '/carousel',
        name: 'carousel',
        component: Carousel
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
