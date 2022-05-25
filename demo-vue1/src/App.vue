<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <DemoWatcher/>
    <!--
    <EjemplosData/>
    <CarritoCompras/>
    <CuentaCaracteres></CuentaCaracteres>
    <EjemploDirectivas/>
    <CuentaCaracteres></CuentaCaracteres>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <PugTest></PugTest>
    <Matematico :num1="11" :num2="8" operacion="/"></Matematico> se pone el ":" -> :propiedad="n" para poder poner numeros en esa propiedad y que los tome como numeros-->

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Matematico from './components/matematico.vue'
import PugTest from './components/Pug-Test.vue'
import CuentaCaracteres from './components/cuenta-caracteres.vue'
import EjemploDirectivas from './components/ejemplo-directivas.vue'
import CarritoCompras from './components/carrito-compras.vue'
import CarritoCompras2 from './components/carrito-compras2.vue'
import EjemplosData from './components/ejemplos-data.vue'
import DemoWatcher from './components/demo-watcher.vue'



export default {
  name: 'App',
  components: {
    HelloWorld,
    Matematico,
    PugTest,
    CuentaCaracteres,
    EjemploDirectivas,
    CarritoCompras,
    CarritoCompras2,
    EjemplosData,
    DemoWatcher,
    
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
