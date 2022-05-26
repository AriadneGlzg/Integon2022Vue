<template>
    <div>
        <textarea ref="textArea" @change="onChange($event)">
        </textarea><!-- cuando ocurra un cambio se llama al metodo onChange y cacha el evento del Change-->
        <button @click="onSendClick()">Send</button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
            message: ''
            }
        },
        methods: {
            onChange(event) {
            this.message = event.target.value // en message se va a poner el valor del cambio osea el texto ingresado
            //todo este metodo se puede sustituir por simplemente haber puesto <textarea ref="textArea" v-model="message"> para ligar la data message con el textArea
            },
            onSendClick() {
            this.$emit('send', this.message) // cuando se puche el boton se emitira el evento "send" y le vamos a mandar el mensaje
            this.message = '' // se limpia lo que hay en message| si estuviera el v-model en el text area cualquiera de estas dos lineas se pudiera omitir (solo una no ambas)
            this.$refs.textArea.value = '' // se limpia el text area :3
            }
        }
    }
</script>