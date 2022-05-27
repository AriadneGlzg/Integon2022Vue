import Vue from 'vue';
import VueRouter from 'vue-router';

import Pages from '../src/Pages-Component.vue'
import DashboardComponent from '../src/components/Pages/Dashboard-Component.vue'
import Grafica1Component from '../src/components/Pages/Grafica1-Component.vue'
import ProgressComponent from '../src/components/Pages/Progress-Component.vue'
//import Login from '../src/components/Auth/Login-Component.vue'
import Register from '../src/components/Auth/Register-Component.vue'
Vue.use(VueRouter); // SE LEVANTA LA DEPENDENCIA PARA VUE ROUTER

export const routes=[ // todas las rutas que tendra la app
    {
        path:'/pages',
        name: 'main',
        component: Pages,
        children: [
            {
                path: '/grafica1',
                name: 'grafica1',
                component: Grafica1Component
            },
            {
                path: '/progress',
                name: 'progress',
                component: ProgressComponent
            },
            {
                path: '/dashboard',
                name: 'dashboard',
                component: DashboardComponent
            },
        ]
    },
    // {
    //     path:'/dashboard',
    //     name: 'dashboard', // este es un identificador, es mas como para nosotros como programadores
    //     component: DashboardComponent
    // },
    // {
    //     path:'/grafica1',
    //     name: 'grafica',
    //     component: Grafica1Component
    // },
    // {
    //     path:'/progress',
    //     name: 'progress',
    //     component: ProgressComponent
    // },
    {
        path:'/login',
        name: 'login', // este es un identificador, es mas como para nosotros como programadores
        component: () => import( // esta es otra sintaxis para hacer el import del componente pero con LazyLoad ya no necesitariamos hacer el import de arriba
        '../src/components/Auth/Register-Component.vue')
    },
    {
        path:'/register',
        name: 'register',
        component: Register
    },
];

const router = new VueRouter({ 
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router