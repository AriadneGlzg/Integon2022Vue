<template>
    <div>
        <p v-for="(m, i) in messages" :key="i"> <!--aqui simplemente se va poniendo con el v-for o que haya en la prop messages que viene del App.vue-->
        {{ m }}
        </p>
    </div>
</template>

<script>
    export default {
        props: { //simplemente se da la notacion larga para la propiedad
            messages: {
            type: Array, //debe ser tipo array
            required: true //debe ingresarse para llamar al componente
            }
        }
    }
</script>