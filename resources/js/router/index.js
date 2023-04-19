import { createRouter, createWebHistory } from "vue-router"

const Prueba = () => import("../components/Prueba.vue");
const Prueba2 = () => import("../components/Prueba.vue");

const routes = [
    {
        path: '/prueba',
        name: 'prueba',
        component: Prueba
    },
    {
        path: '/prueba2',
        name: 'prueba2',
        component: Prueba2
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router