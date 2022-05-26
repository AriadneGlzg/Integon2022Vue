<template>
  <div class="container">
    <h1>Methods vs watchers vs computed props</h1>

    <div class="col">
      <input
        type="text"
        placeholder="Search with method"
        v-model="input"
        @keyup="searchMethod"
      />

      <ul>
        <li v-for="(item, i) in methodFilterList" :key="i">{{ item }}</li>
      </ul>
    </div>

    <div class="col">
      <input type="text" placeholder="Search with computed" v-model="input2" />

      <ul>
        <li v-for="(item, i) in computedList" :key="i">{{ item }}</li>
      </ul>
    </div>

    <div class="col">
      <input type="text" placeholder="Search with watcher" v-model="input3" />

      <ul>
        <li v-for="(item, i) in watchFilterList" :key="i">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Shared
      frameworkList: [
        'Vue',
        'React',
        'Backbone',
        'Ember',
        'Knockout',
        'jQuery',
        'Angular',
      ],

      // Method
      input: '',
      methodFilterList: [],
      // Computed
      input2: '',
      // Watcher
      input3: '',
      watchFilterList: [],
    }
  },
  //aqui podria haber sido mounted y tambien funciona
  created() { //aqui se hace esto para que se aplique justo cuando se crea el componente solo se hace una vez
    this.searchMethod() //se llama al metodo para cuando recien se crea
  },
  watch: { //aqui el watcher esta checando a input3, al haber un cambio en se ejecuta el filtrado
    input3: { //aqui la ventaja mas obvia seria poder tener el oldVal y el newVal pero que ahorita no se ocupa
      handler() { //entonces al haber cambio el watch manda a ejecutar el handler
        this.watchFilterList = this.frameworkList.filter(item =>
          item.toLowerCase().includes(this.input3.toLowerCase())
        )
      },
      immediate: true,
    },
  },
  computed: { //aqui esto esta cambiando en funcion del cambio de input2, al hacer el cambio de input2 se calcula el nuevo computedList
    computedList() { //un elemento computed debe regresar un valor por sintaxis por eso se usa el return
      return this.frameworkList.filter(item => 
        item.toLowerCase().includes(this.input2.toLowerCase())
      )
    },
  },
  methods: { //este metodo se va a ejecutar cada vez que haya un keyup en el input
    searchMethod() {
      this.methodFilterList = this.frameworkList.filter(item =>
        item.toLowerCase().includes(this.input.toLowerCase())
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  padding: 30px;
  max-width: 600px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.col {
  width: 33%;
  height: 100%;
  float: left;
}
input {
  padding: 10px 6px;
  margin: 20px 10px 10px 0;
}
</style>
