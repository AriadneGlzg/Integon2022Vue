<template>
  <div class="container">
        <h1>Shop Watcher</h1>

        <div>
        Black Friday sale
        <strike>Was {{ oldDiscount }}%</strike>
        <strong> Now {{ discount }}% OFF</strong>
        </div>
        <br />
        <a href="#" @click="updateDiscount">Increase Discount!</a>
        
        <div>
            <h4>{{ product.label }}</h4>
            <h5>${{ product.price }} (${{ discountDeep }} Off)</h5>
            <a href="#" @click="updatePrice">Reduce Price!</a>
        </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      oldDiscount: 0,
      discount: 5,
      discountDeep: 0,
      product: {
        price: 25,
        label: 'Blue juice',
      },
    }
  },
  methods: {
    updateDiscount() {
      this.discount = this.discount + 5 //aqui se hace elcambio de discount
    },
    updatePrice() {
        if (this.product.price < 1) return
        this.product.price--;
    }
  },
  watch: { //aqui reacciona al cambio de discount
    discount(newValue, oldValue) { //en cuanto la propiedad cambie (en este caso le estamos diciendo que wachee al dato discount)
      this.oldDiscount = oldValue  //discount va a cambiar cada que se presione el boton
      console.log(`El descuento paso de %${oldValue} a %${newValue}`);
    },
    'product.price'() {
        this.discountDeep++
    },
  },
}
//los metodos reaccionan a eventos, click, keyup, etc
//computed para reaccionar a actualizaciones de datos, me interesa devolver datos al template, concatenaciones o cosas asi, en computer los parametros o cosas asi van en el data
// watche raccionar a cambios de propiedades externas, datos
</script>


<style lang="scss" scoped>
.container {
  margin: 0 auto;
  padding: 30px;
  max-width: 600px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin: 0;
}
a {
  display: inline-block;
  background: rgb(235, 50, 50);
  border-radius: 10px;
  font-size: 14px;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
}
</style>

