<template>
    <button @click="botonClick()">Click me! ♥</button>
</template>

<script>


export default {
    data() {
        return{
            message: "Sucedio el evento 'NotificacionTrigger' ♥"
        }
    },
    methods: {
        botonClick: function(){
            // le podemos poner el nombre que sea al evento
            this.$emit('NotificacionTrigger',this.message);
            //console.log("Click en el boton ☺");
        }
    }
}
</script>
