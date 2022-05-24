<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Matematico num1=11 num2=8 operacion="/"></Matematico>
    <PugTest></PugTest>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Matematico from './components/matematico.vue'
import PugTest from './components/Pug-Test.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Matematico,
    PugTest,
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
