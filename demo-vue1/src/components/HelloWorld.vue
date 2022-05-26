<template>
  <div>
    Mi primer mensaje{{ msg }}
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
  </div>

</template>

<script>
import Card from './card-example.vue'

export default {
  name: 'HelloWorld',
  components:{
    Card
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>