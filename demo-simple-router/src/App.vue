<template>
  <div id="app">
    <div id="nav"> <!--adentro estan los rutas de navegacion-->
        <router-link to="/clientes">Clientes</router-link>
        <router-link to="/facturas">Facturas</router-link>
    </div>
    <router-view/> <!--el equivalente al outlet de Angular-->
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
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
