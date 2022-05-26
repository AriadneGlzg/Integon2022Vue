<template>
  <div id="app">
    <!--para que se comuniquen por asi decirlo Feed y editor necesitan un canal ese canal es por asi decirlo el padre osea App.Vue, aqui se controla la comunicacion
    entonces para que se comuniquen los dos componentes ambos deben de tener el mimso padre -->
    <MessageFeed :messages="messages" /> <!--el feed tiene como prop el arreglo messages-->
    <MessageEditor @send="onSend($event)" />
    <Eventos @NotificacionTrigger="respuestaEvento"/> <!--en el @nombreevento le decimos que reaccione a ese evento y despues con el ="metodo" cuando ese evento ocurra mandamos ejecutar al metodo, en el metodo se puede cachar o no
    lo que este mandando el evento pero si se quiere cachar necesitamos guardar eso en una variable usando la sintaxis $cosa esa cosa es solo un nombre que yo pongo -->
    <CounterText/>
    <filtersDemo :dato='lorem | ellipsis'/> <!--// podemos aplicar el filter a alguna prop de entrada para prefiltrarla-->
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
import { ellipsis } from '../src/utils/filters' // las funciones se importan con { } esos parentesis el * es para importar todo lo que haya en el archivo
import Eventos from './components/demo-eventos.vue'
import MessageEditor from './components/MessageEditor.vue'
import MessageFeed from './components/MessageFeed.vue'


const possibleGreetings = [
    { greeting: 'Hello', who: 'Vue.js' },
    { greeting: 'Hey', who: 'Everyone' },
    { greeting: 'Hi', who: 'JavaScript' }
]
export default {
  name: 'App',
  filters:{
    ellipsis //aqui le decimos que va a ser un filtro
  },
  data(){
    return{
      messages: [], 
      currentIndex: 0,
      input1:"hello i1",
      input2:"aloha i2",
      input3:"annyeonghaseyo i3",
      lorem : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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
    CounterText,
    Eventos,
    MessageEditor,
    MessageFeed,

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
    onSend(event) { // evento para el ejemplo de message cada que se puche el send se van a star guarda los mensajes del texarea
      this.messages = [...this.messages, event] //en este arreglo this.messages, esa es una notacion para que en this.messagges se guarde lo que habia el messges y aparte el evento
    },    // recuerda que ese ...this.mesagges es el operador spread
    newGreeting() {
      this.currentIndex = this.currentIndex === possibleGreetings.length - 1
        ? 0
        : this.currentIndex + 1
    },
    //ese $cosa, son datos o cosas que manda el evento a quien lo este escuchando, puede o no mandar cosas
    respuestaEvento($event){ //aqui la sintaxis es $nombre se le pone event por buena practica, pero solo se necesita ponerle un nombre de variable para cachar lo que venga del evento
      alert(`Click ♥ ${ $event}`);
      console.log($event);
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
