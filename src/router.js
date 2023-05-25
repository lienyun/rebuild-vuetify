import { createRouter, createWebHashHistory } from "vue-router";
import Home from './views/Home.vue'
import Button from './views/Button.vue'
import Font from './views/Font.vue'



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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
