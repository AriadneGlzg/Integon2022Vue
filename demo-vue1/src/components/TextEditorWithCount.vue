<template>
    <div>
        <textarea ref="textArea" cols="50" rows="7" >
        </textarea>
        <ul v-if="cuenta"> <!--cuenta es una data del script empieza en nullo, asi que aqui el if seria si hay algo osea no es nulo-->
            <li>Paragraphs: {{ cuenta.paragraphs }}</li>
            <li>Sentences: {{ cuenta.sentences }}</li>
            <li>Words: {{ cuenta.words }}</li>
        </ul>
    </div>
</template>
<script>
    import * as Countable from 'countable' // el * es para importar todo lo que haya en la libreria
    export default {
        mounted() {
            Countable.on(this.$refs.textArea, (count) => { //Countable es un objeto de la libreria 'countable'
                this.cuenta = count // cuenta que es un data  se convierte en un objeto que tiene varias propiedades como pragraphs sentenc es y words
                                    // por eso justo en el montado cuenta se le asigna el objeto propio de countable 'count'
            })
            this.$once('hook:beforeDestroy', function () { //Tenemos que quitar el escuchador de eventos Countable cuando se destruya el componente
                Countable.off(this.$refs.textArea) //eso se hace con este padasito de codigo,le decimos que deje de escuchar
                //lo que haya en el elemnto del dom referenciado como textArea
            })//esta es otra nptacion para los hooks pero eso seria equivalente a haber puesto el hook por separado:
        },
        // beforeDestroy(){
        //     Countable.off(this.$refs.textArea)
        // },
        data() {
            return { cuenta: null }
        }
    }
</script>