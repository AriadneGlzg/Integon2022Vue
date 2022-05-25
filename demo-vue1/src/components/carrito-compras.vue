<template>
    <div>
        <table ALIGN="center">
            <tr ALIGN="left">
                <td><b>Producto</b></td>
                <td><b>Precio</b></td>
                <td><b>Cantidad</b></td>                
                <td><b>Subtotal</b></td>
            </tr>
            <tr ALIGN="left" v-for="(p,i) in productos" :key="i">
                <td><p>{{p.producto}}</p></td>
                <td><p>${{p.precio}}</p></td>
                <td><input type="number" min=0 v-model="productos[i].cantidad" @keyup="agregar" @click="agregar(p.id,productos[i].precio,productos[i].cantidad)"/></td>
                <td>${{p.precio*p.cantidad}}</td>
                <td><button @click="quitar(p.id,i)">x</button></td>

            </tr>
            <tr>
                <td><button @click="limpiar">Limpiar Carrito</button></td>
                <td></td>
                <td><b>Total</b></td>
                <td><p>{{total}}</p></td>
            </tr>
        </table>  
    </div>
</template>
<script>
    export default {
        data() {
            return {
                productos: [
                    {id:"p1", producto: "Hilo Mouline", precio: 12.00,cantidad:0},
                    {id:"p2", producto: "Paquete Bastidores", precio: 120.50,cantidad:0},
                    {id:"p3", producto: "Hilo Perle", precio: 18.00,cantidad:0},
                    {id:"p4", producto: "Estambre", precio: 28.00,cantidad:0},
                    {id:"p5", producto: "Descosedor", precio: 11.80,cantidad:0}
                ],
                total: 0,
                carrito:[]
                
            }
            
        },
        methods:{
            agregar(id,pre,cant){
                let index = this.carrito.findIndex(c=>c.id == id);
                if(index === -1){
                    let stotal=pre*cant;
                    this.carrito.push({id: id, cantidad:cant, subtotal: stotal});
                }
                else{
                    this.carrito[index].cantidad = cant;
                    this.carrito[index].subtotal = pre*cant;
                }                 
                this.total=0;
                this.carrito.forEach((c) => {
                this.total= +(c.subtotal) + +this.total;
                });
                
            },
            limpiar(){
                this.total=0;
                this.productos.forEach((p) => {
                    p.cantidad = 0;
                });
                this.carrito=[];  
            },
            quitar(id,i){        
                let index = this.carrito.findIndex(c=>c.id == id);
                if(index!==-1){
                    this.productos[i].cantidad=0;
                    this.productos[i].subtotal=0;
                    this.carrito.splice(index,1);
                    this.total=0;
                    this.carrito.forEach((c,i) => {
                        this.total= this.total + (c.subtotal);
                    });
                }
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