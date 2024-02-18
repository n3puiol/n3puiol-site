import {createRouter, createWebHistory} from 'vue-router'
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";


const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/about',
        component: About,
    }
];

const router = createRouter({routes, history: createWebHistory('/n3puiol-site/')});

export default router;