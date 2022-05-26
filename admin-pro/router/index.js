import Vue from 'vue';
import VueRouter from 'vue-router';

import DashboardComponent from '../src/components/Pages/Dashboard-Component.vue'
import Grafica1Component from '../src/components/Pages/Grafica1-Component.vue'
import ProgressComponent from '../src/components/Pages/Progress-Component.vue'
Vue.use(VueRouter); // SE LEVANTA LA DEPENDENCIA PARA VUE ROUTER

export const routes=[ // todas las rutas que tendra la app
    {
        path:'/dashboard',
        name: 'dashboard', // este es un identificador, es mas como para nosotros como programadores
        component: DashboardComponent
    },
    {
        path:'/grafica1',
        name: 'grafica',
        component: Grafica1Component
    },
    {
        path:'/progress',
        name: 'progress',
        component: ProgressComponent
    },
];

const router = new VueRouter({ 
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router