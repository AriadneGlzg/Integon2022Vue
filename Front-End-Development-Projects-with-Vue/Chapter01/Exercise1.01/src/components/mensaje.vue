<template>
    <div class="mensajito">
        Mensaje de prueba {{mensaje}} {{mensaje2}} {{notita}}
    </div>
</template>
<style>
    div.mensajito{
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        text-align: center;
        color: #9900ff;
        margin-top: 60px;
    }
</style>

<script>
    export default{
        data(){
            return{
                mensaje: "☺Mensaje prueba☺",
                mensaje2: "☻Mensaje  prueba☻",
                notita: "♥Mensjae  prueba♥"
            }
        }
    }
</script>