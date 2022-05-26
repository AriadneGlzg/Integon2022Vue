<template>
  <div id="app">
    <CounterText/>
    <filtersDemo/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <img alt="Vue logo" src="./assets/logo.png">
    <Card>
      <template #image> <!--ese #image es el nombre que se le puso al slot en el parametro "name" para diferenciarlo, "#nombreslot" es la sintaxys para diferenciar los templates-->
        <img src="https://picsum.photos/id/1015/300" />
      </template>
      <template v-slot:title> <!--tambien es valida la sintaxis "v-slot:nombredelslot"-->
        <h2>My Holiday picture</h2>
      </template>
      <template #description>
       <p>Here I can describe the contents of the picture.</p>
       <p>For example what we can see in the photo is a nice landscape.</p>
      </template>
    </Card>
    <SlottedComponent>
      <h1>mi primer slot ♥</h1>
    </SlottedComponent>
    <Repeat :config="{ times: 3, content: 'Repeat me.' }" />
    <GreetingExample :greeting="greeting" :who="who"/><!--greetin y who son propiedades computadas-->
    <button @click="newGreeting()">New Greeting</button> <!--metodo al hacer click-->
    <!-- ":" o el "v-bind:" podemos meter a un componente data del componenete en el que lo estamos llamando 
    de otro modo va a tomar el nombre del data como un string no como una variable del data-->
    <BindingDemo :dato2=input2 v-bind:dato3=input3 dato1="xyz"/>  
    <DemoAxios/>
    <SearchComponent/>
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
import SearchComponent from './components/search-component.vue'
import DemoAxios from './components/Demo-Axios.vue'
import BindingDemo from './components/Binding-Demo.vue'
import GreetingExample from './components/greetings-example.vue'
import Repeat from './components/Repeat-component.vue'
import SlottedComponent from './components/Slotted-Component.vue'
import Card from './components/card-example.vue'
import filtersDemo from './components/filters-demo.vue'
import CounterText from './components/TextEditorWithCount.vue'


const possibleGreetings = [
    { greeting: 'Hello', who: 'Vue.js' },
    { greeting: 'Hey', who: 'Everyone' },
    { greeting: 'Hi', who: 'JavaScript' }
]
export default {
  name: 'App',
  data(){
    return{
      currentIndex: 0,
      input1:"hello i1",
      input2:"aloha i2",
      input3:"annyeonghaseyo i3",
    }
  } ,
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
    SearchComponent,
    DemoAxios,
    BindingDemo,
    GreetingExample,
    Repeat,
    SlottedComponent,
    Card,
    filtersDemo,
    CounterText

},
  computed: {
    currentGreeting() { //aunque esto no se usa en el DOM como tal este cambio dispara el cambio de who y greeting
      return possibleGreetings[this.currentIndex]
    },
    greeting() {
      return this.currentGreeting.greeting
    },
    who() {
      return this.currentGreeting.who
    }
  },
    methods: {
    newGreeting() {
      this.currentIndex = this.currentIndex === possibleGreetings.length - 1
        ? 0
        : this.currentIndex + 1
    }
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
