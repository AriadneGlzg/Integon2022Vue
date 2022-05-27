/*
    2. rear un folder rputer 
    3.En main.js se configura el routing importandor el router que esta aqui en el index
*/
//este archivo se debe importar en el main.js que esta en source lo que vamos a exportar de aqui es el router
import Vue from 'vue';
import VueRouter from 'vue-router';

//import ClientesComponent from '../src/components/Clientes-Component.vue'
import FacturasComponent from '../src/components/Facturas-Component.vue'
Vue.use(VueRouter); // SE LEVANTA LA DEPENDENCIA PARA VUE ROUTER

export const routes=[ // todas las rutas que tendra la app
    {
        path:'/clientes',
        name: 'clientes', // este es un identificador, es mas como para nosotros como programadores
        component: () => import( // esta es otra sintaxis para hacer el import del componente pero con LazyLoad ya no necesitariamos hacer el import de arriba
            '../src/components/Clientes-Component.vue')
    },
    {
        path:'/facturas',
        name: 'facturas',
        component: FacturasComponent
    },
];

const router = new VueRouter({ 
    mode: 'history', //param
    base: process.env.BASE_URL,
    routes
});

export default router