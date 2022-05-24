<template>
    <div>
        <p>
            {{mayusculas ? texto.toUpperCase(): texto}}
        </p>
        <table ALIGN="center">
            <tr>
                <td>Numero1</td>
                <td>Operacion</td>
                <td>Numero2</td>
                <td>Resultado</td>
            </tr>
            <tr class="center">
                <td><p>{{num1}}</p></td>
                <td><p>{{operacion}}</p></td>
                <td><p>{{num2}}</p></td>
                <td><b><p>{{resultado}}</p></b></td>
            </tr>
        </table>  
        
        <div>
            <h1>{{ title }}</h1>
            <h2>{{ subtitle }}</h2>
            <ul>
            <li type="circle">{{ items[0] }}</li>
            <li type="circle">{{ items[1] }}</li>
            <li type="circle">{{ items[2] }}</li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
  
  props: { //propiedades que vienen de afuera
      num1: Number,
      num2: Number,
      operacion :String
  },
  data(){ //datos a devolver
    return {
        resultado: 0,
        texto:"texto ejemplo ♥",
        mayusculas: true,
        title: 'My list component!',
        subtitle: 'Vue JS basics',
        items: ['Item 1', 'Item 2', 'Item 3']
    }
  },
  methods: { //metodos del componente
    calculaOperacion: function(){
      switch(this.operacion){
        case '+':
          this.resultado = this.num1 + this.num2; //parseInt(this.num1)
          break;
        case '-':
          this.resultado = this.num1 - this.num2;
          break;
        case '*':
          this.resultado = this.num1 * this.num2;
          break;
        case '/':
          this.resultado = this.num1 / this.num2;
          break;  
      }
    }
  },
  watch: { //
    $props:{
      handler(){
        console.log("Realizando operacion...");
        this.calculaOperacion();
      },
      immediate:true
    }
  }
}
//si no se especifica el lenguaje en el style se asume que es css
//para poner un lenguaje en especifico hacemos <style lang="lenguaje"></style>
//<style scoped> el scoped es para que el estilo solo tenga alcance en este archivo
// <style scoped> 
// .center{
//     text-align: center;
// }
// </style>
</script>
<style lang="scss">
    @import'../assets/styles/typography.scss'
</style>

