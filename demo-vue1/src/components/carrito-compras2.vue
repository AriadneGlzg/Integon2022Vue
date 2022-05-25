<template>
    <div>
        <table ALIGN="center">
            <tr ALIGN="left">
                <td><b>Producto</b></td>
                <td><b>Precio</b></td>
                <td><b>Cantidad</b></td>                
                <td><b>Subtotal</b></td>
                <td></td>
            </tr>
            <tr ALIGN="left" v-for="(p,i) in productos" :key="i">
                <td><p>{{p.producto}}</p></td>
                <td><p>${{p.precio}}</p></td>
                <td><input type="number" min=0 max=50 v-model="productos[i].cantidad" @click="agregar"/></td>
                <td>${{p.precio*p.cantidad}}</td>
                <td><button @click="agregar">x</button></td>

            </tr>
            <tr>
                <td><button @click="limpiar">Limpiar Carrito</button></td>
                <td></td>
                <td><b>Total</b></td>
                <td><p>{{total}}</p></td>
                <td></td>
            </tr>
        </table>  
    </div>
        
</template>
<script>
    export default {
        data() {
            return {
                productos: [
                    {producto: "Hilo Mouline", precio: 12.00,cantidad:0},
                    {producto: "Paquete Bastidores", precio: 120.50,cantidad:0},
                    {producto: "Hilo Perle", precio: 18.00,cantidad:0},
                    {producto: "Estambre", precio: 28.00,cantidad:0},
                    {producto: "Descosedor", precio: 11.80,cantidad:0}
                ],
                total: 0,
                disabled: false,
                carrito: []
                
            }
        },
        methods:{
            agregar(){
                this.total=0;
                this.productos.forEach((p) => {
                this.total= +(p.cantidad*p.precio) + +this.total;
                });
                
            },
            limpiar(){
                this.total=0;
                this.productos.forEach((p) => {
                    p.cantidad = 0;
                });  
                console.log("metodo limpiar");
            }

        }
    }
</script>

<style lang="scss">
    h2 {
        margin: 40px 0 0;
        font-weight: normal;
    }
    .form {
        display: flex;
        justify-content: space-evenly;
        max-width: 800px;
        padding: 40px 20px;
        border-radius: 10px;
        margin: 0 auto;
        background: #ececec;
    }
    .overview {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        max-width: 300px;
        margin: 40px auto;
        padding: 40px 20px;
        border-radius: 10px;
        border: 1px solid #ececec;
        > li {
            list-style: none;
            + li {
            margin-top: 20px;
            }
        }
    }
</style>